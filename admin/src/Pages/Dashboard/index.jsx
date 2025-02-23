import { useState } from "react";

import { Button } from "@mui/material";
import DashboardBoxes from "../../Components/DashboardBoxes";
import { BiPlusCircle } from "react-icons/bi";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Badge from "../../../../admin/src/components/Badge";

const Dashboard = () => {
    const [isOpenOrderdProduct, setIsOpenOrderdProduct] = useState(null);

    const isShowOrderdProduct = (index) => {
        if (isOpenOrderdProduct === index) {
            setIsOpenOrderdProduct(null);
        } else {
            setIsOpenOrderdProduct(index);
        }
    };

    return (
        <>
            <div className="w-full border border-[rgba(0,0,0,0.1)] bg-white flex items-center gap-8 mb-5 px-5 py-2 rounded-md justify-between">
                <div className="info">
                    <h1 className="text-[70px] font-bold leading-16 mb-3">Good Morning,<br />Eduar Dev 👋</h1>
                    <p className="text-[#646464]">
                        Here`s what`s happening with your store today.
                    </p>
                    <Button className="!mt-5 btn-blue !capitalize gap-3">
                        <BiPlusCircle className="text-[#fff] text-[20px]" />
                        Add New Product
                    </Button>
                </div>
                <div className="img">
                    <img src="https://placehold.co/230x300.png" className="w-[250px]" />
                </div>
            </div>
            <DashboardBoxes />

            <div className="my-4 bg-white shadow-md card sm:rounded-lg">
                <div className="flex items-center justify-between px-5 py-5">
                    <h2 className="text-[20px] font-[600]">Recent Orders</h2>
                </div>

                <div className="relative mt-5 overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                        <thead className="text-xs !text-gray-700 uppercase !bg-gray-50 dark:bg-gray-700 dark:!text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    &nbsp;
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Order Id
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Paymant Id
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Phone Number
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Pincode
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Total Amount
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    User Id
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Order Status
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="!bg-white border-b !border-gray-200">
                                <td scope="row" className="px-6 py-4 font-medium !text-gray-900 whitespace-nowrap dark:text-white">
                                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                                        onClick={() => isShowOrderdProduct(0)}>
                                        {
                                            isOpenOrderdProduct === 0
                                                ? <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                                                : <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                                        }

                                    </Button>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-[#3872fa] font-[600]">7985632d1c1237</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-[#3872fa] font-[600]">pay_PTYT0qREEFhasa</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    DKS DEV
                                </td>
                                <td className="px-6 py-4">
                                    999888666
                                </td>
                                <td className="px-6 py-4">
                                    <span className="block w-[200px]">
                                        Mz 34 2nd floor Los Pinedos De Tutanclahuits
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    110053
                                </td>
                                <td className="px-6 py-4">
                                    1,300.00
                                </td>
                                <td className="px-6 py-4">
                                    admin@admin.com
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-primary">
                                        123abc456def
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <Badge status="cancelled" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    2025-09-12
                                </td>
                            </tr>

                            {
                                isOpenOrderdProduct === 0 && (
                                    <tr>
                                        <td className="pl-20" colSpan={6}>
                                            <div className="relative overflow-x-auto">
                                                <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                                                    <thead className="text-xs !text-gray-700 uppercase !bg-gray-50 dark:bg-gray-700 dark:!text-gray-400">
                                                        <tr>
                                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                Product Id
                                                            </th>
                                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                Paymant Title
                                                            </th>
                                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                Image
                                                            </th>
                                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                Quantity
                                                            </th>
                                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                Price
                                                            </th>
                                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                SubTotal
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="!bg-white border-b !border-gray-200">

                                                            <td className="px-6 py-4">
                                                                <span className="text-gray-600">7985632d1c1237</span>
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                A-Line Kurti With Sharara & Du...
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <img src="https://placehold.co/40x40.png" className="w-[40px] h-[40px] object-cover rounded-md" />
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                1
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                1,300.00
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                1,300.00
                                                            </td>
                                                        </tr>
                                                        <tr className="!bg-white border-b !border-gray-200">

                                                            <td className="px-6 py-4">
                                                                <span className="text-gray-600">7985632d1c1237</span>
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                A-Line Kurti With Sharara & Du...
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <img src="https://placehold.co/40x40.png" className="w-[40px] h-[40px] object-cover rounded-md" />
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                1
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                1,300.00
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                1,300.00
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }

                            <tr className="!bg-white border-b !border-gray-200">
                                <td scope="row" className="px-6 py-4 font-medium !text-gray-900 whitespace-nowrap dark:text-white">
                                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                                        onClick={() => isShowOrderdProduct(1)}>
                                        {
                                            isOpenOrderdProduct === 1
                                                ? <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                                                : <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                                        }
                                    </Button>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-[#3872fa] font-[600]">7985632d1c1237</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-[#3872fa] font-[600]">pay_PTYT0qREEFhasa</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    DKS DEV
                                </td>
                                <td className="px-6 py-4">
                                    999888666
                                </td>
                                <td className="px-6 py-4">
                                    <span className="block w-[200px]">
                                        Mz 34 2nd floor Los Pinedos De Tutanclahuits
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    110053
                                </td>
                                <td className="px-6 py-4">
                                    1,300.00
                                </td>
                                <td className="px-6 py-4 text-primary">
                                    admin@admin.com
                                </td>
                                <td className="px-6 py-4">
                                    <span className=" font-[600]">
                                        123abc456def
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <Badge status="cancelled" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    2025-09-12
                                </td>
                            </tr>

                            {
                                isOpenOrderdProduct === 1 && (
                                    <tr>
                                        <td className="pl-20" colSpan={6}>
                                            <div className="relative overflow-x-auto">
                                                <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                                                    <thead className="text-xs !text-gray-700 uppercase !bg-gray-50 dark:bg-gray-700 dark:!text-gray-400">
                                                        <tr>
                                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                Product Id
                                                            </th>
                                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                Paymant Title
                                                            </th>
                                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                Image
                                                            </th>
                                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                Quantity
                                                            </th>
                                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                Price
                                                            </th>
                                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                SubTotal
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="!bg-white border-b !border-gray-200">

                                                            <td className="px-6 py-4">
                                                                <span className="text-gray-600">7985632d1c1237</span>
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                A-Line Kurti With Sharara & Du...
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <img src="https://placehold.co/40x40.png" className="w-[40px] h-[40px] object-cover rounded-md" />
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                1
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                1,300.00
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                1,300.00
                                                            </td>
                                                        </tr>
                                                        <tr className="!bg-white border-b !border-gray-200">

                                                            <td className="px-6 py-4">
                                                                <span className="text-gray-600">7985632d1c1237</span>
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                A-Line Kurti With Sharara & Du...
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <img src="https://placehold.co/40x40.png" className="w-[40px] h-[40px] object-cover rounded-md" />
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                1
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                1,300.00
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                1,300.00
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Dashboard;