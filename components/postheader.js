import React, { useState, Fragment, useEffect } from "react";
import Date from "./date";
import imageUrlBuilder from "@sanity/image-url";

export default function Postbody({ image, date, title, author }) {
  const [imageURL, setImageUrl] = useState("");

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "qos1qvbz",
      dataset: "production",
    });

    setImageUrl(imgBuilder.image(image).width(420).height(150));
  }, [image]);

  return (
    <Fragment>
      {imageURL && <img src={imageURL} />}
      <div className='flex flex-wrap items-center justify-between m-3 text-xl font-bold'>
        <div className='flex items-center'>
          {author && (
            <Fragment>
              <img src={author.picture} className='rounded-full w-7 h-7' />
              <span className='ml-2'>{author.name}</span>{" "}
            </Fragment>
          )}
        </div>
        <p>
          Published on <Date dateString={date} />{" "}
        </p>
      </div>
      <h1 className='inline-flex justify-center mt-5 text-6xl font-extrabold underline'>
        {" "}
        {title}
      </h1>
    </Fragment>
  );
}
