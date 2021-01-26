import { Menu } from 'semantic-ui-react';
import { useRouter } from 'next/router';

export default function Gnb() {
  let activeItem;
  const router = useRouter();

  if (router.pathname === '/') { activeItem = 'home'; }
  if (router.pathname === '/about') {
    activeItem = 'about';
  }
  function goLink(e, data) {
    if (data.name === 'home') router.push('/');
    if (data.name === 'about') router.push('/about');
  }
  return (
    <Menu secondary>
      <Menu.Item
        name="home"
        active={activeItem === 'home'}
        onClick={goLink}
      />
      <Menu.Item
        name="about"
        active={activeItem === 'about'}
        onClick={goLink}
      />
      <Menu.Item
        name="404"
        active={activeItem === 'about'}
        onClick={() => router.push('/404')}
      />
    </Menu>
  );
}
