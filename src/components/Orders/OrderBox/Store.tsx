import * as React from "react";
import { ReactComponent as NoFlag } from "../../../assets/img/Norska.svg";
import { ReactComponent as UKFlag } from "../../../assets/img/uk.svg";
import { ReactComponent as SEFlag } from "../../../assets/img/Svenska.svg";
import "../../../theme/sharedStyles.scss";

type Props = {
  country: string;
  store: string;
};

const Flag = ({ country, store }: Props) => {
  const getFlag = (country: string) => {
    switch (country) {
      case "SE":
        return <SEFlag />;
      case "NO":
        return <NoFlag />;

      case "UK":
        return <UKFlag />;

      default:
        return <SEFlag />;
    }
  };
  return (
    <div className="flex-center">
      <div>{getFlag(country)}</div>
      <div className="customPadding">{store}</div>
    </div>
  );
};

export default Flag;
