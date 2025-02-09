
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { ProductZoom } from '../../components/ProductZoom';

export const ProductDetails = () => {
    return (
        <section className="py-4 pb-0">
            <div className="container">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/" className="transition link">
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/" className="transition link">
                        Details
                    </Link>
                </Breadcrumbs>
            </div>

            <div className="container">
                <div className="productZoomContainer">
                    <ProductZoom />
                </div>
            </div>
        </section>
    );
};