import { FC } from "react";
import ContentLoader from "react-content-loader";

interface LoaderProps {}

export const Loader: FC<LoaderProps> = ({}) => {
  return (
    <ContentLoader
      speed={1}
      width={360}
      height={72}
      viewBox="0 0 360 72"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="16" y="12" rx="4" ry="4" width="48" height="48" />
      <rect x="80" y="12" rx="4" ry="4" width="100" height="18" />
      <rect x="292" y="12" rx="4" ry="4" width="34" height="18" />
      <rect x="80" y="32" rx="4" ry="4" width="246" height="18" />
    </ContentLoader>
  );
};
