"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PoemSelectorProps {
  poems: {
    id: number;
    title: string;
    poem: string;
    classNumber: number;
  }[];
  setSelectPoem: (poem: string) => void;
}

export const PoemSelector = ({ poems, setSelectPoem }: PoemSelectorProps) => {
  return (
    <Select
      onValueChange={(val) => {
        const selected = poems.find((p) => String(p.id) === val);
        if (selected) setSelectPoem(selected.poem);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Poems" />
      </SelectTrigger>

      <SelectContent>
        {poems.map((poem) => (
          <SelectItem key={poem.id} value={String(poem.id)}>
            {poem.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
