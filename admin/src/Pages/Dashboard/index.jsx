import { useState } from "react";
import { Link } from "react-router-dom";

import { Button, MenuItem, Pagination, Select, Tooltip } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { BiPlus, BiPlusCircle } from "react-icons/bi";

import { FaAngleUp, FaRegEye } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegTrashCan } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";

import DashboardBoxes from "../../components/DashboardBoxes";
import Badge from "../../components/Badge";
import Progress from "../../components/ProgressBar";
import TableMui from "../../components/TableMui";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Dashboard = () => {
    const [isOpenOrderdProduct, setIsOpenOrderdProduct] = useState(null);

    const [categoryFilterVal, setCategoryFilterVal] = useState('');

    const handleChangeCatFilter = (event) => {
        setCategoryFilterVal(event.target.value);
    };

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
                    <h2 className="text-[20px] font-[600]">Products <span className="font-[400] text-[14px]">(Tailwind Css Table)</span></h2>
                </div>

                <div className="flex items-center justify-between w-full pl-5">
                    <div className="col w-[20%]">
                        <h4 className="font-[600] text-[13px] mb-2">Category By</h4>
                        <Select
                            className="w-full mb-3"
                            size="small"
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={categoryFilterVal}
                            onChange={handleChangeCatFilter}
                            label="Category"
                        >
                            <MenuItem value="">
                                <em>All</em>
                            </MenuItem>
                            <MenuItem value={10}>Men</MenuItem>
                            <MenuItem value={20}>Women</MenuItem>
                            <MenuItem value={30}>Kids</MenuItem>
                        </Select>
                    </div>

                    <div className="col w-[20%] ml-auto flex items-center gap-3">
                        <Button className="btn !bg-green-500 !text-white gap-1 btn-sm">
                            <TbFileExport className="text-[17px]" />
                            Export</Button>
                        <Button className="btn-blue !text-white gap-1 btn-sm">
                            <BiPlus className="text-[18px]" />
                            Add Product</Button>
                    </div>
                </div>

                <div className="relative overflow-x-auto">
                    <table className="w-full mb-5 text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                        <thead className="text-xs !text-gray-700 uppercase !bg-gray-50 dark:bg-gray-700 dark:!text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3" width="5%">
                                    <div className="w-[60px]">
                                        <Checkbox {...label} size="small" />
                                    </div>
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Sub Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Sales
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200 odd:bg-white even:bg-gray-50 dark:border-gray-300">
                                <td className="px-6 py-2">
                                    <div className="w-[60px]">
                                        <Checkbox {...label} size="small" />
                                    </div>
                                </td>

                                <td className="px-2 py-2">
                                    <div className="flex items-center gap-4 w-[550px]">
                                        <div className="w-[65px] h-[65px] rounded-md overflow-hidden group">
                                            <Link to="/product/45745">
                                                <img src="https://placehold.co/65x65.png" className="w-full transition-all group-hover:scale-105" />
                                            </Link>
                                        </div>
                                        <div className="info w-[85%]">
                                            <h3 className="font-[600] text-[14px] leading-4 hover:text-primary">
                                                <Link to="/product/45745">
                                                    VNEED Men Embroider rayon kurta shirt | Kurt set for Men
                                                </Link>
                                            </h3>
                                            <p className="text-[12px]">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis debitis accusantium.
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-6 py-2">
                                    Electronics
                                </td>

                                <td className="px-6 py-2">
                                    Women
                                </td>

                                <td className="px-6 py-2">
                                    <div className="flex flex-col gap-1">
                                        <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                                            $78.00
                                        </span>
                                        <span className="price text-primary text-[14px] font-[600]">
                                            $58.00
                                        </span>
                                    </div>
                                </td>

                                <td className="px-6 py-2">
                                    <p className="text-[14px] w-[100px]">
                                        <span className="font-[600]">234</span> Sales
                                    </p>
                                    <Progress value={50} type="warning" />
                                </td>

                                {/* Botones de accion */}
                                <td className="px-6 py-2">
                                    <div className="flex items-center gap-4">
                                        <Tooltip title="Edit Product" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border-2 !border-[rgba(0,0,0,0.7] !rounded-full hover:!bg-[#f1f1f1]">
                                                <AiOutlineEdit className="text-[22px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip title="View Product Details" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border-2 !border-[rgba(0,0,0,0.7] !rounded-full hover:!bg-[#f1f1f1]">
                                                <FaRegEye className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip title="Remove Product" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border-2 !border-[rgba(0,0,0,0.7] !rounded-full hover:!bg-[#f1f1f1]">
                                                <FaRegTrashCan className="text-[18px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>
                                    </div>
                                </td>
                            </tr>

                            <tr className="border-b border-gray-200 odd:bg-white even:bg-gray-50 dark:border-gray-300">
                                <td className="px-6 py-2">
                                    <div className="w-[60px]">
                                        <Checkbox {...label} size="small" />
                                    </div>
                                </td>

                                <td className="px-2 py-2">
                                    <div className="flex items-center gap-4 w-[550px]">
                                        <div className="w-[65px] h-[65px] rounded-md overflow-hidden group">
                                            <Link to="/product/45745">
                                                <img src="https://placehold.co/65x65.png" className="w-full transition-all group-hover:scale-105" />
                                            </Link>
                                        </div>
                                        <div className="info w-[85%]">
                                            <h3 className="font-[600] text-[14px] leading-4 hover:text-primary">
                                                <Link to="/product/45745">
                                                    VNEED Men Embroider rayon kurta shirt | Kurt set for Men
                                                </Link>
                                            </h3>
                                            <p className="text-[12px]">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis debitis accusantium.
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-6 py-2">
                                    Electronics
                                </td>

                                <td className="px-6 py-2">
                                    Women
                                </td>

                                <td className="px-6 py-2">
                                    <div className="flex flex-col gap-1">
                                        <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                                            $78.00
                                        </span>
                                        <span className="price text-primary text-[14px] font-[600]">
                                            $58.00
                                        </span>
                                    </div>
                                </td>

                                <td className="px-6 py-2">
                                    <p className="text-[14px] w-[100px]">
                                        <span className="font-[600]">234</span> Sales
                                    </p>
                                    <Progress value={100} type="success" />
                                </td>

                                {/* Botones de accion */}
                                <td className="px-6 py-2">
                                    <div className="flex items-center gap-4">
                                        <Tooltip title="Edit Product" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border-2 !border-[rgba(0,0,0,0.7] !rounded-full hover:!bg-[#f1f1f1]">
                                                <AiOutlineEdit className="text-[22px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip title="View Product Details" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border-2 !border-[rgba(0,0,0,0.7] !rounded-full hover:!bg-[#f1f1f1]">
                                                <FaRegEye className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip title="Remove Product" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border-2 !border-[rgba(0,0,0,0.7] !rounded-full hover:!bg-[#f1f1f1]">
                                                <FaRegTrashCan className="text-[18px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex items-center justify-center pb-5">
                    <Pagination count={10} color="primary" />
                </div>
            </div >

            <div className="my-4 bg-white shadow-md card sm:rounded-lg">
                <TableMui />
            </div>

            {/* Recent Orders Table */}
            <div className="my-4 bg-white shadow-md card sm:rounded-lg">
                <div className="flex items-center justify-between px-5 py-5">
                    <h2 className="text-[20px] font-[600]">Recent Orders</h2>
                </div>

                <div className="flex items-center justify-between w-full pl-5">
                    <div className="col w-[20%]">
                        <h4 className="font-[600] text-[13px] mb-2">Orders By</h4>
                        <Select
                            className="w-full mb-3"
                            size="small"
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={categoryFilterVal}
                            onChange={handleChangeCatFilter}
                            label="Category"
                        >
                            <MenuItem value="">
                                <em>All</em>
                            </MenuItem>
                            <MenuItem value={10}>Men</MenuItem>
                            <MenuItem value={20}>Women</MenuItem>
                            <MenuItem value={30}>Kids</MenuItem>
                        </Select>
                    </div>

                    <div className="col w-[20%] ml-auto flex items-center gap-3">
                        <Button className="btn !bg-green-500 !text-white gap-1 btn-sm">
                            <TbFileExport className="text-[17px]" />
                            Export</Button>
                        <Button className="btn-blue !text-white gap-1 btn-sm">
                            <BiPlus className="text-[18px]" />
                            Add Product</Button>
                    </div>
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
                                        onClick={() => isShowOrderdProduct(3)}>
                                        {
                                            isOpenOrderdProduct === 3
                                                ? <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                                                : <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                                        }

                                    </Button>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-primary font-[600]">7985632d1c1237</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-primary font-[600]">pay_PTYT0qREEFhasa</span>
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
                                    <span className="font-[600] text-primary">
                                        123abc456def
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <Badge status="confirm" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    2025-09-12
                                </td>
                            </tr>

                            {
                                isOpenOrderdProduct === 3 && (
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
                                        onClick={() => isShowOrderdProduct(4)}>
                                        {
                                            isOpenOrderdProduct === 1
                                                ? <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                                                : <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                                        }
                                    </Button>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-primary font-[600]">7985632d1c1237</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-primary font-[600]">pay_PTYT0qREEFhasa</span>
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
                                    <span className="font-[600] text-primary">
                                        123abc456def
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <Badge status="confirm" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    2025-09-12
                                </td>
                            </tr>

                            {
                                isOpenOrderdProduct === 4 && (
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