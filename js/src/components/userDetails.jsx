import React from 'react';
import PropTypes from 'prop-types';

class UserDetails extends React.PureComponent {
    render() {
        return (
            <h1 id="headingToDo">
            Hey {this.props.userDetails.username}, here is your to-do list.
            Email Id: {this.props.userDetails.emailId}.
            Phone no: {this.props.userDetails.contact}
            </h1>
        );
    }
}

UserDetails.propTypes = {
    userDetails: PropTypes.shape({
        username: PropTypes.string,
        emailId: PropTypes.string,
        contact: PropTypes.string,
    }),
};

export default UserDetails;
