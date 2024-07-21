import * as React from 'react';
import "./Nav.scss";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Link, Outlet } from 'react-router-dom';

const pages = ['Home', 'Inventory', 'Checkout', 'Procedure', 'Customer'];

function Nav() {
  return (
    <div style={{display: 'grid', gridTemplateRows: 'auto 1fr', maxHeight: '100%'}}>
      <nav className='nav-container'>
        <div className='left-container'>
            <h1>Minfigs Bricks and More</h1>
        </div>
        <div className='right-container'>
          {pages.map((page) => {
            return <Link className='link' to={page !== "Home" ? page : "/"}>{page}</Link>
          })}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
export default Nav;