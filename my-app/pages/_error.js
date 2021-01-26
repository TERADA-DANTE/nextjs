function Error({ statusCode }) {
  return (
    <p>
      {statusCode ? `An error ${statusCode} occured on server` : 'An error occured on client'}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
// 서버 에러페이지는 next에서 정적으로 제공되지 않는다.
// 그 이유는 서버쪽으로 에러를 보내는 작업을 동반하기 때문에 서버사이드 렌더링을 해야한다.
// 어떤 서버에러인지 확인하여 리포팅, 이슈 개선등을 할 수있다.
// 위처럼 작성하면 서버에서 클라이언트에서 발생하는 에러를 핸들링 할 수있다.
// 따라서 사실 404.js가 없어도 여기서 핸들링 해준다.
// 하지만 404는 스태틱으로 제공하는게 좋다. 성능
