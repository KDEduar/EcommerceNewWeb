import { useState } from "react";
import { Button } from "@mui/material";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export const QtyBox = () => {
    const [qtyVal, setQtyVal] = useState(1);
    const plusQty = () => {
        setQtyVal(qtyVal + 1);
    }

    const minusQty = () => {
        if (qtyVal === 1) {
            setQtyVal(1);
        } else {
            setQtyVal(qtyVal - 1);
        }
    }

    return (
        <div className="relative flex items-center gap-2 qtyBox">
            <input
                type="number"
                value={qtyVal}
                className="w-full h-[40px] focus:outline-none border border-[rgba(0,0,0,0.2)] rounded-md p-2 pl-5 text-[15px]" />

            <div className="flex flex-col items-center justify-between h-[40px] absolute right-0 top-0 z-50">
                <Button
                    onClick={plusQty}
                    className="!min-w-[30px] !w-[30px] !h-[20px] !text-[#000] hover:!bg-[#f1f1f1] !rounded-none">
                    <FaAngleUp className="text-[12px] opacity-55" />
                </Button>
                <Button
                    onClick={minusQty}
                    className="!min-w-[30px] !w-[30px] !h-[20px] !text-[#000] hover:!bg-[#f1f1f1] !rounded-none">
                    <FaAngleDown className="text-[12px] opacity-55" />
                </Button>
            </div>
        </div>
    );
};