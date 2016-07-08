import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import DataApi from '../utils/DataApi';

class UserDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const id = this.props.params.id;
        var userDetail = DataApi.getUserById(id);

        return (
            <div className="main ui container">
                <h1 style={{margin: "10px 0"}}>User Detail</h1>
                <p><strong>Name: </strong>{userDetail.name}</p>
                <p><strong>Email: </strong>{userDetail.email}</p>
                <p><strong>Company: </strong>{userDetail.company}</p>
                <div><Link to="/">Back</Link></div>
            </div>
        )
    }
}

module.exports = connect()(UserDetail);