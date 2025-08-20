import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import ReactQueryProvider from "@/utils/ReactQueryProvider";

import "@/styles/globals.css";
import "@/styles/fonts.css";
import App from "@/App";

// 모바일 주소창 변화 감지 및 --app-height 업데이트
const setAppHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--app-height', `${window.innerHeight}px`);
};

// 초기 설정
setAppHeight();

// 리사이즈 및 오리엔테이션 변경 시 업데이트
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
