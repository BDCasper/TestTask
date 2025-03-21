import s from './PortfolioItem.module.scss';
import { FC } from 'react';
import clsx from 'clsx';
import { PortfolioItemObject } from '@/content';

interface PortfolioItemProps {
	className?: string;
	children: PortfolioItemObject;
}

export const PortfolioItem: FC<PortfolioItemProps> = ({
	className = '',
	children,
	...rest
}) => {
	return (
		<div className={clsx(s.wrap, className)} {...rest}>
			<div className={s.wrap__img}>
				<span className={`${s.wrap__text} ${s.wrap__default}`}>
					{children.projectTitle}
				</span>
			</div>
			<div className={s.wrap__overlay}>
				<span className={`${s.wrap__text} ${s.wrap__hover}`}>
					{children.projectType}
				</span>
				<span className={`${s.wrap__text} ${s.wrap__hover}`}>
					{children.projectSubType}
				</span>
				<button className={`${s.wrap__text} ${s.wrap__hover}`}>
					Подробнее
				</button>
			</div>
		</div>
	);
};
