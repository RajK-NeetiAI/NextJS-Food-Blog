import prisma from "@/lib/db";

export const fetchAllMealItems = async () => {
    const mealItems = await prisma.post.findMany();
    return mealItems;
};

export const fetchMealItemById = async (id: string) => {
    const mealItem = await prisma.post.findUnique({
        where: {
            id: id
        }
    });
    return mealItem;
};
