'use client';

import {Martian_Mono, Sunflower} from 'next/font/google';
import * as React from 'react';
import {memo, useEffect} from 'react';
import {motion} from 'framer-motion';
import Image from "next/image";
import {generalData} from "@/data/general";
import type {Content} from "../types";
import {contentData} from "@/data/content";
import Link from "next/link";
import profilePic from '../../public/images/we.jpg'

const nameFont = Sunflower({
    weight: ['700'],
    subsets: ['latin'],
    display: 'swap'
});

const contentFont = Sunflower({
    weight: ['500'],
    subsets: ['latin'],
    display: 'swap'
});

const developerFont = Martian_Mono({
    weight: ['800'],
    subsets: ['latin'],
    display: 'swap'
});

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
        window.onbeforeunload = function pushRefresh() {
            return window.scrollTo(0, 0);
        };
    }, []);

    return (<motion.div
        className="mx-auto h-full w-full bg-white w-[98%] min-[640px]:w-3/5 min-[1024px]:w-2/5 min-[640px]:mb-[10%] mb-[30%]"
        initial={{opacity: 0, scale: 0.0, y: "5%"}}
        animate={{
            opacity: [0.0, 0.1, 0.2, 0.4, 0.8, 1], scale: [1, 1, 1, 1, 1, 1], // x : ["5%", "0%"], y: ["0%", "5%"]
        }}
        transition={{
            ease: "linear", duration: 2.1,
        }}>

        <div className="px-8 py-8">
            <section className="flex items-center">
                <Image
                    src={profilePic}
                    alt="Picture of DeepFocuser"
                    placeholder="blur"
                    sizes="100vw"
                    className="rounded-full object-cover h-auto w-[50%] min-[640px]:w-[35%]"
                />
                <div className="ml-8">
                    <p
                        className={`${nameFont.className} m-0 p-0 text-2xl min-[640px]:text-3xl font-bold`}>
                        {generalData.name}
                    </p>
                    <p
                        dangerouslySetInnerHTML={{__html: generalData.jobTitle}}
                        className={`${developerFont.className} mt-2 p-0 text-lg min-[640px]:text-xl`}>
                    </p>
                </div>
            </section>
            <section className="my-8 text-sm">
                <h3 className={`${contentFont.className} mb-4 text-slate-900 text-xl`}>About</h3>
                <div className="text-slate-600 mt-5">
                    <p>{generalData.about}</p>
                </div>
            </section>
            {contentData.map(({title, items}: Content, index) => {
                return <section key={index} className="my-8 text-sm">
                    <h3 className={`${contentFont.className} mb-4 text-slate-900 text-xl`}>{title}</h3>
                    <div className="flex flex-col gap-6">
                        {items.map((item, index) => {
                            return (<div className="flex" key={index}>
                                <div
                                    className="mr-8 max-w-[100px] w-full text-slate-500">
                                    {item.date}
                                </div>
                                <div className="flex flex-col flex-1">
                                    <h4>{item.title}</h4>
                                    <p className="text-slate-700 dark:text-gray-400">
                                        {item.subTitle}
                                    </p>
                                    {item.description ? (<p className="text-slate-600 mt-2">
                                        {item.description}
                                    </p>) : null}
                                </div>
                            </div>);
                        })}
                    </div>
                </section>
            })}
            <section className="text-sm mt-8">
                <h3 className={`${contentFont.className} mb-4 text-slate-900 text-xl`}>Contact</h3>
                <div className="flex flex-col gap-4">
                    {generalData.contacts.map((contact, index) => {
                        return (<div className="flex pb-2" key={index}>
                            <div className="mr-8 max-w-[100px] w-full text-slate-400">
                                {contact.label}
                            </div>
                            <div className="flex flex-col flex-1 text-slate-900">
                                <Link
                                    href={contact.href}
                                    target="_blank"
                                    // scroll={true}
                                    rel="noreferrer noopener"
                                    className="flex transition hover:scale-110 hover:bg-base-100"
                                >
                                    {contact.value}
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                                            className="fill-current text-slate-900 dark:text-slate-100"
                                        ></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>);
                    })}
                </div>
            </section>
        </div>
    </motion.div>);
}

export default memo(Home);
