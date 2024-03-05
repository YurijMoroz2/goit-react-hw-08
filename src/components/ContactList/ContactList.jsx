import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { IoPerson } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { deleteContact } from '../../redux/contacts/operations';
import { selectFilter } from '../../redux/contacts/selectors';

import { useState } from 'react';
import ContactModal from '../ContactModal/ContactModal';
import UpdateForm from '../UpdateForm/UpdateForm';
import { notifyDelete, notifyError } from '../constanta';

export default function ContactList() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [update, setUpdate] = useState(null);
  const [modIsOpen, setModIsOpen] = useState(false);

  const handleDeleteContact = id => {
    setModalIsOpen(true);
    setSelectedContactId(id);
  };

  const confirmDeleteContact = () => {
    dispatch(deleteContact(selectedContactId))
      .unwrap()
      .then(() => {
        notifyDelete();
      })
      .catch(() => {
        notifyError();
      });
    setModalIsOpen(false);
  };

  const handlePatchContact = id => {
    setModIsOpen(true);
    setUpdate(id);
  };

  const closeModalUpdate = () => {
    setModIsOpen(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <ul className={css.contactBox}>
        {filter.length > 0 ? (
          filter.map(val => (
            <li key={val.id} className={css.contactBoxItem}>
              <div className={css.contactBoxContact}>
                <div className={css.boxItem} onClick={() => handlePatchContact(val)}>
                  <p className={css.contactBoxName}>
                    <IoPerson /> {val.name}
                  </p>
                  <p className={css.contactBoxNumber}>
                    <BsFillTelephoneFill /> {val.number}
                  </p>
                </div>

                <button
                  type="button"
                  className={css.contactBoxButton}
                  onClick={() => handleDeleteContact(val)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No contacts found</p>
        )}
      </ul>
      {selectedContactId !== null && (
        <ContactModal isOpen={modalIsOpen} closeModal={closeModal}>
          <div>
            <p className={css.contactBoxNameDel}>
              <IoPerson /> {selectedContactId.name}
            </p>
            <p className={css.contactBoxNumberDel}>
              <BsFillTelephoneFill /> {selectedContactId.number}
            </p>
            <p className={css.text}>Are you sure you want to delete this contact?</p>
          </div>
          <div className={css.btnModal}>
            <button className={css.btnModalDel} onClick={confirmDeleteContact}>
              Delete
            </button>
            <button className={css.btnModalCan} onClick={closeModal}>
              Cancel
            </button>
          </div>
        </ContactModal>
      )}

      {update !== null && (
        <ContactModal isOpen={modIsOpen} closeModal={closeModalUpdate}>
          <div>
            <p className={css.contactBoxNameUp}>
              <IoPerson /> {update.name}
            </p>
            <p className={css.contactBoxNumberUp}>
              <BsFillTelephoneFill /> {update.number}
            </p>
            <UpdateForm item={update} closeModal={closeModalUpdate} />
          </div>
        </ContactModal>
      )}
    </>
  );
}
