"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import fs from "fs";
import os from "os";
import path from "path";
import { v4 as uuidv4 } from 'uuid';
import { Storage } from '@google-cloud/storage';

import prisma from "@/lib/db";

const keyFilename = 'emerald-griffin-407812-d6735d932119.json';
const bucketName = 'rajk-neeti-test';

const storage = new Storage({ keyFilename });

export const uploadImage = async (filePath: string, destFileName: string) => {
    await storage.bucket(bucketName).upload(filePath, {
        destination: destFileName,
        predefinedAcl: 'publicRead'
    });
    const publicUrl = `https://storage.googleapis.com/${bucketName}/${destFileName}`;
    return publicUrl;
};

export const submitReceipeForm = async (formData: FormData) => {
    const parsedFormData = {
        author: <string>formData.get('author'),
        email: <string>formData.get('email'),
        image: <File>formData.get('image'),
        instructions: <string>formData.get('instructions'),
        receipeName: <string>formData.get('receipeName'),
        summary: <string>formData.get('summary')
    };
    const arrayBuffer = await parsedFormData.image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const filePath = path.join(
        os.tmpdir(),
        `${uuidv4()}.jpg`
    );
    const destFileName = `${uuidv4()}.jpg`;
    fs.writeFileSync(filePath, buffer);
    const publicUrl = await uploadImage(filePath, destFileName);
    await prisma.post.create({
        data: {
            creator: parsedFormData.author,
            creatorEmail: parsedFormData.email,
            image: publicUrl,
            instructions: parsedFormData.instructions,
            summary: parsedFormData.summary,
            title: parsedFormData.receipeName
        }
    });
    revalidatePath('/meal');
    redirect('/meal');
};
