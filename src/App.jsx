import { useState } from "react";

import Header from "./components/Header";
import Flashcard from "./components/Flashcard";
import ProgressBar from "./components/Progressbar";
import Navigation from "./components/Navigation";

import flashcards from "./data/flashcards";

import { RotateCcw, Trophy, Sparkles } from "lucide-react";

function App() {
  // Current flashcard position
  const [currentIndex, setCurrentIndex] = useState(0);

  // Determines whether the card is flipped
  const [isFlipped, setIsFlipped] = useState(false);

  // Determines whether the session is completed
  const [isCompleted, setIsCompleted] = useState(false);

  // Get the current flashcard
  const currentCard = flashcards[currentIndex];

  // Flip the current flashcard
  const handleFlip = () => {
    setIsFlipped((previous) => !previous);
  };

  // Move to the next flashcard
  const handleNext = () => {
    if (currentIndex === flashcards.length - 1) {
      setIsCompleted(true);
      return;
    }

    setCurrentIndex((previous) => previous + 1);
    setIsFlipped(false);
  };

  // Return to the previous flashcard
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((previous) => previous - 1);
      setIsFlipped(false);
    }
  };

  // Restart the flashcard session
  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsCompleted(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-3xl">

        {/* Application Header */}
        <Header />

        <div className="mt-10 space-y-8">

          {isCompleted ? (
            /* Completion Screen */
            <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm sm:px-12">

              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                <Trophy size={40} />
              </div>

              <div className="mb-3 flex items-center justify-center gap-2 text-blue-600">
                <Sparkles size={18} />
                <span className="text-sm font-semibold">
                  Session Completed
                </span>
              </div>

              <h2 className="text-3xl font-bold text-[#0A1A35]">
                Great job!
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-500">
                You've successfully gone through all {flashcards.length} flashcards.
                Keep practicing to improve your JavaScript knowledge!
              </p>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleRestart}
                  className="flex items-center gap-2 rounded-xl bg-[#0A1A35] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-900"
                >
                  <RotateCcw size={17} />
                  Start Again
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Progress Section */}
              <ProgressBar
                current={currentIndex + 1}
                total={flashcards.length}
              />

              {/* Flashcard Section */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
                <Flashcard
                  card={currentCard}
                  isFlipped={isFlipped}
                  onFlip={handleFlip}
                  currentIndex={currentIndex}
                  total={flashcards.length}
                />

                {/* Navigation Section */}
                <div className="mt-8 border-t border-slate-100 pt-6">
                  <Navigation
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    isFirst={currentIndex === 0}
                    isLast={currentIndex === flashcards.length - 1}
                  />
                </div>
              </div>
            </>
          )}

        </div>

        {/* Footer */}
        <footer className="mt-10 text-center text-xs text-slate-400">
          Built with React.js and Tailwind CSS
        </footer>

      </div>
    </main>
  );
}

export default App;