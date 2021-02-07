import React, {ReactNode} from 'react'
import {AuthProvider} from './auth-context'

export const AppProvider = ({children}: {children: ReactNode}) => (
  <AuthProvider>{children}</AuthProvider>
)
