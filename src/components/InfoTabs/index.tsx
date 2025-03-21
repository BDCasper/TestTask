import s from './InfoTabs.module.scss';
import { FC } from 'react';
import clsx from 'clsx';
import { InfoCardObject } from '@/content';

interface InfoTabsProps {
	className?: string;
	children: InfoCardObject;
}

export const InfoTabs: FC<InfoTabsProps> = ({
	className = '',
	children,
	...rest
}) => {
	return (
		<div className={clsx(s.wrap, className)} {...rest}>
			<div className={s.wrap__Img}>
				<img src={children.img} alt="" className={s.wrap__ImgItem} />
			</div>
			<div className={s.wrap__Tab}>
				<div className={s.wrap__TabText}>
					<span>{children.title}</span>
					<span>{children.description}</span>
				</div>
				<div className={s.wrap__TabBottomLine}>
					<span>
						<img src={children.ratingImg} alt="" />
						{children.rating}
					</span>
					<span>{children.type}</span>
				</div>
			</div>
		</div>
	);
};
