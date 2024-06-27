import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { positioningToast } from '@/constants/positioningToast';
import Title from '@/components/typography/headings/title';

const PositioningToast = () => (
  <div className='flex-wrap flex'>
    <Title text={'Positioning Toastify'} />
    <div>
      By default, all toasts will appear at the top right corner of your
      browser. If a specific position is set for an individual toast, it will
      override the position defined in the ToastContainer.
    </div>
    <div className='mt-2'>
      Allowed values are <b>top</b>, <b>center</b>, <b>bottom</b>
    </div>
    <div className='md:justify-center flex w-full flex-wrap'>
      <div className='rounded-md flex flex-col mt-10 overflow-x-auto'>
        <SyntaxHighlighter language='javascript' style={dark}>
          {positioningToast}
        </SyntaxHighlighter>
      </div>
    </div>
  </div>
);
export default PositioningToast;
