import PropTypes from 'prop-types';
import React, { Component, Suspense } from 'react';
import normalizedImagePath from '../../common/utils/normalizedImagePath';
import { renderLog } from '../../common/utils/logging';

const ImageHandler = React.lazy(() => import(/* webpackChunkName: 'ImageHandler' */ '../ImageHandler'));

const checkMarkIcon = normalizedImagePath('../../../img/global/svg-icons/check-mark-v2-40x43.svg');

export default class CheckBox extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isChecked: false,
    };
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
  }

  toggleCheckboxChange () {
    const { friendId, friendName } = this.props;
    const { isChecked } = this.state;
    this.setState({
      isChecked: !isChecked,
    });
    this.props.handleCheckboxChange(friendId, friendName);
  }

  render () {
    renderLog('CheckBox');  // Set LOG_RENDER_EVENTS to log all renders
    const { isChecked } = this.state;
    return (
      <div className={`${this.props.grid} friends-list__square u-cursor--pointer`} onClick={this.toggleCheckboxChange}>
        <Suspense fallback={<></>}>
          <ImageHandler
            sizeClassName={isChecked ? 'friends-list__square-image friends-list__square-following' : 'friends-list__square-image'}
            imageUrl={this.props.friendImage}
            alt={this.props.friendName}
          />
        </Suspense>
        <Suspense fallback={<></>}>
          { isChecked && (
            <ImageHandler
              className="friends-list__square-check-mark"
              imageUrl={normalizedImagePath(checkMarkIcon)}
              alt="Inviting"
            />
          )}
        </Suspense>
        <h4 className="intro-modal__white-space friends-list__square-name">{this.props.friendName}</h4>
      </div>
    );
  }
}
CheckBox.propTypes = {
  friendId: PropTypes.string.isRequired,
  friendName: PropTypes.string,
  friendImage: PropTypes.string,
  grid: PropTypes.string,
  handleCheckboxChange: PropTypes.func.isRequired,
};
