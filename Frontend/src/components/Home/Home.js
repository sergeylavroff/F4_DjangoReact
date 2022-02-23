import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
        <nav>
        <Link to="/cookbook">Cookbook</Link> | {" "} 
        <Link to="/users">Users</Link>
        </nav> 
        
        <h2>Home</h2>

        <Outlet />

        </div>
        
        
    );
}

export default Home;