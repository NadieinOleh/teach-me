import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";


import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FC } from "react";
import { useTranslations } from "next-intl";

interface Props {
  message: {
    success: boolean;
    warning: boolean;
    error: boolean;
  };
}

export const ShowAlert: FC<Props> = ({ message }) => {
  const t = useTranslations("Alert");


  return (
    <div className="grid w-full max-w-xl items-start gap-4">
      {message.success && (
        <Alert>
          <CheckCircle2Icon />
          <AlertTitle>{t("successTitle")}</AlertTitle>
          <AlertDescription>{t("successDescription")}</AlertDescription>
        </Alert>
      )}

      {message.warning && (
        <Alert>
          <PopcornIcon />
          <AlertTitle>{t("warningTitle")} </AlertTitle>
        </Alert>
      )}

      {message.error && (
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>{t("errorTitle")}</AlertTitle>
          <AlertDescription>
            <p>{t("errorDescription")}</p>
            <ul className="list-inside list-disc text-sm">
              <li>{t("errorListItem1")}</li>
              <li>{t("errorListItem2")}</li>
              <li>{t("errorListItem3")}</li>
            </ul>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};
