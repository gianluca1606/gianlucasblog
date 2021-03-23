import Layout from "../components/layout/layout";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TruncateMarkup from "react-truncate-markup";
import Head from "next/head";

export default function Home({ posts }) {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [originalResults, setOriginalResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const result = originalResults.filter(
      (post) =>
        post.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
        post.categories.some(
          (categorie) => categorie.toLowerCase().indexOf(searchTerm) > -1
        )
    );

    setMappedPosts(result);
  }, [searchTerm]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "qos1qvbz",
        dataset: "production",
      });

      setMappedPosts(
        posts.map((p) => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(420).height(150),
          };
        })
      );
      setOriginalResults(
        posts.map((p) => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(420).height(150),
          };
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (
    <Layout>
      <div className='flex flex-col items-center w-full h-full overflow-auto text-black md:mt-0 mt-28 '>
        <Head>
          <title>Gianluca's Blog</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <h1 className='mb-4 text-2xl font-extrabold text-white'>Welcome To My Blog</h1>
        <div className='flex justify-between mb-4'>
          <h3 className='p-1 mr-2 font-bold text-white text-1xl'>Search:</h3>
          <input
            type='search'
            className='text-indigo-900 rounded outline-none focus:bg-indigo-100'
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        {mappedPosts.length ? (
          mappedPosts.map((p, index) => (
            <div
              key={index}
              className='flex flex-col my-8 space-y-4 bg-indigo-50 rounded-xl xl:w-1/3'
            >
              <img
                className='cursor-pointer rounded-t-xl hover:shadow-2xl'
                src={p.mainImage}
                onClick={() => router.push(`/post/${p.slug}`)}
              />
              <div className='flex flex-col items-center w-full '>
                <h3
                  className='text-3xl font-bold text-black cursor-pointer hover:underline'
                  onClick={() => router.push(`/post/${p.slug}`)}
                >
                  {p?.title}
                </h3>
                <TruncateMarkup lines={3}>
                  <p className='w-5/6 mt-4 text-black '>
                    {p?.body[0]?.children[0]?.text}
                  </p>
                </TruncateMarkup>
              </div>

              <div className='flex justify-around'>
                <div className='flex items-center justify-center space-x-1 text-indigo-500'>
                  <img
                    className='w-10 h-10 mb-4 rounded-full cursor-pointer'
                    onClick={() => router.push(`/timeline`)}
                    src={p?.author?.picture}
                  />
                  <span className='mb-4 font-extrabold'>
                    {p?.author?.name} on{" "}
                    <time dateTime='2014-06-12' className='mb-4 font-extrabold'>
                      {new Date(p._updatedAt).toDateString()}
                    </time>
                  </span>
                </div>
                <div className='flex items-center justify-end p-4 mb-4 mr-4 space-x-2 text-indigo-100'>
                  {p.categories?.map((category, index) => (
                    <h1 key={index} className='p-2 bg-pink-400 rounded'>
                      {" "}
                      {p.categories[index]}
                    </h1>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <>No Posts found</>
        )}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (pageContext) => {
  const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  excerpt,
  mainImage,
  slug,
  _updatedAt,
  'slug': slug.current,
  'coverImage': mainImage,
  "categories": categories[]->title,
  'author': author->{name, 'picture': image.asset->url},
`;

  const query = encodeURIComponent(
    `*[ _type == "post"  ] | order(publishedAt desc, _updatedAt desc) {
      ${postFields}
      body
    }`
  );
  const url = `https://qos1qvbz.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
};
