import { memo } from "react";

const Title : React.FC<{ text: string }> = ({ text })  => (
    <h3 className="font-extrabold dark:text-white mt-4 text-black">{text}</h3>
)
export default memo(Title);
