import React from "react";

import { Button, Img } from "../";

const CatalogHome = (props) => {
  return (
    <>
      <Button
        className={props.className}
        shape="icbRoundedBorder12"
        size="smIcn"
        variant="icbFillRed400"
      >
        <Img src="images/img_home.svg" className="" alt="home" />
      </Button>
    </>
  );
};

CatalogHome.defaultProps = {};

export default CatalogHome;
