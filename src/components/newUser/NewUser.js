import React from 'react'
import './newUser.css'
import profile from "../../images/profile.jpg";
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish  } from "@mui/icons-material";

export default function NewUser() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle"> Edit User</h1>

       
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={profile} alt="" className="userShowImg"></img>
            <div className="userShowTopTitle">
              <span className="userShowUsername">
                Jedyne Ziah B. Claveria
              </span>
              <span className="userShowUsertitle "> Web Developer</span>
            </div>
          </div>

          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
            <PermIdentity className="userShowIcon" />
            <span className="userShowInfoTitle">Prim</span>
            </div>

            <div className="userShowInfo">
            <CalendarToday className="userShowIcon" />
            <span className="userShowInfoTitle">06/04/2003</span>
            </div>

            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
            <PhoneAndroid className="userShowIcon" />
            <span className="userShowInfoTitle">+63 948 742 7663</span>
            </div>

            <div className="userShowInfo">
            <MailOutline className="userShowIcon" />
            <span className="userShowInfoTitle">JedyneClaveria@gmail.com</span>
            </div>

            <div className="userShowInfo">
            <LocationSearching className="userShowIcon" />
            <span className="userShowInfoTitle">Dagupan,Pangasinan | Philippines</span>
            </div>

            
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">

              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder="Enter Username" className="userUpdateInput"></input>
              </div>

              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" placeholder="Enter Full name " className="userUpdateInput"></input>
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder="Enter Email" className="userUpdateInput"></input>
              </div>

              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" placeholder="+63 948 742 7663" className="userUpdateInput"></input>
              </div>

              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder="Enter Address" className="userUpdateInput"></input>
              </div>

              
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className="userUpdateImg" src={profile} alt="profile Photo"/>

               
              </div>
              <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                <input type="file" id="file" style={{display:"none"}}/>

              <button className="userUpdateBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
