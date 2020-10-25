import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';

function SignupForm() {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string().max(15, '15文字までです').required('Required'),
        lastName: Yup.string().max(15, '15文字までです').required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" />
        </div>

        <div>
          <label htmlFor="email">メールアドレス</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default SignupForm;
