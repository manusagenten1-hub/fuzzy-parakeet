import { ReactNode } from 'react';
import { ShieldCheck } from 'lucide-react';

interface Props {
  children: ReactNode;
  subtext?: string;
  className?: string;
  href?: string;
}

export function ButtonCTA({ children, subtext, className = '', href }: Props) {
  const Component = href ? 'a' : 'button';

  return (
    <div className={`flex flex-col items-center w-full ${className}`}>
      <Component 
        href={href}
        className="w-full max-w-md py-4 px-8 rounded-[20px] bg-gradient-to-r from-[#C9A227] to-[#E5C158] text-white font-bold text-lg md:text-xl shadow-[0_8px_20px_rgba(201,162,39,0.3)] hover:shadow-[0_12px_30px_rgba(201,162,39,0.5)] hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
      >
        {children}
      </Component>
      {subtext && (
        <span className="text-sm text-[#5F6368] mt-4 font-medium flex items-center justify-center gap-2">
          <ShieldCheck size={16} className="text-[#C9A227]" />
          {subtext}
        </span>
      )}
    </div>
  );
}
