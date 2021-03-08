import PropTypes from 'prop-types';
import f from './Filter.module.css'

const Filter = ({ filter, getFilterContact }) => (
  <>
    <input className={f.filter}
      type="text"
      name="filter"
      value={filter}
      onChange={getFilterContact}
      placeholder="Enter name to find"
    />
  </>
);

Filter.propTypes = {
  filter: PropTypes.string,
  getFilterContact: PropTypes.func,
};

export default Filter;