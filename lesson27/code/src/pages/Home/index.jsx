import {Footer, Header, PageLayout} from "../../components";

export function HomePage() {
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
        <div>
          <h1>Home page</h1>
        </div>
      )}
      renderFooter={() => <Footer />}
    />
  );
}
