
import {Input, DropdownMenu, DropdownItem, Dropdown, DropdownTrigger, Button, Checkbox} from "@nextui-org/react";
import { toastify } from "@/types/toastifyType";
interface InputProps {
    typeState:toastify,
    setTypeState:any
  }

const InputOptions:React.FC<InputProps>=({typeState, setTypeState})=>{

    const transition=["upInUpOut","rightInOut","zoomInOut"]

    const handleSelectionChange=(keys:React.Key[])=>{
        setTypeState((prevState:toastify) => (
          { ...prevState, animationStyle: Array.from(keys)[0].toString() }
          ))}

    return(
        <div className="flex space-x-4">
        <div className="flex space-x-2">
       <div className="pt-2">Autoclose  Delay </div>
       <Input
          type="number"
          placeholder="0.00"
          labelPlacement="outside"
          className="w-20"
        />
       </div>
       <div className="flex space-x-2">
        <div className="pt-2">Transition</div>
        <Dropdown>
            <DropdownTrigger>
                <Button className="capitalize">
                    {typeState.animationStyle}
                </Button>
            </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions" selectedKeys={typeState.animationStyle} selectionMode="single" onSelectionChange={(keys:any)=>handleSelectionChange(keys)}>
       { transition.map( (transition)=><DropdownItem key={transition}>{transition}</DropdownItem>)
       }
      </DropdownMenu>
      </Dropdown>
       </div>
       <div>

       </div>
       </div>
    )
}
export default InputOptions