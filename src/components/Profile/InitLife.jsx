import React from 'react';
import UpdateModal from './../../components/UpdateModal/UpdateModal'
import { Row, Col, CardPanel } from 'react-materialize';
import { Icon } from 'react-materialize'

const InitLife = (props) => {

  return (
    <CardPanel>
      <Row>
        <Col s={3} className="panel-title"><h4>2008</h4></Col>
        <Col s={9} className="highlights">
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
      <div className="Update-btn">
        <UpdateModal
          curStatement={props.user.curStatement}
          updateField={props.updateField}
          handleUpdate={props.handleUpdate}
        />
      </div>
    </CardPanel>
  )

}

export default InitLife;