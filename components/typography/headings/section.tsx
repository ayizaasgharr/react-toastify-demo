import { memo } from "react";

const Section: React.FC<{ text: string }> = ({ text }) => (
  <h6 className='font-extrabold dark:text-white mt-8 mb-4 text-black capitalize'>
    {text}
  </h6>
);
export default memo(Section);
