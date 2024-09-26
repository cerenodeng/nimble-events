import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-y-10 p-7 md:mx-auto md:max-w-screen-xl md:p-20'>
      <div className='text-5xl font-semibold'>沒有這個網頁</div>
      <Link href='/' className='text-2xl font-medium'>
        回到首頁
      </Link>
    </div>
  );
}
