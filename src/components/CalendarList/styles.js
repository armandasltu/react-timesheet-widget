import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`;

export const Item = styled.li`
  list-style-type: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const DayTitle = styled.div`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  color: rgba(0, 0, 0, 0.6);
`;

export const Day = styled.div`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${props => (props.active ? `#FFFFFF` : 'inherit')};
  background-color: ${props => (props.active ? `#F08900` : 'transparent')};
  border: 1px solid ${props => (props.current ? `#F08900` : 'transparent')};
  border-radius: 4px;
  min-width: 20px;
`;

export const Hours = styled.div`
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.6);
`;
