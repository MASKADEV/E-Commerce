import { useState } from 'react';
import SideBar from '../../components/ui/Navigation/SideBar';
import ExploreProducts from './components/pages/explore_products';
import LatestProducts from './components/pages/latest_products';
import TrendingProducts from './components/pages/trending_products';


const Home = () => {

  const [currentPage, setcurrentPage] = useState<string>('latestProducts');

  const fetchCurrentPage = () => {
    switch (currentPage) {
      case 'latestProducts':
        return <LatestProducts />
      case 'popularProducts':
        return <TrendingProducts/>
      case 'exploreProducts':
        return <ExploreProducts/>
      default:
        return <LatestProducts />
    }
  }

  return (
    <div className='flex flex-row w-screen h-screen pt-[4rem]'>
      <SideBar currentPage={currentPage} setcurrentPage={setcurrentPage} />
      <div className='md:w-[20rem]'></div>
      <div>
        {fetchCurrentPage()}
      </div>
    </div>
  )
}

export default Home