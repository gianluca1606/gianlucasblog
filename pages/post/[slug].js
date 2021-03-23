import Layout from "../../components/layout/layout";
import CommentForm from "../../components/commentform";
import Moreposts from "../../components/moreposts";
import { Comments } from "../../components/comments";
import { getAllPostsWithSlug } from "../../lib/api";
import Postbody from "../../components/postbody";
import Postheader from "../../components/postheader";
import Head from "next/head";

export const Post = ({ title, body, image, comments, _id, author, moreposts, date }) => {
  return (
    <Layout>
      <Head>
        <title>{title} - Blog</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='relative flex flex-col items-center justify-center'>
        <div className='flex flex-col mt-32 overflow-auto bg-white md:mt-10 md:w-4/6 h-4/6 rounded-xl'>
          <Postheader author={author} title={title} image={image} date={date} />
          <Postbody body={body} />
        </div>
        <Moreposts moreposts={moreposts} />
      </div>
      <div className='flex flex-col items-center mb-6'>
        <Comments comments={comments} />
        <CommentForm _id={_id} />
      </div>
    </Layout>
  );
};

const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  excerpt,
  mainImage,
  'slug': slug.current,
  'coverImage': mainImage.asset->url,
  'author': author->{name, 'picture': image.asset->url},
`;

export const getStaticProps = async (pageContext) => {
  const pageSlug = pageContext.params.slug;
  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}"] { 
      ${postFields}
        body,
      'comments': *[_type == "comment" && post._ref == ^._id && approved == true]{
      _id, 
      name, 
      email, 
      comment, 
      _createdAt,
      'author': author->{name, 'picture': image.asset->url},
  }}`
  );

  const query2 = encodeURIComponent(
    `*[_type == "post" && slug.current != ${pageSlug}] | order(publishedAt desc, _updatedAt desc){
      ${postFields}
      body,
    }[0...3]`
  );

  const url = `https://qos1qvbz.api.sanity.io/v1/data/query/production?query=${query}`;
  const url2 = `https://qos1qvbz.api.sanity.io/v1/data/query/production?query=${query2}`;

  const result = await fetch(url).then((res) => res.json());
  const moreposts = await fetch(url2).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        title: post.title,
        body: post.body,
        image: post.mainImage,
        comments: post.comments,
        _id: post._id,
        author: post.author,
        moreposts: getUniquePosts(moreposts.result, pageSlug),
        date: post.date,
      },
      revalidate: 10,
    };
  }
};

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}

const getUniquePosts = (posts, slug) => {
  const uniqueposts = posts.filter((post) => post.slug != slug);

  const sortedPosts = uniqueposts.slice().sort((a, b) => b.date - a.date);

  return sortedPosts.slice(0, 2);
};

export default Post;
