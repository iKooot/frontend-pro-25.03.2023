import { Metadata } from "next";
import { IPagination, IUser } from "../../types";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js - Users",
};

async function getUsers(): Promise<IPagination<IUser>> {
  const res = await fetch("https://reqres.in/api/users");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Page() {
  const { data, page, total_pages, total, per_page } = await getUsers();

  return (
    <div>
      <h1>Hello, users page!</h1>
      <h2>Users info</h2>
      <div>
        <p>Page: {page}</p>
        <p>Total pages: {total_pages}</p>
        <p>Total users: {total}</p>
        <p>Users per page: {per_page}</p>
      </div>
      <h2>Users:</h2>
      <ul>
        {data.map(({ first_name, last_name, id }) => {
          return (
            <li key={id}>
              <p>
                Name: {first_name} {last_name}
              </p>
              <Link href={`/users/${id}`}>Show user details</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
