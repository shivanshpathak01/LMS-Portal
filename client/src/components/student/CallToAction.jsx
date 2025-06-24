import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth, useClerk } from '@clerk/clerk-react'
import { assets } from '../../assets/assets'

function CallToAction() {
  const navigate = useNavigate()
  const { isSignedIn } = useAuth()
  const { openSignUp } = useClerk()

  const handleGetStarted = () => {
    if (isSignedIn) {
      navigate('/courses')
    } else {
      openSignUp()
    }
  }

  const handleLearnMore = () => {
    navigate('/course-list')
  }

  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>Start Your Learning Journey Today</h1>
      <p className='sm:text-sm text-gray-500 text-center max-w-2xl'>Join thousands of students who are advancing their careers with our comprehensive online courses. Learn from industry experts, get hands-on experience, and earn certificates that matter in today's competitive job market.</p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-6'>
        <div className='flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-4'>
          <span className='flex items-center gap-1'>✓ 40+ Professional Courses</span>
          <span className='flex items-center gap-1'>✓ Expert Instructors</span>
          <span className='flex items-center gap-1'>✓ Lifetime Access</span>
          <span className='flex items-center gap-1'>✓ Certificate of Completion</span>
        </div>
      </div>

      <div className='flex items-center font-medium gap-6 mt-4'>
        <button
          onClick={handleGetStarted}
          className='px-10 py-3 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200'
        >
          {isSignedIn ? 'Browse Courses' : 'Get Started'}
        </button>
        <button
          onClick={handleLearnMore}
          className='flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200'
        >
          Learn more <img src={assets.arrow_icon} alt="arrow icon" />
        </button>
      </div>
    </div>
  )
}

export default CallToAction