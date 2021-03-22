import { Fragment } from "react";
import BlockContent from "@sanity/block-content-to-react";
import client from "../client";
import markdownStyles from "./markdown-styles.module.css";
import Serializers from "./serializers";

export default function Postbody({ body }) {
  return (
    <Fragment>
      <BlockContent
        blocks={body}
        imageOptions={{ w: 240, h: 240, fit: "min" }}
        {...client.config()}
        serializers={Serializers}
        className={markdownStyles.markdown}
      />
    </Fragment>
  );
}
