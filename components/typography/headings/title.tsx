import { memo } from "react";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h3 className="font-extrabold dark:text-white mt-4 text-black">{text}</h3>
  );
};
export default memo(Title);
