import React from "react";
import Brand from "./Brand";

const Brands = () => {
  return (
    <>
      <div>
        <br />
        <br />
        <h1 className="brand-line text-center pt-lg-5 pb-lg-4 animate__animated animate__jackInTheBox animate__delay-10s ">
          Leading Brands
        </h1>
        <div className="container-fluid d-flex justify-content-center align-items-center flex-wrap mt-lg-4 mb-lg-4 brand-names mx-auto w-100">
          <Brand
            name={"Rinnai"}
            class="py-lg-3 text-center brand-common first-brand animate__animated animate__bounce  animate__infinite animate__slower"
          />
          <Brand
            name={"WEICHAI ©"}
            class="py-lg-3 text-center brand-common second-brand animate__animated animate__bounce "
          />
          <Brand
            name={"SCOTTVEST"}
            class="py-lg-3 text-center brand-common third-brand animate__animated animate__bounce animate__infinite animate__slower"
          />
          <Brand
            name={"ALLSTATE"}
            class="py-lg-3 text-center brand-common fourth-brand animate__animated animate__bounce"
          />
          <Brand
            name={"NAVISTAR"}
            class="py-lg-3 text-center brand-common fifth-brand animate__animated animate__bounce animate__infinite animate__slower"
          />
          <Brand
            name={"SUBWAY🍕"}
            class="py-lg-3 text-center brand-common sixth-brand animate__animated animate__bounce"
          />
          <Brand
            name={"BUFFERIN"}
            class="py-lg-3 text-center brand-common seventh-brand animate__animated animate__bounce animate__infinite animate__slower"
          />
          <Brand
            name={"ireVU"}
            class="py-lg-3 text-center brand-common eightth-brand animate__animated animate__bounce"
          />
          <Brand
            name={"TIKYUN"}
            class="py-lg-3 text-center brand-common ninth-brand animate__animated animate__bounce animate__infinite animate__slower"
          />
          <Brand
            name={"CHARGEZOOM"}
            class="py-lg-3 text-center brand-common tenth-brand animate__animated animate__bounce"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Brands;
