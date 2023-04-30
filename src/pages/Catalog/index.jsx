import React from "react";

import { Img, Text, List } from "../../components";
import CatalogHome from "../../components/CatalogHome";
import CatalogGriditem from "../../components/CatalogGriditem";

const CatalogPage = () => {
  const catalogGriditemPropList = [
    {
      p35000: "35 000 ₽",
      img: "images/img_img_204x364.png",
      title: "daasdasdasda",
    },
    {
      p35000: "32 000 ₽",
      img: "images/img_img_1.png",
      title: "House with Kazbegi landscapes",
    },
    {
      p35000: "25 000 ₽",
      img: "images/img_img_2.png",
      title: "Hideaway tent with pool and tub",
    },
  ];

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter gap-8 items-center justify-start mx-auto pb-[335px] w-full">
        <div className="bg-white_A700 flex flex-row items-center justify-between max-w-[1440px] md:px-10 sm:px-5 px-[150px] py-4 shadow-bs w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1140px] mx-auto w-full">
            <CatalogHome className="bg-red_400 flex h-11 items-center justify-center p-[7px] rounded-[12px] w-11" />
            <Img
              src="images/img_img.png"
              className="h-11 md:h-auto object-cover rounded-[10px] w-11"
              alt="img"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1140px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1140px] w-full">
            <Text
              className="text-blue_gray_900 text-left w-auto"
              as="h1"
              variant="h1"
            >
              Aparments in Philadelphia
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1140px] mt-[31px] w-full"
            orientation="horizontal"
          >
            {catalogGriditemPropList.map((props, index) => (
              <React.Fragment key={`CatalogGriditem${index}`}>
                <CatalogGriditem
                  className="flex flex-1 flex-col h-[266px] md:h-auto items-start justify-start w-full"
                  guestscounter="2 guests"
                  point="."
                  bedroomcounter="1 bedroom"
                  pointOne="."
                  bedscounter="2 beds"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
          <div className="flex flex-col items-center justify-start max-w-[1140px] mt-8 w-full">
            <CatalogGriditem
              className="flex flex-col h-[266px] md:h-auto items-start justify-start w-full"
              img="images/img_img_3.png"
              p35000="36 000 ₽"
              title="Unique glamping experience"
              guestscounter="2 guests"
              point="."
              bedroomcounter="1 bedroom"
              pointOne="."
              bedscounter="2 beds"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
