import PropTypes from 'prop-types';
import c from './Contacts.module.css'

const Contacts = ({ contactList, deleteContact }) => (
  <ul>
    {contactList.map(contact => (
      <li key={contact.id} className={c.links}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
        <button type="button" onClick={()=> deleteContact(contact.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.object),
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  deleteContact: PropTypes.func,
};


export default Contacts;
