import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='flex'>
        <div className=''>
          <h1 className='text-4xl font-bold'>Hello, I'm</h1>
          <h1 className='text-6xl font-bold'>Gabriel Brun</h1>
          <h1 className='text-4xl font-bold'>Full-Stack Developer</h1>
        </div>
        <div className='ml-20'>
          <Image
            src='/Gabriel_Brun.jpg'
            alt='Picture of the author'
            // style={{ borderRadius: '50%' }}
            className='rounded-full w-60 h-60'
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className=''>
        <button>lydstyl@gmail.com</button>
      </div>
    </>
  )
}
