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
import {TfiCommentsSmiley} from 'react-icons/tfi';
import {MdWorkOutline} from 'react-icons/md';
import {BiBookContent} from 'react-icons/bi';
import {TbPhoneCall} from 'react-icons/tb';
import {FaExternalLinkAlt} from 'react-icons/fa';
import Skills from './components/lineitem';
import Tag from './components/tag';
import {GiGiftOfKnowledge, GiSkills} from 'react-icons/gi';
import AOS from 'aos';

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
            duration: 500, easing: 'ease-in-sine', // default easing for AOS animations
        });
        AOS.refresh();

        window.scrollTo(0, 0);
        window.onbeforeunload = function pushRefresh() {
            return window.scrollTo(0, 0);
        };
    }, []);

    return (<motion.div
        className="mx-auto mb-[7%] mt-[7%] h-full w-[98%] w-full bg-white min-[640px]:w-3/5 min-[1024px]:w-2/5"
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
            <section className="mt-8">
                <p
                    className={`${contentFont.className} mb-4 flex items-center text-2xl text-slate-900`}
                >
                    <TfiCommentsSmiley className="mr-2"/>
                    <span>About</span>
                </p>
                <div
                    className="mt-2 text-slate-600"
                    dangerouslySetInnerHTML={{
                        __html: generalData.about,
                    }}
                ></div>
            </section>
            {contentData.map(({title, items}: Content, index) => {
                return (<section key={index} className="mt-8">
                    <p
                        data-aos="fade"
                        className={`${contentFont.className} mb-4 flex items-center text-2xl text-slate-900`}
                    >
                        {title === 'Work Experience' ? (<MdWorkOutline className="mr-2"/>) : (
                            <BiBookContent className="mr-2"/>)}
                        <span>{title}</span>
                    </p>
                    <div>
                        {items.map((item, index) => {
                            return (<div
                                data-aos="fade"
                                className="mt-4 rounded-xl border-4 p-2"
                                key={index}
                            >
                                <div className="text-sm text-slate-700">
                                    {item.date}
                                </div>
                                <div>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: item.title,
                                        }}
                                    >
                                    </p>
                                    <p className="mt-1 text-slate-600 font-bold text-md">
                                        {item.subTitle}
                                    </p>
                                    {item.description ? (<p className="text-slate-500"
                                                            dangerouslySetInnerHTML={{
                                                                __html: item.description,
                                                            }}
                                    >
                                    </p>) : null}
                                </div>
                            </div>);
                        })}
                    </div>
                </section>);
            })}
            <section className="mt-8 text-sm">
                <p
                    className={`${contentFont.className} mb-4 flex items-center text-2xl text-slate-900`}
                    data-aos="fade"
                >
                    <GiSkills className="mr-2"/>
                    <span>Professional Skills</span>
                </p>
                <div className="rounded-xl border-4 p-2" data-aos="fade">
                    <Skills/>
                </div>
            </section>
            <section className="mt-8 text-sm">
                <p
                    className={`${contentFont.className} mb-4 flex items-center text-2xl text-slate-900`}
                    data-aos="fade"
                >
                    <GiGiftOfKnowledge className="mr-2"/>
                    <span>Knowledges</span>
                </p>
                <div className="flex flex-wrap justify-center rounded-xl border-4 p-2"
                     data-aos="fade">
                    <Tag/>
                </div>
            </section>
            <section className="mt-8 text-sm">
                <p
                    className={`${contentFont.className} mb-4 flex items-center text-2xl text-slate-900`}
                    data-aos="fade"
                >
                    <TbPhoneCall className="mr-2"/>
                    <span>Contact</span>
                </p>
                <div className="flex flex-col gap-2 rounded-xl border-4 p-2" data-aos="fade">
                    {generalData.contacts.map((contact, index) => {
                        return (<div
                            className="flex justify-between pb-1"
                            key={index}
                        >
                            <div className="ml-1 mr-4 w-full max-w-[100px] font-bold text-slate-600">
                                {contact.label}
                            </div>
                            <div className="text-md text-slate-900">
                                <Link
                                    href={contact.href}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="hover:bg-base-100 flex items-center justify-end text-blue-500 transition hover:scale-110"
                                >
                                            <span className="mr-2">
                                                {contact.value}
                                            </span>
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
