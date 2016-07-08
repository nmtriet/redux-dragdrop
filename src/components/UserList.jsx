import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/';
import UserItem from './UserItem.jsx';

var _this;

class UserList extends React.Component {
    constructor(props) {
        super(props);

        _this = this;
    }

    // Drag drop functions
    _dragOver(ev) {
        ev.preventDefault();
    }
    _drop(ev) {
        ev.preventDefault();

        // Set the dropEffect to move
        ev.dataTransfer.dropEffect = 'move';

        // Get the data, which is the id of the drop target
        var sourceId = ev.dataTransfer.getData('text');

        // Get source
        var source = document.getElementById(sourceId);
        if (source.tagName == 'A') {
            source = source.parentNode.parentNode;
        }

        // Get target
        var target = ev.target.parentNode;
        if (target.tagName == 'TD') {
            target = target.parentNode;
        }
        if (target.tagName == 'A') {
            target = target.parentNode.parentNode;
        }

        // Reorder
        _this.props.onReorder(source.id, target.id);

        target.style.background = '';
    }

    render() {
        const { userList } = this.props;

        return (
            <div>
                <div className="row info">
                    <h2>User list</h2>
                </div>
                <div className="row container-wrapper">
                    <table className="ui basic table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Company</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="drop" onDrop={this._drop} onDragOver={this._dragOver}>
                            {userList.map(function(item, key) {
                                return <UserItem key={key} id={key} data={item} />
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

UserList.PropTypes = {
    userList: PropTypes.array,
    onReorder: PropTypes.func
}

const mapStateToProps = (state) => ({
    userList: state.user.list
});

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(actionCreators, dispatch)
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(UserList);