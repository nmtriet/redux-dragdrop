import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { reduxForm, initialize, reset } from 'redux-form';
import * as actionCreators from '../actions/';

var dragged;

class UserItem extends React.Component {
  
    constructor(props) {
        super(props);
    }

    // Drag drop functions
    _dragStart(ev) {
        dragged = ev.target;

        ev.target.style.opacity = .5;
        ev.dataTransfer.setData("text/plain", ev.target.id);
    }
    _dragEnter(ev) {
        if (ev.currentTarget.getAttribute('id') != dragged.getAttribute('id')) {
            ev.currentTarget.style.background = '#EBEEF0';
        }
    }
    _dragLeave(ev) {
        ev.currentTarget.style.background = '';
    }
    _dragEnd(ev) {
        ev.target.style.opacity = '';
    }

    render() {
        return (
            <tr id={this.props.id} draggable="true" onDragStart={this._dragStart} onDragEnd={this._dragEnd} onDragEnter={this._dragEnter} onDragLeave={this._dragLeave}>
                <td className="user-name"><Link to={"/user/detail/" + this.props.id}>{this.props.data.name}</Link></td>
                <td className="user-email">{this.props.data.email}</td>
                <td className="user-company">{this.props.data.company}</td>
                <td className="btn-div"><Link to={"/user/detail/" + this.props.id}>edit</Link></td>
            </tr>
        )
    }
}

UserItem.PropTypes = {
    id: PropTypes.number,
    data: PropTypes.object,
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(actionCreators, dispatch),
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(UserItem);