import vector from "../assets/Vector2.png";

const ProductItem = ({ icon, heading, text }) => {
  return (
    <div className="md:mx-8">
      <img className="my-6" src={icon} alt="icon" />
      <h5 className="mt-6 mb-4 font-bold">{heading}</h5>
      <p className=" w-65">{text}</p>
      <button className="mb-6 mt-4 md:mb-36 rounded-2xl py-3 cursor-pointer">
        <span className="flex items-center">
          <p className="">Learn more </p>
          <img className="px-2" src={vector} alt="button-arrow" />
        </span>
      </button>
    </div>
  );
};

export default ProductItem;
