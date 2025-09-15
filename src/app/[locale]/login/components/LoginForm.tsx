import { GalleryVerticalEnd } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import { SelectClass } from "./SelectClass/SelectClass";
import { useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const t = useTranslations("HomePage");
  const [classNumber, setClassNumber] = useState<number | null>(null);

  console.log(classNumber);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <div className="flex flex-col items-stretch  md:items-center gap-6">
          <div className="flex flex-col items-center  gap-2">
            <a href="#" className="flex flex-col  gap-2 font-medium">
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Acme Inc.</span>
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

              <Input id="text" type="text" placeholder="Daniyl" required />
            </div>

            <Button type="submit" className="w-full">
              {t("login")}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
