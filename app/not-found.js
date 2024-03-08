import Link from 'next/link'

export default function NotFound() {
  return <div className='flex flex-col justify-center h-[500px] items-center'>
      <h1>Not found – 404!</h1>
      <div className='mt-2'>
        <Link href="/">Go back to Home</Link>
      </div>
  </div>
}