import styled from "styled-components";

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;

  padding: 50px;
  width: 500px;
  background-color: #fff0f5;
  border-radius: 4px;
  margin: 40px auto;
  box-shadow: 7px 5px 7px 5px rgba(140, 140, 140, 0.75);
  .phonebook-title {
    font-weight: 700;
    font-size: 25px;
    line-height: 1.63;
    color: #008080;
    margin-bottom: 20px;
  }
`;

export default Wrapper;
