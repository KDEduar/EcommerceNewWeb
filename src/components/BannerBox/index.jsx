import { Link } from "react-router-dom";

const BannerBox = (props) => {
    return (
        <div className="overflow-hidden rounded-lg box bannerBox group">
            <Link to="/">
                <img src={props.img} alt="" className="w-full transition-all group-hover:scale-105 group-hover:rotate-1" />
            </Link>
        </div>
    )
}

export default BannerBox;