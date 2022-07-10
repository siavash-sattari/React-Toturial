import SearchContact from './contact/SearchContact';

import { BACKGROUND, PURPLE } from '../../helpers/colors';

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark navbar-expand-sm shadow-lg py-3' style={{ backgroundColor: BACKGROUND }}>
      <div className='container'>
        <div className='row w-100'>
          <div className='col'>
            <div className='navbar-brand'>
              <i className='fas fa-id-badge' style={{ color: PURPLE }} /> وب اپلیکیشن مدیریت{'  '}
              <span style={{ color: PURPLE }}>مخاطبین</span>
            </div>
          </div>
          <div className='col'>
            <SearchContact />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
