import React from 'react';
import {useHistory} from 'react-router-dom';

const Home = (props)=>{
    const history = useHistory();
    if(props.location.state && props.location.state.isAuthenticated){
        return(
            <>
            <h1>WELCOME</h1>
            </>
        );
    }else{
        history.push('/login');
    }
    
}

export default Home;