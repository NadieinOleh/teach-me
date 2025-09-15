"use client";

import { useTranslations } from "next-intl";
import { ModeToggle } from "./components/ModeToggle/ModeToggle";
import { LanguagesToggle } from "./components/LanguagesToggle/LanguagesToggle";
import { LoginForm } from "./login/components/LoginForm";
import { Instruction } from "./components/Tooltip/Tooltip";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex min-h-screen flex-col  justify-center p-8">
      <div className="mb-6 flex w-full items-center justify-center gap-4">
        <ModeToggle />
        <LanguagesToggle />
        <Instruction />
      </div>

      <div className="text-center mb-2">
        <h1 className="text-xl font-bold mb-2">{t("hello")}</h1>

        <h2 className="text-xl font-bold mb-2">{t("description")}</h2>
        <h3 className="text-xl font-bold text-center">{t("text")}</h3>
      </div>

      <LoginForm />
    </div>
  );
}
