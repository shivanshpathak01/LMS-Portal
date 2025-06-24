import React from 'react'

function PrivacyPolicy() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-blue-600 text-white py-16'>
        <div className='max-w-6xl mx-auto px-4'>
          <h1 className='text-4xl md:text-5xl font-bold text-center mb-6'>Privacy Policy</h1>
          <p className='text-xl text-center max-w-3xl mx-auto'>
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-4xl mx-auto px-4 py-16'>
        <div className='bg-white rounded-lg shadow-md p-8'>
          <p className='text-gray-600 mb-8'>
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className='space-y-8'>
            {/* Introduction */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>1. Introduction</h2>
              <p className='text-gray-600 mb-4'>
                Welcome to our Learning Management System ("LMS Portal", "we", "our", or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p className='text-gray-600'>
                By accessing or using our service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>2. Information We Collect</h2>
              
              <h3 className='text-lg font-semibold text-gray-800 mb-3'>2.1 Personal Information</h3>
              <p className='text-gray-600 mb-4'>
                We may collect personally identifiable information that you voluntarily provide to us when you:
              </p>
              <ul className='list-disc list-inside text-gray-600 mb-4 space-y-1'>
                <li>Register for an account</li>
                <li>Enroll in courses</li>
                <li>Contact us for support</li>
                <li>Subscribe to our newsletter</li>
                <li>Participate in surveys or feedback</li>
              </ul>

              <h3 className='text-lg font-semibold text-gray-800 mb-3'>2.2 Usage Information</h3>
              <p className='text-gray-600 mb-4'>
                We automatically collect certain information when you visit our platform, including:
              </p>
              <ul className='list-disc list-inside text-gray-600 mb-4 space-y-1'>
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent</li>
                <li>Course progress and completion data</li>
                <li>Learning analytics and performance metrics</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>3. How We Use Your Information</h2>
              <p className='text-gray-600 mb-4'>
                We use the information we collect for various purposes, including:
              </p>
              <ul className='list-disc list-inside text-gray-600 mb-4 space-y-1'>
                <li>Providing and maintaining our educational services</li>
                <li>Processing course enrollments and payments</li>
                <li>Tracking learning progress and issuing certificates</li>
                <li>Communicating with you about courses and updates</li>
                <li>Improving our platform and user experience</li>
                <li>Preventing fraud and ensuring platform security</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>4. Information Sharing and Disclosure</h2>
              <p className='text-gray-600 mb-4'>
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              <ul className='list-disc list-inside text-gray-600 mb-4 space-y-1'>
                <li>With your explicit consent</li>
                <li>To service providers who assist in our operations</li>
                <li>To comply with legal requirements or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>5. Data Security</h2>
              <p className='text-gray-600 mb-4'>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className='list-disc list-inside text-gray-600 mb-4 space-y-1'>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication systems</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>6. Your Rights and Choices</h2>
              <p className='text-gray-600 mb-4'>
                You have certain rights regarding your personal information:
              </p>
              <ul className='list-disc list-inside text-gray-600 mb-4 space-y-1'>
                <li>Access and review your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Delete your account and associated data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request data portability</li>
                <li>Object to certain processing activities</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>7. Cookies and Tracking Technologies</h2>
              <p className='text-gray-600 mb-4'>
                We use cookies and similar tracking technologies to enhance your experience on our platform. These technologies help us:
              </p>
              <ul className='list-disc list-inside text-gray-600 mb-4 space-y-1'>
                <li>Remember your preferences and settings</li>
                <li>Analyze platform usage and performance</li>
                <li>Provide personalized content and recommendations</li>
                <li>Ensure platform security and prevent fraud</li>
              </ul>
              <p className='text-gray-600'>
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>8. Children's Privacy</h2>
              <p className='text-gray-600'>
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>9. Changes to This Privacy Policy</h2>
              <p className='text-gray-600'>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>10. Contact Us</h2>
              <p className='text-gray-600 mb-4'>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className='bg-blue-50 p-4 rounded-lg'>
                <p className='text-gray-700'><strong>Email:</strong> privacy@lmsportal.com</p>
                <p className='text-gray-700'><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className='text-gray-700'><strong>Address:</strong> 123 Learning Street, Education District, Knowledge City, KC 12345</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
