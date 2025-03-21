import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import s from './MainLayout.module.scss';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes.tsx';
import { ButtonX } from '@components/ButtonX';

interface MainLayoutProps {
	classNames?: {
		root?: string;
		body?: string;
		footer?: string;
	};
}

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({
	children,
	classNames,
}) => {
	const isMobile = window.innerWidth <= 767;
	return (
		<div className={clsx(s.wrap, classNames?.root)}>
			<div className={clsx(s.wrap__header, classNames?.footer)}>
				<div className={s.wrap__headerLogo}>CompanyName</div>
				{!isMobile && (
					<div className={s.wrap__headerNavBar}>
						<Link to={ROUTES.home.path} className={s.wrap__headerBtn}>
							<ButtonX>{ROUTES.home.title}</ButtonX>
						</Link>
						<Link to={ROUTES.home.path} className={s.wrap__headerBtn}>
							<ButtonX>{ROUTES.about.title}</ButtonX>
						</Link>
						<Link to={ROUTES.home.path} className={s.wrap__headerBtn}>
							<ButtonX>{ROUTES.services.title}</ButtonX>
						</Link>
						<Link to={ROUTES.home.path} className={s.wrap__headerBtn}>
							<ButtonX>{ROUTES.portfolio.title}</ButtonX>
						</Link>
						<Link to={ROUTES.home.path} className={s.wrap__headerBtn}>
							<ButtonX>{ROUTES.contacts.title}</ButtonX>
						</Link>
					</div>
				)}
			</div>
			<div className={clsx(s.wrap__body, classNames?.body)}>
				<ErrorBoundary>{children}</ErrorBoundary>
			</div>
			<div className={clsx(s.wrap__footer, classNames?.footer)}></div>
		</div>
	);
};
