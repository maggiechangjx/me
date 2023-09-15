import React, { useState,useEffect } from 'react';

// components
import Layout from "../components/layout"
import Index from "../components/indexImages"


const home = () => {
  return (
    <Layout id={"home"} title={"homeT"}> 
      <Index></Index>
    </Layout>
  )
}

export default home

export const Head = () => <title>Maggie Jiaxu Chang</title>
