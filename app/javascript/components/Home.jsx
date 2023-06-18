import React from "react";
import Footer from "./fragments/Footer";
import Main from "./fragments/Main";
import Navigation from "./fragments/navigation/Navigation";
import { TbBrandGraphql } from 'react-icons/tb';

export default () => (
  <>
    <div className="bg-gray-100">

      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-white text-[#444444] h-screen">
          <div className="p-4">
            <h1 className="text-xl font-bold">
              <TbBrandGraphql size={'80px'} />
            </h1>
          </div>

          <ul className="py-4">
            <li className="px-4 py-2 hover:bg-green-700">Item 1</li>
            <li className="px-4 py-2 hover:bg-green-700">Item 2</li>
            <li className="px-4 py-2 hover:bg-green-700">Item 3</li>
            <li className="px-4 py-2 hover:bg-green-700">Item 4</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-3/4 bg-white p-4 h-screen content-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Content</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis enim auctor, efficitur ex at, fermentum quam. Vestibulum sed semper sapien. Aenean laoreet nisl at felis blandit, eget vestibulum metus fermentum. Mauris fermentum, risus ac tincidunt venenatis, urna nunc finibus odio, id auctor ex orci sed arcu. Ut auctor augue quis consectetur lacinia. Quisque in magna faucibus, posuere elit et, fringilla justo.</p>
          <p>Sed faucibus iaculis arcu at tincidunt. In in lectus sem. Suspendisse vel nisl id elit ultricies blandit non sed odio. Aliquam gravida turpis ac cursus rutrum. Mauris consequat enim quis metus sagittis, ut euismod dui semper. Sed tempus sem id elit commodo, non sagittis ex euismod. Morbi ac efficitur metus. Integer facilisis lorem at luctus hendrerit. Curabitur in feugiat nulla.</p>
        </div>
      </div>

    </div>

    {/* Navbar goes here */}
    {/* <Navigation /> */}

    {/* Main Content here */}
    {/* <Main /> */}

    {/* Footer */}
    {/* <Footer /> */}
  </>
);
