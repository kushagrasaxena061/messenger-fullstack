'use client'

import useRoutes from '@/app/hooks/useRoutes'
import React, { useState } from 'react'

export default function DesktopSidebar() {
    const routes = useRoutes()
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div>DesktopSidebar</div>
  )
}
