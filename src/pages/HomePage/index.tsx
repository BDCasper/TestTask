import { FC } from 'react';
import s from './HomePage.module.scss';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { InfoTabs } from '@/components/InfoTabs';
import { CARDITEMS } from '@/content';
import { InfoCardObject } from '@/content';
import { PORTFOLIOTITLES } from '@/content';
import { CARDTITLES } from '@/content';
import { PORTFOLIOITEMS } from '@/content';
import { PortfolioItemObject } from '@/content';
import { PortfolioItem } from '@/components/PortfolioItem';

export const HomePage: FC = () => {
	const [active, setActive] = useState<number>(0);
	const [isVisible, setIsVisible] = useState<boolean>(true);
	const [items, setItems] = useState<PortfolioItemObject[]>([]);

	useEffect(() => {
		setIsVisible(false);
		setTimeout(() => {
			setItems(getActiveItems());
			setIsVisible(true);
		}, 400);
	}, [active]);

	const getActiveItems = () => {
		switch (active) {
			case 0:
				return PORTFOLIOITEMS.main.items;
			case 1:
				return PORTFOLIOITEMS.about.items;
			case 2:
				return PORTFOLIOITEMS.services.items;
			case 3:
				return PORTFOLIOITEMS.portfolio.items;
			case 4:
				return PORTFOLIOITEMS.contacts.items;
			default:
				return [];
		}
	};

	return (
		<div className={s.wrap}>
			<div className={s.wrap__Cards}>
				<div className={s.wrap__CardsTitle}>{CARDTITLES.title.text}</div>
				<div className={s.wrap__CardsItems}>
					{CARDITEMS.map((infoCard: InfoCardObject, index: number) => (
						<InfoTabs key={index} children={infoCard} />
					))}
				</div>
			</div>
			<div className={s.wrap__Portfolio}>
				<div className={s.wrap__PortfolioTitle}>
					<span>{PORTFOLIOTITLES.title.text}</span>
					<span>{PORTFOLIOTITLES.subTitle.text}</span>
				</div>
				<div className={s.wrap__PortfolioNavBar}>
					<span
						className={clsx('', {
							[s.wrap__PortfolioNavBarActive]: active === 0,
						})}
						onClick={() => setActive(0)}
					>
						{PORTFOLIOITEMS.main.title}
					</span>
					<span
						className={clsx('', {
							[s.wrap__PortfolioNavBarActive]: active === 1,
						})}
						onClick={() => setActive(1)}
					>
						{PORTFOLIOITEMS.about.title}
					</span>
					<span
						className={clsx('', {
							[s.wrap__PortfolioNavBarActive]: active === 2,
						})}
						onClick={() => setActive(2)}
					>
						{PORTFOLIOITEMS.services.title}
					</span>
					<span
						className={clsx('', {
							[s.wrap__PortfolioNavBarActive]: active === 3,
						})}
						onClick={() => setActive(3)}
					>
						{PORTFOLIOITEMS.portfolio.title}
					</span>
					<span
						className={clsx('', {
							[s.wrap__PortfolioNavBarActive]: active === 4,
						})}
						onClick={() => setActive(4)}
					>
						{PORTFOLIOITEMS.contacts.title}
					</span>
				</div>
				<div className={s.wrap__PortfolioItems}>
					<div
						className={clsx(s.wrap__PortfolioItemsItem, {
							[s.wrap__PortfolioItemsActive]: isVisible,
						})}
					>
						{items.map((item: PortfolioItemObject, index: number) => (
							<PortfolioItem
								key={index}
								children={item}
								className={s.wrap__PortfolioItemsActive}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
