import React from 'react';
import { useFormik } from 'formik'

function SignupForm() {
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">メールアドレス</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupForm;
