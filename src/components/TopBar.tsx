import { useCountdown } from '../hooks/useCountdown';

export function TopBar() {
  const { days, hours, minutes, seconds } = useCountdown(3);

  return (
    <div className="w-full bg-[#0D1B2A] text-white py-2 px-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center sm:text-left text-xs sm:text-sm font-medium">
        <span>A oferta expira em:</span>
        <div className="flex items-center gap-1 font-mono text-[#C9A227] font-bold text-base bg-black/20 px-2 py-0.5 rounded-md border border-[#C9A227]/20">
          <div className="flex flex-col items-center leading-none">
            <span>{days}</span>
            <span className="text-[10px] text-gray-400 font-sans uppercase">Dias</span>
          </div>
          <span className="mb-3">:</span>
          <div className="flex flex-col items-center leading-none">
            <span>{hours}</span>
            <span className="text-[10px] text-gray-400 font-sans uppercase">Hrs</span>
          </div>
          <span className="mb-3">:</span>
          <div className="flex flex-col items-center leading-none">
            <span>{minutes}</span>
            <span className="text-[10px] text-gray-400 font-sans uppercase">Min</span>
          </div>
          <span className="mb-3">:</span>
          <div className="flex flex-col items-center leading-none">
            <span>{seconds}</span>
            <span className="text-[10px] text-gray-400 font-sans uppercase">Seg</span>
          </div>
        </div>
      </div>
    </div>
  );
}
