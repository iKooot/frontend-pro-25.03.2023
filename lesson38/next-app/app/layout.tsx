import { Metadata } from "next";
import { Header } from "../components";
import "../styles/main.scss";

export const metadata: Metadata = {
  title: "NextJS",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
