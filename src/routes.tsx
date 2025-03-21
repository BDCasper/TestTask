import { RouteObject } from 'react-router-dom';
import { HomePage } from '@pages/HomePage';
import { ErrorPage } from '@pages/ErrorPage';

export type ExtendedRouteObject = RouteObject & {
	title: string;
	titleLang?: string;
	path: string;
};

export const ROUTES = {
	home: {
		path: '/',
		title: 'Главная',
		element: <HomePage />,
	} as ExtendedRouteObject,

	about: {
		path: '/',
		title: 'О нас',
		element: <HomePage />,
	} as ExtendedRouteObject,

	services: {
		path: '/',
		title: 'Услуги',
		element: <HomePage />,
	} as ExtendedRouteObject,

	portfolio: {
		path: '/',
		title: 'Портфолио',
		element: <HomePage />,
	} as ExtendedRouteObject,

	contacts: {
		path: '/',
		title: 'Контакты',
		element: <HomePage />,
	} as ExtendedRouteObject,

	error: {
		path: '*',
		title: 'Error Page',
		titleLang: 'pages:error',
		element: <ErrorPage />,
	} as ExtendedRouteObject,
};

export type RouteKeys = keyof typeof ROUTES;

// Create an array of routes for use with useRoutes
export const routes: ExtendedRouteObject[] = Object.values(ROUTES);

export const getPathFromRoute = (route: ExtendedRouteObject): string => {
	return route.path || '';
};
