import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class LiList extends React.PureComponent {
    render() {
        return (
            <div>
                <li
                    className={classNames(this.props.customClass, `to-do-list col-sm-10 priority-${this.props.item.priority}`)}
                >{this.props.item.message}
                    <span className={classNames(this.props.customClass, 'detailed-list')}>{this.props.item.fullMessage}</span>
                    <span className={classNames(this.props.customClass, 'timestamp hide')}>{this.props.item.timestamp}</span>
                </li>
                <span
                    className={classNames(this.props.customClass, 'glyphicon glyphicon-remove-sign col-sm-2')}
                    onClick={this.props.onRemoveToDo}
                ></span>
            </div>
        );
    }
}

LiList.propTypes = {
    customClass: PropTypes.string,
    item: PropTypes.shape({
        message: PropTypes.string,
        fullMessage: PropTypes.string,
        priority: PropTypes.string,
        timestamp: PropTypes.number,
    }),
    onRemoveToDo: PropTypes.func,
};

export default LiList;
