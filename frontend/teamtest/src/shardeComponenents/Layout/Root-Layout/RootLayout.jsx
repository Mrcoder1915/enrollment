import React from 'react'
import Header from '../../partials/header/Header'
import {Outlet}from 'react-router'

const RootLayout = () => {
  return (
        <>
            <Header />
            <Outlet />
        </>
  )
}

export default RootLayout
