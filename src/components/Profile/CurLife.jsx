import React from 'react';
import UpdateModal from './../../components/UpdateModal/UpdateModal'
import { Row, Col, CardPanel } from 'react-materialize';
import { Icon } from 'react-materialize';
import userService from '../../utils/userService';

const CurLife = (props) => {

  return (
    <div>
      <CardPanel>
        <div className="quote-text">
          <div className="quote-icon">
            <Icon>remove</Icon>
            <Icon>format_quote</Icon>
            <Icon>remove</Icon>
          </div>
          <p>{props.user.curStatement}</p>
        </div>
        {props.viewingLoggedInUsersProfile &&
          <div className="Update-btn">
            <UpdateModal
              curStatement={props.user.curStatement}
              updateField={props.updateField}
              handleUpdate={props.handleUpdate}
              refreshPage={props.refreshPage}
            />
          </div>}
      </CardPanel>
      <CardPanel className="Highlights-panel">
        <Row>
          <Col s={4} className="panel-title"><h4>Today</h4></Col>
          <Col s={8} className="highlights">
            <div className="highlight">
              <Icon className="highlight">location_on</Icon>
              <p>Living in {props.user.curLocation}</p>
            </div>
            <div className="highlight">
              <Icon className="highlight">business_center</Icon>
              <ul>
                {props.user.curJobs ? props.user.curJobs.map((job, idx) =>
                <li key={idx}><span className="strong">{job.jobTitle}</span>: {job.company} ({job.description})</li>
                ) : null }
              </ul>
            </div>
            <div className="highlight">
              <Icon className="highlight">favorite</Icon>
              <p>{props.user.curMaritalStatus}</p>
            </div>
            <div className="highlight">
              <Icon className="highlight">child_friendly</Icon>
              <p>{props.user.curKids ? `${props.user.curNumKids} kids` : "No kids"}</p>
            </div>
          </Col>
        </Row> 
        {props.viewingLoggedInUsersProfile &&
        <div className="Update-btn">
          <UpdateModal
            curLocation={props.user.curLocation}
            curJobs={props.user.curJobs}
            curMaritalStatus={props.user.curMaritalStatus}
            curKids={props.user.curKids}
            updateField={props.updateField}
            handleUpdate={props.handleUpdate}
            refreshPage={props.refreshPage}
          />
        </div>}
      </CardPanel>
    </div>
  )
}

export default CurLife;