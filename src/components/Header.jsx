import FlashCardsLogo from "./FlashCardsLogo";
import { Sparkles } from "lucide-react";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 pb-5">
      <div className="flex items-center gap-3">
        <FlashCardsLogo className="h-11 w-11 shrink-0 drop-shadow-sm" />

        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#0A1A35]">
            Flashcards
          </h1>

          <p className="text-xs text-slate-500">
            Learn something new every day
          </p>
        </div>
      </div>

      <div className="hidden items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 sm:flex">
        <Sparkles size={16} />
        Study Mode
      </div>
    </header>
  );
}

export default Header;
