import EmployeeData from './EmployeeData'

function EmployeeListComponent(){
    const {employees} = EmployeeData();

    return(
        <div>
          <h1>Employee List is here</h1>
            <table className="table">
                
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee NAME</th>
                        <th>Employee SALARY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee=>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.salary}</td>
                                </tr>
                            
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default EmployeeListComponent;