import React from 'react';
import { userData } from '../../../dummyData';
import Chart from '../../chart/chart';
import Featuredinfo from '../../featuredInfo/FeaturedInfo';
import WidgetLg from '../../widgetLg/WidgetLg';
import WidgetSm from '../../widgetSm/WidgetSm';

import "./Home.css"


const Home = () => {
    return (
        <div className="home">
            <Featuredinfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
        
    );
}

export default Home;
