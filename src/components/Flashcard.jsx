import { RotateCw, Lightbulb } from "lucide-react";

function Flashcard({ card, isFlipped, onFlip, currentIndex, total }) {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
          {card.category}
        </span>

        <span className="text-xs font-medium text-slate-400">
          CARD {currentIndex + 1} OF {total}
        </span>
      </div>

      <div
        className="flashcard-container cursor-pointer"
        onClick={onFlip}
        role="button"
        tabIndex={0}
        aria-label={isFlipped ? "Show question" : "Reveal answer"}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onFlip();
          }
        }}
      >
        <div className={`flashcard-inner ${isFlipped ? "is-flipped" : ""}`}>
          {/* Front Side */}
          <div className="flashcard-face flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Lightbulb size={28} />
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
              Question
            </p>

            <h2 className="max-w-lg text-2xl font-bold leading-relaxed text-[#0A1A35] sm:text-3xl">
              {card.question}
            </h2>

            <div className="mt-8 flex items-center gap-2 text-sm text-slate-400">
              <RotateCw size={16} />
              Click to reveal answer
            </div>
          </div>

          {/* Back Side */}
          <div className="flashcard-face flashcard-back flex flex-col items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 p-8 text-center shadow-sm">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
              Answer
            </p>

            <h2 className="max-w-lg text-xl font-semibold leading-relaxed text-[#0A1A35] sm:text-2xl">
              {card.answer}
            </h2>

            <div className="mt-8 flex items-center gap-2 text-sm text-blue-500">
              <RotateCw size={16} />
              Click to see question
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;