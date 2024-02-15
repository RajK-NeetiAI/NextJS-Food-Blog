"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import fs from "fs";

export const submitReceipeForm = async (formData: FormData) => {
    const parsedFormData = {
        author: formData.get('author'),
        email: formData.get('email'),
        image: <File>formData.get('image'),
        instructions: formData.get('instructions'),
        receipeName: formData.get('receipeName'),
        summary: formData.get('summary')
    };
    const arrayBuffer = await parsedFormData.image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync('sample.jpg', buffer);
    revalidatePath('/meal');
    redirect('/meal');
};
