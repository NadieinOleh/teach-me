"use client";

import { getTranslations } from "next-intl/server";
import { use, useEffect, useState } from "react";

export default function PoemPage({ params }: { params: { locale: string } }) {
  //   const t = await getTranslations("PoemPage");
  const [usersList, setUsersList] = useState([]);
  const [user, setUser] = useState<{
    name: string;
    classNumber: number;
  } | null>(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  console.log("users", usersList);
  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/users", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        const data = await res.json();
        setUsersList(data);
      } else {
        const error = await res.json();
        console.error(error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      {user?.name}

      {usersList.map((user: { name: string; classNumber: number }) => (
        <div key={user.name} className="mb-2">
          {user.name} - {user.classNumber}
        </div>
      ))}
    </div>
  );
}
