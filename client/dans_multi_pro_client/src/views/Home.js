import "../assets/Home.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchJobDetail } from "../store/action/chartAction";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [payload, setPayload] = useState({
    username: "",
    password: "",
  });

  const changePayload = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPayload({
      ...payload,
      [name]: value,
    });
  };


  useEffect(() => {
    dispatch(fetchJobDetail())
  }, [dispatch])

  return (
    <div className="container-home">
      
    </div>
  );
}

export default Home;
