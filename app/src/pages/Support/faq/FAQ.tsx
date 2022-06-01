import React, { useState } from 'react';

const FAQ:React.FC = () => {

  return (
    <div className='flex flex-row items-center w-screen'>
      <div className='md:w-[30rem]'>
      </div>
        <div className='md:mt-4 mt-3'>
          <div className='text-center'>
              <h1 className='md:text-3xl text-xl text-gray font-bold text-center'>FAQ</h1>
              <p className='md:text-md text-sm text-gray font-medium text-center mt-3'>Last updated on May 20, 2022</p>
          </div>
          <section className="relative py-7 min-w-screen animation-fade animation-delay">
            <div className="container px-8 mx-auto sm:px-12 xl:px-5">
                <div className="w-full px-6 py-6 mx-auto mt-4 bg-navBar-bg text-white rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                    <h3 className="text-lg font-bold text-main-color sm:text-xl md:text-2xl">How to Contact Cutomer Service?</h3>
                    <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                    Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.
                    </p>
                </div>
                <div className="w-full px-6 py-6 mx-auto mt-10 bg-navBar-bg text-white rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                    <h3 className="text-lg font-bold text-main-color sm:text-xl md:text-2xl">Do you offer team pricing?</h3>
                    <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                        Yes, we do! Team pricing is available for any plan. You can take advantage of 30% off for signing up for team pricing of 10 users or more.
                    </p>
                </div>
                <div className="w-full px-6 py-6 mx-auto mt-10 bg-navBar-bg text-white rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                    <h3 className="text-lg font-bold text-main-color sm:text-xl md:text-2xl">How do I make changes and configure my site?</h3>
                    <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                        You can easily change your site settings inside of your site dashboard by clicking the top right menu and clicking the settings button.
                    </p>
                </div>
                <div className="w-full px-6 py-6 mx-auto mt-10 bg-navBar-bg text-white rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                    <h3 className="text-lg font-bold text-main-color sm:text-xl md:text-2xl">How do I add a custom domain?</h3>
                    <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                        You can easily change your site settings inside of your site dashboard by clicking the top right menu and clicking the settings button.
                    </p>
                </div>
            </div>
        </section>
        </div>
    </div>
  )
}

export default FAQ