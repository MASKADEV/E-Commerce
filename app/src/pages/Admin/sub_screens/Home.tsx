import React from 'react'
import AnalyticsCard from '../componnents/cards/AnalyticsCard'

const Home = () => {

  return (
    <div>
      <div className='md:mt-6 mt-1'>
        {/* Analytics Cards */}
        <div className='flex flex-wrap'>
          <AnalyticsCard state='234' title='Orders'/>
          <AnalyticsCard state='57' title='New Orders'/>
          <AnalyticsCard state='$134123' title='Revenue'/>
          <AnalyticsCard state='2432' title='Users'/>
          <AnalyticsCard state='23423' title='Total Products'/>
          <AnalyticsCard state='23' title='Total Categories'/>
        </div>
        <hr className="border-b-2 border-gray-400 my-8 mx-4"/>
        <div>
        <div className="shadow-lg rounded-lg overflow-hidden">
          <div className="py-3 px-5 bg-gray-50">Line chart</div>
          <canvas className="p-10" id="chartLine"></canvas>
        </div>
        </div>
      </div>
    </div>

  )
}

export default Home