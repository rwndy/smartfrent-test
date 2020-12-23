import { Fragment } from 'react'
import MainPage from '../components/Main/MainPage'
import Navigations from '../components/Navigation/NavigationsBar'

const HomePage = () => {
  return (
    <Fragment>
      <Navigations />
      <MainPage/>
    </Fragment>
  )
}

export default HomePage