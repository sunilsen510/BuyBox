import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='bg-white-100 mt-8 py-6'>
        <div className='container mx-auto px-4 text-center text-gray-600'>
          &copy; {new Date().getFullYear()} <span className='text-gray-600 font-semibold'>All Copyrights Reserved By Company Name</span>
        </div>
      </footer>
    </>
  )
}

export default Footer
