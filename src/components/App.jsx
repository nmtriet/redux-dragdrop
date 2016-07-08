import React from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/';

class App extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this._loadUserList();
    }

    _loadUserList() {
        var SampleData = require('../data/SampleData');
        var data = JSON.parse(SampleData.initUsers());
        this.props.actions.loadUserList(data);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(actionCreators, dispatch)
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);