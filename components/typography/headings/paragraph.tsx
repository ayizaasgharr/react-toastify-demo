import { memo } from "react";


const Paragraph: React.FC<{ text: string }> = ({ text }) => (
  <h4 className='font-extrabold dark:text-white mt-8 text-black'>{text}</h4>
);
export default memo(Paragraph);
