import { useState, useEffect } from "react";

function useWindowSize() {
  // 윈도우 크기를 추적하는 상태를 정의합니다.
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // 윈도우 크기 변경 시 상태를 업데이트하는 함수
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // 이벤트 리스너를 추가합니다.
    window.addEventListener("resize", handleResize);

    // 초기 실행 시 한 번 호출 (크기 초기화)
    handleResize();

    // 정리(clean-up) 함수에서 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // 빈 배열로 의존성 설정

  // 현재 윈도우 크기를 반환합니다.
  return windowSize;
}

export default useWindowSize;
