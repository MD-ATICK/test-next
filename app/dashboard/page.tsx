import { Metadata } from 'next'
import { Suspense } from 'react'
import { Navbar } from '../components/dashboard/Navbar'


export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'This is the dashboard',
  keywords: ['dashboard', 'nextjs', 'react'],
  robots: { 'follow': true },
}
function page() {



  return (
    <div>
      {/* if navbar come with late we can set login fallback */}
      <Suspense fallback={<h1 className=' text-white font-bold text-4xl'>Loading...</h1>}>
        <Navbar />
      </Suspense>
      dashboard
    </div>
  )
}

export default page
