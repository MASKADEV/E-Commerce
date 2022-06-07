import { useState } from 'react';
import SideBar from '../../components/ui/navigation/SideBar';
import ExploreProducts from './components/explore_products';
import LatestProducts from './components/latest_products';
import TrendingProducts from './components/trending_products';

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
      <div>
        {fetchCurrentPage()}
      </div>
    </div>
  )
}

export default Home