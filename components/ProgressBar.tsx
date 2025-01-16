import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress: number;
  desturctive?: boolean;
}

const ProgressBar = ({ progress, desturctive }: ProgressBarProps) => {
  progress = progress > 100 ? 100 : progress;

  return (
    <div className="flex w-full items-center gap-3">
      <div className="h-2 shrink-0 rounded bg-white w-full flex-[1_0_0]">
        <div
          className={cn(
            "h-full rounded transition-all",
            desturctive ? "bg-error-700" : "bg-lime-300"
          )}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className="text-sm font-medium text-black">{progress}%</span>
    </div>
  );
};

export default ProgressBar;
