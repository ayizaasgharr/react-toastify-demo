import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import Title from '@/components/typography/headings/title';
import { removeToast } from '@/constants/removeToast';

const RemoveToast = () => (
    <div className='flex-wrap flex w-full'>
      <Title text={'Remove toast programmatically'} />
      <div>
        Each time you display a toast, an ID is returned. You can use this ID to
        programmatically remove a specific toast by calling toast.dismiss(id)
      </div>
      <div className='md:justify-center flex w-full flex-wrap '>
        <div className='rounded-md flex flex-col mt-10 overflow-x-auto'>
          <SyntaxHighlighter language='javascript' style={dark}>
            {removeToast}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
)
export default RemoveToast;
