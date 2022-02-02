import { Modal, ModalHeader } from 'semantic-ui-react';
import { ModalProps } from '../../../interfaces/modal';

export const ModalBase = ({ open, setOpen, children, title, size }: ModalProps) => {

  const onClose = () => {
    setOpen( false );
  }

  return (
    <Modal open={ open } onClose={ onClose } size={ size } > 
      { title && <ModalHeader> { title } </ModalHeader>}
      { children }
    </Modal>
  );
};
