"use client";
import React, { useState } from "react";
import Title from "@/components/typography/headings/title";
import Section from "@/components/typography/headings/section";
import Paragraph from "@/components/typography/headings/paragraph";
import Code from "./components/Code";
import ToastifyOptions from "@/components/options/ToastifyOptions";
import InputOptions from "./components/InputOptions";
import CheckBoxList from "./components/CheckBoxList";
import Buttons from "./components/Buttons";
import { toastFeatures } from "@/constants/features";
import { toastify, checkbox } from "@/types/toastifyType";

const Introduction = () => {
  const defaultToastify: toastify = {
    position: "center",
    duration: 3000,
    animationStyle: "upInUpOut",
    closeOnClick: true,
    toastType: "info",
    backgroundColor: "white",
  };
  const [typeState, setTypeState] = useState<toastify>(defaultToastify);
  const [checkBox, setCheckBox] = useState<checkbox>({
    hasBackDrop: false,
    disableAutoClose: false,
  });

  const position = ["top", "bottom", "center"];
  const type = ["info", "success", "warning", "default"];
  const theme = ["black", "white"];

  return (
    <div className="flex-wrap">
      <Title text={"React Native Toastify"} />
      <Paragraph text={"Testing grounds"} />
      <div className="md:flex md:justify-between md:flex-wrap">
        <Code state={typeState} type={"Container"} checkbox={checkBox} />
        <Code state={typeState} type={"Emitter"} checkbox={checkBox} />
      </div>
      <ToastifyOptions
        options={position}
        title={"Position"}
        property={"position"}
        setSelected={setTypeState}
        defaultValue={typeState.position}
      />
      <ToastifyOptions
        options={type}
        title={"Toast Type"}
        property={"toastType"}
        setSelected={setTypeState}
        defaultValue={typeState.toastType}
      />
      <ToastifyOptions
        options={theme}
        title={"Background Color"}
        property={"backgroundColor"}
        setSelected={setTypeState}
        defaultValue={typeState.backgroundColor}
      />
      <Section text={"Options"} />
      <InputOptions typeState={typeState} setTypeState={setTypeState} />
      <CheckBoxList checkBox={checkBox} setCheckBox={setCheckBox} />
      <Buttons
        state={typeState}
        defaultToastify={defaultToastify}
        setTypeState={setTypeState}
        checkBox={checkBox}
      />
      <Paragraph text={"Feature"} />
      <ul className="ml-5 list-disc">
        {toastFeatures.map((feature) => (
          <li>{feature}</li>
        ))}
      </ul>
      <Paragraph text={"Contribute"} />
      <p>
        Show your ❤️ and support by giving a ⭐! We welcome any suggestions.
        Please check out our contributing guide for more information.
      </p>
    </div>
  );
};
export default Introduction;
