
import {RadioGroup, Radio, Chip} from "@nextui-org/react";
import Section from "../typography/headings/section";
import { toastify } from "@/types/toastifyType";

interface ToastifyOptions {
    options: string[];
    setSelected: any;
    title: string;
  }

const ToastifyOptions : React.FC<ToastifyOptions> = ({options, setSelected, title }) =>{

    return (
        <div>
          <Section text={title}/>
          <RadioGroup
          orientation="horizontal"
          onValueChange={(value:string)=>(setSelected((prevState:toastify)=>({
            ...prevState,
            [title]:value
          })))}
        > 
          <div className="flex gap-x-6">
            { options.map((option,index)=>( 
              <Radio value={option} key={index}>
                {option}
              </Radio>
              ))
            } 
            </div>
        </RadioGroup>
    </div>
    )
}
export default ToastifyOptions