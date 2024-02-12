import Image from "next/image";

import community from "@/assets/icons/community.png"

export default function CommunityPage() {
    return (
        <div className="flex font-bold items-center justify-center">
            <div>One shared passion: Food</div>
            <div>
                <Image src={community} alt="Comminuty" width={256} height={256}></Image>
            </div>
        </div>
    );
};
