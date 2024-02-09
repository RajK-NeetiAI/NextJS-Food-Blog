import prisma from "@/lib/db";

export const getAllMealItems = async () => {
    const menuItems = await prisma.post.findMany();
    return menuItems;
};
