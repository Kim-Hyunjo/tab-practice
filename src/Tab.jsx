import styled from "styled-components";
import { COLOR } from "./constants/STYLE";

const Tab = ({ tabs, selectTab }) => {
  return (
    <Container>
      <Home type='button'>home</Home>
      <ul className='tab-items'>
        {tabs.map(({ name, page, id, selected }, idx) => (
          <TabItems
            key={id}
            id={id}
            selected={selected}
            onClick={(e) => {
              const tabId = e.currentTarget.id;
              selectTab(tabId);
            }}
          >
            <span>{name + "-" + id}</span>
            <button type='button' className='tab-delete-btn'>
              <span />
              <span />
            </button>
          </TabItems>
        ))}
      </ul>
      <button type='button' className='tab-add-btn'>
        <span />
        <span />
      </button>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  align-items: center;
  height: 32px;
  background-color: ${COLOR.lightsilver};

  button {
    border: 0;
    background: none;
  }

  .tab-items {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .tab-add-btn {
    width: 32px;
    height: 100%;
    position: relative;
    span {
      position: absolute;
      left: 50%;
      margin-left: -6px;
      width: 12px;
      border-bottom: 2px solid #585e65;
      border-radius: 20px;
      &:last-child {
        transform: rotate(90deg);
      }
    }
  }
`;

const Home = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;

const TabItems = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 148px;
  height: 100%;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ selected }) => (selected ? COLOR.main : COLOR.gray5)};
  padding: 0 8px;
  background-color: ${({ selected }) =>
    selected ? COLOR.white : "transparent"};
  /*나중에 gnb 여부에따라 border-top 보일지 말지 처리해야함*/
  /*border-top: 1px solid ${({ selected }) =>
    selected ? COLOR.main : "transparent"};*/
  border-left: 1px solid
    ${({ selected }) => (selected ? COLOR.main : "transparent")};
  border-right: 1px solid
    ${({ selected }) => (selected ? COLOR.main : COLOR.grayborder)};
  cursor: pointer;

  .tab-delete-btn {
    position: relative;
    span {
      position: absolute;
      right: 0;
      width: 14px;
      border-bottom: 2px solid
        ${({ selected }) => (selected ? COLOR.main : COLOR.gray5)};
      border-radius: 20px;
      &:first-child {
        transform: rotate(45deg);
      }
      &:last-child {
        transform: rotate(-45deg);
      }
    }
  }
`;

export default Tab;
