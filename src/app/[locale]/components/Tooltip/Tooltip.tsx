import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslations } from "next-intl";


export const Instruction = ({}) => {
const t = useTranslations("HomePage");

  return (
    <div className="border p-1.5 rounded-md bg-secondary/50 ">
 <Tooltip >
      <TooltipTrigger>{t("instruction")}</TooltipTrigger>
      <TooltipContent>
        <p>
            Add to library

        </p>
      </TooltipContent>
    </Tooltip>
    </div>
   
  );
};
