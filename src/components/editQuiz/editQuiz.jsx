import React from "react";
import Catg from "./catg/catg";
import ImageUpload from "./imageUpload/imageUpload";
import Trainging from "./trainging/trainging";

const EditQuiz = () => {
  return (
    <div>
      <section className="mid:flex items-center justify-center gap-3 flex-none">
        <Catg />
        <ImageUpload />
        <Trainging />
      </section>
    </div>
  );
};

export default EditQuiz;
