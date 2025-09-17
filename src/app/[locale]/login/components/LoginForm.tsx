"use client";

import { GalleryVerticalEnd } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocale, useTranslations } from "next-intl";
import { SelectClass } from "./SelectClass/SelectClass";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShowAlert } from "./ShowAlert/ShowAlert";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const t = useTranslations("HomePage");
  const [classNumber, setClassNumber] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState({
    success: false,
    warning: false,
    error: false,
    loading: false,
  });
  const router = useRouter();
  const locale = useLocale();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || classNumber === null) {
      setMessage((prev) => ({ ...prev, warning: true }));
      return;
    }

    try {
      setMessage((prev) => ({ ...prev, loading: true }));

      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, classNumber }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: data.name,
            classNumber: data.classNumber,
          })
        );

        setMessage((prev) => ({ ...prev, success: true }));

        router.push(`/${locale}/poem`);
      } else {
        const error = await res.json();
        console.error(error);

        setMessage((prev) => ({ ...prev, error: true }));
      }
    } catch (err) {
      console.error(err);

      setMessage((prev) => ({ ...prev, error: true }));
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-stretch md:items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <a href="#" className="flex flex-col gap-2 font-medium">
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">App</span>
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid gap-3 font-bold">
              <div className="flex items-center gap-6 justify-between">
                <Label className="font-bold" htmlFor="text">
                  {t("name")}
                </Label>

                <SelectClass number={classNumber} setNumber={setClassNumber} />
              </div>

              <Input
                id="text"
                type="text"
                placeholder="Daniyl"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full" disabled={message.loading}>
              {message.loading ? "⏳" : t("login")}
            </Button>

            <ShowAlert message={message} />
          </div>
        </div>
      </form>
    </div>
  );
}
