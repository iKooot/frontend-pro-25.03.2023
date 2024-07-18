import { render, fireEvent } from '@testing-library/react';
import { Button } from "../SimpleButton.jsx";

describe('Button Component', () => {
    it('renders button text correctly', () => {
        const { getByTestId } = render(<Button>Hello</Button>);
        const buttonElement = getByTestId('button');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent('Hello');
    });

    it('calls onClick prop when button is clicked', () => {
        const onClickMock = jest.fn();
        const { getByTestId } = render(<Button onClick={onClickMock}>Click Me</Button>);
        const buttonElement = getByTestId('button');
        fireEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});