"use client";

import { getTranslations } from "next-intl/server";
import { use, useEffect, useState } from "react";
import { UserList } from "./components/UserList/UserList";
import { Navigation } from "../components/Navigation/Navigation";
import { PoemSelector } from "./components/Poem/PoemsSelector";
import { useLocale } from "next-intl";
import poemsUk from "@/messages/poemsUk.json";
import poemsEn from "@/messages/poemsEn.json";
import poemsDe from "@/messages/poemsDe.json";

export default function PoemPage() {
  //   const t = await getTranslations("PoemPage");
  const locale = useLocale();
  const [usersList, setUsersList] = useState([]);
  const [user, setUser] = useState<{
    name: string;
    classNumber: number;
  } | null>(null);
  const [selectPoem, setSelectPoem] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

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

  const getPoemsForClass = (locale: string, classNumber: number) => {
    const poems =
      {
        uk: poemsUk,
        en: poemsEn,
        de: poemsDe,
      }[locale] || poemsUk;

    
    return poems.filter((p) => p.classNumber === classNumber);
  };

  const poems =
    user?.classNumber !== undefined
      ? getPoemsForClass(locale, user.classNumber)
      : [];

  return (
    <div className="flex min-h-screen flex-col items-center  p-12">
      <Navigation />

      {user && <p>Привет, {user.name}!</p>}

      <p className="my-4">Here you can choose Poems for your class</p>

      <PoemSelector poems={poems} setSelectPoem={setSelectPoem} />

      <p className="my-4">Here you can see all list of the users</p>

      <UserList usersList={usersList} />

      {selectPoem && (
        <div className="mt-6 p-4 border rounded-lg shadow  max-w-xl text-center">
          <p className="whitespace-pre-line text-lg leading-relaxed">
            {selectPoem}
          </p>
        </div>
      )}
    </div>
  );
}
