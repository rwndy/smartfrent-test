import { Container } from 'reactstrap'

const MainLayout = ({children}) => {
  return (
    <main>
      <Container className="W-75">
        {children}
      </Container>
    </main>
  )
}

export default MainLayout