"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IUser } from "../../../types";
import { Loader } from "../../../components";

export default function User({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/users/${params.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <div>
      <h1>
        Hello, {user.first_name} {user.last_name}!
      </h1>
      <div>
        {/*<Image*/}
        {/*  src={user.avatar}*/}
        {/*  alt={`${user.first_name} ${user.last_name}`}*/}
        {/*/>*/}
        <img src={user.avatar}/>
      </div>
      <p>Email: {user.email}</p>
      <button onClick={() => router.push("/users")}>Go back</button>
    </div>
  );
}
