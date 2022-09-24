import 'twin.macro'
import tw from 'twin.macro'
import Image from 'next/image'
import logo from '../../public/images/logo.png'

export default function Example() {
  return (
    <>
      <div tw="flex min-h-full flex-col bg-black pb-12">
        <main tw="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div tw="flex flex-shrink-0 justify-center">
            <div tw="w-36 h-36 overflow-hidden relative shadow-[0px_0px_200px_rgba(72,0,130,1)]">
              <Image alt="lepak-logo" layout="fill" objectFit="contain" src={logo}></Image>
            </div>
          </div>
          <div tw="py-1">
            <div tw="text-center">
              <p tw="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6DE3] to-[#BD00FF]">
                404
              </p>
              <h1 tw="text-white mt-2 text-4xl font-black tracking-tight sm:text-5xl">
                Page not found.
              </h1>
              <p tw="mt-2 text-base text-gray-500">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div tw="mt-6">
                <a
                  href="#"
                  tw="text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#3D6DE3] to-[#BD00FF]"
                >
                  Go back home
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </main>
        <footer tw="mx-auto w-full max-w-7xl flex-shrink-0 px-4 sm:px-6 lg:px-8">
          <nav tw="flex justify-center space-x-4">
            <a href="#" tw="text-sm font-medium text-gray-500 hover:text-gray-600">
              Twitter
            </a>
          </nav>
        </footer>
      </div>
    </>
  )
}
