import React from "react"
import { Link } from "gatsby"


export default ({ children }) => (
  <div>
    <Link to={"/"}>
      <h3>
        Pandas Eating Lots
      </h3>
    </Link>
    <Link to="/about/" style={{ float: 'right'}}>
      About
    </Link>
    {children}
  </div>
)