import React from "react";

import { Img, Button, Text } from "../";

const CatalogGriditem = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[204px] h-full relative rounded-lg w-full">
          <Img
            src={props?.img}
            className="absolute md:h-[204px] h-full inset-[0] justify-center m-auto object-cover rounded-lg w-full"
            alt="img"
          />
          <Button
            className="absolute cursor-pointer font-bold font-inter h-[29px] min-w-[88px] right-[2%] text-blue_gray_900 text-center text-sm top-[4%] tracking-[-0.10px] w-auto"
            shape="RoundedBorder5"
            size="sm"
            variant="FillWhiteA700"
          >
            {props?.p35000}
          </Button>
        </div>
        <Text
          className="font-inter text-blue_gray_900 text-left w-auto"
          as="h4"
          variant="h4"
        >
          {props?.title}
        </Text>
        <div className="flex flex-row gap-1.5 items-end justify-start w-full">
          <Text
            className="font-inter not-italic text-blue_gray_400 text-left w-auto"
            as="h5"
            variant="h5"
          >
            {props?.guestscounter}
          </Text>
          <Text
            className="font-inter text-blue_gray_400 text-center w-auto"
            as="h3"
            variant="h3"
          >
            {props?.point}
          </Text>
          <Text
            className="font-inter not-italic text-blue_gray_400 text-left w-auto"
            as="h5"
            variant="h5"
          >
            {props?.bedroomcounter}
          </Text>
          <Text
            className="font-inter text-blue_gray_400 text-center w-auto"
            as="h3"
            variant="h3"
          >
            {props?.pointOne}
          </Text>
          <Text
            className="font-inter not-italic text-blue_gray_400 text-left w-auto"
            as="h5"
            variant="h5"
          >
            {props?.bedscounter}
          </Text>
        </div>
      </div>
    </>
  );
};

CatalogGriditem.defaultProps = {
  img: "images/img_img_204x364.png",
  p35000: "35 000 ₽",
  title: "daasdasdasda",
  guestscounter: "2 guests",
  point: ".",
  bedroomcounter: "1 bedroom",
  pointOne: ".",
  bedscounter: "2 beds",
};

export default CatalogGriditem;
