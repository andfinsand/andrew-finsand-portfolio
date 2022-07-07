import React from 'react'
import Link from 'next/link'

const Button = () => {
  return (
    <div className="flex my-5 px-8">
        <Link href="/">
          <a className="btn btn-wide btn-secondary"></a>
        </Link>
      </div>
  )
}

export default Button