import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { FC } from "react";

interface Props {
  number: number | null; 
  setNumber: (num: number | null) => void;
}

export const SelectClass: FC<Props> = ({ number, setNumber }) => {
  const t = useTranslations("HomePage");

  return (
    <Select
      value={number !== null ? String(number) : undefined}
      onValueChange={(val) => setNumber(val ? +val : null)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={t("class")} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </SelectContent>
    </Select>
  );
};