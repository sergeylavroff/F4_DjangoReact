import React from 'react';
import Category from './Category';
import axios from 'axios';
import { Outlet, Link } from 'react-router-dom';

const Cookbook = () => {
    const [category, setCategory] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [error, setError] = React.useState(null);
    const API_ADDR = process.env.REACT_APP_API_SERV_ADDR
    
    function getCategory() {
        axios.get( `http://${API_ADDR}/api/v1/cookbook/`)
            .then(res => {
                setIsLoaded(true);
                setCategory( res.data );
            })
            .catch(err => {
                    setIsLoaded(true);
                    setError(err);
                }
            );
    };

    if (!isLoaded) {
        getCategory();
    }
    
    if (error) {
        return <div>Ошибка {error.message}</div>;
    }
    else if (!isLoaded) {
        return <div>Загрузка...</div>;
    }
    else {
        console.log(category);
        return (
                <>
                <div className='cookbook'>
                    <ul>
                    {category.map(cat =>
                        
                        <li key={cat.id}>
                        <Link to={"/cookbook/" + cat.id}>{cat.name}</Link>
                        </li>
                        
                        )}
                    </ul>
                </div>
                <Outlet context={category}/>
                </>
        );
    }
};

export default Cookbook;