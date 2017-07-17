import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { bindHandlers } from 'react-bind-handlers';

class AddToDo extends React.PureComponent {
    render() {
        return (
            <div className={classNames(this.props.customClass, 'input-area')}>
                <div className={classNames(this.props.customClass, 'form-group col-sm-9')}>
                    <label className={classNames(this.props.customClass, 'sr-only')} htmlFor="input-to-do">Add a new to do</label>
                    <input type="text" className={classNames(this.props.customClass, 'form-control')} id="inputToDo" placeholder="Add a new to do"/>
                </div>
                <div className={classNames(this.props.customClass, 'form-group col-sm-2')}>
                    <label htmlFor="inputPriority" className={classNames(this.props.customClass, 'sr-only')}>Select Priority:</label>
                    <select className={classNames(this.props.customClass, 'form-control')} id="inputPriority">
                        <option>High</option>
                        <option>Medium</option>
                        <option defaultValue>Low</option>
                    </select>
                </div>
                <span
                    className={classNames(this.props.customClass, 'glyphicon glyphicon-plus-sign col-sm-1')}
                    id="addToDo"
                    onClick={this.props.onAddToDo}
                ></span>
            </div>
        );
    }
}

AddToDo.propTypes = {
    customClass: PropTypes.string,
    onAddToDo: PropTypes.func,
};

export default bindHandlers(AddToDo);
