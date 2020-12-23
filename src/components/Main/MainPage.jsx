import MainLayout from '../../layout/MainLayout'
import CardSelector from '../CardSelector/CardSelector'

const MainPage = () => {
  return(
    <MainLayout>
      <h1 className="text-center mt-4">Welcome To My Shops</h1>
      <CardSelector />
    </MainLayout>
  )
}

export default MainPage