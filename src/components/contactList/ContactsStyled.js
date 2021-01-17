import styled from "styled-components";

const Wrapper = styled.div`
  .contact-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
  }
  .contact-list__item {
    margin-bottom: 5px;
    color: #008080;
  }
  .contact-list__item-name {
    margin-right: 15px;
  }
  .contact-list__item-number {
    margin-right: 15px;
  }
  .contact-list__item-btn {
    display: inline-block;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.63;
    color: #008080;
    width: 70px;
    padding: 2px 10px;
    background-color: #ffdab9;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    outline: none;
  }
  .contact-list__item-btn:hover {
    color: #fff;
    background-color: #dda0dd;
    box-shadow: 7px 7px 12px 3px rgba(0, 0, 0, 0.42);
    transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export default Wrapper;
