"use client"

import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";

import { submitReceipeForm } from "@/lib/actions";

export type CustomFormData = {
    receipeName: string
    summary: string,
    author: string,
    email: string,
    instructions: string,
    image: FileList
}

export default function SharePage() {
    const { register, handleSubmit } = useForm<CustomFormData>();
    const [image, setImage] = useState<string | undefined>(undefined)
    const [isImage, setIsImage] = useState<boolean>(false);
    const onImageChange = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            setIsImage(true);
        }
    }
    return (
        <div className="bg-red-500 mx-auto my-auto p-2 m-4 gap-4 flex items-center justify-center font-extrabold">
            <form onSubmit={handleSubmit((data) => {
                const formData = new FormData();
                formData.append('receipeName', data.receipeName);
                formData.append('summary', data.summary);
                formData.append('author', data.author);
                formData.append('email', data.email);
                formData.append('instructions', data.instructions);
                formData.append('image', data.image[0]);
                submitReceipeForm(formData);
            })}>
                <div className="m-2 gap-2 items-center justify-center flex">
                    <label className="">Chef Name</label>
                    <input
                        className=""
                        type="text"
                        placeholder="Name of the chef"
                        {...register("author")} >
                    </input>
                </div>
                <div className="m-2 items-center justify-center flex">
                    <label className="">Chef Email</label>
                    <input
                        className=""
                        type="text"
                        placeholder="example@chef.com"
                        {...register("email")} >
                    </input>
                </div>
                <div className="m-2 items-center justify-center flex">
                    <label className="">Receipe Name</label>
                    <input
                        className=""
                        type="text"
                        placeholder="Name of the receipe"
                        {...register("receipeName")} >
                    </input>
                </div>
                <div className="m-2 flex items-center justify-center p-2">
                    <label className="">Receipe Summary</label>
                    <textarea
                        className=""
                        aria-multiline
                        rows={2}
                        placeholder="Brief summary of the receipe"
                        {...register("summary")} >
                    </textarea>
                </div>
                <div className="m-2 flex items-center justify-center p-2">
                    <label className="">Receipe Instructions</label>
                    <textarea
                        className=""
                        aria-multiline
                        rows={10}
                        placeholder="Brief summary of the receipe"
                        {...register("instructions")} >
                    </textarea>
                </div>
                <div className="items-center justify-center flex m-2">
                    {
                        isImage
                            ? <div className="w-64 h-64 flex items-center justify-center">
                                <Image src={image!} alt="Preview Image" width={256} height={256}></Image>
                            </div>
                            : <div className="bg-white w-64 h-64 flex items-center justify-center">Image previde</div>
                    }

                    <div className="p-2">
                        <input accept="image/*" type="file" {...register('image')} onChange={onImageChange}></input>
                    </div>
                </div>
                <div className="m-2">
                    <button className="bg-slate-300 rounded-lg p-2 hover:bg-slate-600 hover:text-white font-extrabold">Submit</button>
                </div>
            </form>
        </div>
    )
};
