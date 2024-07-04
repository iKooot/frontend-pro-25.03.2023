import { Footer, Header, PageLayout } from "../../components";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";

export function UserPage() {
  const user = useLoaderData();
  const data = useRouteLoaderData("root");

  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderFooter={() => <Footer />}
      renderContent={() => (
        <div>
          <h1>User page</h1>
          <p>User name: {user.name}</p>
          <p>Total users: {data.length}</p>
        </div>
      )}
    />
  );
}
