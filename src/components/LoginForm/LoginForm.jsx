import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { notify, notifyError } from '../constanta';

const feedbackSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().min(7, 'Too Short!').max(20, 'Too Long!').required('Required'),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const onSubmitFormik = ({ email, password }, actions) => {
    const contactData = {
      email: email,
      password: password,
    };
    console.log(contactData);
    dispatch(logIn(contactData))
      .unwrap()
      .then(() => {
        notify();
      })
      .catch(() => {
        notifyError();
      });
    actions.resetForm();
  };

  const emailId = useId();
  const passwordId = useId();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={onSubmitFormik}
      validationSchema={feedbackSchema}
    >
      <Form className={css.form} autoComplete="off">
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
        <button className={css.button} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
}
