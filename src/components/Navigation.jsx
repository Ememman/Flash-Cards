import { ChevronLeft, ChevronRight } from "lucide-react";

function Navigation({
  onPrevious,
  onNext,
  isFirst,
  isLast,
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <button
        onClick={onPrevious}
        disabled={isFirst}
        className="flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={18} />
        Previous
      </button>

      <button
        onClick={onNext}
        className="flex items-center gap-2 rounded-xl bg-[#0A1A35] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-900"
      >
        {isLast ? "Finish" : "Next"}

        <ChevronRight size={18} />
      </button>
    </div>
  );
}

export default Navigation;