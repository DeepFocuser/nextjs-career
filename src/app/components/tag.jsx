'use client';

import { Chip } from '@nextui-org/react';

function Tag() {
    const tagList = [
        'Python',
        'Java',
        'C++',
        'C#',
        'Unity',
        'Pytorch',
        'Tensorflow',
        'Mxnet',
        'TorchServing',
        'HTML5',
        'CSS3',
        'JavaScript',
        'NodeJS',
        'TypeScript',
        'React',
        'NextJS',
        'Git',
        'Docker',
        'kubernetes',
        'Linux',
        'Web',
        'ONNX Runtime Web',
        'Tensorflow JS',
        'Grpc',
        'AI',
        'Computer Vision',
        'NLP',
        'Audio Processing',
    ];
    return (
        <>
            {tagList.map((tag, i) => (
                <Chip
                    key={i}
                    variant="shadow"
                    classNames={{
                        base: 'm-1 p-2 bg-gradient-to-br from-gray-600 to-slate-400 border-white/50 shadow-slate-300',
                        content:
                            'drop-shadow shadow-black text-white font-bold',
                    }}
                >
                    {tag}
                </Chip>
            ))}
        </>
    );
}

export default Tag;
