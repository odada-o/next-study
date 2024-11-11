import { navigationItem } from '@/data/navigation';
import Nav from './Nav';
import Nav2 from './Nav2';

function Header() {
  return (
    <header>
      <h1>logo</h1>
      <Nav nav={navigationItem} />
      <Nav2 nav={navigationItem} />
    </header>
  );
}

export default Header;
