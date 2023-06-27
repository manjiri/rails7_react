import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Count from './Count'

const App = () => {
  return (
    <BrowserRouter>
      <Count/>
       <Routes> 
        <Route exact path="/clock" component={Clock} />
        <Route exact path="/count" component={Count} /> 
      </Routes>
    </BrowserRouter>

  )
}

export default App  