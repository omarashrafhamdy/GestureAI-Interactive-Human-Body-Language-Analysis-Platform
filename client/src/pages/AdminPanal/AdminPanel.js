import React, {
  useEffect,
  useState,
} from 'react';

import Footer from '../landingPage/components/Footer/Footer';
import Dashboard from '../profilePage/components/Dashboard/Dashboard';
import EditProfile from '../profilePage/components/EditProfile/EditProfile';
import SideBarAdmin from './Components/SideBarAdmin';
import Statpage from './Components/Statpage';
import UserReview from './Components/UserReview';

function AdminPanel() {
  
  const [currentView, setCurrentView] = useState(1)

  function ChangeViewFuntion(viewID) {
    setCurrentView(viewID)
  }

  // profiled data state 
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userBD: "",
    userImage: ""
  })

//use effect to fetch user data
  useEffect(() =>
    async function fetchData() {
      let jwtToken = localStorage.getItem('jwt_token');
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${jwtToken}`);
      myHeaders.append("Cookie", `session=.${jwtToken}`);
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
      };

      fetch('http://localhost:5000/profile-page', requestOptions)
        .then(response => response.json())
        .then(res => {
          const data = res.Data.response_data

          setProfileData({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            userBD: data.userBirthDate,
            userImage: data.userImage
          })
        })
    }

  , []);
//
 
  return (
    <div>
      <div className="">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-sm-2 SideBar">
              <SideBarAdmin sideBarData={profileData} changeViewFuntion={ChangeViewFuntion}/>
            </div>
             <div className="col-sm-10 d-flex flex-column p-5">

              {currentView === 1 ? <UserReview /> : ""}
              {currentView === 2 ? <EditProfile profileData={profileData} /> : ""}
              {currentView === 3 ? <Statpage /> : ""}
              {currentView === 4 ? <Dashboard /> : ""}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default AdminPanel