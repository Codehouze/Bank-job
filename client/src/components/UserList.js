import React from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line
import { MdCreate, MdDelete } from "react-icons/md"


const UserList = (props) => {
    return (
        <tr id={props.id} key={props.id}>
            <th key={props.id} scope="row"></th>
            <td>{props.firstname}</td>
            <td>{props.lastname}</td>
            <td>{props.email}</td>
            <td><button to="#" className="btn btn-red" onClick={() => props.deleteUser(props.id)}><MdDelete /> delete</button> <Link className="btn btn-green" to={`/admin/profile/${props.id}`}><MdCreate /> Edit</Link></td>
        </tr>
    )
}

export default UserList;