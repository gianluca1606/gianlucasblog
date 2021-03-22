import { Fragment } from "react";
import Date from "./date";
import TruncateMarkup from "react-truncate-markup";
import Link from "next/link";

export default function Moreposts({ moreposts = [] }) {
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center w-11/12 m-4 bg-white md:w-8/12 md:flex-row rounded-xl">
        <h1 className="w-1/4 text-2xl font-extrabold">More posts</h1>
        {moreposts?.map((post) => (
          <div className="relative flex flex-col items-center h-56 m-4 shadow-xl w-72 md:my-12 hover:shadow-2xl ">
            <h2 className="mt-2 mb-2 text-3xl font-extrabold">{post.title}</h2>
            <p className="inline-flex items-center justify-start w-full mb-2 ml-5 text-xl">
              <Date dateString={post.date} />
            </p>
            <TruncateMarkup lines={3}>
              <p className="mx-2">{post.body[0].children[0].text}</p>
            </TruncateMarkup>
            <Link href={`/post/${post.slug}`}>
              <a className="absolute bottom-0 px-4 py-3 m-4 text-white bg-indigo-500 rounded-xl hover:bg-indigo-800 focus:outline-none">
                Read more
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
