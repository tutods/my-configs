import { AnchorHTMLAttributes, ReactNode } from 'react';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
	className?: string;
	children: ReactNode;
};

export const ExternalLink = ({ className = '', href, children, ...props }: Props) => {
	return (
		<a {...props} className={`${className}`} href={href} rel={'noreferrer'} target={'_blank'}>
			{children}
		</a>
	);
};
