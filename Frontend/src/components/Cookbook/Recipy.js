import React from 'react';
import '../../styles/Recipy.css'


export default function Recipy({id}) {
    const [recipy, setRecipy] = React.useState({recipy : {}});
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [error, setError] = React.useState(null);
    const API_ADDR = process.env.REACT_APP_API_SERV_ADDR
    
    const getRecipy = (e) => {
        fetch( `http://${API_ADDR}/api/v1/cookbook/recipy/${e}/`)
            .then(data => data.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setRecipy( { recipy : result } );
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }
    
    React.useEffect(() => {
        if (id) {
            getRecipy(id)
        }
    }, [id]
    )

    if (error) {
        return <div>Ошибка {error.message}</div>;
    }
    else if (!isLoaded) {
        return <div>Загрузка...</div>;
    }
    else {
        return (
                <div className='card'>
                    <img className='foodPic' src={recipy.recipy.picture} />
                    <div className='recipyName'>{recipy.recipy.name}</div>
                    <div className='recipyContent'>{recipy.recipy.context}</div>
                </div>
        );
    }
}