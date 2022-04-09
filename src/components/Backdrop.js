function Backdrop(props) {
  const closeModal = () => {
    props.onCancel();
  };
  return <div className='backdrop' onClick={closeModal} />;
}

export default Backdrop;
