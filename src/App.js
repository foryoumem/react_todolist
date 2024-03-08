import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router-dom';
import Root from "./routes/root.js";
import Detail from './routes/details.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/details/:detailId",
    element: <Detail />
  }
])

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root />} />
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