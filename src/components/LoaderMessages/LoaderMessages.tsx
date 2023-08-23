import { FC } from "react";
import ContentLoader from "react-content-loader";

interface LoaderMessagesProps {}

export const LoaderMessages: FC<LoaderMessagesProps> = ({}) => {
  return (
    <ContentLoader
      speed={1}
      width={520}
      height={78}
      viewBox="0 0 520 78"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="11" y="9" rx="4" ry="4" width="32" height="32" />
      <rect x="64" y="11" rx="4" ry="4" width="55" height="14" />
      <rect x="63" y="34" rx="4" ry="4" width="431" height="44" />
    </ContentLoader>
  );
};
