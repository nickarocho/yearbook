import React from 'react';
import UpdateModal from './../../components/UpdateModal/UpdateModal'
import { Row, Col, CardPanel } from 'react-materialize';
import { Icon } from 'react-materialize'

const InitLife = (props) => {

  return (
    <div>
      <Row>
        <Col s={3} offset="s9">
          <CardPanel className="timeline-marker #e0e0e0 grey lighten-2">
            <h4><h4>2008</h4></h4>
          </CardPanel>
        </Col>
      </Row>
      <CardPanel>
        <Row>
          <Col m={12} l={4} className="statement">
            <CardPanel className="panel-title">
              <div className="quote-text">
                <div className="quote-icon">
                  <Icon>remove</Icon>
                  <Icon>format_quote</Icon>
                  <Icon>remove</Icon>
                </div>
                <p>{props.user.initStatement}</p>
              </div>
              {props.viewingLoggedInUsersProfile &&
                <div className="Update-btn">
                  <UpdateModal
                    initStatement={props.user.initStatement}
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
                <div className="highlight">
                  <Icon className="highlight">group</Icon>
                  <h5>Teams/Clubs</h5>
                </div>
              </Col>
              <Col m={12} l={8} clasname="highlights">
                <div>
                  <ul>
                    {props.user.initTeams ? props.user.initTeams.map((team, idx) =>
                    <li key={idx}><span className="strong">{team}</span></li>
                    ) : null }
                  </ul>
                </div>
              </Col>
            </Row>
            <Row>
              <Col m={12} l={4} className="highlights">
                <div className="highlight">
                  <Icon className="highlight">replay</Icon>
                  <h5>Memories</h5>
                </div>
              </Col>
              <Col m={12} l={8} clasname="highlights">
                <div>
                  <ul>
                    {props.user.memories ? props.user.memories.map((memory, idx) =>
                    <li key={idx}><span className="strong">{memory.title}</span>
                      <br />
                      {memory.description}
                    </li>
                    ) : null }
                  </ul>
                </div>
              </Col>
            </Row>
            {props.viewingLoggedInUsersProfile &&
            <div className="Update-btn">
              <UpdateModal
                initStatement={props.user.initStatement}
                initTeams={props.user.initTeams}
                memories={props.user.memories}
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

export default InitLife;