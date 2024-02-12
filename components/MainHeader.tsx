"use client";

import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";

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
        <div className="m-2 flex justify-around font-bold">
            <div className="p-2">
                <div className="text-center">
                    <Link href={"/"}>
                        Nextlevel Food
                    </Link>
                </div>
                <div className="pl-6">
                    <Link href={"/"}>
                        <Image
                            src={logoImage}
                            alt="A plat with food on it."
                            width={64}
                            height={64}
                        ></Image>
                    </Link>
                </div>
            </div>
            <div>
                <div>
                    <ul>
                        {Array.from(linksData).map((link, index) => (
                            <li key={index}>
                                <Link href={link.link}>
                                    <div className={
                                        pathName.startsWith(link.link)
                                            ? "rounded-md w-fit p-2 bg-gray-500 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 text-white"
                                            : "rounded-md w-fit p-2 hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 text-black hover:text-white"
                                    }>{link.linkName}</div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
