import Image from "next/image";

import community from "@/assets/icons/community.png"

export default function CommunityPage() {
    return (
        <>
            <div className="font-bold flex items-center justify-center mt-12 ">
                <p>One shared passion: Food</p>
                <Image src={community} alt="Comminuty" width={256} height={256}></Image>
            </div>
        </>
    );
};
