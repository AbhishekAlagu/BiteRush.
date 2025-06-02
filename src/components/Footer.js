import LOGO_URL from "../utils/constants";

const Footer = () => {
  return (
    <div className="flex bottom-0 border-t-1 mt-8 p-8 justify-between bg-gray-800">
      <div className="flex ">
        <img className="w-[100px] h-[100px] rounded-full" src={LOGO_URL} />
        <span className=" content-center m-2 font-bold text-white">
          BiteRush.
        </span>
      </div>
      <div className="content-center m-2 text-white font-bold">
        © 2025 BiteRush. , Inc. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
