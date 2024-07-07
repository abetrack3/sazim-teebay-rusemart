import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {

    return (
        <>
            <div className="flex flex-col mt-12 justify-center items-center">
                <div className="flex justify-center w-3/5 mb-8 gap-3">
                    <h1 className="text-3xl font-extrabold">MARKETPLACE</h1>
                    <Divider orientation="vertical" sx={{ borderRightWidth: 5}} flexItem />
                    <Link to={'/my-product'}><h1 className="text-3xl ">MY PRODUCTS</h1></Link>
                </div>
            </div>
        </>
    );

};

export default HomePage;

