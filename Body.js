import {Button,Text} from 'react-native';
import { useState } from 'react';


export default function Body({onSubmit}) {
    const [count,setCount]=useState(10);

    function addBody(num){
        onSubmit(count,num,setCount);
    }
    

    return (<>
        <Text>This is the Body count: {count}</Text>
        <Button title='Add 1 to body count' onPress={()=>{addBody(1)}}></Button>
    </>);
}