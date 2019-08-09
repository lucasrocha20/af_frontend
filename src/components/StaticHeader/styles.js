import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 210px;
    height: 52px;
    padding: auto;
    margin-right: 1rem;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 15px;
  flex-direction: column;

  ul {
    display: flex;

    li {
      padding: 0.8rem 1rem;
    }
  }

  a:hover {
    color: #fa923f;
  }
`;

export const Spacer = styled.div`
  width: 30%;
`;
