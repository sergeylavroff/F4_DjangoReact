import React from 'react';
import { useOutletContext, useParams } from "react-router-dom";
import Recipy from './Recipy';
import '../../styles/Category.css'


export default function Category(props) {
    const category = useOutletContext();
    const { id } = useParams("id");
    return (
                <div className='category'>
                    {category.map(cat => {
                        if ( String( id )  == String(cat.id)) {
                                return cat.recipy.map( rec => {
                                    return <Recipy id={rec} />
                                })
                            }
                        })
                    
                    }
                </div>
        );
    } 