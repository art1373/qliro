import React from "react";

type Props = {
  tag: string;
};
const Tag = ({ tag }: Props) => {
  return <div className={`tag ${tag}`}>{tag}</div>;
};

export default Tag;
