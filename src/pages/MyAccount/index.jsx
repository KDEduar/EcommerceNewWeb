import { Button, TextField } from "@mui/material";
import AccountSidebar from "../../components/AccountSidebar";

const MyAccount = () => {
    return (
        <section className="w-full py-10">
            <div className="container flex gap-5">
                <div className="col1 w-[20%]">
                    <AccountSidebar />
                </div>

                <div className="col2 w-[50%]">
                    <div className="p-5 bg-white rounded-md shadow-md card">
                        <h2 className="pb-3">My Profile</h2>
                        <hr />

                        <form className="mt-5">
                            <div className="flex items-center gap-3">
                                <div className="w-[50%]">
                                    <TextField
                                        type="text"
                                        label="Full Name"
                                        variant="outlined"
                                        className="w-full"
                                        size="small"
                                    />
                                </div>
                                <div className="w-[50%]">
                                    <TextField
                                        type="number"
                                        label="Phone Number"
                                        variant="outlined"
                                        className="w-full"
                                        size="small"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-3 mt-4">
                                <div className="w-[100%]">
                                    <TextField
                                        type="email"
                                        label="Email"
                                        variant="outlined"
                                        className="w-full"
                                        size="small"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mt-4">
                                <Button className="btn-org btn-lg w-[100px]">Save</Button>
                                <Button className="w-[100px] btn-border btn-org btn-lg" variant="outlined">Cancel</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default MyAccount;