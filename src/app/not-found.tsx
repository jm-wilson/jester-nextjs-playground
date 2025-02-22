import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='grid place-items-center'>
      <h2 className='text-6xl font-bold'>Not Found 😨</h2>
      <p className='italic opacity-90'>We have everything, except for that...</p>
      <Link href="/" className='bg-slate-900 block mt-4 px-4 py-2 rounded-md'>Return Home</Link>
    </div>
  )
}