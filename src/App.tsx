import { Layout } from 'antd';
import { useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './hooks/redux';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { refreshUser } from './store/reducers/ActionCreators'

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
      dispatch(refreshUser())
  }, [dispatch])

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
