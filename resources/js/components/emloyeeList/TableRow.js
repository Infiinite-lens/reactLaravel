const TableRow = (props) => {
    console.log(props.name);
    return (
        <tr key={props.id}>
            <th scope="row">{props.id}</th>
            <td>{props.employee__name}</td>
            <td>{props.salary}</td>
            <td>
                <button className="btn btn-primary">Actions</button>
            </td>
        </tr>
    );
};

export default TableRow;
