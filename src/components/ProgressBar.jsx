function ProgressBar({ current, total }) {
  const progress = (current / total) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Your Progress
        </p>

        <p className="text-sm font-bold text-[#0A1A35]">
          {current} / {total}
        </p>
      </div>

      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-right text-xs text-slate-500">
        {Math.round(progress)}% completed
      </p>
    </div>
  );
}

export default ProgressBar;
