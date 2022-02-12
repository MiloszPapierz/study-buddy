import React, { useState, useEffect } from 'react'
import { users as usersData } from 'data/users'
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem'
import { StyledList, Wrapper } from './UsersList.styles'

const UsersList = () => {
   const [users, setUsers] = useState([])
   const [isLoading, setLoadingState] = useState(true)

   useEffect(() => {
      setLoadingState(true)
      mockAPI()
         .then((data) => {
            setLoadingState(false)
            setUsers(data)
         })
         .catch((err) => console.log(err))
   }, [])

   const deleteUser = (name) => {
      const filteredUsers = users.filter((user) => user.name !== name)
      setUsers(filteredUsers)
   }

   const mockAPI = (success) => {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            if (usersData) {
               resolve([...usersData])
            } else {
               reject({ message: 'Error' })
            }
         }, 2000)
      })
   }

   return (
      <Wrapper>
         <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
         <StyledList>
            {users.map((userData) => (
               <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
            ))}
         </StyledList>
      </Wrapper>
   )
}

export default UsersList
