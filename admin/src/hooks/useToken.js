import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const useToken = () => {
  const token = useSelector((state) => console.log(state));
  return token;
};
