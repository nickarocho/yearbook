import React from 'react';
import UpdateModal from './../../components/UpdateModal/UpdateModal'
import { Row, Col, CardPanel } from 'react-materialize';
import { Icon } from 'react-materialize';

const CurLife = (props) => {

  return (
    <div>
      <Row>
        <Col s={3} offset="s9">
          <CardPanel className="timeline-marker #e0e0e0 grey lighten-2">
            <h4>Today</h4>
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
          </Col>
          <Col m={12} l={8}>
            <Row className="flex-center-center">
              <Col m={12} l={4} className="highlights">
                <div className="section">
                  <Icon className="highlight">location_on</Icon>
                  <h5>Living In</h5>
                </div>
              </Col>
              <Col m={12} l={8} className="highlights">
                <div className="highlight">
                  <p>{props.user.curLocation}</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col m={12} l={4} className="highlights">
                <div className="section">
                  <Icon className="highlight">business_center</Icon>
                  <h5>Career</h5>
                </div>
              </Col>
              <Col m={12} l={8} className="highlights">
                <div className="highlight">
                  <ul>
                    {props.user.curJobs ? props.user.curJobs.map((job, idx) =>
                    <li key={idx}><span className="strong">{job.jobTitle}</span>: {job.company} ({job.description})</li>
                    ) : null }
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="flex-center-center">
              <Col m={12} l={4} className="highlights">
                <div className="section">
                  <Icon className="highlight">favorite</Icon>
                  <h5>Relationionship</h5>
                </div>
              </Col>
              <Col m={12} l={8} className="highlights">
                <div className="highlight">
                  <p>{props.user.curMaritalStatus}</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col m={12} l={4} className="highlights">
                <div className="section">
                  <Icon className="highlight">child_friendly</Icon>
                  <h5>Kids?</h5>
                </div>
              </Col>
              <Col m={12} l={8} className="highlights">
                <div className="highlight">
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
          </Col>
        </Row> 
      </CardPanel>
    </div>
  )
}

export default CurLife;