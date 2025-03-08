import { Button, Checkbox, MenuItem, Pagination, Select, Tooltip } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Progress from '../ProgressBar';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FaRegEye } from 'react-icons/fa';
import { AiOutlineEdit } from 'react-icons/ai';

const columns = [
    { id: 'product', label: 'PRODUCT', minWidth: 100 },
    { id: 'category', label: 'CATEGORY', minWidth: 100 },
    {
        id: 'subcategory',
        label: 'SUB CATEGORY',
        minWidth: 50,
    },
    {
        id: 'price',
        label: 'PRICE',
        minWidth: 50,
    },
    {
        id: 'sales',
        label: 'SALES',
        minWidth: 100,
    },
    {
        id: 'action',
        label: 'ACTION',
        minWidth: 120,
    },
];

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const TableMui = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <div className="flex items-center justify-between px-5 py-5">
                <h2 className="text-[20px] font-[600]">Products
                    <span className="font-[400] text-[14px]">(Material Ui Table)</span>
                </h2>
            </div>

            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Checkbox {...label} size='small' />
                            </TableCell>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell style={{ minWidth: columns.minWidth }}>
                                <Checkbox {...label} size='small' />
                            </TableCell>
                            <TableCell style={{ minWidth: columns.minWidth }}>
                                <div className="flex items-center gap-4">
                                    <div className="w-[65px] h-[65px] rounded-md overflow-hidden group">
                                        <Link to="/product/45745" data-discover="true">
                                            <img src="https://placehold.co/65x65.png" className="w-full transition-all group-hover:scale-105" />
                                        </Link>
                                    </div>
                                    <div className="info w-[75%]">
                                        <h3 className="font-[600] text-[14px] leading-4 hover:text-primary">
                                            <a href="/product/45745" data-discover="true">VNEED Men Embroider rayon kurta shirt | Kurt set for Men</a>
                                        </h3>
                                        <span className="text-[12px]">Books</span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell style={{ minWidth: columns.minWidth }}>
                                Smart Tv
                            </TableCell>
                            <TableCell style={{ minWidth: columns.minWidth }}>
                                Men
                            </TableCell>
                            <TableCell style={{ minWidth: columns.minWidth }}>
                                <div className="flex flex-col gap-1">
                                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                                        $78.00
                                    </span>
                                    <span className="price text-primary text-[14px] font-[600]">
                                        $58.00
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell style={{ minWidth: columns.minWidth }}>
                                <p className="text-[14px] w-[100px]">
                                    <span className="font-[600]">234</span> Sales
                                </p>
                                <Progress value={40} type="success" />
                            </TableCell>

                            <TableCell style={{ minWidth: columns.minWidth }}>
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
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{ minWidth: columns.minWidth }}>
                                <Checkbox {...label} size='small' />
                            </TableCell>
                            <TableCell style={{ minWidth: columns.minWidth }}>
                                <div className="flex items-center gap-4">
                                    <div className="w-[65px] h-[65px] rounded-md overflow-hidden group">
                                        <Link to="/product/45745" data-discover="true">
                                            <img src="https://placehold.co/65x65.png" className="w-full transition-all group-hover:scale-105" />
                                        </Link>
                                    </div>
                                    <div className="info w-[75%]">
                                        <h3 className="font-[600] text-[14px] leading-4 hover:text-primary">
                                            <a href="/product/45745" data-discover="true">VNEED Men Embroider rayon kurta shirt | Kurt set for Men</a>
                                        </h3>
                                        <span className="text-[12px]">Books</span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell style={{ minWidth: columns.minWidth }}>
                                Smart Tv
                            </TableCell>
                            <TableCell style={{ minWidth: columns.minWidth }}>
                                Men
                            </TableCell>
                            <TableCell style={{ minWidth: columns.minWidth }}>
                                <div className="flex flex-col gap-1">
                                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                                        $78.00
                                    </span>
                                    <span className="price text-primary text-[14px] font-[600]">
                                        $58.00
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell style={{ minWidth: columns.minWidth }}>
                                <p className="text-[14px] w-[100px]">
                                    <span className="font-[600]">234</span> Sales
                                </p>
                                <Progress value={40} type="success" />
                            </TableCell>

                            <TableCell style={{ minWidth: columns.minWidth }}>
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
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={10}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

            <div className="flex items-center justify-center pb-5">
                <Pagination count={10} color="primary" />
            </div>
        </>
    );
};

export default TableMui;