import { Button } from "@mui/material"
import { useState } from "react"
import { FaRegSquarePlus } from "react-icons/fa6"
import { FiMinusSquare } from "react-icons/fi"
import { Link } from "react-router-dom"

const CategoryCollapse = () => {
    const [submenuIndex, setSubmenuIndex] = useState(null);
    const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

    const toggleDrawer = (newOpen) => () => {
        props.setIsOpenCatPanel(newOpen);
    };

    const openSubmenu = (index) => {
        if (submenuIndex === index) {
            setSubmenuIndex(null);
        } else {
            setSubmenuIndex(index);
        }
    };

    const openInnerSubmenu = (index) => {
        if (innerSubmenuIndex === index) {
            setInnerSubmenuIndex(null);
        } else {
            setInnerSubmenuIndex(index);
        }
    };

    return (
        <>
            <div className="scroll">
                <ul className="w-full">
                    <li className="relative flex flex-col items-center list-none">
                        <Link to="/" className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Fashion</Button>
                        </Link>

                        {submenuIndex === 0 ? (
                            <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => { openSubmenu(0) }} />
                        ) : (
                            <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => { openSubmenu(0) }} />
                        )}

                        {
                            submenuIndex === 0 && (
                                <ul className="w-full pl-3 submenu">
                                    <li className="relative list-none">
                                        <Link to="/" className='w-full'>
                                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Apparel</Button>
                                        </Link>

                                        {/* Cambio a boton para retraer el menu desplegado */}
                                        {innerSubmenuIndex === 0 ? (
                                            <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => { openInnerSubmenu(0) }} />
                                        ) : (
                                            <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => (openInnerSubmenu(0))} />
                                        )}

                                        {
                                            innerSubmenuIndex === 0 && (
                                                <ul className="w-full pl-3 inner_submenu">
                                                    <li className="relative mb-1 list-none">
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Apparel</Link>
                                                    </li>
                                                    <li className="relative mb-1 list-none">
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Smart Table</Link>
                                                    </li>
                                                    <li className="relative mb-1 list-none">
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Crepe T-Shirt</Link>
                                                    </li>
                                                    <li className="relative mb-1 list-none">
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Leather Watch</Link>
                                                    </li>
                                                    <li className="relative mb-1 list-none">
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Rolling Diamond</Link>
                                                    </li>
                                                </ul>
                                            )
                                        }


                                    </li>
                                </ul>
                            )
                        }


                    </li>

                    <li className="relative flex flex-col items-center list-none">
                        <Link to="/" className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Outerwear</Button>
                        </Link>

                        {submenuIndex === 1 ? (
                            <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => { openSubmenu(1) }} />
                        ) : (
                            <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => { openSubmenu(1) }} />
                        )}

                        {
                            submenuIndex === 1 && (
                                <ul className="w-full pl-3 submenu">
                                    <li className="relative list-none">
                                        <Link to="/" className='w-full'>
                                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Apparel</Button>
                                        </Link>

                                        {/* Cambio a boton para retraer el menu desplegado */}
                                        {innerSubmenuIndex === 1 ? (
                                            <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => { openInnerSubmenu(1) }} />
                                        ) : (
                                            <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => (openInnerSubmenu(1))} />
                                        )}

                                        {
                                            innerSubmenuIndex === 1 && (
                                                <ul className="w-full pl-3 inner_submenu">
                                                    <li className="relative mb-1 list-none">
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Apparel</Link>
                                                    </li>
                                                    <li className="relative mb-1 list-none">
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Smart Table</Link>
                                                    </li>
                                                    <li className="relative mb-1 list-none">
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Crepe T-Shirt</Link>
                                                    </li>
                                                    <li className="relative mb-1 list-none">
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Leather Watch</Link>
                                                    </li>
                                                    <li className="relative mb-1 list-none">
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Rolling Diamond</Link>
                                                    </li>
                                                </ul>
                                            )
                                        }


                                    </li>
                                </ul>
                            )
                        }


                    </li>
                </ul>
            </div>
        </>
    )
}

export default CategoryCollapse;