import { Button, Rating } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const MyListItems = () => {
    return (
        <div className="flex items-center w-full gap-4 p-3 cartItem pb-5 border-b border-[rgba(0,0,0,0.1)]">
            <div className="img w-[20%] rounded-md overflow-hidden">
                <Link to="/product/7845" className="group">
                    <img src="https://i.pinimg.com/736x/ff/99/29/ff9929deff8f096b442fdc7f8bce72c4.jpg" alt=""
                        className="w-full transition-all group-hover:scale-105" />
                </Link>
            </div>

            <div className="info w-[80%] relative">
                <IoCloseSharp className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all" />
                <span className="text-[13px]">Sangria</span>
                <h3 className="text-[15px]">
                    <Link className="link">A-Line Kurti With Shara Dupatta</Link>
                </h3>

                <Rating name="size-small" defaultValue={4} size="small" readOnly />

                <div className="flex items-center gap-4 mt-2 mb-2">
                    <span className="price  text-[14px] font-[600]">$58.00</span>
                    <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">$98.00</span>
                    <span className="price text-primary text-[14px] font-[600]">55% OFF</span>
                </div>

                <Button className="btn-org btn-sm">Add to Cart</Button>
            </div>
        </div>
    )
}

export default MyListItems;