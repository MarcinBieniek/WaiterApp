import { fetchTables } from './redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => fetchTables(dispatch), [dispatch]);

  return (
    <h1>Hello world</h1>
  );
}

export default App;
