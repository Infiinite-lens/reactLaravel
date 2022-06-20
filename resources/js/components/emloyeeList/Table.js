import { useEffect, useState } from "react";
import TableRow from "./TableRow";

const Table = () => {
    const [employees, setEmployees] = useState([]);

    //getEmployeeList
    const getEmployeeList = () => {
        axios.get("/get/employee/list").then((response) => {
            // console.log(response.data);
            setEmployees(response.data);
        });
    };

    useEffect(() => {
        getEmployeeList();
    }, []);

    console.log(employees);

    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col" width="100px">
                            #
                        </th>
                        <th scope="col" width="100px">
                            Name
                        </th>
                        <th scope="col" width="100px">
                            Salary
                        </th>
                        <th scope="col" width="100px">
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map((employee) => {
                        return [
                            <TableRow
                                salary={employee.salary}
                                employee__name={employee.employee__name}
                                id={employee.id}
                            />,
                        ];
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
