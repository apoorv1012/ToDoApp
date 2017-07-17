import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { bindHandlers } from 'react-bind-handlers';
import _ from 'lodash';

class ControlList extends React.PureComponent {
    render() {
        return (
            <div className={classNames(this.props.customClass, 'controls-area')}>
                <div id="sortPriority">
                    <p>Sort by Priority:
                        <span
                            className={classNames(this.props.customClass, 'glyphicon glyphicon-sort-by-attributes')}
                            id="ascPr"
                            onClick={_.partial(this.props.onSort, {
                                'type': 'priority',
                                'order': 'ascending',
                            }
                            )}
                        ></span>
                        <span
                            className={classNames(this.props.customClass, 'glyphicon glyphicon-sort-by-attributes-alt')}
                            id="descPr"
                            onClick={_.partial(this.props.onSort, {
                                'type': 'priority',
                                'order': 'descending',
                            }
                            )}
                        ></span>
                    </p>
                </div>
                <div id="sortTimestamp">
                    <p>Sort by Timestamp:
                        <span className={classNames(this.props.customClass, 'glyphicon glyphicon-sort-by-attributes')}
                            id="ascTime"
                            onClick={_.partial(this.props.onSort, {
                                'type': 'time',
                                'order': 'ascending',
                            }
                            )}
                        ></span>
                        <span className={classNames(this.props.customClass, 'glyphicon glyphicon-sort-by-attributes-alt')}
                            id="descTime"
                            onClick={_.partial(this.props.onSort, {
                                'type': 'time',
                                'order': 'descending',
                            }
                            )}
                        ></span>
                    </p>
                </div>
            </div>
        );
    }
}

ControlList.propTypes = {
    customClass: PropTypes.string,
    onSort: PropTypes.func,
};

export default bindHandlers(ControlList);
