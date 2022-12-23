import NextImage, { ImageProps as NextImageProps } from "next/image";

type ImageProps = Omit<NextImageProps, "loader">;

const Image: React.FC<ImageProps> = ({ ...props }) => (
  <NextImage
    {...props}
    loader={({ src }: any) => {
      return src;
    }}
  />
);

export default Image;
