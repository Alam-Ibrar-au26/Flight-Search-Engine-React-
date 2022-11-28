import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <ul className='nav-ul'>
        <li>
          <Link to='/'>OneWay</Link>
        </li>
        <li>
          <Link to='/return'>Return</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
