import ImageSlideShow from "@/components/ImageSlideShow";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="m-12 font-bold">
          <p>Nextlevel Food for the Nextlevel Foodies.</p>
          <p>Share your Food and Taste from all over the world.</p>
        </div>
        <div className="m-12">
          <ImageSlideShow></ImageSlideShow>
        </div>
      </div>
    </>
  );
};
