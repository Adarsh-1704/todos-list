import React from 'react'

function Footer() {
  let footerStyle = {
    position: "relative",
    width: "100%",
    bottom: '0',
    marginTop: "20px"
  }
  return (
    <div className='bg-dark text-light py-3' style={footerStyle}>
      <p className="text-center">
        Copyright &copy; MyTodosList.com
      </p>
    </div>
  )
}

export default Footer