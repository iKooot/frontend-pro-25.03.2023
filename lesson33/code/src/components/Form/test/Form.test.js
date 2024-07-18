import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { Form } from "../Form";
import { addUser } from "../../../store/users";

jest.spyOn(console, 'warn').mockImplementation(() => {});
// Mock Redux store
const mockStore = configureStore([]);

describe("Form Component", () => {
    let store;
    let component;

    beforeEach(() => {
        store = mockStore({});
        component = render(
            <Provider store={store}>
                <Form />
            </Provider>
        );
    });

    it("renders form inputs correctly", () => {
        const { container } = component;

        expect(container.querySelector('input[name="name"]')).toBeInTheDocument();
        expect(container.querySelector('input[name="surname"]')).toBeInTheDocument();
    });

    it("dispatches addUser action on form submission", () => {
        const { getByText, container } = component;

        // Mock user input
        const nameInput = container.querySelector('input[name="name"]');
        const surnameInput = container.querySelector('input[name="surname"]');
        fireEvent.change(nameInput, { target: { value: "John" } });
        fireEvent.change(surnameInput, { target: { value: "Doe" } });

        // Submit form
        fireEvent.submit(getByText("Add user"));

        // Verify dispatch action
        const actions = store.getActions();
        expect(actions.length).toBe(1);
        expect(actions[0]).toEqual(
            addUser({
                id: expect.any(Number),
                name: "John",
                surname: "Doe",
            })
        );
    });

    it("does not dispatch addUser action if inputs are empty", () => {
        const { getByText } = component;

        // Submit form with empty inputs
        fireEvent.submit(getByText('Add user'));

        // Verify console.warn was called
        expect(console.warn).toHaveBeenCalled();

        // Verify no dispatch action
        const actions = store.getActions();
        expect(actions).toHaveLength(0);
    });
});
