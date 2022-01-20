import React from 'react';
import { connect } from 'react-redux';

const TestState = ({ id, name, status }) => {
    return (
        <div>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>status: {status}</p>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        id: state.client.id,
        name: state.client.name,
        status: state.client.status
    }
}

export default connect(mapStateToProps, {} ) (TestState);