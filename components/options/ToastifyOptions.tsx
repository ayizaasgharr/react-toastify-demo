import { memo } from 'react';
import { RadioGroup, Radio } from '@nextui-org/react';

import Section from '../typography/headings/section';
import { toastify } from '@/types/toastifyType';
import { ToastifyOptionsProps } from '@/app/interfaces/options';

const ToastifyOptions: React.FC<ToastifyOptionsProps> = ({
  options,
  setSelected,
  title,
  property,
  defaultValue,
}) => (
  <div>
    <Section text={title} />
    <RadioGroup
      orientation='horizontal'
      value={defaultValue}
      defaultValue={defaultValue}
      onValueChange={(value: string) =>
        setSelected((prevState: toastify) => ({
          ...prevState,
          [property]: value,
        }))
      }
    >
      <div className='flex gap-x-6'>
        {options.map((option, index) => (
          <Radio value={option} key={index}>
            {option}
          </Radio>
        ))}
      </div>
    </RadioGroup>
  </div>
);
export default memo(ToastifyOptions);
