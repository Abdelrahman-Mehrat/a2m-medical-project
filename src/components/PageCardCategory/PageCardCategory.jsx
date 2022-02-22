const PageCardCategory = ({ i }) => {
  return (
    <>
      <div className="col-12 col-md-4 col-sm-6 col-lg-3 p-3">
        <div className="CardWrapper  px-2 py-1">
          <img className="w-100" src={i?.image} alt="" />
          <p
            className="pt-1 text-center text-capitalize"
            style={{ color: "#07a8ff", cursor: "pointer" }}
          >
            {i?.name} <br />
          </p>
          <p
            className="text-center text-capitalize second__card__p"
            style={{ color: "#7d21c3", cursor: "pointer" }}
          >
            {i?.slogan}
          </p>
        </div>
      </div>
    </>
  );
};
export default PageCardCategory;
