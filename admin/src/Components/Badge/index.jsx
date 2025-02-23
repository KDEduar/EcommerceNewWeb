
const Badge = (props) => {
    return (
        <span
            className={`inline-block px-4 py-1 text-[12px] capitalize rounded-full
        ${props.status === 'pending' && 'bg-primary text-white'}
        ${props.status === 'confirm' && 'bg-green-500 text-white'}
        ${props.status === 'delivered' && 'bg-green-700 text-white'}
        ${props.status === 'cancelled' && 'bg-red-500 text-white'}`}
        >
            {props.status}
        </span>
    );
};

export default Badge;