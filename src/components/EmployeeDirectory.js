import React, { useEffect, useState } from "react";
import API from "../utils/API"

const Directory = () => {
    const [employees, setEmployees] = useState([]);;

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

    // FILTER/SORTING

    const generateList = (employees) => {
        return (
            employees.map((employee => {
                console.log(employee)
                return (
                    <div>
                        <li>{employee.name.first}</li>
                        <li>{employee.dob.age}</li>
                        <li>{employee.email}</li>
                        <li>{employee.phone}</li>
                        <img src={employee.picture.large} alt="mugshot"/>
                    </div>
                    )
                }
                ))
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

