import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden">
        <div className="w-full h-full">
          <Image
            layout="fill"
            className="fixed "
            alt="aadfh"
            src="https://thecarbontrack.com/wp-content/uploads/2024/10/website-graphic-CT-without-Logo.png"
          />
        </div>
        <div className="preloader" style={{ display: "none" }}>
          <i className="fi-widget" aria-hidden="true" />
        </div>{" "}
        <div id="wrapper" style={{ visibility: "visible" }}>
          <div className="center logotype">
            <header className="fixed z-50 w-screen flex justify-center items-center top-[54px]">
              <div className="logo-box" rel="home">
                <Image
                  className=""
                  src="https://thecarbontrack.com/wp-content/uploads/2024/10/Logo.png"
                  width={220}
                  height={100}
                  alt="logo"
                />
              </div>
            </header>
          </div>
          <div
            id="content"
            className="site-content"
            style={{ position: "absolute", top: "344.5px" }}
          >
            <div className="center">
              <div
                className="description"
                style={{ fontWeight: 300, fontStyle: "normal" }}
              >
                <div className="w-screen flex justify-center items-center flex-col text-white gap-4">
                  <h1 className="text-center w-full text-3xl font-bold text-whtie">
                    Coming Soon..
                  </h1>
                  <p className="text-center w-full text-whtie">
                    We &apos;re working hard to bring you something great!
                  </p>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>{" "}
      </div>

      <footer className="fixed bottom-4 w-screen">
        <div className="text-center text-white w-full">
          © thecarbontrack.com 2024
        </div>{" "}
      </footer>
    </>
  );
};

export default NotFound;
