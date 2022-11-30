import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TodoPage from "./components/pages/todopage/TodoPage";
import { RoutePath } from "./components/types";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={RoutePath.Todo} element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
