import Modal from 'react-modal';

import css from './ContactModal.module.css';

Modal.setAppElement('#root');
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(100, 100, 100, 0.75)',
  },
};

export default function ContactModal({ isOpen, closeModal, children }) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={css.Modal}
      >
        {children}
      </Modal>
    </div>
  );
}
