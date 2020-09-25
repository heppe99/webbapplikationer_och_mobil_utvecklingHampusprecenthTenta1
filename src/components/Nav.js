import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper, P, H1} from "../elements"

export const Nav = () => {
  const data = useStaticQuery(graphql`
  query logoQuery{
    file(relativePath: {eq: "decent.jpg"}) {
      publicURL
      name
    }
  }  
  `)

  return (
    <NavWrapper>
      <Link to="/">
        <img src={data.file.publicURL} alt="My Logo" />
      </Link>
      <H1>Decent Zociety</H1>
      <Link to="/">
        <P>Kontakt</P>
      </Link>
      <Link to="/">
        <P>Bilar</P>
      </Link>
      <Link to="/">
        <P>Om oss</P>
      </Link>
    </NavWrapper>
  )
}
