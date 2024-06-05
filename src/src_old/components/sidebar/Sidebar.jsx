import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import CommentBankIcon from '@mui/icons-material/CommentBank';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';


const Sidebar = () => {
  return (
      <div className="sidebar">

        <div className="top">
            <span className="logo">lamadmin</span>
        </div>

        <div className="center">
            <ul>
                <p className="title">MAIN</p>

                <li>
                    <DashboardIcon className = "icon"/>
                    <span>Dash Board</span>
                </li>

                <p className="title">LISTS</p>

                <li>
                    <AccountCircleIcon className = "icon"/>
                    <span>Users</span>
                </li>
                <li>
                    <InventoryIcon className = "icon"/>
                    <span>Products</span>
                </li>
                <li>
                    <CreditCardIcon className = "icon"/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className = "icon"/>
                    <span>Delivery</span>
                </li>

                <p className="title">USEFUL</p>

                <li>
                    <BarChartIcon className = "icon"/>
                    <span>Stats</span></li>
                <li>
                    <NotificationsIcon className = "icon"/>
                    <span>Notification</span>
                </li>

                <p className="title">SERVICE</p>

                <li>
                    <SettingsSystemDaydreamIcon className = "icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <CommentBankIcon className = "icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className = "icon"/>
                    <span>Settings</span>
                </li>
                
                <p className="title">USER</p>

                <li>
                    <AccountBoxIcon className = "icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className = "icon"/>
                    <span>Logout</span>
                </li>

            </ul>
        </div>

        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>            
        </div>
      </div>
  )
}

export default Sidebar
