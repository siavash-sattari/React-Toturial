import Contact from './Contact';
import { PINK, CURRENTLINE, ORANGE } from '../../../helpers/colors';
// import NotFound from "../../../assets/no-found.gif";

const Contacts = ({ contacts }) => {
  return (
    <>
      <section className='container'>
        <div className='grid'>
          <div className='row'>
            <div className='col'>
              <p className='h3'>
                <button className='btn mx-2 my-3' style={{ backgroundColor: PINK }}>
                  ساخت مخاطب جدید
                  <i className='fa fa-plus-circle mx-2' />
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='container'>
        <div className='row'>
          {contacts.length > 0 ? (
            contacts.map(c => <Contact key={c.id} contact={c} />)
          ) : (
            <div className='col-md-10 text-center py-5 mx-auto my-5' style={{ backgroundColor: CURRENTLINE }}>
              <p className='h3' style={{ color: ORANGE }}>
                مخاطب یافت نشد ...
              </p>
              <img src={require('../../../assets/no-found.gif')} alt='پیدا نشد' className='w-25' />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Contacts;
