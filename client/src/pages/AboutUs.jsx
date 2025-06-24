import React from 'react'

function AboutUs() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-blue-600 text-white py-16'>
        <div className='max-w-6xl mx-auto px-4'>
          <h1 className='text-4xl md:text-5xl font-bold text-center mb-6'>About Us</h1>
          <p className='text-xl text-center max-w-3xl mx-auto'>
            Empowering learners worldwide with high-quality online education and professional development courses.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-6xl mx-auto px-4 py-16'>
        {/* Our Story */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>Our Story</h2>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <p className='text-gray-600 mb-4'>
                Founded with a vision to democratize education, our Learning Management System has been at the forefront of online education innovation. We believe that quality education should be accessible to everyone, regardless of their location or background.
              </p>
              <p className='text-gray-600 mb-4'>
                Since our inception, we've helped thousands of students advance their careers through our comprehensive course offerings, expert instructors, and cutting-edge learning platform.
              </p>
              <p className='text-gray-600'>
                Our commitment to excellence and student success drives everything we do, from course development to student support services.
              </p>
            </div>
            <div className='bg-blue-100 p-8 rounded-lg'>
              <h3 className='text-2xl font-semibold text-blue-800 mb-4'>Our Mission</h3>
              <p className='text-blue-700'>
                To provide world-class online education that empowers individuals to achieve their professional goals and unlock their full potential through innovative learning experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-800 mb-12 text-center'>Why Choose Us</h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center p-6 bg-white rounded-lg shadow-md'>
              <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl text-blue-600'>🎓</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>Expert Instructors</h3>
              <p className='text-gray-600'>Learn from industry professionals with years of real-world experience and expertise.</p>
            </div>
            <div className='text-center p-6 bg-white rounded-lg shadow-md'>
              <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl text-blue-600'>📚</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>Comprehensive Courses</h3>
              <p className='text-gray-600'>40+ professional courses covering technology, business, design, and personal development.</p>
            </div>
            <div className='text-center p-6 bg-white rounded-lg shadow-md'>
              <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl text-blue-600'>🏆</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>Certified Learning</h3>
              <p className='text-gray-600'>Earn industry-recognized certificates upon successful completion of courses.</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className='bg-blue-600 text-white rounded-lg p-12 mb-16'>
          <h2 className='text-3xl font-bold text-center mb-12'>Our Impact</h2>
          <div className='grid md:grid-cols-4 gap-8 text-center'>
            <div>
              <div className='text-4xl font-bold mb-2'>10,000+</div>
              <div className='text-blue-200'>Students Enrolled</div>
            </div>
            <div>
              <div className='text-4xl font-bold mb-2'>40+</div>
              <div className='text-blue-200'>Professional Courses</div>
            </div>
            <div>
              <div className='text-4xl font-bold mb-2'>50+</div>
              <div className='text-blue-200'>Expert Instructors</div>
            </div>
            <div>
              <div className='text-4xl font-bold mb-2'>95%</div>
              <div className='text-blue-200'>Student Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className='text-3xl font-bold text-gray-800 mb-12 text-center'>Our Values</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='p-6 border-l-4 border-blue-600 bg-white'>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>Excellence</h3>
              <p className='text-gray-600'>We strive for excellence in everything we do, from course content to student support.</p>
            </div>
            <div className='p-6 border-l-4 border-blue-600 bg-white'>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>Innovation</h3>
              <p className='text-gray-600'>We continuously innovate our platform and teaching methods to enhance learning experiences.</p>
            </div>
            <div className='p-6 border-l-4 border-blue-600 bg-white'>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>Accessibility</h3>
              <p className='text-gray-600'>We believe quality education should be accessible to everyone, everywhere.</p>
            </div>
            <div className='p-6 border-l-4 border-blue-600 bg-white'>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>Community</h3>
              <p className='text-gray-600'>We foster a supportive learning community where students can grow and succeed together.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
