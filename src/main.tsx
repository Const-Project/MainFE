import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import ReactQueryProvider from "@/utils/ReactQueryProvider";

import "@/styles/globals.css";
import "@/styles/fonts.css";
import App from "@/App";

// 모바일 뷰포트 높이 동적 계산
function setAppHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--app-height', `${vh}px`);
}

// 초기 설정 및 리사이즈 이벤트 리스너
setAppHeight();
window.addEventListener('resize', setAppHeight);
window.addEventListener('orientationchange', setAppHeight);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactQueryProvider>
  </React.StrictMode>
);
