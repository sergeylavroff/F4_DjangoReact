import React from "react";
import { Route, Link, Switch, Routes } from "react-router-dom";
import Home from "./Home/Home.js";
import Users from "./Users/Users.js";
import Cookbook from "./Cookbook/Cookbook.js";
import Category from './Cookbook/Category';
import '../styles/Main.css'


export default function Main() {
    return (
        <>
        
        <div className="Main">
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="users" element={<Users />} />
                    <Route path="cookbook" element={<Cookbook />}>
                        <Route path=':id' element={<Category />}/>
                    </Route>
                </Route>
            </Routes>
        
        </div>
        </>
    );
}