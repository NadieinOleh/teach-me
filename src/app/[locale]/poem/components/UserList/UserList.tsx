"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { FC } from "react";

interface Props {
  usersList: { name: string; classNumber: number }[];
}

export const UserList: FC<Props> = ({ usersList }) => {
  return (
    <div className="border p-2.5 rounded-md bg-secondary/50 ">
      <Sheet>
        <SheetTrigger>Open user list</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>user list</SheetTitle>
            <SheetDescription></SheetDescription>
            {usersList.map((user: { name: string; classNumber: number }) => (
              <ul key={user.name} className="mb-2">
                <li> Name {user.name}</li>
                <li> Class {user.classNumber}</li>
                <li> count poems: 0</li>
                <Separator className="my-2" />
              </ul>
            ))}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
