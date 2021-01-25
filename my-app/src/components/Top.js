import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';

export default function Top() {
  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
      }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/images/pig.png" alt="site-logo" />
          <Header as="h1">HI! TERADA</Header>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Gnb />
        </div>
      </div>
    </div>
  );
}
