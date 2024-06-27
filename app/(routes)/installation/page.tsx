import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import React from 'react';

import { installToast } from '@/constants/installToast';
import Title from "@/components/typography/headings/title";

const Installation = () => (
    <div className="w-full">
      <Title text={"Installation"} />
      <div>With npm:</div>
      <div className="bg-gray-200 mt-2 p-2 rounded-md flex flex-col items-left justify-left mx-auto max-w-md mt-10">
        <p className="mb-4 break-words text-center">
          $ npm install toastify-react-native
        </p>
      </div>
      <div className="mt-2">With yarn:</div>
      <div className="bg-gray-200 mt-2 p-2 rounded-md flex flex-col items-left justify-left mx-auto max-w-md mt-10">
        <p className="mb-4 break-words text-center">
          $ yarn add react-toastify
        </p>
      </div>
      <Title text={"The Gist"} />
      <div className="md:justify-center flex w-full flex-wrap">
        <div className="rounded-md flex flex-col mt-10 overflow-x-auto">
          <SyntaxHighlighter language="javascript" style={dark}>
            {installToast}
          </SyntaxHighlighter>
        </div>
      </div>
  </div>
);

export default Installation;
