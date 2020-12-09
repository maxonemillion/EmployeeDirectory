import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "../components/EmployeeDirectory.css"

const Directory = () => {
    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        loadEmployees();
    }, []);


    const loadEmployees = () => {

        API.getEmployees()
            .then(res => {
                console.log(res);
                setEmployees(res.data.results)
                setSearch(res.data.results)
            })
    }

    const sortFirstNames = () => {
        var newEmployees = [...employees];
        newEmployees = newEmployees.sort((a, b) => {
            if (a.name.first < b.name.first) {
                return -1;
            }
            if (a.name.first > b.name.first) {
                return 1;
            }
            return 0;
        });
        setSearch(newEmployees);
    }

    const sortLastNames = () => {
        var newEmployees = [...employees];
        newEmployees = newEmployees.sort((a, b) => {
            if (a.name.last < b.name.last) {
                return -1;
            }
            if (a.name.last > b.name.last) {
                return 1;
            }
            return 0;
        });
        setSearch(newEmployees);
    }


    const filterEmployees = (event) => {
        console.log(event)
        var newList = employees.filter(employee => {
            return employee.name.first.toLowerCase().includes(event) || employee.name.last.toLowerCase().includes(event)
        });
        setSearch(newList);
    }

    // 

    const generateList = () => {
        return (
            <div>
                <input
                    placeholder="Find employee"
                    onChange={(event) => filterEmployees(event.target.value) }
                ></input>
                <br></br>
                <br></br>
                <Table striped bordered hover variant="light" className="list">
                    <thead>
                        <tr>

                            <th>First Name

                            <Button variant="light" size="sm" onClick={sortFirstNames}>A-Z</Button>
                            </th>
                            <br></br>
                            <th>Last Name
                            <Button variant="light" size="sm" onClick={sortLastNames}>A-Z</Button>
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
                        {search.map(employee => {
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

    return (
        <div>
            <ul>
                {generateList(employees)}
            </ul>
        </div>
    )

}

export default Directory;

