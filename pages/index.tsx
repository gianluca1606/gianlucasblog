import Head from "next/head";
import Layout from "../components/layout/layout";
import Typical from "react-typical";

type CardProps = {
  text: string;
};

export const StackSection = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white lg:w-4/6 md:rounded-2xl h-5/6 lg:h-auto">
      <h1 className="mt-8 text-3xl font-extrabold">About me:</h1>
      <p className="m-2 mx-4 font-semibold text-center md:text-xl">
        I am a software Developer based in Remscheid, Germany. Currently I am
        going to school and working for the Bohle AG, where I am encarged of
        programming the ERP System.
      </p>
      <p className="m-2 font-semibold text-center md:text-xl">
        In my freetime I like to learn and experiment new things, like i did
        with this webpage. Usually I use ReactJS/NextJS with NodeJS but I also
        have made experiences with CMS Systems such as Sanity.
      </p>
      <p className="m-4 font-semibold text-center md:text-xl">
        In the future I hope to get better at Typescript and learn Graphql since
        i think that's a very robust tool for a project idea that I have.
      </p>
      <h1 className="mt-4 space-x-2 font-bold text-center md:text-xl ">
        This is the Stack that i am currently using:
      </h1>

      <div className="flex mt-8 space-x-4">
        <img
          src="data:image/png;base64,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"
          className="h-16 animate-bounce"
        />
        <img
          src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/node-512.png"
          className="h-16 animate-bounce"
        />
        <img
          src="https://image.flaticon.com/icons/png/512/919/919832.png"
          className="h-16 animate-bounce"
        />
      </div>
      <div className="flex mb-4 space-x-4">
        <img
          src="https://axaguildev.github.io/react-toolkit/v1.0.0/storybook/images/react.svg"
          className="h-16 animate-bounce"
        />
        <img
          src="https://cdn.worldvectorlogo.com/logos/next-js.svg  "
          className="h-16 animate-bounce"
        />
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/569/569809.svg?token=exp=1612131886~hmac=7032976fb045de55ccd088d3dcbed67f"
          className="h-16 animate-bounce"
        />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-wrap items-center justify-center w-full h-full mt-24">
        <Head>
          <title>Gianluca Santos Latina</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className="flex items-center justify-center mt-4 md:flex-col h-1/2 md:mt-0 md:w-1/2 md:h-full">
          <div>
            <img
              src="https://previews.123rf.com/images/warrengoldswain/warrengoldswain1610/warrengoldswain161000074/65425216-gl%C3%BCckliche-l%C3%A4chelnde-afrikanische-schwarze-mann-portr%C3%A4t-reale-person-im-studio-vollst%C3%A4ndige-sammlung-von-versch.jpg"
              className="w-32 h-32 mx-auto mt-20 border-4 border-black rounded-full shadow-2xl md:w-56 md:h-56 md:mt-24"
            />
          </div>
          <h1 className="mx-4 mt-4 text-xl font-bold text-center text-opacity-90">
            <Typical
              steps={[
                "Hello I am Gianluca.",
                2000,
                "Welcome to my Personal Page.",
                2000,
                "Check my Blog out.",
                2000,
              ]}
              loop={Infinity}
              className="inline-block"
              wrapper="p"
            />
          </h1>
        </div>
        <div className="flex justify-center mt-10 md:mt-0 md:items-center md:w-1/2 md:h-full ">
          <StackSection />
        </div>
      </div>
    </Layout>
  );
}
