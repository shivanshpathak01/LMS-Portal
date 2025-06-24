import React, { useState } from 'react'

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-blue-600 text-white py-16'>
        <div className='max-w-6xl mx-auto px-4'>
          <h1 className='text-4xl md:text-5xl font-bold text-center mb-6'>Contact Us</h1>
          <p className='text-xl text-center max-w-3xl mx-auto'>
            Have questions or need support? We're here to help you on your learning journey.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-6xl mx-auto px-4 py-16'>
        <div className='grid lg:grid-cols-2 gap-16'>
          {/* Contact Form */}
          <div>
            <h2 className='text-3xl font-bold text-gray-800 mb-8'>Send us a Message</h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                  Full Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='Enter your full name'
                />
              </div>
              
              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='Enter your email address'
                />
              </div>
              
              <div>
                <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-2'>
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='Enter the subject'
                />
              </div>
              
              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='Enter your message'
                />
              </div>
              
              <button
                type='submit'
                className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium'
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className='text-3xl font-bold text-gray-800 mb-8'>Get in Touch</h2>
            
            <div className='space-y-8'>
              {/* Email */}
              <div className='flex items-start space-x-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <span className='text-blue-600 text-xl'>📧</span>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-800 mb-2'>Email</h3>
                  <p className='text-gray-600'>shivanshpathak0001@gmail.com</p>
                  {/* <p className='text-gray-600'>info@lmsportal.com</p> */}
                </div>
              </div>

              {/* Phone */}
              <div className='flex items-start space-x-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <span className='text-blue-600 text-xl'>📞</span>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-800 mb-2'>Phone</h3>
                  <p className='text-gray-600'>+1 (555) 123-4567</p>
                  <p className='text-gray-600'>+1 (555) 987-6543</p>
                </div>
              </div>

              {/* Address */}
              <div className='flex items-start space-x-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <span className='text-blue-600 text-xl'>📍</span>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-800 mb-2'>Address</h3>
                  <p className='text-gray-600'>
                    123 Learning Street<br />
                    Education District<br />
                    Knowledge City, KC 12345<br />
                    United States
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className='flex items-start space-x-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <span className='text-blue-600 text-xl'>🕒</span>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-800 mb-2'>Business Hours</h3>
                  <p className='text-gray-600'>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className='text-gray-600'>Saturday: 10:00 AM - 4:00 PM</p>
                  <p className='text-gray-600'>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className='mt-12'>
              <h3 className='text-lg font-semibold text-gray-800 mb-4'>Follow Us</h3>
              <div className='flex space-x-4'>
                <a href='https://instagram.com/shivanshpathak._' target='_blank' rel='noopener noreferrer' className='w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors' title='Instagram'>
                  <span>📷</span>
                </a>
                <a href='https://twitter.com/I_m_shivansh' target='_blank' rel='noopener noreferrer' className='w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors' title='Twitter'>
                  <span>🐦</span>
                </a>
                <a href='https://www.linkedin.com/in/shivansh-pathak-02a72121a/' target='_blank' rel='noopener noreferrer' className='w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors' title='LinkedIn'>
                  <span>💼</span>
                </a>
                <a href='mailto:shivanshpathak0001@gmail.com' className='w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors' title='Email'>
                  <span>📧</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
