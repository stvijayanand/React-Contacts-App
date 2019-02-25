import React, {Component} from "react"
import PropTypes from "prop-types"

//converting to a function component
// function ListContacts(props){
//     return (<ol className="contact-list">
//     {props.contacts.map((contact) => (
//         <li key={contact.id} className="contact-list-item">
//             <div 
//             className="contact-avatar"
//             style={{ backgroundImage: `url(${contact.avatarURL})` }}>

//             </div>
//             <div className="contact-details">
//                 <p>{contact.name}</p>
//                 <p>{contact.handle}</p>
//             </div>
//             <button onClick={() => props.onRemoveContact(contact)} 
//                 className="contact-remove">
//                 Remove
//             </button>
//         </li>
//     ))}
// </ol>);
// }


// ListContacts.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onRemoveContact: PropTypes.func.isRequired
// }

class ListContacts extends Component{
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onRemoveContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    render(){
        return (
        <div className="list-contacts">
            <div className="list-contacts-top">
                <input
                    className="search-contacts"></input>
            </div>
            <ol className="contact-list">
            {this.props.contacts.map((contact) => (
                <li key={contact.id} className="contact-list-item">
                    <div 
                    className="contact-avatar"
                    style={{ backgroundImage: `url(${contact.avatarURL})` }}>
        
                    </div>
                    <div className="contact-details">
                        <p>{contact.name}</p>
                        <p>{contact.handle}</p>
                    </div>
                    <button onClick={() => this.props.onRemoveContact(contact)} 
                        className="contact-remove">
                        Remove
                    </button>
                </li>
        ))}
            </ol>
        </div>
    );
        }
}

export default ListContacts