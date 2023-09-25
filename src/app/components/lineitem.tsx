'use client';

import { Line } from 'rc-progress';
import type { Item } from '@/types';
import { FaPython } from 'react-icons/fa';
import {
    BiLogoJavascript,
    BiLogoReact,
    BiLogoTypescript,
} from 'react-icons/bi';
import { SiCsharp, SiPytorch, SiTensorflow } from 'react-icons/si';
import { BsUnity } from 'react-icons/bs';
import { TbBrandNextjs } from 'react-icons/tb';

function Skills() {
    const lineArray: Item[] = [
        {
            id: 1,
            color: '#67a8e5',
            name: 'Python',
            percentage: 85,
            Icon: FaPython,
        },
        {
            id: 2,
            color: '#eca777',
            name: 'Pytorch',
            percentage: 92,
            Icon: SiPytorch,
        },
        {
            id: 3,
            color: '#fd9e96',
            name: 'Tensorflow',
            percentage: 85,
            Icon: SiTensorflow,
        },
        {
            id: 4,
            color: '#43d0f1',
            name: 'React',
            percentage: 75,
            Icon: BiLogoReact,
        },
        {
            id: 5,
            color: 'rgba(110,110,110,0.34)',
            name: 'NextJS',
            percentage: 75,
            Icon: TbBrandNextjs,
        },
        {
            id: 6,
            color: '#61e595',
            name: 'JavaScript',
            percentage: 75,
            Icon: BiLogoJavascript,
        },
        {
            id: 7,
            color: '#f2c3ff',
            name: 'TypeScript',
            percentage: 75,
            Icon: BiLogoTypescript,
        },
        {
            id: 8,
            color: '#ebe0fa',
            name: 'C#',
            percentage: 70,
            Icon: SiCsharp,
        },
        {
            id: 9,
            color: '#fafa10',
            name: 'Unity',
            percentage: 51,
            Icon: BsUnity,
        },
    ];

    return (
        <>
            {lineArray.map((item) => (
                <div className="mb-4" key={item.id}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center text-base font-bold">
                            <item.Icon className="mr-2" />
                            <p>{item.name}</p>
                        </div>
                        <div className="pr-5 text-base font-bold">
                            {item.percentage}%
                        </div>
                    </div>

                    <Line
                        percent={item.percentage}
                        strokeWidth={1}
                        strokeColor={item.color}
                    />
                </div>
            ))}
        </>
    );
}

export default Skills;
