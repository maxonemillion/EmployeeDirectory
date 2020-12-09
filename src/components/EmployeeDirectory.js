import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

const Directory = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = () => {

        API.getEmployees()
            .then(res => {
                console.log(res);
                setEmployees(res.data.results)
            })
    }

    const sortNames = () => {
        console.log("test")
        var newEmployees = [...employees];
        newEmployees = newEmployees.sort()
        setEmployees(newEmployees);
    }

    const filterEmployees = (event) => {
        var newEmployees = [...employees];
        newEmployees = newEmployees.filter()
        setEmployees(newEmployees);
    }

    // 

    const generateList = (employees) => {
        return (
            <div>
                <input
                    placeholder="Find employee"
                    onChange={filterEmployees}
                ></input>
                <br></br>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>

                            <th>First Name
                             
                            <Button variant="light" size="sm" onClick={sortNames}>Sort</Button>
                            </th>
                            <br></br>
                            <th>Last Name
                            <Button variant="light" size="sm" onClick={sortNames}>Sort</Button>
                            </th>
                            <br></br>
                            <th>Email</th>
                            <br></br>
                            <th>Phone</th>
                            <br></br>
                            <th>Age</th>
                            <br></br>
                            <th>Photo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => {
                            console.log(employee)
                            return (
                                <tr>
                                    <td>{employee.name.first}</td>
                                    <br></br>
                                    <td>{employee.name.last}</td>
                                    <br></br>
                                    <td>{employee.email}</td>
                                    <br></br>
                                    <td>{employee.phone}</td>
                                    <br></br>
                                    <td>{employee.dob.age}</td>
                                    <br></br>
                                    <td>
                                        <img src={employee.picture.medium} alt="mugshot" /></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>


            </div>
        )
    }
    
    

// const filter = (event) => {
//     const query = event.target.value;
//     sortEmployees({ query }, () => {

//         if (sorted.length > 0) {
//             list = 
//         }
//     })
// }

return (
    <div>
        <ul>
            {generateList(employees)}
        </ul>
    </div>
)

}

export default Directory;

