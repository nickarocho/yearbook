import React from 'react';
import UpdateModal from './../../components/UpdateModal/UpdateModal'
import { Row, Col, CardPanel } from 'react-materialize';
import { Icon } from 'react-materialize'

const CurLife = (props) => {

  return (
    <Row>
      {/* <Col s={12} l={2} className="Sidebar">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </Col> */}

      <Col s={12}>
        <CardPanel>
          <div className="quote-text">
            <div className="quote-icon">
              <Icon>remove</Icon>
              <Icon>format_quote</Icon>
              <Icon>remove</Icon>
            </div>
            <p>{props.user.curStatement}</p>
          </div>
          <div className="Update-btn">
            <UpdateModal
              curStatement={props.user.curStatement}
              updateField={props.updateField}
              handleUpdate={props.handleUpdate}
            />
          </div>
        </CardPanel>

        <CardPanel className="Highlights-panel">
          <Row>
            <Col s={3} className="panel-title"><h4>Today</h4></Col>
            <Col s={9} className="highlights">
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
          <div className="Update-btn">
            <UpdateModal
              curLocation={props.user.curLocation}
              curJobs={props.user.curJobs}
              curMaritalStatus={props.user.curMaritalStatus}
              curKids={props.user.curKids}
              updateField={props.updateField}
              handleUpdate={props.handleUpdate}
            />
          </div>
        </CardPanel>
      </Col>
    </Row>
  )

}

export default CurLife;