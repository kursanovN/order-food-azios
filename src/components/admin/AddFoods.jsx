import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAdminMeals } from "../../store/admin/adminMealsThunk";
import { AdminAddForm } from "./AdminAddForm";

export const AddFoods = () => {
  const { adminMeals } = useSelector((state) => state.adminMeals);

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminMeals());
  }, [dispatch]);

  function openModalHandler() {
    setOpen((prev) => !prev);
  }
  return (
    <>
      <Container>
        {adminMeals?.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
          );
        })}
      </Container>
      <button onClick={openModalHandler}>add foods</button>
      <AdminAddForm open={open} openModalHandler={openModalHandler} />
    </>
  );
};

const Container = styled.form`
  width: 500px;
  height: 500px;
  margin-top: 150px;
  background-color: red;
`;
