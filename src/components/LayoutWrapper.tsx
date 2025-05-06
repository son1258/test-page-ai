"use client";

import { useEffect, useRef, useState } from 'react';
import NavBar from '@/components/header/NavBar';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const navRef = useRef<HTMLDivElement>(null);
    const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {
        if (!navRef.current) return;

        const observer = new ResizeObserver(([entry]) => {
            setNavHeight(entry.contentRect.height);
        });

        observer.observe(navRef.current);

        return () => observer.disconnect();
    }, []);


    return (
        <div className='h-full scroll-smooth'>
            <div ref={navRef} className="fixed top-0 w-full z-10">
                <NavBar />
            </div>
            <main style={{
                paddingTop: `${navHeight}px`,
                overflowY: 'auto', // Cho phép cuộn dọc
                WebkitOverflowScrolling: 'touch', // Cải thiện cuộn trên iOS
                touchAction: 'pan-y', // Chỉ cho phép cuộn dọc
                height: `auto` // Đảm bảo main chiếm toàn bộ chiều cao còn lại
            }}
                className="scroll-smooth"
            >
                {children}
            </main>
        </div>
    );
}
