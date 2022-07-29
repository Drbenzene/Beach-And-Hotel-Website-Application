import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomeScreen from './Components/Screens/HomeScreen'
import RoomScreen from './Components/Screens/RoomScreen'
import SingleRoomScreen from './Components/Screens/SingleRoomScreen'
import NotFoundScreen from './Components/Screens/NotFoundScreen'


function Router() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/rooms' element={<RoomScreen />} />
            <Route path='/rooms/:slug' element={<SingleRoomScreen />} />
            <Route path="*" element={<NotFoundScreen to='/not-found' />} />
        </Routes>
    </div>
  )
}

export default Router