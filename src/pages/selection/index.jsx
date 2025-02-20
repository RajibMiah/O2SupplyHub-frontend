import styled from 'styled-components';

const CylinderSelection = () => {
  return (
    <Container>
      <Title>Cylinder Selection Page</Title>
      <Description>Select the type of cylinder you need.</Description>
      <Button>Select Cylinder</Button>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default CylinderSelection;
