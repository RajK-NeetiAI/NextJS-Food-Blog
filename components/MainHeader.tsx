"use client";

import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import logoImage from "@/assets/icons/logo.png";

const linksData = [
    {
        link: '/meal',
        linkName: 'Browse Meals'
    },
    {
        link: '/community',
        linkName: 'Foddie Community'
    },
    {
        link: '/share',
        linkName: 'Share Your Food'
    }
];

export default function MainHeader() {
    const pathName = usePathname();

    return (
        <div className="flex justify-around bg-slate-300 p-2">
            <Link href={"/"}>
                <div className="flex flex-col justify-center items-center font-extrabold bg-slate-600 text-white p-1 rounded-lg">
                    <div className="">
                        Nextlevel Food
                    </div>
                    <div className="">
                        <Image src={logoImage.src} alt={"Nextlevel Food"} width={64} height={64}></Image>
                    </div>
                </div>
            </Link>
            <div className="flex flex-col justify-center font-extrabold text-center">
                {Array.from(linksData).map((link, index) => (
                    <Link key={index} href={link.link}>
                        <div className={
                            pathName.startsWith(link.link)
                                ? cn("m-1 bg-slate-600 text-white p-1 rounded-lg shadow-lg")
                                : cn("m-1 p-1")
                        }>
                            {link.linkName}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
