import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from "./routes/root.js";
import Detail from './routes/details.js';

function App() {
  //const store = localStorage.getItem("todolist")
  const getData = () => {
    return localStorage.getItem("todolist")
  }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root getData={getData} />} />
                <Route path="/details/:detailsId" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App


// https://reactrouter.com/en/main/router-components/browser-router

// 배열에 사용하는 map filter 등등
// 1. probs 상세페이지에서도 지우기
// 2. localstorage 사용해보기
// 3. redux 적용하기