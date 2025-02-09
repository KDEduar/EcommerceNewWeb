import { Button, Checkbox, FormControlLabel, Rating } from "@mui/material";
import "../Sidebar/style.css";

import { Collapse } from 'react-collapse';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useState } from "react";

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const Sidebar = () => {
    const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
    const [isOpenAvailFilter, setIsOpenAvailFilter] = useState(true);
    const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);

    return (
        <aside className="py-5 sidebar">
            <div className="box">
                <h3 className="mb-3 text-[18px] w-full font-[600] flex items-center">Shop by Category
                    <Button className="!ml-auto !text-[#000] !w-[30px] !h-[30px] !min-w-[30px] !rounded-full" onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}>
                        {
                            isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />
                        }
                    </Button>
                </h3>
                <Collapse isOpened={isOpenCategoryFilter}>
                    <div className="scroll px-3 relative -left-[10px]">
                        <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className="w-full" size="small" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Electronics" className="w-full" size="small" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Bags" className="w-full" size="small" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Footwear" className="w-full" size="small" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Groceries" className="w-full" size="small" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Beauty" className="w-full" size="small" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Wellness" className="w-full" size="small" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Jewellery" className="w-full" size="small" />
                    </div>
                </Collapse>
            </div>

            <div className="box">
                <h3 className="mb-3 text-[18px] w-full font-[600] flex items-center">Availability
                    <Button className="!ml-auto !text-[#000] !w-[30px] !h-[30px] !min-w-[30px] !rounded-full" onClick={() => setIsOpenAvailFilter(!isOpenAvailFilter)}>
                        {
                            isOpenAvailFilter === true ? <FaAngleUp /> : <FaAngleDown />
                        }
                    </Button>
                </h3>
                <Collapse isOpened={isOpenAvailFilter}>
                    <div className="scroll px-3 relative -left-[10px]">
                        <FormControlLabel control={<Checkbox size="small" />} label="Available (17)" className="w-full" size="small" />
                        <FormControlLabel control={<Checkbox size="small" />} label="In stock (10)" className="w-full" size="small" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Not Available (15)" className="w-full" size="small" />
                    </div>
                </Collapse>
            </div>

            <div className="box">
                <h3 className="mb-3 text-[18px] w-full font-[600] flex items-center">Size
                    <Button className="!ml-auto !text-[#000] !w-[30px] !h-[30px] !min-w-[30px] !rounded-full" onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}>
                        {
                            isOpenSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />
                        }
                    </Button>
                </h3>
                <Collapse isOpened={isOpenSizeFilter}>
                    <div className="scroll px-3 relative -left-[10px]">
                        <FormControlLabel control={<Checkbox size="small" />} label="Small (11)" className="w-full" size="small" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Medium (10)" className="w-full" size="small" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Large (7)" className="w-full" size="small" />
                        <FormControlLabel control={<Checkbox size="small" />} label="XL (3)" className="w-full" size="small" />
                        <FormControlLabel control={<Checkbox size="small" />} label="XXL (5)" className="w-full" size="small" />
                    </div>
                </Collapse>
            </div>

            <div className="box">
                <h3 className="mb-3 text-[18px] pr-5 w-full font-[600] flex items-center">
                    Price Filter By Price
                </h3>
                <RangeSlider />
                <div className="flex pt-4 pb-2 priceRange">
                    <span className="text-[13px]">
                        From: <strong className="text-black">Rs: {1000}</strong>
                    </span>
                    <span className="text-[13px] ml-auto">
                        From: <strong className="text-black">Rs: {5000}</strong>
                    </span>
                </div>
            </div>

            <div className="box">
                <h3 className="mb-3 text-[18px] pr-5 w-full font-[600] flex items-center">Filter By Rating</h3>
                <div className="w-full">
                    <Rating name="size-small" defaultValue={5} size="small" readOnly />
                </div>
                <div className="w-ful">
                    <Rating name="size-small" defaultValue={4} size="small" readOnly />
                </div>
                <div className="w-ful">
                    <Rating name="size-small" defaultValue={3} size="small" readOnly />
                </div>
                <div className="w-ful">
                    <Rating name="size-small" defaultValue={2} size="small" readOnly />
                </div>
                <div className="w-ful">
                    <Rating name="size-small" defaultValue={1} size="small" readOnly />
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;