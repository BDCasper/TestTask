import star from '../src/assets/images/star.png';
import rocket from '../src/assets/images/rocket.png';
import phone from '../src/assets/images/phone.png';
import ratingStar from '../src/assets/images/ratingStar.svg';

export type TitleObject = {
	text: string;
};

export type InfoCardObject = {
	img: string;
	title: string;
	titleLang?: string;
	description: string;
	rating: number;
	type: string;
	ratingImg: string;
};

export type PortfolioItemObject = {
	projectTitle: string;
	projectType: string;
	projectSubType: string;
};

export type PortfolioObject = {
	title: string;
	items: PortfolioItemObject[];
};

export const CARDTITLES = {
	title: {
		text: 'Иновационные решения для вашего бизнеса',
	} as TitleObject,
};

export const CARDITEMS = [
	{
		img: star,
		title: 'Креативный дизайн',
		description:
			'Мы создаем уникальные дизайны, которые отражают индивидуальность вашего бренда и привлекают внимание целевой аудитории.',
		rating: 4.9,
		type: 'Дизайн',
		ratingImg: ratingStar,
	} as InfoCardObject,

	{
		img: rocket,
		title: 'Быстрая разработка',
		description:
			'Оптимизированный процесс разработки позволяет нам создавать высококачественные продукты в сжатые сроки.',
		rating: 4.8,
		type: 'Разработка',
		ratingImg: ratingStar,
	} as InfoCardObject,

	{
		img: phone,
		title: 'Мобильная оптимизация',
		description:
			'Все наши проекты адаптированы для любых устройств, обеспечивая идеальный пользовательский опыт на любом экране.',
		rating: 4.7,
		type: 'Оптимизация',
		ratingImg: ratingStar,
	} as InfoCardObject,
];

export const PORTFOLIOTITLES = {
	title: {
		text: 'Наши работы',
	} as TitleObject,
	subTitle: {
		text: 'Ознакомьтесь с нашими лучшими проектами в различных категориях',
	} as TitleObject,
};

export const PORTFOLIOITEMS = {
	main: {
		title: 'Главная',
		items: [
			{
				projectTitle: 'Проект "Главная"',
				projectType: 'E-commerce платформа',
				projectSubType: 'Веб-платформа',
			},
			{
				projectTitle: 'Проект "Главная"',
				projectType: 'E-commerce платформа',
				projectSubType: 'Веб-платформа',
			},
			{
				projectTitle: 'Проект "Главная"',
				projectType: 'E-commerce платформа',
				projectSubType: 'Веб-платформа',
			},
			{
				projectTitle: 'Проект "Главная"',
				projectType: 'E-commerce платформа',
				projectSubType: 'Веб-платформа',
			},
			{
				projectTitle: 'Проект "Главная"',
				projectType: 'E-commerce платформа',
				projectSubType: 'Веб-платформа',
			},
			{
				projectTitle: 'Проект "Главная"',
				projectType: 'E-commerce платформа',
				projectSubType: 'Веб-платформа',
			},
		],
	} as PortfolioObject,

	about: {
		title: 'О нас',
		items: [
			{
				projectTitle: 'Проект "О нас"',
				projectType: 'E-commerce платформа',
				projectSubType: 'Веб-платформа',
			},
			{
				projectTitle: 'Проект "О нас"',
				projectType: 'E-commerce платформа',
				projectSubType: 'Веб-платформа',
			},
			{
				projectTitle: 'Проект "О нас"',
				projectType: 'E-commerce платформа',
				projectSubType: 'Веб-платформа',
			},
			{
				projectTitle: 'Проект "О нас"',
				projectType: 'E-commerce платформа',
				projectSubType: 'Веб-платформа',
			},
			{
				projectTitle: 'Проект "О нас"',
				projectType: 'E-commerce платформа',
				projectSubType: 'Веб-платформа',
			},
		],
	} as PortfolioObject,

	services: {
		title: 'Услуги',
		items: [
			{
				projectTitle: 'Проект "Услуги"',
				projectType: 'E-commerce платформа',
				projectSubType: 'Веб-платформа',
			},
			{
				projectTitle: 'Проект "Услуги"',
				projectType: 'E-commerce платформа',
				projectSubType: 'Веб-платформа',
			},
			{
				projectTitle: 'Проект "Услуги"',
				projectType: 'E-commerce платформа',
				projectSubType: 'Веб-платформа',
			},
			{
				projectTitle: 'Проект "Услуги"',
				projectType: 'E-commerce платформа',
				projectSubType: 'Веб-платформа',
			},
		],
	} as PortfolioObject,

	portfolio: {
		title: 'Портфолио',
		items: [
			{
				projectTitle: 'Проект "Портфолио"',
				projectType: 'E-commerce платформа',
				projectSubType: 'Веб-платформа',
			},
			{
				projectTitle: 'Проект "Портфолио"',
				projectType: 'E-commerce платформа',
				projectSubType: 'Веб-платформа',
			},
			{
				projectTitle: 'Проект "Портфолио"',
				projectType: 'E-commerce платформа',
				projectSubType: 'Веб-платформа',
			},
		],
	} as PortfolioObject,

	contacts: {
		title: 'Контакты',
		items: [
			{
				projectTitle: 'Проект "Контакты"',
				projectType: 'E-commerce платформа',
				projectSubType: 'Веб-платформа',
			},
			{
				projectTitle: 'Проект "Контакты"',
				projectType: 'E-commerce платформа',
				projectSubType: 'Веб-платформа',
			},
		],
	} as PortfolioObject,
};
