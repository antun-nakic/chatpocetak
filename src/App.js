import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}>
        <Route path='room/:idSobe' element={<Soba />} />
        <Route path='room/new' element={<CreateNewRoom />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
