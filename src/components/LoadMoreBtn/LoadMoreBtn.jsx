import { LoadBtn } from './LoadMoreBtn.styled';
import PropTypes from 'prop-types';

export const LoadMore = ({ onBtnClick }) => {
  return <LoadBtn onClick={onBtnClick}>More Results</LoadBtn>;
};


LoadMore.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};