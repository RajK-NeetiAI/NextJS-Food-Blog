"use client";

import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";

import logoImage from "@/assets/icons/logo.png";

const linksData = [
    {
        link: '/meal',
        linkName: 'Brows Meals'
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
        <>
            <div className="grid grid-rows-1 grid-flow-col gap-4 items-center justify-around m-4 font-bold">
                <div>
                    <Link href={"/"}>
                        Nextlevel Food
                    </Link>
                    <Link href={"/"}>
                        <Image
                            src={logoImage}
                            alt="A plat with food on it."
                            width={64}
                            height={64}
                        ></Image>
                    </Link>
                </div>
                <div>
                    <nav>
                        <ul>
                            {Array.from(linksData).map((link, index) => (
                                <li key={index}>
                                    <Link href={link.link} className={
                                        pathName.startsWith(link.link)
                                            ? "bg-gray-500 hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 text-white"
                                            : "hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 text-black"
                                    }>{link.linkName}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};
