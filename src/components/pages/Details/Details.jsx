import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../Button";
import { Info } from "../../Info";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../../../config";

const Details = () => {
  const { name } = useParams();
  const { pathname, search } = useLocation();
  const push = useNavigate();
  const goBack = () => push(-1);

  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(searchByCountry(name))
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, [name]);
  // push(
  //   {
  //     pathname,
  //     search: `?search=${str}`,
  //   },
  //   // `${pathname}?search=${str}`,
  //   { replace: true }
  // );
  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info push={push} {...country} />}
    </div>
  );
};

export default Details;
