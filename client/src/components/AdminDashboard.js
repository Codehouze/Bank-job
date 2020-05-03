import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from "../contexts/context"
import axios from "axios"
import AdminNavbar from './AdminNavbar'
import UserList from './UserList'
import { MdPowerSettingsNew, MdGroup } from "react-icons/md";

const AdminDashboard = () => {
    const [users, setUsers] = useState([])
    const [isAuthenticated, setIsAuthenticated] = useContext(AppContext);

    // ComponentDidMount
    useEffect(() => {
        let mounted = true
        axios.get("http://localhost:5000/api/users")
            .then(result => mounted ? setUsers(result.data) : null)
            .catch(err => console.log(err))
    }, [])

    const handleDeleteUser = (id) => {
        axios.delete("http://localhost:5000/api/users/" + id)
            .then(setUsers(users.filter(user => user.id !== id)))
            .catch(err => console.log(err))
    }

    const handleLogout = () => {
        setIsAuthenticated(false);
    }

    return (
        <div>
            <div className="">
                <AdminNavbar />
                <div className="container">
                    <div>
                        <h3> <MdGroup /> All Users</h3>
                        <input type="search" className="mb-3 " placeholder="search..." />
                        <table className="table table-hover table-sm table-striped table-bordered" >
                            <thead className="text-white" style={{ backgroundColor: "#2f2fa2", padding:"1em" }}>
                                <tr className="p-3">
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => {
                                    return (
                                        <UserList
                                            id={user.id}
                                            key={user.id}
                                            firstname={user.firstname}
                                            lastname={user.lastname}
                                            email={user.emailaddress}
                                            deleteUser={handleDeleteUser} />
                                    )
                                })}
                            </tbody>
                        </table>
                        <hr />
                        <div className="mt-5">
                            <button className="btn btn-red shadow" onClick={handleLogout}>
                                <MdPowerSettingsNew /> Logout
                        </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}


export default AdminDashboard