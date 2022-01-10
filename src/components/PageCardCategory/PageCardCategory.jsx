import { useNavigate, useLocation } from "react-router-dom";

export const PageCardCategory = ({ i }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleRedirect = () => {
    navigate(`${pathname}/${i.name}/${i.id}/${i.slogan}`);
  };
  return (
    <>
      <div className='col-6 col-md-3 p-3'>
        <div className='CardWrapper  px-2 py-1'>
          <img className='w-100' src={i?.image} alt='' />
          <p
            className='pt-1 text-center text-capitalize'
            style={{ color: "#07a8ff", cursor: "pointer" }}>
            {i?.name} <br />
          </p>          
          <p 
          className="text-center text-capitalize"
          style={{ color: "#7d21c3", cursor: "pointer" }}>
          {i?.slogan}</p>
        </div>
      </div>
    </>
  );
};
