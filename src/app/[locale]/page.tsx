"use client";

import { useTranslations } from "next-intl";
import { LoginForm } from "./login/components/LoginForm";
import { Navigation } from "./components/Navigation/Navigation";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex min-h-screen flex-col  justify-center p-8">
   <Navigation />

      <div className="text-center mb-2">
        <h1 className="text-xl font-bold mb-2">{t("hello")}</h1>

        <h2 className="text-xl font-bold mb-2">{t("description")}</h2>
        <h3 className="text-xl font-bold text-center">{t("text")}</h3>
      </div>

      <LoginForm />
    </div>
  );
}
