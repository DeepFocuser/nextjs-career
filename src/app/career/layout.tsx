import {ReactNode} from 'react';

export default function Layout({children}: { children: ReactNode }) {
    return (<div className="">
            {children}
        </div>);
}