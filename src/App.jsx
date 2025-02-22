import { Route, Routes, useNavigate } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import LoginPage from './practice/LoginPage';
import Content from './practice/Content';
const Layout = lazy(() => import('./practice/Layout'));
import './practice/Practice.css';
import FirstComponent from './practice/FirstComponent';
import SecondComponent from './practice/SecondComponent';
import PageNotFound from './practice/PageNotFound';
import { Users } from './components/Users';
import UseReducer from './hooks/UseReducer';
import UseState from './hooks/UseState';
import UseContext from './hooks/UseContext';
import UseRef from './hooks/UseRef';
import Folder from './practice/Folder';
import Group from './practice/Group';
import Community from './practice/Community';
import Learn from './practice/Learn';
import FolderComponent from './components/FolderComponent';


const ProtectedRoute = ({ children }) => {

  const navigation = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigation('/');
    }
  }, [navigation]);

  return children;
};

function App() {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route element={<Layout />}>
            <Route path='/practice' element={
              <ProtectedRoute>
                <Content />
              </ProtectedRoute>
            } />
            <Route path='/first' element={
              <ProtectedRoute>
                <FirstComponent />
              </ProtectedRoute>
            } />
            <Route path='/folder' element={
              <ProtectedRoute>
                <FolderComponent />
              </ProtectedRoute>
            } />
            <Route path='/second' element={
              <ProtectedRoute>
                <SecondComponent />
              </ProtectedRoute>
            } />
            <Route path='/react-query' element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            } />

            <Route path='/use-reducer' element={
              <ProtectedRoute>
                <UseReducer />
              </ProtectedRoute>
            } />

            <Route path='/use-state' element={
              <ProtectedRoute>
                <UseState />
              </ProtectedRoute>
            } />

            <Route path='/use-context' element={
              <ProtectedRoute>
                <UseContext />
              </ProtectedRoute>
            } />
            <Route path='/use-ref' element={
              <ProtectedRoute>
                <UseRef />
              </ProtectedRoute>
            } />

            <Route path='/folder' element={
              <ProtectedRoute>
                <Folder />
              </ProtectedRoute>
            } />

            <Route path='/group' element={
              <ProtectedRoute>
                <Group />
              </ProtectedRoute>
            } />

            <Route path='/community' element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            } />

            <Route path='/learn' element={
              <ProtectedRoute>
                <Learn />
              </ProtectedRoute>
            } />

            <Route path='*' element={
              <ProtectedRoute>
                <PageNotFound />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
