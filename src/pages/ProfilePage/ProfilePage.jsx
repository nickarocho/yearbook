import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './ProfilePage.css';
import { Row, Preloader } from 'react-materialize';
import CurLife from './../../components/Profile/CurLife';
import ElapLife from './../../components/Profile/ElapLife';
import InitLife from './../../components/Profile/InitLife';

const ProfilePage = (props) => {

  let display = (props.selectedUser && props.user) ? <div className="Profile-container">

    <div className="back-btn">
      <Link to='/yearbook/'>← Back to Yearbook</Link>
    </div>

    <div className="Profile-wrapper">
      <div className="Profile-view">

        <div className="Profile-header">
          <div className="Profile-header-top">
            <h1>{props.selectedUser.firstName} {props.selectedUser.lastName}</h1>
          </div>
          <div className="Profile-header-bottom">
            <div className="Profile-tabs">
            <div className="tab">2008</div>
              <div>⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</div>
              <div className="tab">2018</div>
            </div>
            <div className="Profile-headshots">
              <div><img className="initHeadshot" src={props.selectedUser.initHeadshot} alt={`${props.selectedUser.firstName}'s high school headshot`} /></div>
              <div><img className="curHeadshot" src={props.selectedUser.curHeadshot} alt={`${props.selectedUser.firstName}'s current headshot`} /></div>
            </div>
          </div>
        </div>

        <Row className="Profile-body">

          <CurLife 
            viewingLoggedInUsersProfile={props.viewingLoggedInUsersProfile}
            user={props.viewingLoggedInUsersProfile ? props.user : props.selectedUser } 
            updateField={props.updateField}
            handleUpdate={props.handleUpdate}
            refreshPage={props.refreshPage}
          />
          <ElapLife 
            viewingLoggedInUsersProfile={props.viewingLoggedInUsersProfile}
            user={props.viewingLoggedInUsersProfile ? props.user : props.selectedUser } 
            updateField={props.updateField}
            handleUpdate={props.handleUpdate}
            refreshPage={props.refreshPage}
          />
          <InitLife
            viewingLoggedInUsersProfile={props.viewingLoggedInUsersProfile}
            user={props.viewingLoggedInUsersProfile ? props.user : props.selectedUser } 
            updateField={props.updateField}
            handleUpdate={props.handleUpdate}
            refreshPage={props.refreshPage}
          />

        </Row>
          
      </div>
    </div>
  </div> : <div className="vertical-center flex-center-center"><Preloader size='big'/></div>;

  return (
    <div>
      { display }
    </div>
  )
};

export default ProfilePage;