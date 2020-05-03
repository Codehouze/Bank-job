import React, { useState, useEffect } from 'react'
import { MdPeopleOutline, MdVerifiedUser } from "react-icons/md"
import axios from "axios"

export default function AdminNavbar() {
    const [users, setUsers] = useState([])

    // ComponentDidMount
    useEffect(() => {
        axios.get("http://localhost:5000/api/users")
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div className="navbar text-white p-3 mb-3">
                <p><MdVerifiedUser /> Admin Dashboard</p>
                <div>
                    <p><MdPeopleOutline size="20" /> {users.length}</p>
                </div>
            </div>
        </div>
    )
}
