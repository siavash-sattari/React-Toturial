import SpinnerGIF from '../../assets/Reload.gif';

const Spinner = () => {
  return (
    <>
      <img src={SpinnerGIF} className='d-block m-auto' style={{ width: '150px' }} />
    </>
  );
};

export default Spinner;
