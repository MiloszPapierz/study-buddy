import React from 'react'
import { users } from 'data/users'
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem'
import { Wrapper } from './UsersList.styles'

const UsersList = () => (
   <Wrapper>
      <ul>
         {users.map((userData) => (
            <UsersListItem key={userData.name} userData={userData} />
         ))}
      </ul>
   </Wrapper>
)

export default UsersList
