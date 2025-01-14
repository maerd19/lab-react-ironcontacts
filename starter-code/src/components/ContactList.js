import React from 'react';
import { Button } from 'shards-react';

const ContactList = props => {
    console.log(props);
    
    return (                
        <table className='ContactList'>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.contacts.map( (contact, i) => (
                    <tr key={i}>
                        <td><img src={contact.pictureUrl} alt={contact.name} width={100} /></td>
                        <td>{contact.name}</td>
                        <td>{contact.popularity.toFixed(2)}</td>
                        <td><Button outline theme="light" onClick={()=>props.clickToDelete(i)}>Delete</Button></td>
                    </tr>
                 ))}
            </tbody>
        </table>
    )
}

export default ContactList;