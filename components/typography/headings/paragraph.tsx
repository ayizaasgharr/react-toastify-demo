
interface ParagraphProps {
    text: string;
  }

const Paragraph : React.FC<ParagraphProps> = ({ text }) =>{
    return (
        <h4 className="font-extrabold dark:text-white mt-8 text-black">{text}</h4>

    )
}
export default Paragraph