import React, {useState} from 'react'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import ProgressBar from './ProgressBar'
import { useForm } from "react-hook-form";


const LoginForm = () => {

/** Form Submit events */

const { register, handleSubmit, watch, formState: { errors } } = useForm();

/** onSubmit events */

const onSubmit = data => alert("Welcome");

/** Show or hide Password state */
const [showPassword, setShowPassword] = useState(false)

/** Password state */

const [password, setPassword ]= useState('')

/** Show Password onClick events */

const handleShowPassword = () => {
    setShowPassword(!showPassword)
}

const Checkpassword = watch('password')
  return (
   <React.Fragment>
        <section>
        <form onSubmit={handleSubmit(onSubmit)}>
                <div className='bg-black w-auto h-96 mt-20 rounded-lg mx-5'>
                    {/** Header */}
                    <div className='flex items-center justify-center h-32'>
                        <p className='text-white uppercase text-4xl font-bold text-center'>Sign-Up To Create an Account</p>
                    </div>

                    {/** Body */}

                    <div>
                        <div className='mx-5 '>
                            {/** Password creation field */}
                            <div className='relative'>
                                <input 
                                    type={(showPassword === false)? 'password' : 'text'}
                                    placeholder='enter a strong passwod...'
                                    className='w-full rounded-lg h-10'
                                    
                                    {...register("password", { required: 'You need a strong password',
                                    pattern:{
                                        value: /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&*()--+={}])/,
                                        message: 'A strong password should contain atleast one lowercase letter, one uppercase letter one numeber and a special'
                                    },
                                    minLength:{
                                        value: 8,
                                        message: 'You need to have a password with atleast 8 characters'
                                    },
                                    
                                })}
                                onChange={e => setPassword(e.target.value)}
                               />
                                <ProgressBar  password={password}/>
                                <p className='text-red-500'>{errors.password && <span>{errors.password.message}</span>}</p>

                                {/** Password view or hide */}
                                <div className='text-2xl absolute top-2 right-5'>
                                    {
                                        (showPassword === false)? <AiFillEyeInvisible onClick={handleShowPassword}/>:  <AiFillEye onClick={handleShowPassword}/>
                                    }
                                </div>
                            </div>


                             {/** Confirm Password creation field */}
                             <div className='relative'>
                                <input 
                                    type='password'
                                    placeholder='confirm your password'
                                    onPaste={(e)=>{
                                        e.preventDefault()
                                        return false
                                    }}
                                    className='w-full rounded-lg h-10'
                                    {...register("ConfirmPassword", { required: 'Your input does not match',
                                    validate: (value) => 
                                    value === Checkpassword || "Your inputs does not match",
                                })}
                                />
                                <p className='text-red-500'>{errors.ConfirmPassword && <span>{errors.ConfirmPassword.message}</span>}</p>
                            </div>

                        </div>

                        {/** Submit Button */}

                        <div className='flex items-center justify-center'>
                            <input
                                type="submit"
                                value="submit"
                                className='h-10 w-2/5 text-white rounded-lg font-bold bg-red-900'
                            />
                        </div>
                    </div>
                </div>
            </form>
        </section>
   </React.Fragment>
  )
}

export default LoginForm