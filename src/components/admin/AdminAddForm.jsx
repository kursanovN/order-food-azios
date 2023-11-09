import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addFoodRequest } from "../../store/admin/adminMealsThunk";
import { Modalka } from "../UI/modal/Modal";

export const AdminAddForm = ({ openModalHandler, open }) => {
  // const [data, setData] = useState({
  //   title: "",
  //   description: "",
  //   price: 0,
  // });

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  // function changeHandelr(e) {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // }
  function titleChangeHandler(e) {
    setTitle(e.target.value);
  }

  function descriptionChangeHandler(e) {
    setDescription(e.target.value);
  }

  function priceChangeHandler(e) {
    setPrice(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    const newData = {
      title: title,
      description: description,
      price: price,
    };
    dispatch(addFoodRequest(newData));
    setTitle("");
    setDescription("");
    setPrice("");
  }

  return (
    <Modalka onClick={openModalHandler} toggle={open}>
      <Form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          name="Title"
          onChange={titleChangeHandler}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          name="Description"
          onChange={descriptionChangeHandler}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          name="Price"
          onChange={priceChangeHandler}
        />
        <button type="submt ">add</button>
      </Form>
    </Modalka>
  );
};
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
