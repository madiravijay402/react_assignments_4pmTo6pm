import React, { Component } from 'react'
import withAuth from '../HOC/withAuth'
import NavBar from './NavBar';
const Components=withAuth(NavBar);
const Higher = () => {
  return (
    <>
        <Components/>
        <NavBar/>
    </>
  )
}

export default Higher