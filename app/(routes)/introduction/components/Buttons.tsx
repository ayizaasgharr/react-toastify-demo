import { Button } from '@nextui-org/react';
import { Id, Bounce, ToastContainer, toast, Slide, Zoom } from 'react-toastify';
import { useRef } from 'react';

import { ButtonsProps } from '@/app/interfaces/button';
import 'react-toastify/dist/ReactToastify.css';

const Buttons: React.FC<ButtonsProps> = ({
  state,
  defaultToastify,
  setTypeState,
  checkBox,
}) => {

  const toastId = useRef<Id>(1);

  const setToastPosition = (position: string) => {
    switch (position) {
      case 'top':
        return 'top-right';
      case 'bottom':
        return 'bottom-right';
      case 'center':
        return 'top-center';
    }
  };

  const setTheme = (theme: string) => {
    switch (theme) {
      case 'black':
        return 'dark';
      case 'white':
        return 'light';
    }
  };

  const setAnimation = (animation: string) => {
    switch (animation) {
      case 'upInUpOut':
        return Bounce;
      case 'rightInOut':
        return Slide;
      case 'zoomInOut':
        return Zoom;
    }
  };

  const handleNotify = () => {
    toastId.current = toast('Custom Style Notification with css class!', {
      position: setToastPosition(state.position),
      type: state.toastType,
      autoClose: !checkBox.disableAutoClose && state.duration,
      theme: setTheme(state.backgroundColor),
      transition: setAnimation(state.animationStyle),
      className: 'foo-bar',
    });
  };

  const handlePromiseNotify = () => {
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 3000)
    );

    toast.promise(
      resolveAfter3Sec,
      {
        pending: 'Promise is pending',
        success: 'Promise resolved 👌',
        error: 'Promise rejected 🤯',
      },
      {
        position: setToastPosition(state.position),
        type: state.toastType,
        autoClose: state.duration,
        theme: setTheme(state.backgroundColor),
        transition: setAnimation(state.animationStyle),
      }
    );
  };

  const handleUpdateNotify = () => {
    toast.update(toastId.current, {
      position: setToastPosition(state.position),
      type: state.toastType,
      autoClose: state.duration,
      theme: setTheme(state.backgroundColor),
      transition: setAnimation(state.animationStyle),
    });
  };

  return (
    <>
      <ToastContainer />
      <div className='mt-8 flex space-x-8'>
        <Button
          color='primary'
          radius='sm'
          variant='ghost'
          onClick={handleNotify}
        >
          Show Toast
        </Button>
        <Button
          color='primary'
          radius='sm'
          variant='ghost'
          onClick={handlePromiseNotify}
        >
          Promise
        </Button>
        <Button
          color='primary'
          radius='sm'
          variant='ghost'
          onClick={handleUpdateNotify}
        >
          Update
        </Button>
        <Button
          color='primary'
          radius='sm'
          variant='ghost'
          onClick={() => toast.dismiss()}
        >
          Clear All
        </Button>
        <Button
          color='primary'
          radius='sm'
          variant='ghost'
          onClick={() => setTypeState(() => defaultToastify)}
        >
          Reset
        </Button>
      </div>
    </>
  );
};
export default Buttons;
