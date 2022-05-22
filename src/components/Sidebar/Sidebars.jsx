import { LineStyle, Timeline, TrendingUp, AccountCircle, Article, Paid, BarChart, MailOutlineOutlined, RateReviewOutlined, MessageOutlined, ManageAccountsOutlined, BugReportOutlined} from '@mui/icons-material'
import React from 'react'
import "./Sidebars.css"
export const Sidebars = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
            {/* First Component */}
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon"/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
            </div>


            {/* Second Component */}
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <AccountCircle className="sidebarIcon"/>
                        Users
                    </li>
                    <li className="sidebarListItem">
                        <Article className="sidebarIcon"/>
                        Articles
                    </li>
                    <li className="sidebarListItem">
                        <Paid className="sidebarIcon"/>
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <BarChart className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>

            {/* Third Component */}
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MailOutlineOutlined className="sidebarIcon"/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <RateReviewOutlined className="sidebarIcon"/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <MessageOutlined className="sidebarIcon"/>
                        Messages
                    </li>
                </ul>
            </div>

            {/* Fourth Component */}
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Admin</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <ManageAccountsOutlined className="sidebarIcon"/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <BugReportOutlined className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}


