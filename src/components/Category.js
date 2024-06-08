import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItems from "./CategoryItems";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`;

const Category = () => {
  return (
    <Container>
      {categories.map((Item) => (
        <CategoryItems Item={Item} key={Item.id} />
      ))}
    </Container>
  );
};

export default Category;
