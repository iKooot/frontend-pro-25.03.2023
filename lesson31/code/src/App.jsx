import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Footer, PageLayout, Form, UserList } from "./components/index.js";
import { FETCH_USERS_ACTION } from "./store/users/index.js";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();

    dispatch(FETCH_USERS_ACTION({ signal: controller.signal }));

    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return (
    <PageLayout renderHeader={() => <h1>Redux</h1>} renderFooter={<Footer />}>
      <Form />
      <UserList />
    </PageLayout>
  );
}
