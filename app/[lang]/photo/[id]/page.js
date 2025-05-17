import PhotoDetails from "@/components/PhotoDetails";

const PhotoDetailsPage = ({ params: { id, lang } }) => {
  return (
    <div>
      <PhotoDetails id={id} lang={lang} />
    </div>
  );
};

export default PhotoDetailsPage;
