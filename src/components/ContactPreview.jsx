import React from 'react'
import { Link } from 'react-router-dom'

export function ContactPreview({ contact, onRemoveContact }) {
  const userImgUrl = `https://robohash.org/${contact._id}?set=set4`
  return (
    <section className='contact'>
      <Link to={`/contact/${contact._id}`}>
        <div className='contact-info'>
          <div className="contact-information">
          <h1 className='contact-name'>{contact.name}</h1>
          <h5 className='contact-phone'>{contact.phone}</h5>
          </div>
          <div className="contact-avatar">
            <img className='contact-img' src={userImgUrl} alt='user-img' />
          </div>
        </div>
      </Link>
      <section className='actions'>
        <button className='btn delete' onClick={() => onRemoveContact(contact._id)}>
        </button>
        <Link className='btn edit' to={`/contact/edit/${contact._id}`}>
        </Link>
      </section>
    </section>
  )
}
