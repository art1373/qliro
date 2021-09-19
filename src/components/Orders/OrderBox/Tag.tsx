import React from "react";

type Props = {
  tag: string;
  testId: string;
};
const Tag = ({ tag, testId }: Props) => {
  return (
    <div data-testid={testId} className={`tag ${tag}`}>
      {tag}
    </div>
  );
};

export default Tag;
