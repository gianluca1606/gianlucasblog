import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";

const Serializers = {
  types: {
    code: ({ node }) => (
      <div className="relative">
        <CopyToClipboard
          className="absolute bg-white rounded cursor-pointer w-7 h-7 top-1 right-2 md:right-2 md:top-1 hover:bg-indigo-50"
          text={node.code}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className=""
            viewBox="0 0 16 16"
          >
            <path
              fill="#000000"
              d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
            />
            <path
              fill="#000000"
              d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
            />
          </svg>
        </CopyToClipboard>
        <SyntaxHighlighter
          language={node.language || "text"}
          style={atomOneDark}
          className="overflow-x-scroll w-96 sm:w-auto md:w-auto rounded-xl"
          wrapLines={false}
          showLineNumbers={true}
        >
          {node.code}
        </SyntaxHighlighter>
      </div>
    ),
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube videoId={id} className="w-full mx-auto md:w-8/12" />;
    },
  },
};

export default Serializers;
