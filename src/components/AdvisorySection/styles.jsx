import styled from 'styled-components'

export const Section = styled.section`
  background-color: #F3F2ED;
  /* border: 1px solid red; */
  color: #0d3c00;
  padding: 40px 0 50px;
  margin-top: 20px;
  /* height: 500px; */
`

export const Title = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  font-family:'Raleway';
`

export const P = styled.p`
  /* color: #0d3c00; */
  font-size: 20px;
  font-weight: bold;
`

export const H2 = styled.h2`
  /* color: #0d3c00; */
  font-size: 40px;
  /* font-family:'Raleway' */
`
export const AdvsoryTopicsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 20px 10px;
`

export const ColumnGrid = styled.div`
  display: flex;
  justify-content:center;
  flex-direction:column;
  margin: 0 auto;
`
export const AdvosoryTopic = styled.div`
  display: flex;
  align-items:center;
  padding: 6px 0;
`
export const TopicName = styled.p`
  font-size: 23px;
  padding-left: 10px;
  font-weight: bold;
  font-family: 'Raleway'
`

export const I = styled.i`
  color: #40BF4F;
  font-size: 20px;
`