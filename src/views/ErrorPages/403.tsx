/**
 * @description Error Page - Not Authorized
 * @author Luo Wang
 */
import { Button, Result } from "antd";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

const Error403: FC = () => {
  const navigate = useNavigate();

  //Redirect to main page
  function handleClick() {
    navigate("/");
  }
  return (
    <Result
      status={403}
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<Button onClick={handleClick}>Back Home</Button>}
    />
  );
};

export default Error403;
