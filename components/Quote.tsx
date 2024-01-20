import type { ReactNode } from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';

type Props = {
  children: ReactNode;
  from: ReactNode;
  className?: string;
};

export const Quote = ({ children, className = '', from }: Props) => (
  <div
    className={`justify-content-center flex flex-col items-center rounded border border-gray-200 p-6 text-center shadow dark:border-gray-700 ${className}`}
  >
    <RiDoubleQuotesL className="mx-auto mb-4 size-10" />

    <em>{children}</em>

    <div className="text-sm text-gray-400">— from {from}</div>
  </div>
);
