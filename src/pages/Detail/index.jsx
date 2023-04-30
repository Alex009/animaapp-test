import React from "react";

import { Img, Text, Line } from "../../components";
import CatalogHome from "../../components/CatalogHome";

const DetailPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter gap-8 items-center justify-start mx-auto pb-[196px] w-full">
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
          <div className="flex md:flex-col flex-row gap-4 items-center justify-start max-w-[1140px] w-full">
            <Img
              src="images/img_arrowleft.svg"
              className="h-8 w-[25px]"
              alt="arrowleft"
            />
            <Text
              className="text-blue_gray_900 text-left w-auto"
              as="h1"
              variant="h1"
            >
              Charming and comfortable house
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-6 h-[484px] md:h-auto items-start justify-start max-w-[1140px] mt-[31px] rounded-[16px] w-full">
            <Img
              src="images/img_img01.png"
              className="flex-1 md:flex-none md:h-[484px] sm:h-auto h-full max-h-[484px] object-cover w-auto sm:w-auto md:w-auto"
              alt="imgOne"
            />
            <div className="flex sm:flex-1 flex-col gap-6 h-[484px] md:h-auto items-start justify-start w-[379px] sm:w-full">
              <Img
                src="images/img_img01.png"
                className="md:h-auto h-full object-cover w-full"
                alt="imgTwo"
              />
              <Img
                src="images/img_img01.png"
                className="md:h-auto h-full object-cover w-full"
                alt="imgThree"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start max-w-[1140px] mt-[31px] w-full">
            <Text
              className="text-blue_gray_900 text-left w-auto"
              as="h2"
              variant="h2"
            >
              35 000 ₽
            </Text>
            <Text
              className="leading-[21.00px] not-italic text-blue_gray_400 text-left tracking-[-0.10px]"
              as="h5"
              variant="h5"
            >
              <>
                Along with conventional advertising and below the line
                activities, organizations and corporate bodies have come to
                realize that they need to invest in trade shows in order to
                create maximum recall for their product or brand name. There are
                several benefits to participating in a trade show. The resort
                Bakhmaro is located at 2050 meters high.
                <br />
                The average temperature in August is 13,4 ° C). Bakhmaro
                Hawa&#39;s children of all ages are good. Here are the small
                ones who have chronic bronchitis, dry pleuritis, lymphadenitis,
                mild or moderate bronchial asthma or anemia.
              </>
            </Text>
            <Line className="bg-gray_200 h-px w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
