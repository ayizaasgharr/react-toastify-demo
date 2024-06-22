import { RadioGroup, Radio } from "@nextui-org/react";
import { memo } from "react";
import Section from "../typography/headings/section";
import { toastify } from "@/types/toastifyType";

interface ToastifyOptions {
  property: string;
  options: string[];
  setSelected: any;
  title: string;
  defaultValue: string;
}

const ToastifyOptions: React.FC<ToastifyOptions> = ({
  options,
  setSelected,
  title,
  property,
  defaultValue,
}) => {
  return (
    <div>
      <Section text={title} />
      <RadioGroup
        orientation="horizontal"
        value={defaultValue}
        defaultValue={defaultValue}
        onValueChange={(value: string) =>
          setSelected((prevState: toastify) => ({
            ...prevState,
            [property]: value,
          }))
        }
      >
        <div className="flex gap-x-6">
          {options.map((option, index) => (
            <Radio value={option} key={index}>
              {option}
            </Radio>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};
export default memo(ToastifyOptions);
