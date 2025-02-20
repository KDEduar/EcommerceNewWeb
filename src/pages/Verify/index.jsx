import { useState } from "react";
import OtpBox from "../../components/OtpBox"
import { Button } from "@mui/material";


const Verify = () => {
    const [otp, setOtp] = useState('');
    const handleOtpChange = (value) => {
        setOtp(value);
    };

    const verityOTP = (e) => {
        e.preventDefault();
        console.log(otp);
    };

    return (
        <section className="py-10 section">
            <div className="container">
                <div className="card shadow-md w-[450px] m-auto rounded-md bg-white p-5 px-10">
                    <div className="flex items-center justify-center text-center">
                        <img src="/verify.png" width="80" alt="" />
                    </div>
                    <h3 className="text-center text-[18px] text-black font-bold uppercase mt-4 mb-1">
                        Verify OTP
                    </h3>

                    <p className="mt-0 mb-4 text-center">OTP sent to
                        <span className="font-bold text-primary"> admin@admin.com</span>
                    </p>

                    <form onSubmit={verityOTP}>
                        <OtpBox length={6} onChange={handleOtpChange} />

                        <div className="flex items-center justify-center mt-5 px-9">
                            <Button type="submit" className="w-full mt-5 btn-org btn-lg">
                                Verify OTP
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Verify;