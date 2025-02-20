import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
// import { useNavigate } from 'react-router-dom';
// import { MyContext } from '../../App';

const ForgotPassword = () => {
    const [isPasswordShow, setIsShowPassword] = useState(false);
    const [isPasswordShow2, setIsShowPassword2] = useState(false);

    // const context = useContext(MyContext);
    // const histoty = useNavigate();

    return (
        <section className="py-10 section">
            <div className="container">
                <div className="card shadow-md w-[450px] m-auto rounded-md bg-white p-5 px-10">
                    <h3 className="text-center text-[18px] text-black font-bold uppercase">
                        Forgot Password
                    </h3>
                    <form className="w-full mt-5">
                        <div className="relative w-full mb-5 form-group">
                            <TextField
                                type={isPasswordShow === false
                                    ? 'password'
                                    : 'text'
                                }
                                id="password"
                                label="New Password"
                                variant="outlined"
                                className="w-full"
                                name='name'
                            />
                            <Button
                                className='!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black'
                                onClick={() => {
                                    setIsShowPassword(!isPasswordShow);
                                }}>
                                {
                                    isPasswordShow === false
                                        ? <IoMdEye className='text-[20px] opacity-75' />
                                        : <IoMdEyeOff className='text-[20px] opacity-75' />
                                }
                            </Button>
                        </div>

                        <div className="relative w-full mb-5 form-group">
                            <TextField
                                type={isPasswordShow2 === false
                                    ? 'password'
                                    : 'text'
                                }
                                id="confirm_password"
                                label="Confirm Password"
                                variant="outlined"
                                className="w-full"
                                name='password'
                            />
                            <Button
                                className='!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black'
                                onClick={() => {
                                    setIsShowPassword2(!isPasswordShow2);
                                }}>
                                {
                                    isPasswordShow2 === false
                                        ? <IoMdEye className='text-[20px] opacity-75' />
                                        : <IoMdEyeOff className='text-[20px] opacity-75' />
                                }
                            </Button>
                        </div>

                        <div className="flex items-center w-full mt-3 mb-3">
                            <Button className='w-full btn-org btn-lg'>Change Password</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;