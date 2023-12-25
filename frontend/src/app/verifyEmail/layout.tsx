import LoginLayout from '@/layout/LoginLayout'
import React, { ReactNode } from 'react'

type Props = {
    children : ReactNode
}

const layout = (props: Props) => {
  return (
    <LoginLayout>
        {props.children}
    </LoginLayout>
  )
}

export default layout