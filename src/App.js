import React from 'react';

import { fetchTables } from './redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Tables from './components/pages/Tables/Tables';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => fetchTables(dispatch), [dispatch]);

  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Tables />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;
