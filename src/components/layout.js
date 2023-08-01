import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

import Nav from "../components/nav"
import Content from "../components/content"
import { base_layout, content_layout, nav_layout } from '../style/layout.module.css'


const Layout = ({ id, title, children }) => {

   // const [curPage, setCurPage] = useState('home')

   return (
      <div className={base_layout}>
         <Nav id={id} title={title} className={nav_layout}/>
         <main className={content_layout}>
            {children}
         </main>
      </div>
      
   )
}





export default Layout



