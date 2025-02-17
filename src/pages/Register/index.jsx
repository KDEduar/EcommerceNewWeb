import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Register = () => {
    const [isPasswordShow, setIsShowPassword] = useState(false);

    return (
        <section className="py-10 section">
            <div className="container">
                <div className="card shadow-md w-[450px] m-auto rounded-md bg-white p-5 px-10">
                    <h3 className="text-center text-[18px] text-black font-bold uppercase">
                        Register with a new Account
                    </h3>
                    <form className="w-full mt-5">
                        <div className="w-full mb-5 form-group">
                            <TextField
                                type='text'
                                id="name"
                                label="Full Name"
                                variant="outlined"
                                className="w-full"
                            />
                        </div>
                        <div className="w-full mb-5 form-group">
                            <TextField
                                type='email'
                                id="email"
                                label="Email Id"
                                variant="outlined"
                                className="w-full"
                            />
                        </div>

                        <div className="relative w-full mb-5 form-group">
                            <TextField
                                type={isPasswordShow === false
                                    ? 'password'
                                    : 'text'
                                }
                                id="password"
                                label="Password"
                                variant="outlined"
                                className="w-full"
                            />
                            <Button
                                className='!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black'
                                onClick={() => {
                                    setIsShowPassword(!isPasswordShow);
                                }}>
                                {
                                    isPasswordShow === true
                                        ? <IoMdEye className='text-[20px] opacity-75' />
                                        : <IoMdEyeOff className='text-[20px] opacity-75' />
                                }
                            </Button>
                        </div>


                        <div className="flex items-center w-full mt-3 mb-3">
                            <Button className='w-full btn-org btn-lg'>Register</Button>
                        </div>

                        <p className='text-center'>Already have an account?
                            <Link className='text-primary text-[14px] font-[600]' to="/login"> Sign in</Link>
                        </p>

                        <p className="text-center font-[500]">Or continue with social account</p>

                        <Button className='flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black'>
                            <FcGoogle className='text-[25px]' />Register with Google
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;