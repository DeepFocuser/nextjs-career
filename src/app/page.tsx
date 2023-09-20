"use client";

import {motion, AnimatePresence} from "framer-motion"
import {memo, useState} from "react";
import styles from './page.module.css'
import Link from 'next/link';
import {useRouter} from "next/navigation";

function Home() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${styles.init}`}>
            <AnimatePresence>
            <motion.div
                layout
                data-isOpen={isOpen}
                initial={{ borderRadius: 50 }}
                className={`${styles.parent}`}
                onClick={() => setIsOpen(!isOpen)}
            >
            </motion.div>
            </AnimatePresence>
        </div>);
}

const spring = {
    type: "spring", duration: 1
};

export default memo(Home);
