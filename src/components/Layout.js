import { Outlet } from 'react-router-dom';

// this component may not be necessary
const Layout = () => {
  return (
    <main className="App">
      <Outlet />
    </main>
  )
}

export default Layout;
