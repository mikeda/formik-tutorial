import React from 'react';
import { Formik } from 'formik'
import * as Yup from 'yup';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}
function SignupForm() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: ''
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().max(15, '15文字までです').required('Required'),
        lastName: Yup.string().max(15, '15文字までです').required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      onSubmit={values => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            {...formik.getFieldProps('firstName')}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            {...formik.getFieldProps('lastName')}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="email">メールアドレス</label>
          <input
            id="email"
            type="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>

        <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}

export default SignupForm;
