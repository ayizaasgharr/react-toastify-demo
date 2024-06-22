import { Checkbox } from "@nextui-org/react";
import { memo } from "react";
import { checkbox } from "@/types/toastifyType";
import { checkboxContent } from "@/types/toastifyType";

interface CheckBoxProps {
  checkBox: checkbox;
  setCheckBox: any;
}

const CheckBoxList: React.FC<CheckBoxProps> = ({ checkBox, setCheckBox }) => {
  const handleCheckBoxChange = (value: boolean, key: string) => {
    setCheckBox((prevState: checkbox) => ({
      ...prevState,
      [key]: value,
    }));
  };
  const checkboxes = [
    { description: "Has back drop", key: "hasBackDrop" },
    { description: "Disable Auto close", key: "disableAutoClose" },
  ];
  return (
    <div className="mt-8 flex justify-between w-8/12">
      {checkboxes.map((checkbox: checkboxContent) => (
        <Checkbox
          key={checkbox.key}
          onValueChange={(value: boolean) =>
            handleCheckBoxChange(value, checkbox.key)
          }
        >
          {checkbox.description}
        </Checkbox>
      ))}
    </div>
  );
};
export default memo(CheckBoxList);
