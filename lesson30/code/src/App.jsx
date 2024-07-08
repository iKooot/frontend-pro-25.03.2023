import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Footer, PageLayout, Form, UserList } from "./components/index.js";
import { fetchUsers } from "./ducks/users.duck.js";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const requestPromise = dispatch(fetchUsers());

    return () => {
      requestPromise.abort();
    };
  }, [dispatch]);

  return (
    <PageLayout renderHeader={() => <h1>Redux</h1>} renderFooter={<Footer />}>
      <Form />
      <UserList />
    </PageLayout>
  );
}
