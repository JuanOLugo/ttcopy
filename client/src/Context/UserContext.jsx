import React, { createContext, useState } from 'react'

export const UserContext = createContext()

function UserContextProvider({children}) {

    const [PRINCIPAL_USER, setPRINCIPAL_USER] = useState(null)

  return (
    <UserContext.Provider value={{PRINCIPAL_USER, setPRINCIPAL_USER}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider