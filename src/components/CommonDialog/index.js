import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default (props) => {
  const { isOpen, onClose } = props;

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={() => onClose()} className="dialog">
        <div className="dialog-content">
          <Transition.Child
            enter="enter"
            enterFrom="overlay-enter-from"
            enterTo="overlay-enter-to"
            leave="enter"
            leaveFrom="overlay-enter-to"
            leaveTo="overlay-enter-from"
          >
            <Dialog.Overlay className="overlay" />
          </Transition.Child>
          <Transition.Child
            enter="enter"
            enterFrom="content-enter-from"
            enterTo="content-enter-to"
            leave="enter"
            leaveFrom="content-enter-to"
            leaveTo="content-enter-from"
          >
            <div className="d-content">{props.children}</div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
