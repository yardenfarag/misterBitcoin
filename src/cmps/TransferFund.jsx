import React from 'react'

export function TransferFund({ contact, onTransferCoins }) {
  const placeholder = `Make ${contact.name} Rich!`
  return (
    <section className='transfer-fund'>
      <form onSubmit={onTransferCoins} className='transfer-fund-form'>
        <h1>Transfer coins to {contact.name}:</h1>
        <label htmlFor='coins'>Amount</label>
        <input type='number' name='coins' id='coins' placeholder={placeholder} />
        <button>Transfer</button>
      </form>
    </section>
  )
}
