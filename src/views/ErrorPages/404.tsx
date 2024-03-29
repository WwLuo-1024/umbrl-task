/**
 * @description Error Page - Not Found
 * @author Luo Wang
 */

import React, { FC } from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound: FC = () => {
  const navigate = useNavigate();

  //Redirect to main page
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Result
      status={404}
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button onClick={() => handleClick()}>Back Home</Button>}
    />
  );
};

export default NotFound;
