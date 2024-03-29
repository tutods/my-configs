import type { AnchorHTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
  children: ReactNode;
  variant?: 'primary';
};

export const ExternalLinkButton = ({
  children,
  className = '',
  href,
  target,
  variant = 'primary',
  ...props
}: Props) => {
  const variantClass = `btn-${variant}`;

  return (
    <a
      {...props}
      className={`${styles.btn} ${styles[variantClass]} ${className}`}
      href={href}
      rel="noreferrer"
      target={target}
    >
      {children}
    </a>
  );
};
