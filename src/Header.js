import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import {ReactComponent as KodiusMarketLogo} from './kodiusMarket3.svg';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <KodiusMarketLogo className='header__logo'/>
      </Link>
     

      <div className='header__search'>
        <input 
          className='header__searchInput'
          type="text"
        />
        <SearchIcon className="header__searchIcon" />
        {/* Logo */}
      </div>

      <div className='header__nav'>
        <Link 
          to={!user && "/login"}
          style={{ textDecoration: 'none' }}
        >
          <div onClick={handleAuthentication} className='header__option'>
            <span className='header__optionLineOne'
            > 
              Hello {user ? `${user?.email}` : 'Guest'}
            </span>
              <span className='header__optionLineTwo'
            > 
              {user ? 'Sign Out':'Sign In'}
            </span>
          </div>
        </Link>
        
        <div className='header__option'>
          <span className='header__optionLineOne'
          > 
            Returns
          </span>
          <span className='header__optionLineTwo'
          > 
            & Orders
          </span>
        </div>

        <div className='header__option'>
          <span className='header__optionLineOne'
          > 
            Your
          </span>
          <span className='header__optionLineTwo'
          > 
            Prime
          </span>
        </div>

        {user?.email ?
        <Link 
          to="/checkout"
          style={{ textDecoration: 'none' }}
        >
          <div className="header__optionBasket"> 
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
        :

        <h3 className="header__notSignedIn">Please create account and Sign in</h3>
        }
      </div>
    </div>
  )
}

export default Header