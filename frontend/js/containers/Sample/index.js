import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/sample'

import Sample from '../../components/Sample'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data, actions } = this.props
    return (
      <Sample {...data} onFetchData={actions.getSamples} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
