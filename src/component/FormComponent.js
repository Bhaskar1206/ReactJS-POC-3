import { useState } from "react";
import {useHistory} from 'react-router-dom';
import AuthenticationService from './AuthenticationService'

const FormComponent=()=>{
    const history = useHistory();

    const [values, setValues] = useState(
        {
            username:'',
            password:''
        }
    )

    console.log(values)
    const handleChanges = e =>{

        const {name,value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = e=> {
        e.preventDefault();

        if(values.username==="Bhaskar" && values.password==="pass123"){
            history.push('/home');
            AuthenticationService.registrationSuccesLogin(values.username,values.password);
            console.log("success");
        }
        else{
            console.log("fail")
        }
    }
    return { values, handleChanges,handleSubmit}

}
export default FormComponent;