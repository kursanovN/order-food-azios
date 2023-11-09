import React, { useEffect } from "react";
import styled from "styled-components";
import { Card } from "../UI/card/Card";
import { MealItem } from "./MealItem";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../../store/meals/mealsThunk";
import { SnackBar } from "../UI/SnackBar";
import { snackBarAction } from "../../store/snackBar";

export const Meals = () => {
  const { meals } = useSelector((state) => state.meals);
  const { open } = useSelector((state) => state.snackbar);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);

  function onCloseHandler() {
    dispatch(snackBarAction.closeSnackBar());
  }

  return (
    <Container>
      {open && <SnackBar handleClose={onCloseHandler} />}

      <Card>
        {meals?.map((meal) => (
          <MealItem key={meal._id} meal={meal} />
        ))}
      </Card>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 135px;
  margin-bottom: 100px;
`;
