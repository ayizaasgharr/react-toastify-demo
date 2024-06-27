import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import Title from '@/components/typography/headings/title';
import { duration } from '@/constants/duration';

const Duration = () => (
  <div className='w-full'>
    <Title text={'Duration'} />
    <div>Duration prop that accepts a value in milliseconds or false</div>
    <div className='md:justify-center flex w-full flex-wrap'>
      <div className='rounded-md flex flex-col mt-10 overflow-x-auto'>
        <SyntaxHighlighter language='javascript' style={dark}>
          {duration}
        </SyntaxHighlighter>
      </div>
    </div>
  </div>
);

export default Duration;
