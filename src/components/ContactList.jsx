import React from 'react'
import { ContactPreview } from './ContactPreview'

export function ContactList({ contacts, onRemoveContact }) {
  return (
    <ul className='contacts-list'>
      {contacts.map((contact) => (
        <li className='contact-preview' key={contact._id}>
          <ContactPreview contact={contact} onRemoveContact={onRemoveContact} />
        </li>
      ))}
    </ul>
  )
}
