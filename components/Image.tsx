import styled from "@emotion/styled";
import Img from "next/image";

type ImgType = {
  src: string;
  alt?: string;
  className?: string;
  width?: string;
  height?: string;
  type?: string;
};

type WrapperType = {
  width?: string;
  height?: string;
};

const Wrapper = styled.div`
  position: relative;
  .image {
    width: 100%;
    height: 100%;
    position: relative !important;
  }
  &.contain {
    width: ${(props: WrapperType) => props.width};
    span {
      position: unset !important;
    }
    .image {
      position: relative !important;
      width: 100% !important;
      height: unset !important;
      object-fit: contain;
    }
  }
  &.cover {
    width: ${(props: WrapperType) => props.width};
    height: ${(props: WrapperType) => props.height};
    .image {
      object-fit: cover;
    }
  }
`;

const Image = ({
  src,
  alt,
  className,
  width,
  height,
  type = "contain",
  ...props
}: ImgType) => {
  return (
    <Wrapper
      className={`image-container ${type} ${className}`}
      width={width}
      height={height}
    >
      <Img
        src={src}
        alt={alt}
        className={`image image-${type}`}
        layout="fill"
        quality={80}
        {...props}
      />
    </Wrapper>
  );
};

export default Image;
