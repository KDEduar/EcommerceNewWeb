import { IoIosArrowForward, IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";

const BlogItem = () => {
    return (
        <div className="blogItem group">
            <div className="relative w-full overflow-hidden rounded-md cursor-pointer imgWrapper">
                <img src="https://www.tiendasel.com/arquivos/2blog.jpg?v=637208406136600000" alt="blog image" className="w-full transition-all group-hover:scale-105 group-hover:rotate-1" />
                <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-2 text-[12px] font-[500] gap-1">
                    <IoMdTime className="text-[16px]" /> 5 OCTOBER, 2024
                </span>
            </div>

            <div className="py-4 info">
                <h2 className="text-[16px] font-[600] text-black">
                    <Link to="/" className="link">Nullam ullam ornare molesties</Link>
                </h2>
                <p className="text-[14px] mb-4 font-[400] text-[rgba(0,0,0,0.8)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, qui! Corrupti...</p>
                <Link to="/" className="link font-[500] flex items-center gap-1 text-[14px]">
                    Read More <IoIosArrowForward />
                </Link>
            </div>
        </div>
    )
}

export default BlogItem;