import { IconType } from 'react-icons';

export type SiteConfig = {
    name: string;
    description: string;
    url: string;
    ogImageUrl: string;
    links: {
        github: string;
    };
};

export type General = {
    name: string;
    jobTitle: string;
    about: string;
    contacts: {
        label: string;
        value: string;
        href: string;
    }[];
};

export type Content = {
    title: string;
    items: {
        title: string;
        subTitle: string;
        date: string;
        description: string;
    }[];
};

export type Item = {
    id: number;
    color: string;
    name: string;
    percentage: number;
    Icon: IconType | any;
};
