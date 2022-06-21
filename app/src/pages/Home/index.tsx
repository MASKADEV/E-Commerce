import { useState } from 'react';
import SideBar from '../../components/ui/Navigation/SideBar';
import ExploreProducts from './sub_pages/pages/explore_products';
import LatestProducts from './sub_pages/pages/latest_products';
import TrendingProducts from './sub_pages/pages/trending_products';


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
      {/* {showSearch.value === true ? <SearchPage /> : <div></div> } */}
    </div>
  )

}

export default Home