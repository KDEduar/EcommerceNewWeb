import { RiMenu2Line } from 'react-icons/ri';
import Button from '@mui/material/Button';

const Header = () => {
    return (
        <header className="w-full h-[50px] pl-52 bg-[#f1f1f1] flex items-center justify-between">
            <div className="part1">
                <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full'>
                    <RiMenu2Line className='text-[18px] text-[rgba(0,0,0,0.8)]' />
                </Button>
            </div>
        </header>
    );
};

export default Header;