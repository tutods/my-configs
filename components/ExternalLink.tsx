import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
  content: ReactNode;
};

export const ExternalLink = ({ className = '', content, href, ...props }: Props) => (
  <a {...props} className={`${className}`} href={href} rel="noreferrer" target="_blank">
    {content}
  </a>
);
