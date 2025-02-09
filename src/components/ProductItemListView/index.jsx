import { Link } from "react-router-dom";
import "../ProductItem/style.css";
import Rating from '@mui/material/Rating';
import { Button, Tooltip } from "@mui/material";
import { MdOutlineShoppingCart, MdZoomOutMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";

const ProductItemListView = () => {
    return (
        <div className="overflow-hidden shadow-lg rounded-md productItem border-1 border-[rgba(0,0,0,0.1)] flex items-center">
            <div className="group imgWrapper w-[25%] overflow-hidden rounded-md relative">
                <Link to="/">
                    <div className="img h-[295px] overflow-hidden">
                        <img src="https://tiendasel.vteximg.com.br/arquivos/ids/20015720-455-455/-new_desc----marca-donatelli----modelo-3slsl001----genero-hombre----entalle-modern-fit----labrado-no----planchado-si----tipo-de-pu%C3%B1o-pu%C3%91o-simple----co.jpg?v=638294845777000000" alt="" className="w-full" />

                        {/* Animación de imagen al hacer hover */}
                        <img src="https://tiendasel.vteximg.com.br/arquivos/ids/20015349-455-455/-new_desc----marca-donatelli----modelo-3slsl011----genero-hombre----entalle-slim-fit----labrado-no----planchado-si----tipo-de-pu%C3%B1o-pu%C3%91o-simple----comp.jpg?v=638294844630030000" alt="" className="absolute top-0 left-0 w-full opacity-0 group-hover:opacity-100" />
                    </div>
                </Link>

                <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[13px] font-[500]">50%</span>

                {/* Botones de acción sobre img de slider products    */}
                <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[10px]">
                    <Tooltip title="View Product Details" placement="left-start">
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary hover:text-white text-black group">
                            <MdZoomOutMap className="text-[20px] !text-black group-hover:text-white hover:!text-white" />
                        </Button>
                    </Tooltip>
                    <Tooltip title="More" placement="left-start">
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary hover:text-white text-black group">
                            <IoGitCompareOutline className="text-[20px] !text-black group-hover:text-white hover:!text-white" />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Like" placement="left-start">
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary hover:text-white text-black group">
                            <FaRegHeart className="text-[20px] !text-black group-hover:text-white hover:!text-white" />
                        </Button>
                    </Tooltip>
                </div>
            </div>

            <div className="p-3 py-5 px-8 info w-[75%]">
                <h6 className="text-[14px]">
                    <Link to="/" className="transition-all link">DONATELLI</Link>
                </h6>
                <h3 className="text-[20px] title mt-3 font-[500] mb-3 text-[#000]">
                    <Link to="/" className="transition-all link">CAMISA ALEJANDRO NEGRO</Link>
                </h3>

                <p className="text-[14px] text-gray-500 mb-3 font-[500]">
                    A stylish black shirt perfect for any occasion. Made from high-quality fabric, it offers a modern fit and a sleek look. Ideal for both formal and casual wear.
                </p>

                <Rating name="size-small" defaultValue={4} size="small" readOnly />

                <div className="flex items-center gap-4">
                    <span className="text-gray-500 line-through oldPrice text-[16px] font-[500]">$119.00</span>
                    <span className="price text-primary text-[20px] font-bold">$59.00</span>
                </div>

                <div className="mt-3">
                    <Button className="flex gap-2 btn-org">
                        <MdOutlineShoppingCart className="text-[17px]" />
                        Add to Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductItemListView;