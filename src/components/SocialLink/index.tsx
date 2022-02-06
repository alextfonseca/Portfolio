import Image from "next/image";

interface SocialLinkProps {
  image: string;
  alt: string;
}

export const SocialLink = ({ image, alt }: SocialLinkProps) => {
  return (
    <a href="#">
      <Image src={image} alt={alt} />
    </a>
  );
};
