import ImageSlideShow from "@/components/ImageSlideShow";

// import initData from "@/lib/seed";

export default async function Home() {
  // Run this line once to create dummy data in the DB.
  // await initData();

  return (
    <div className="flex justify-evenly items-center text-justify font-extrabold">
      <div>
        <p>Nextlevel Food for the Nextlevel Foodies.</p>
        <p>Share your Food and Taste from all over the world.</p>
      </div>
      <div className="mt-8">
        <ImageSlideShow></ImageSlideShow>
      </div>
    </div>
  );
};
