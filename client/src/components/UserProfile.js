import React, { useContext, useEffect } from 'react'
import { MdPermIdentity } from 'react-icons/md'
import { AppContext } from '../contexts/context'
import DashboardNavbar from './DashboardNavbar'
import UserImageField from './UserImageField'


const UserProfile = () => {
    // eslint-disable-next-line
    const [, , userDetails, setUserDetails] = useContext(AppContext);
    useEffect(() => {
        console.log(window.location)
    }, [])

    const handleClick = e => {
        e.preventDefault();
        console.log(window.location.href)
    }
    return (
        <div>
            <DashboardNavbar />
            <div className="container mt-5">
                <p>Welcome to your profile page</p>
                <h3 className="mt-5 text-center"><MdPermIdentity size="70" />Profile Page</h3>
                <form >
                    <UserImageField />
                    <div className="form-row">
                        <div className="col-xl-6">
                            <label className="small">firstname</label>
                            <input type="text" className="form-control" placeholder={userDetails.firstname} />
                        </div>
                        <div className="col-xl-6">  <label className="small">lastname</label>
                            <input type="text" className="form-control" placeholder={userDetails.lastname} /></div>
                    </div>

                    <label className="small">email</label>
                    <input type="email" className="form-control" placeholder={userDetails.emailaddress} />

                    <p>Change Password</p>
                    <div className="form-row">
                        <div className="col-xl-6">
                            <label className="small">old password</label>
                            <input type="password" className="form-control" placeholder="" />

                        </div>
                        <div className="col-xl-6">
                            <label className="small">new password</label>
                            <input type="password" className="form-control" placeholder="" />
                        </div>
                    </div>



                    <button className="btn btn-green" onClick={handleClick}>Save Changes</button>

                </form>
            </div>
        </div>
    )
}

export default UserProfile