import { Link } from "react-router-dom";
import Chart from "../../Components/Chart/Chart";
import { productsData } from "../../datas";

import PublishIcon from '@mui/icons-material/Publish';

import './product.css'

export default function product() {
    return(
        <div className="product">

            <div className="productTitleContainer">
                    <h1 className="productTitle">Product</h1>
                    <Link to="/newProduct">
                        <button className="productAddButton">Create</button>
                    </Link>
            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    <Chart title="Sale in Month" data={productsData} dataKey='sales'/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="/images/me.jpg" alt="me" className="productInfoImg" />
                        <span className="productName">Dell laptop</span>
                    </div>

                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productinfoKey">ID:</div>
                            <div className="productinfValue">132</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productinfoKey">Name:</div>
                            <div className="productinfValue">Dell laptop</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productinfoKey">Sales</div>
                            <div className="productinfValue">$900</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productinfoKey">Active:</div>
                            <div className="productinfValue">Yes</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productinfoKey">In Stock</div>
                            <div className="productinfValue">No</div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="productBottom">
                <form  className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Dell laptop" />

                        <label>In Stock</label>
                        <input type="text" />
                        <select id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                        <label>Active</label>
                        <select id="in Stock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUploader">
                            <img src="/images/me.jpg" alt="profile photo" className="productUploadImg" />
                            <label>
                                <PublishIcon />
                            </label>
                            <input type="file" style={{display:"none"}} />
                        </div>
                        <button className="productButton">Upload(Edit)</button>
                    </div>
                </form>
            </div>

        </div>
    )

}