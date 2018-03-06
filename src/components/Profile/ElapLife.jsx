import React from 'react';
import UpdateModal from './../../components/UpdateModal/UpdateModal'
import { Row, Col, CardPanel } from 'react-materialize';
import { Icon } from 'react-materialize'

const ElapLife = (props) => {

  return (
    <div>
      <Row>
        <Col s={3} offset="s9">
          <CardPanel className="timeline-marker #e0e0e0 grey lighten-2">
            <h4>Last 10 Years</h4>
          </CardPanel>
        </Col>
      </Row>
      <CardPanel className="panel-title">
        <Row>
          <Col m={12} l={4} className="statement">
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
                    elapStatement={props.user.elapStatement}
                    updateField={props.updateField}
                    handleUpdate={props.handleUpdate}
                    refreshPage={props.refreshPage}
                  />
              </div>}
              </CardPanel>
            </Col>
            <Col m={12} l={8}>
              <Row>
                <Col m={12} l={4} className="highlights">
                  <div className="section">
                    <Icon className="highlight">school</Icon>
                    <h5>Education</h5>
                  </div>
                </Col>
                <Col m={12} l={8} className="highlights">
                  <div className="highlight">
                    <ul>
                      {props.user.elapEducation ? props.user.elapEducation.map((education, idx) =>
                      <li key={idx}>- Went to <span className="strong">{education.school}</span> from {education.schoolStartDate} to {education.schoolEndDate}</li>
                      ) : null }
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col m={12} l={4} className="highlights">
                  <div className="section">
                    <Icon className="highlight">location_on</Icon>
                    <h5>Moving</h5>
                  </div>
                </Col>
                <Col m={12} l={8} className="highlights">
                  <div className="highlight">
                    <ul>
                      {props.user.elapLocations ? props.user.elapLocations.map((location, idx) =>
                      <li key={idx}>Lived in <span className="strong">{location.location}</span> from {location.locationStartDate} to {location.locationEndDate}</li>
                      ) : null }
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col m={12} l={4} className="highlights">
                  <div className="section">
                    <Icon className="highlight">business_center</Icon>
                    <h5>Jobs</h5>
                  </div>
                </Col>
                <Col m={12} l={8} className="highlights">
                  <div className="highlight">
                    <ul>
                      {props.user.elapJobs ? props.user.elapJobs.map((job, idx) =>
                      <li key={idx}><span className="strong">{job.jobTitle}</span>: {job.company} ({job.jobStartDate} to {job.jobEndDate})</li>
                      ) : null }
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col m={12} l={4} className="highlights">
                  <div className="section">
                    <Icon className="highlight">flag</Icon>
                    <h5>Milestones</h5>
                  </div>
                </Col>
                <Col m={12} l={8} className="highlights">
                  <div className="highlight">
                    <ul>
                      {props.user.elapMilestones ? props.user.elapMilestones.map((milestone, idx) =>
                      <li key={idx}><span className="strong">{milestone.title}</span>: {milestone.year} 
                        <br />
                        {milestone.description}
                      </li>
                      ) : null }
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col m={12} l={4} className="highlights">
                  <div className="section">
                    <Icon className="highlight">flight_takeoff</Icon>
                    <h5>Travel</h5>
                  </div>
                </Col>
                <Col m={12} l={8} className="highlights">
                  <div className="highlight">
                    <ul>
                      <span className="strong">Traveled to:</span>
                      {props.user.elapTravel ? props.user.elapTravel.map((destination, idx) =>
                      <li key={idx}>- {destination}</li>
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
          </Col>
        </Row>
      </CardPanel>
    </div>
  )

}

export default ElapLife;