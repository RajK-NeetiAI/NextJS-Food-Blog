import { Card, CardContent, CardTitle, CardFooter, CardHeader, CardDescription } from "@/components/ui/card";

import { fetchAllMealItems } from "@/lib/fetchData";
import Image from "next/image";
import Link from "next/link";

export default async function MealPage() {
    const mealIteams = await fetchAllMealItems();
    const shuffledMealIteams = mealIteams.sort(() => Math.random() - 0.5);
    return (
        <div className="grid grid-col-3 gap-4 items-center justify-center m-4">
            {
                Array.from(shuffledMealIteams).map((meal, index) => (
                    <div key={index}>
                        <Card className="w-[350px]">
                            <CardHeader>
                                <CardTitle className="font-bold">{meal.title}</CardTitle>
                                <CardDescription className="font-semibold">{meal.summary}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image src={meal.image} alt={meal.title} width={256} height={256}></Image>
                            </CardContent>
                            <CardFooter className="justify-end">
                                <Link className="text-blue-500" href={`/meal/${meal.id}`}>Read more...</Link>
                            </CardFooter>
                        </Card>
                    </div>
                ))
            }
        </div>
    );
};