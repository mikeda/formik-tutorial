import React from 'react';
import { useFormik } from 'formik'

interface Values {
  firstName?: string;
  lastName?: string;
  email?: string;
}
function SignupForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    validate: values => {
      const errors: Values = {};
      if (!values.firstName) {
        errors.firstName = '必須です。'
      } else if (values.firstName.length > 15) {
        errors.firstName = '15文字以内です。'
      }

      if (!values.lastName) {
        errors.lastName = '必須です。'
      } else if (values.lastName.length > 15) {
        errors.lastName = '15文字以内です。'
      }

      if (!values.email) {
        errors.email = '必須です。'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = '不正なメールアドレスです。'
      }

      return errors;
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}
      </div>


      <div>
        <label htmlFor="email">メールアドレス</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupForm;
