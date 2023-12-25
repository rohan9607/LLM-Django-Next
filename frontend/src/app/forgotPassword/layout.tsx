import LoginLayout from '@/layout/LoginLayout'
import React, { ReactNode } from 'react'

type Props = {
    children : ReactNode
}

const layout = ({children}: Props) => {
  return (
    <LoginLayout>
        {children}
    </LoginLayout>
  )
}

export default layout