import React from 'react';
import "./FeaturedInfo.css"
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';

const Featuredinfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,000</span>
                    <span className="featuredRate negative">-$5,000 <ArrowDownward /> </span>
                </div>

                <span className="featuredSub">Compared to last month</span>
            </div>
            
            {/* Second Featured Info*/}
            <div className="featuredItem">
                <span className="featuredTitle">Sale</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,000</span>
                    <span className="featuredRate negative">-$5,000 <ArrowDownward /> </span>
                </div>

                <span className="featuredSub">Compared to last month</span>
            </div>

            {/* Third Featured Info*/}
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,000</span>
                    <span className="featuredRate">$5,000 <ArrowUpward /> </span>
                </div>

                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    );
}

export default Featuredinfo;
