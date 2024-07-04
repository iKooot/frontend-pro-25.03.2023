import {
  Button,
  Footer,
  PageLayout,
  Form,
  UserList,
} from "./components/index.js";
import { useContext, useEffect } from "react";
import { counterContext, counterDispatchContext } from "./context/index.js";
import {
  DECREASE,
  increaseAction,
  RESET,
} from "./services/store/counter/index.js";
// import { fetchUsers } from "./store/users/users.thunks.js";
import { fetchUsers as fetchUsersDuck } from "./ducks/users.duck.js";
import { useDispatch } from "react-redux";

export function App() {
  const { count } = useContext(counterContext);
  const dispatchCounter = useContext(counterDispatchContext);
  const dispatch = useDispatch();
  function increaseHandler() {
    // dispatch({ type: INCREASE, payload: { name: 'Serhii' }});
    dispatchCounter(increaseAction({ name: "Serhii" }));
  }

  function decreaseHandler() {
    dispatchCounter({ type: DECREASE });
  }

  function resetHandler() {
    dispatchCounter({ type: RESET });
  }

  // native
  // useEffect(() => {
  //   const controller = new AbortController();
  //   dispatch(fetchUsers("some argument", controller));
  //
  //   return () => {
  //     controller.abort();
  //   };
  // }, [dispatch]);
  // toolkit
  useEffect(() => {
    const requestPromise = dispatch(fetchUsersDuck());
    // dispatch(fetchUsersDuck());

    return () => {
      requestPromise.abort();
    };
  }, [dispatch]);

  return (
    <PageLayout renderHeader={() => <h1>Redux</h1>} renderFooter={<Footer />}>
      <div>
        <div className="m-s">
          <p>Count: {count}</p>
        </div>
        <Button className="m-s" onClick={increaseHandler}>
          Increase
        </Button>
        <Button className="m-s" onClick={decreaseHandler}>
          Decrease
        </Button>
        <Button className="m-s" onClick={resetHandler}>
          Reset
        </Button>
      </div>
      <Form />
      <UserList />
    </PageLayout>
  );
}
