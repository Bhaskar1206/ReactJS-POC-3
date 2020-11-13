
import { useState } from "react";

 const EmployeeData = ()=>{

    const [employees,setEmployees] = useState([
        {
            id:'1',
            name:'Ron',
            salary:'20000'
        },
        {
            id:'2',
            name:'Merry',
            salary:'25000'
        },
        {
            id:'3',
            name:'Jems',
            salary:'30000'
        },
        {
            id:'4',
            name:'Harry',
            salary:'40000'
        },
    ])
    return{ employees};

}
export default EmployeeData;