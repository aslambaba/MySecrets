import React, { useRef } from 'react';

function Home({navigation}){
    const name = useRef('');
    const toMedia = ()=> {
        console.log(name.current.value);
        const data = {
            name,
        }
        navigation.navigate('Media', data)
    }
    return(
        <div>
            <h1>This Is Home Page</h1>
            <input placeholder= 'Enter Your Name' ref={name} />
            <button onClick={toMedia}>Go to Media</button>
        </div>
    )
}

export default Home
