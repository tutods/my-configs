import type { ReactNode } from 'react';
import React from 'react';
import { BiChevronDown } from 'react-icons/bi';

import styles from './styles.module.scss';

type Props = {
  title: ReactNode;
  children: ReactNode;
  className?: string;
  buttonClassName?: string;
};

export const Accordion = ({
  buttonClassName = '',
  children,
  className = '',
  title,
  ...props
}: Props) => (
  <details className={`${styles.accordion} ${className}`} {...props}>
    <summary className={`${buttonClassName}`}>
      {title} <BiChevronDown />
    </summary>

    <div>{children}</div>
  </details>
);
