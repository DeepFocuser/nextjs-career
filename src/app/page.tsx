'use client';

import {Martian_Mono, Sunflower} from 'next/font/google';
import * as React from 'react';
import {memo, useEffect} from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {generalData} from '@/data/general';
import type {Content} from '@/types';
import {contentData} from '@/data/content';
import Link from 'next/link';
import profilePic from '../../public/images/we.jpg';
import {TfiCommentsSmiley} from "react-icons/tfi"
import {MdWorkOutline} from "react-icons/md";
import {BiBookContent} from "react-icons/bi";
import {TbPhoneCall} from "react-icons/tb";
import {FaExternalLinkAlt} from "react-icons/fa";
import Skills from "./components/lineitem";
import Tag from "./components/tag";
import {GiGiftOfKnowledge, GiSkills} from "react-icons/gi";
import AOS from "aos";

const nameFont = Sunflower({
    weight: ['700'], subsets: ['latin'], display: 'swap',
});

const contentFont = Sunflower({
    weight: ['500'], subsets: ['latin'], display: 'swap',
});

const developerFont = Martian_Mono({
    weight: ['800'], subsets: ['latin'], display: 'swap',
});

function Home() {
    useEffect(() => {
        AOS.init({
            duration: 700, easing: 'ease-in-sine', // default easing for AOS animations
        });
        AOS.refresh();

        window.scrollTo(0, 0);
        window.onbeforeunload = function pushRefresh() {
            return window.scrollTo(0, 0);
        };
    }, []);

    return (<motion.div
        className="mx-auto mt-[7%] mb-[7%] h-full w-[98%] w-full bg-white min-[640px]:w-3/5 min-[1024px]:w-2/5"
        initial={{opacity: 0, scale: 0.0, y: '0%'}}
        animate={{
            opacity: [0.0, 0.1, 0.2, 0.4, 0.8, 1], scale: [1, 1, 1, 1, 1, 1], // x : ["5%", "0%"], y: ["0%", "5%"]
        }}
        transition={{
            ease: 'linear', duration: 2.1,
        }}
    >
        <div className="px-8 py-8">
            <section className="flex items-center">
                <Image
                    src={profilePic}
                    alt="Picture of DeepFocuser"
                    placeholder="blur"
                    sizes="100vw"
                    className="h-auto w-[50%] rounded-full object-cover min-[640px]:w-[35%]"
                />
                <div className="ml-2 min-[320px]:ml-4 min-[400px]:ml-12">
                    <p
                        className={`${nameFont.className} text-3xl font-bold min-[320px]:text-4xl`}
                    >
                        {generalData.name}
                    </p>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: generalData.jobTitle,
                        }}
                        className={`${developerFont.className} mt-2 text-lg min-[320px]:text-xl`}
                    ></p>
                </div>
            </section>
            <section className="my-8">
                <h2
                    className={`${contentFont.className} flex items-center mb-4 text-2xl text-slate-900`}
                >
                    <TfiCommentsSmiley className="mr-2"/><span>About</span>
                </h2>
                <div className="mt-2 text-slate-600"
                     dangerouslySetInnerHTML={{
                         __html: generalData.about,
                     }}
                >
                </div>
            </section>
            {contentData.map(({title, items}: Content, index) => {
                return (<section key={index} className="my-8" data-aos="fade">
                    <h2
                        className={`${contentFont.className} flex items-center mb-4 text-2xl text-slate-900`}
                    >
                        {title === "Work Experience" ? <MdWorkOutline className="mr-2"/> :
                            <BiBookContent className="mr-2"/>}
                        <span>{title}</span>
                    </h2>
                    <div className="flex flex-col gap-6 border-4 p-2 rounded-xl">
                        {items.map((item, index) => {
                            return (<div className="flex" key={index}>
                                <div className="mr-8 w-full max-w-[100px] text-slate-500">
                                    {item.date}
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <h4>{item.title}</h4>
                                    <p className="text-slate-700 dark:text-gray-400">
                                        {item.subTitle}
                                    </p>
                                    {item.description ? (<p className="mt-2 text-slate-600">
                                        {item.description}
                                    </p>) : null}
                                </div>
                            </div>);
                        })}
                    </div>
                </section>);
            })}
            <section className="mt-8 text-sm" data-aos="fade">
                <h2
                    className={`${contentFont.className} flex items-center mb-4 text-2xl text-slate-900`}
                >
                    <GiSkills className="mr-2"/><span>Professional Skills</span>
                </h2>
                <div className="border-4 p-2 rounded-xl">
                    <Skills/>
                </div>
            </section>
            <section className="mt-8 text-sm" data-aos="fade">
                <h2
                    className={`${contentFont.className} flex items-center mb-4 text-2xl text-slate-900`}
                >
                    <GiGiftOfKnowledge className="mr-2"/><span>Knowledges</span>
                </h2>
                <div className="border-4 p-2 rounded-xl flex flex-wrap justify-center">
                    <Tag/>
                </div>
            </section>
            <section className="mt-8 text-sm" data-aos="fade">
                <h2
                    className={`${contentFont.className} flex items-center mb-4 text-2xl text-slate-900`}
                >
                    <TbPhoneCall className="mr-2"/><span>Contact</span>
                </h2>
                <div className="flex flex-col gap-2 border-4 p-2 rounded-xl">
                    {generalData.contacts.map((contact, index) => {
                        return (<div className="flex justify-between pb-1" key={index}>
                            <div className="ml-1 mr-4 w-full max-w-[100px] text-slate-600 font-bold">
                                {contact.label}
                            </div>
                            <div className="text-slate-900 text-md">
                                <Link
                                    href={contact.href}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="hover:bg-base-100 flex items-center justify-end transition hover:scale-110 text-blue-500"
                                >
                                    <span className="mr-2">{contact.value}</span>
                                    <FaExternalLinkAlt/>
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
