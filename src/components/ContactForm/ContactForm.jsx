import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { notify, notifyError } from '../constanta';

const feedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string()
    .min(3, 'Too Short! Input format: 123456789')
    .max(14, 'Too Long!')
    .required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const onSubmitFormik = ({ name, number }, actions) => {
    actions.resetForm();
    const contactData = {
      name: name,
      number: number.replace(/(\d{3})(\d{3})(\d{2})/, '$1-$2-$3'),
    };
    dispatch(addContact(contactData))
      .unwrap()
      .then(() => {
        notify();
      })
      .catch(() => {
        notifyError();
      });
  };

  const nameId = useId(5);
  const numberId = useId(5);

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={onSubmitFormik}
      validationSchema={feedbackSchema}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.formName}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={css.formName}>
          <label htmlFor={numberId}>Number</label>
          <Field type="tel" name="number" id={numberId} />
          <ErrorMessage name="number" component="span" className={css.span} />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
