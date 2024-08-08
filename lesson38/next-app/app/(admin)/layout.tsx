import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
};
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div>
        {children}
      </div>
  );
}
