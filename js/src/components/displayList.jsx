import React from 'react';
import LiList from 'js/src/components/liList';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { bindHandlers } from 'react-bind-handlers';
import _ from 'lodash';

class DisplayList extends React.PureComponent {
    handleRenderLi(item) {
        return <LiList key={item.timestamp.toString()} item={item} onRemoveToDo={this.props.onRemoveToDo}/>;
    }
    render() {
        const list = _.map(this.props.toDoList, this.handleRenderLi);
        return (
            <div className={classNames(this.props.customClass, 'display-area')}>
                <ul id="listArea">
                    { list }
                </ul>
            </div>
        );
    }
}

DisplayList.propTypes = {
    customClass: PropTypes.string,
    toDoList: PropTypes.arrayOf(
        PropTypes.shape({
            message: PropTypes.string,
            fullMessage: PropTypes.string,
            priority: PropTypes.string,
            timestamp: PropTypes.number,
        })
    ),
    onRemoveToDo: PropTypes.func,
};

export default bindHandlers(DisplayList);
