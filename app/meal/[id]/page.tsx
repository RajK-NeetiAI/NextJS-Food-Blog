import { fetchMealItemById } from "@/lib/fetchData";
import Image from "next/image";
import Link from "next/link";

export default async function MealDetailPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const mealItem = await fetchMealItemById(id);
    if (!mealItem) {
        return (
            <div className="grid items-center justify-items-center m-8">
                <div>Sorry, the item you are looking for is not available at this moment.
                    Please browse other meal items.</div>
            </div>
        );
    }
    const instructions = mealItem.instructions.split('\n');
    let formatedInstructions: Array<string> = [];
    Array.from(instructions).map((val, index) => {
        formatedInstructions.push(val);
    });
    return (
        <div className="grid items-center justify-items-center mt-8">
            <div className="font-bold mt-8">{mealItem?.title}</div>
            <div className="font-semibold mt-8">By - {mealItem.creator}</div>
            <div className="font-semibold">Connect {mealItem.creator} at <span className="italic">{mealItem.creatorEmail}</span></div>
            <div className="mt-8">{mealItem!.summary}</div>
            <div className="mt-8">
                <Image src={mealItem!.image} alt={mealItem!.title} width={512} height={256}></Image>
            </div>
            <div className="font-medium mt-8">
                <ul className="list-outside">
                    {Array.from(formatedInstructions).map((val, index) => (
                        <li key={index}>{val}</li>
                    ))}
                </ul>
            </div>
            <div>
                <Link className="m-8 text-blue-900" href={"/meal"}>Back to all meals</Link>
            </div>
        </div>
    );
};
