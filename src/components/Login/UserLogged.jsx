import React from 'react'

const UserLogged = () => {

  const user = JSON.parse(localStorage.getItem('NameUser'))

  console.log(user)

  return (
    <div className='contain-logged'>
      <div className='icon-logged'>
        <i className='bx bxs-user-circle' ></i> <h3 h3 className='checked'>✔</h3>
        <h2 className='name-user'>{`${user && user?.firstName} ${user && user?.lastName}`}</h2>
      </div>
      <h3 className='text-logged'>User Logged </h3>
    </div>
  )
}

export default UserLogged