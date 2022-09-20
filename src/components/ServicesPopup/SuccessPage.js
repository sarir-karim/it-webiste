import React from "react";
import { SuccessSection, SuccessMsg, LikeIcon } from "./SuccessStyles";
import { AiFillLike } from "react-icons/ai";

const SuccessPage = () => {
  return (
    <>
      <SuccessSection>
        <LikeIcon>
          <AiFillLike />
        </LikeIcon>
        <SuccessMsg>
          Thankyou!
          <br />
          Your order has been submitted successfully!
        </SuccessMsg>
      </SuccessSection>
    </>
  );
};

export default SuccessPage;
