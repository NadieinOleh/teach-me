import { LanguagesToggle } from "../LanguagesToggle/LanguagesToggle";
import { ModeToggle } from "../ModeToggle/ModeToggle";
import { Instruction } from "../Tooltip/Tooltip";


export const Navigation = (({  }) => {

  return (
       <div className="mb-6 flex w-full items-center justify-center gap-4">
            <ModeToggle />
            <LanguagesToggle />
            <Instruction />
          </div>
  );
});
