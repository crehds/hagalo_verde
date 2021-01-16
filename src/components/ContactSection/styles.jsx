import styled from 'styled-components';

export const Section = styled.section`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 50px;
  padding: 10px 80px;
`

export const GridColumn = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction:column;
  /* align-items: center; */
  margin: 8px 20px;
`

export const H3Container = styled.div`
  display: flex;
  flex-direction:column;
  /* align-items: center; */
`

export const H3 = styled.h3`
  font-size: 30px;
  padding-bottom: 20px;
  color: #0d3c00;
  font-family: 'Poppins';
  font-weight: 600;
`

export const Span = styled.span`
  border-top: 2px solid #40bf4f;
  width: 48px;
`

export const DirectContact = styled.div`
  /* border:1px solid red; */
`

export const PDirectContact = styled.p`
  font-family: 'Raleway';
  font-weight: 400;
  color: #7A7A7A;
  line-height: 1.85;
  padding: 8px 0;
`

export const DataDirectContact =  styled.div`
  /* border: 1px solid red; */
  padding: 5px 0;
  padding-left: 3px;
`

export const DataDirectContactRow = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-family: 'Raleway';
  font-weight: 400;
  color: #7A7A7A;
  line-height: 1.85;
`

export const IData = styled.i`
  color: #40bf4f;
  font-size: 20px;
  padding-right: 10px; 
`
export const H4 = styled.h4`
  font-size: 20px;
  padding-bottom: 20px;
  color: #0d3c00;
  font-family: 'Poppins';
  font-weight: 600;
`

export const FollowUs = styled.div`
  display: flex;
  flex-wrap: nowrap;
`
export const ASocialMedia = styled.a`
  text-decoration: none;
  padding: 6px 8px;
  margin:2px 5px;
  /* border:1px solid red; */
  border-radius: 50%;
  background-color:rgba(64, 191, 79, 0.1);
  &:hover {
    background-color: #40bf4f;
    border-radius: 50%;
    transition: .3s;
    & i {
      color: white;
    }
  }
`

export const ISocialMedia = styled.i`  
  font-size: 16px;
  color: #40bf4f;

`