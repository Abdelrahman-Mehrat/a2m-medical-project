export const PageCardCategory = ({ i }) => {
  return (
    <>
      <div className=' col-md-3  p-3'>
        <div className='CardWrapper  p-2'>
          <img className='w-100' src={i?.image} alt='' />
          <p className='pt-2 text-center'>{i?.name}</p>
        </div>
      </div>
    </>
  );
};
