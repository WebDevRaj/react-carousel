import styled from 'styled-components';
const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 100%;
  order: ${(props) => props.order};
`
export default CarouselSlot;