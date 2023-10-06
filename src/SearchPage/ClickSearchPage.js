import React from 'react'

import Navbar from '../MainPage/Navbar'
import PaginationTable from '../MainPage/PaginationTable'
import SearchInput from './SerachInput/Input'

const ClickSearchPage = () => {
  return (
    <div>
      <Navbar/>
      <SearchInput/>
      <PaginationTable/>
    </div>
  )
}

export default ClickSearchPage
