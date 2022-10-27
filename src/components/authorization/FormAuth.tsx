import React from 'react'
import { NavLink } from 'react-router-dom';

import { useForm } from "react-hook-form";

interface IFormInputs {
  name: string
  email: string
  password: string
  repPassword: string
}

const FormAuth = ({...props}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors,
      isValid
    }
  } = useForm<IFormInputs>({
    mode: 'onTouched'
  });

  const watchPassword = watch('password');

  const message = {
    required: 'This field must be filled in',
    minLength: 'Minimum number of characters 6',
    mail: 'Incorrect email format',
    password: "Passwords don't match"
  }

  return (
    <form
      className="form"
      onSubmit={ handleSubmit(
        props.submitFn
      )}
    >
      <h1 className="uppercase font-bold text-center mb-4">{ props.title }</h1>

      {props.type === "reg"
        ?
        <div className="field-auth-wrap">
          <input
            {...register("name", {
              required: message.required
            })}
            placeholder="Enter name"
            className="field-auth"
            value={ props.name }
            onChange={ (e) => props.setName(e.target.value) }
          />

          <div className="error-message">
            {errors?.name && errors?.name?.message}
          </div>
        </div>
        :
        <></>
      }
      
      <div className="field-auth-wrap">
        <input
          {...register("email", {
            required: message.required,
            pattern: {
              value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
              message: message.mail
            }
          })}
          placeholder="Enter email"
          className="field-auth"
          value={ props.email }
          onChange={ (e) => props.setEmail(e.target.value) }
        />

        <div className="error-message">
          {errors?.email && errors?.email?.message}
        </div>
      </div>

      <div className="field-auth-wrap">
        <input
          {...register("password", {
            required: message.required,
            minLength: {
              value: 6,
              message: message.minLength
            }
          })}
          placeholder="Enter password"
          className="field-auth"
          value={ props.password }
          onChange={ (e) => {props.setPassword(e.target.value)} }
        />

        <div className="error-message">
          {errors?.password && errors?.password?.message}
        </div>
      </div>

      {props.type === "reg"
        ?
        <div className="field-auth-wrap">
          <input
            {...register("repPassword", {
              required: message.required,
              validate: v => v === watchPassword || message.password
            })}
            placeholder="Repeat password"
            className="field-auth"
          />

          <div className="error-message">
            {errors?.repPassword && (errors?.repPassword?.message || 'Error')}
          </div>
        </div>
        :
        <></>
      }

      <input
        type="submit"
        className="btn-auth"
        value={ props.title }
        disabled={ !isValid }
      />

      <div>
        {props.type === "reg"
        ?
          <p className="mt-4 text-center">If you already have an account: <NavLink to="/login" className="text-blue-500">Click here.</NavLink></p>
        :
          <p className="mt-4 text-center">If you don't have an account: <NavLink to="/registration" className="text-blue-500">Click here.</NavLink></p>
        }
      </div>
    </form>
  )
}

export default FormAuth;