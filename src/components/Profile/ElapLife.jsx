import React from 'react';
import UpdateModal from './../../components/UpdateModal/UpdateModal'
import { Row, Col, CardPanel } from 'react-materialize';
import { Icon } from 'react-materialize'

const ElapLife = (props) => {

  return (
    <div>
      <CardPanel>
        <div className="quote-text">
          <div className="quote-icon">
            <Icon>remove</Icon>
            <Icon>format_quote</Icon>
            <Icon>remove</Icon>
          </div>
          <p>{props.user.elapStatement}</p>
        </div>
        {props.viewingLoggedInUsersProfile &&
          <div className="Update-btn">
            <UpdateModal
              initStatement={props.user.elapStatement}
              updateField={props.updateField}
              handleUpdate={props.handleUpdate}
              refreshPage={props.refreshPage}
            />
          </div>}
      </CardPanel>
      <CardPanel>
        <Row>
          <Col s={4} className="panel-title"><h4>Last 10 Years</h4></Col>
          <Col s={8} className="highlights">
            <div className="highlight">
              <Icon className="highlight">location_on</Icon>
              <ul>
                {props.user.elapLocations ? props.user.elapLocations.map((location, idx) =>
                <li key={idx}>Lived in <span className="strong">{location.location}</span> from {location.locationStartDate} to {location.locationEndDate}</li>
                ) : null }
              </ul>
            </div>
            <div className="highlight">
              <Icon className="highlight">business_center</Icon>
              <ul>
                {props.user.elapJobs ? props.user.elapJobs.map((job, idx) =>
                <li key={idx}><span className="strong">{job.jobTitle}</span>: {job.company} ({job.jobStartDate} to {job.jobEndDate})</li>
                ) : null }
              </ul>
            </div>
          </Col>
        </Row>
        {props.viewingLoggedInUsersProfile &&
        <div className="Update-btn">
          <UpdateModal
            elapStatement={props.user.elapStatement}
            elapLocations={props.user.elapLocations}
            elapJobs={props.user.elapJobs}
            elapEducation={props.user.elapEducation}
            elapTravel={props.user.elapTravel}
            elapMilestones={props.user.elapMilestones}
            updateField={props.updateField}
            handleUpdate={props.handleUpdate}
            refreshPage={props.refreshPage}
          />
        </div>}
      </CardPanel>
    </div>
  )

}

export default ElapLife;