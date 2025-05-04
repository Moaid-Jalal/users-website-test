'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SUPPORTED_LANGUAGES } from '@/lib/i18n';
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
    const pathname = usePathname();
    const restOfPath = pathname.split('/').slice(2).join('/');
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        if (!open) return;
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [open]);

    const currentLangFlag = (
        <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 focus:outline-none px-3 py-2 rounded-lg border bg-muted shadow hover:bg-muted/80 transition"
            aria-label="Change language"
            type="button"
        >
            <Image
                src={`https://api.iconify.design/circle-flags:lang-${currentLang}.svg`}
                alt={"flag"}
                width={28}
                height={28}
                className=""
            />
            <ChevronDown className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
    );

    return (
        <div className="relative" ref={ref}>
            {currentLangFlag}
            {open && (
                <div
                    className="absolute z-50 mt-2 bg-muted rounded-xl shadow-2xl flex flex-col min-w-[140px] border py-2 animate-fade-in"
                    style={{ right: 0, left: "unset" }}
                >
                    {SUPPORTED_LANGUAGES.filter(lang => lang !== currentLang).map(lang => (
                        <Link
                            key={lang}
                            href={`/${lang}/${restOfPath}`}
                            className="flex items-center gap-3 px-4 py-3 text-lg hover:bg-muted/70 transition rounded-lg"
                            onClick={() => setOpen(false)}
                        >
                            <Image
                                src={`https://api.iconify.design/circle-flags:lang-${lang}.svg`}
                                alt={"flag"}
                                width={28}
                                height={28}
                                className=""
                            />
                            <span className="capitalize">{lang}</span>
                        </Link>
                    ))}
                </div>
            )}
            <style jsx global>{`
                .animate-fade-in {
                    animation: fadeInLangDropdown 0.18s ease;
                }
                @keyframes fadeInLangDropdown {
                    from { opacity: 0; transform: translateY(-10px);}
                    to { opacity: 1; transform: translateY(0);}
                }
            `}</style>
        </div>
    );
}
