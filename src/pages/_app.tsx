import { useEffect } from 'react';
import type { AppProps } from "next/app";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "@/styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,      // 애니메이션 지속 시간
      once: true,         // 한 번만 실행
      easing: 'ease-out', // 부드러운 이징
      offset: 100        // 요소가 이만큼 보일 때 시작
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
