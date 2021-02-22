import React from 'react'
import { useAuth } from './context/auth-context'
import { ProjectListScreen } from './screens/ProjectList'

function AuthedApp() {
  const {user, logout} = useAuth();
  return (
    <div>
      <ProjectListScreen/>
      <button onClick={logout}></button>
    </div>
  )
}

export default AuthedApp
