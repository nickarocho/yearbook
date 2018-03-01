import React, {Component} from 'react';
import YearbookIndex from '../../components/YearbookIndex/YearbookIndex';
import NavBar from '../../components/NavBar/NavBar'

class YearbookIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yearbookIndex: [],
      search: ""
    }
  }

  updateSearch = (e) => {
    this.setState({search: e.target.value.substr(0, 20)});
  }

  componentDidMount() {
    fetch('/api/yearbook/index')
      .then(res => res.json())
      .then(users => this.setState({yearbookIndex: users}))
      .catch(err => console.log(err))
  }

  render(props) {
    return (
      <div>
        <NavBar 
          user={this.props.user}
          handleLogout={this.props.handleLogout}
        />
        <YearbookIndex 
          yearbookIndex={this.state.yearbookIndex}
          updateSearch={this.updateSearch}
          search={this.state.search}
        />
      </div>
    );
  }
}

export default YearbookIndexPage;