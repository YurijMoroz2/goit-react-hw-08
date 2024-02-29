import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './RegisterForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';

const feedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string()
    .min(3, 'Too Short! Input format: 123456789')
    .max(14, 'Too Long!')
    .required('Required'),
  password: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  
});

export default function RegisterForm ()  {
  const dispatch = useDispatch();

  const onSubmitFormik = ({ name, email, password }, actions) => {
    actions.resetForm();
    const contactData = {
      name: name,
      phone: email,
      password:password,

    };
    console.log(contactData);
    // dispatch(addContact(contactData));
  };

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  return (
    <Formik
      initialValues={{ name: '', email: '',password: ''}}
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
          <label htmlFor={emailId}>Email</label>
          <Field type="email" name="email" id={emailId} />
          <ErrorMessage name="email" component="span" />
        </div>
        <div className={css.formName}>
          <label htmlFor={passwordId}>Password</label>
          <Field type="password" name="password" id={passwordId} />
          <ErrorMessage name="password" component="span" className={css.span} />
        </div>
        <button className={css.button} type="submit">Register</button>
      </Form>
    </Formik>
  );
}


