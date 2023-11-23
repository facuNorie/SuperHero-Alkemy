import React from 'react'
import axios from 'axios'
import { useLocation } from 'wouter'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import ErrorInput from '.././ErrorInput'

export default function LoginForm() {
  const [, setLocation] = useLocation()
  const sendLoginForm = (email, password) => {
    try {
      fetch('http://challenge-react.alkemy.org', {
        method: 'post',
        body: {
          email: email,
          password: password,
        },
      })
        .then((res) => {
          localStorage.setItem('token', ':)')
          setLocation('/home')
        })
        .catch((e) => {
          alert('Unauthorized')
        })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className='container py-5 px-4 shadow-lg bg-light rounded col-12 col-md-5'>
        <div className='text-center mb-3'>
          <h4>
            <strong>Log in to build your team!</strong>
          </h4>
        </div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values) => {
            const errors = {}
            if (!values.email) {
              errors.email = '⚠️ Required'
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = '⚠️ Invalid email address'
            }
            if (!values.password) {
              errors.password = '⚠️ Required'
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              sendLoginForm(values.email, values.password)
              setSubmitting(false)
            }, 400)
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='form-floating mb-2'>
                <Field
                  type='email'
                  name='email'
                  className='form-control'
                  id='floatingInput'
                  placeholder='email'
                  autoComplete='off'
                />
                <ErrorInput name='email' />
                <label htmlFor='floatingInput'>Email address</label>
              </div>
              <div className='form-floating mb-2'>
                <Field
                  type='password'
                  name='password'
                  className='form-control'
                  id='floatingPassword'
                  placeholder='Password'
                />
                <ErrorInput name='password' />
                <label htmlFor='floatingPassword'>Password</label>
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='btn btn-primary col-12 mb-2'
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}
