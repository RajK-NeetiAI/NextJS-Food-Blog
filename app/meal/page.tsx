import { Card, CardContent, CardTitle, CardFooter, CardHeader, CardDescription } from "@/components/ui/card";

import { fetchAllMealItems } from "@/lib/fetchData";
import Image from "next/image";
import Link from "next/link";

export default async function MealPage() {
    const mealIteams = await fetchAllMealItems();
    const shuffledMealIteams = mealIteams.sort(() => Math.random() - 0.5);
    return (
        <div className="flex gap-4 text-center m-4">
            {
                Array.from(shuffledMealIteams).map((meal, index) => (
                    <div key={index}>
                        <Card className="">
                            <CardHeader>
                                <CardTitle className="font-bold">{meal.title}</CardTitle>
                                <CardDescription className="font-semibold justify-normal">{meal.summary}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image src={meal.image} alt={meal.title} width={256} height={256}></Image>
                            </CardContent>
                            <CardFooter className="justify-end">
                                <Link className="text-blue-500" href={`/meal/${meal.id}`}>
                                    <div className="bg-slate-800 p-2 rounded-md text-white hover:bg-slate-400">
                                        Read more...
                                    </div>
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                ))
            }
        </div>
    );
};