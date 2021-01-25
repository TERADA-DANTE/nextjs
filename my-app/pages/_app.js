import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

/*
_app.js 의 역할
1. 페이지 전환시 레이아웃을 유지할 수 있다. 
2. 페이지 전환시 상태값을 유지할 수 있다.
=> 모든 페이지가 이곳을 통한다.
3. componentDidCatch를 이용해서 커스텀 에러 핸들링이 가능하다.
4. 추가적인 데이터를 페이지로 주입시킬 수 있다.
5. 글로벌 CSS를 선언할 수 있다.
*/
export default MyApp
