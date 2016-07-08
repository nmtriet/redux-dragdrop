import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/';
import UserList from './UserList.jsx';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    _reorder(sourceId, targetId) {
        var currentList = this.props.userList;
        this.props.actions.reorderUserList(sourceId, targetId, currentList[sourceId], currentList[targetId]);
    }

    render() {
        return (
            <div className="main ui container">
                <UserList {...this.props} onReorder={this._reorder.bind(this)}  />
            </div>
        );
    }
}

Index.PropTypes = {
    userList: PropTypes.array
}

const mapStateToProps = (state) => ({
    userList: state.user.list
});

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(actionCreators, dispatch)
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Index);