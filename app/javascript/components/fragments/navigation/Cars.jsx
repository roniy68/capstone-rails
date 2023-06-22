import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, selectCars } from "../../redux/carsSlice";
import { Link, useNavigate } from "react-router-dom";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { useLocation } from "react-router-dom";

const Cars = () => {
  const dispatch = useDispatch();
  const { cars, isLoading } = useSelector(selectCars);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const location = useLocation();
  const [message, setMessage] = React.useState(location?.state?.message || "");

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const renderCars = () => {
    const startIndex = currentIndex;
    const endIndex = startIndex + 2;
    return cars.slice(startIndex, endIndex + 1).map((car) => (
      <li key={car.id} className="w-auto h-auto lg:w-[400px] lg:h-[400px] mt-10 shadow">
        <Link to={`/detail/${car.id}`}>
          <img
            src={car.photo}
            alt={car.name}
            className="w-[200px] h-[200px] mx-auto my-4"
          />
          <div className="text-center">
            <p>
              {car.name} - {car.model}
            </p>
          </div>
          <div className="flex items-center justify-center mt-10 gap-6">
            <p>{car.description}</p>
          </div>
        </Link>
        <div className="flex items-center justify-center mt-10 gap-6 text-gray-500">
          <AiFillGithub size={30} />
          <AiFillFacebook size={30} />
          <AiFillInstagram size={30} />
          <AiFillLinkedin size={30} />
        </div>
      </li>
    ));
  };

  if (isLoading) {
    return (
      <div className="text-[#96bf01] text-2xl text-center">Loading...</div>
    );
  }

  return (

    <div className="bg-green-900 h-auto w-auto">

      {message && (
        <p className="text-center text-green-600 text-2xl">{message}</p>
      )}
      <h1 className="font-bold text-[30px] flex items-center justify-center tracking-widest">
        LATEST MODELS
      </h1>
      <p className="text-gray-500 text-[15px] flex items-center justify-center mb-10">
        Please select a renting car Model
      </p>

      <div className="flex justify-center items-center">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="bg-[#96bf01] rounded-r-full mr-6 pl-10"
        >
          <BsCaretLeft size={50} className="text-white" />
        </button>
        <ul className=" lg:w-[800px] gap-4 flex-1 flex justify-center items-center">
          {renderCars()}
        </ul>
        <button
          onClick={handleNext}
          disabled={currentIndex >= cars.length - 3}
          className="bg-[#96bf01] rounded-l-full ml-6 pr-10"
        >
          <BsCaretRight size={50} className="text-white" />
        </button>
      </div>


    </div>
  );
};

export default Cars;
