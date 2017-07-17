import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { bindHandlers } from 'react-bind-handlers';
import * as todoActions from 'js/src/modules/todoActions';
import AddToDo from 'js/src/components/addToDo';
import DisplayList from 'js/src/components/displayList';
import ControlList from 'js/src/components/controlList';
import UserDetails from 'js/src/components/userDetails';

class Container extends React.PureComponent {
    componentDidMount() {
        this.props.dispatchLoadToDo();
    }
    checkLength(listMessage) {
        listMessage = listMessage.length > 70 ? listMessage.substring(0, 70) + '...' : listMessage;
        return listMessage;
    }
    handleAddToDo(event) {
        event.preventDefault();
        const inputText = $('#inputToDo').val();
        const inputPriority = $('#inputPriority').val();
        if (inputText !== '') {
            this.props.dispatchAddToDo(this.checkLength(inputText), inputText, inputPriority, Date.now());
            $('#inputToDo').val('');
        }
    }
    handleSort(sortDetails) {
        this.props.dispatchSortToDo(sortDetails.type, sortDetails.order);
    }
    handleRemoveToDo(event) {
        const removeElementTimestamp = $(event.target).prev().children('.timestamp').text();
        this.props.dispatchRemoveToDo(parseInt(removeElementTimestamp, 10));
    }
    render() {
        return (
            <div>
                <UserDetails userDetails={this.props.userDetails}/>
                <AddToDo onAddToDo={this.handleAddToDo}/>
                <DisplayList toDoList={this.props.toDoList} onRemoveToDo={this.handleRemoveToDo}/>
                <ControlList onSort={this.handleSort}/>
            </div>
        );
    }
}

Container.propTypes = {
    dispatchLoadToDo: PropTypes.func,
    dispatchAddToDo: PropTypes.func,
    dispatchRemoveToDo: PropTypes.func,
    dispatchSortToDo: PropTypes.func,
    toDoList: PropTypes.arrayOf(
        PropTypes.shape({
            message: PropTypes.string,
            fullMessage: PropTypes.string,
            priority: PropTypes.string,
            timestamp: PropTypes.number,
        })
    ),
    userDetails: PropTypes.object,
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchLoadToDo() {
            dispatch(todoActions.loadToDo());
        },
        dispatchAddToDo(inputText, fullInputText, inputPriority, timestamp) {
            dispatch(todoActions.addToDo(inputText, fullInputText, inputPriority, timestamp));
        },
        dispatchSortToDo(type, order) {
            dispatch(todoActions.sortToDo(type, order));
        },
        dispatchRemoveToDo(timestamp) {
            dispatch(todoActions.removeToDo(timestamp));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(bindHandlers(Container));
