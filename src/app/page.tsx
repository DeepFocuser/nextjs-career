'use client';

import * as React from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';

function Home() {
    return (
        <motion.div
            className="mx-auto h-screen w-3/5 bg-white"
            initial={{ opacity: 0, scale: 0.0, y: '20%' }}
            animate={{
                opacity: [0.0, 0.2, 0.4, 0.8, 1],
                scale: [0.0, 0.1, 0.2, 0.5, 1],
                rotate: [0, 180, 360, 720, 1080],
                borderRadius: ['0%', '100%', '50%', '25%', '10%', '0%'],
            }}
            transition={{
                ease: 'linear',
                duration: 1,
            }}
        ></motion.div>
    );
}

export default memo(Home);
