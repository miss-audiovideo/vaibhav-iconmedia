import React from "react";
import Brand from "./Brand";

const Brands = () => {
  return (
    <>
      <div ><br/><br/>
        <h1 className="brand-line text-center pt-lg-5 pb-lg-4">Leading Brands</h1>
        <div className="container-fluid d-flex justify-content-center align-items-center flex-wrap mt-lg-4 mb-lg-4 brand-names mx-auto w-100">
          <Brand
            name={"Rinnai"}
            class="py-lg-3 text-center brand-common first-brand "
          />
          <Brand
            name={"WEICHAI ©"}
            class="py-lg-3 text-center brand-common second-brand"
          />
          <Brand
            name={"SCOTTVEST"}
            class="py-lg-3 text-center brand-common third-brand"
          />
          <Brand
            name={"ALLSTATE"}
            class="py-lg-3 text-center brand-common fourth-brand"
          />
          <Brand
            name={"NAVISTAR"}
            class="py-lg-3 text-center brand-common fifth-brand"
          />
          <Brand
            name={"SUBWAY🍕"}
            class="py-lg-3 text-center brand-common sixth-brand"
          />
          <Brand
            name={"BUFFERIN"}
            class="py-lg-3 text-center brand-common seventh-brand"
          />
          <Brand
            name={"ireVU"}
            class="py-lg-3 text-center brand-common eightth-brand"
          />
          <Brand
            name={"TIKYUN"}
            class="py-lg-3 text-center brand-common ninth-brand"
          />
          <Brand
            name={"CHARGEZOOM"}
            class="py-lg-3 text-center brand-common tenth-brand"
          />
        </div>
      </div><br/><br/><br/>
    </>
  );
};

export default Brands;
