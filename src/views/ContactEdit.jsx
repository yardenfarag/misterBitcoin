import { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { contactService } from '../services/contact.service'
import { saveContact } from '../store/actions/contactActions'
import { useForm } from '../customHooks/useForm'

export const ContactEdit = () => {
  const [contact, handleChange, setContact] = useForm()
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loadContact = useCallback(async () => {
    const contactId = params.id
    const contact = contactId ? await contactService.getContactById(contactId) : contactService.getEmptyContact()
    setContact(contact)
  }, [params.id, setContact])

  useEffect(() => {
    loadContact()
  }, [loadContact])

  const onSaveContact = async (ev) => {
    ev.preventDefault()
    const { name, phone, email } = ev.target.elements
    if (name.value === '' || phone.value === '' || email.value === '') return
    dispatch(saveContact(contact))
    navigate('/contact')
  }

  const onBack = () => {
    navigate('/contact')
  }

  if (!contact) return <div>Loading...</div>
  const userImgUrl = `https://robohash.org/${contact._id}?set=set4`
  return (
    <section className='contact-edit'>
        <button className='form-back-btn' onClick={onBack}>
          Back
        </button>
        {contact._id && <img src={userImgUrl} />}
      <h1>{contact._id ? 'Edit' : 'Add'} Contact</h1>
      <form className='contact-edit-form' onSubmit={onSaveContact}>
        <label htmlFor='name'>Name</label>
        <input value={contact.name} onChange={handleChange} type='text' name='name' id='name' />
        <label htmlFor='phone'>Phone</label>
        <input value={contact.phone} onChange={handleChange} type='tel' name='phone' id='phone' required />
        <label htmlFor='email'>Email</label>
        <input value={contact.email} onChange={handleChange} type='email' name='email' id='email' />
        <button className='form-save-btn'>Save</button>
      </form>
    </section>
  )
}
