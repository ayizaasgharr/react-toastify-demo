"use client"
import React,{useState} from "react";
import {Input, DropdownMenu, DropdownItem, Dropdown, DropdownTrigger, Button, Checkbox} from "@nextui-org/react";
import Title from "@/components/typography/headings/title";
import Section from "@/components/typography/headings/section";
import Paragraph from "@/components/typography/headings/paragraph";
import { toastify, checkbox } from "@/types/toastifyType";
import Code from "./components/Code";
import ToastifyOptions from "@/components/options/ToastifyOptions";
import InputOptions from "./components/InputOptions";
import CheckBoxList from "./components/CheckBoxList";
import Buttons from "./components/Buttons";
const Introduction = () =>{

    const [typeState, setTypeState]=useState<toastify>({
        position:"top",
        duration:2000,
        animationStyle:"upInUpOut",
        closeOnClick:true,
    })
    const [checkBox, setCheckBox]=useState<checkbox>({
        hasBackDrop:false,
        disableAutoClose:false
    })

    const position=["top","bottom","center"]
    const type=["info","success","warning","default"]
    const theme=["light","dark","colored"]
    
    return (
      <div>
       <Title text={"React Native Toastify"} />
       <Paragraph text={"Testing grounds"} />
       <div className="flex">
       <Code  state={typeState} type={"Container"}/>
       <Code  state={typeState}   type={"Emitter"}/>
       </div>
       <ToastifyOptions options={position} title={"position"} setSelected={setTypeState}  />
       <ToastifyOptions options={type} title={"type"} setSelected={setTypeState} />
       <ToastifyOptions options={theme} title={"theme"} setSelected={setTypeState} />
       <Section text={"Options"}/>
       <InputOptions typeState={typeState} setTypeState={setTypeState}/>
       <CheckBoxList checkBox={checkBox} setCheckBox={setCheckBox}/>
       <Buttons/>
    </div>
    );
  }
  export default Introduction;
