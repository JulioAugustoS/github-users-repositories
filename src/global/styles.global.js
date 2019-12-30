import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  padding-bottom: 50px;
  background: linear-gradient(#2980b9, #3498db);
`;

export const Content = styled.div`
  width: 800px;
  margin: 0 auto;
  padding-top: 50px;
`;

export const Card = styled.div`
  width: 100%;
  min-height: 100px;
  background: #FFF;
  border-radius: 5px;
  box-shadow: 1px 2px 4px rgba(0,0,0,0.3);
  padding: 20px;
`;

export const Top = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CenterContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Item = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #f5f5f5;
`;

export const ItemLeft = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
`;

export const ItemRight = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Title = styled.strong`

`;

export const Subtitle = styled.span`

`;
