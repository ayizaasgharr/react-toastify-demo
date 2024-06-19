
interface SectionProps {
    text: string;
  }

const Section : React.FC<SectionProps> = ({ text }) =>{
    return (
        <h6 className="font-extrabold dark:text-white mt-8 mb-4 text-black capitalize">{text}</h6>

    )
}
export default Section