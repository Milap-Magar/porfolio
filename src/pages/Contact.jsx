import React from 'react'
import styled from "styled-components"


const Contact = () => {

  const Container = styled.div`
    scroll-snap-type: y mandatory;
    scroll-behaviour: smooth;
    overflow-y: auto;
    scrollbar-widh: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `;

  return (
    <Container>
    <div className='bg-slate-500 w-full h-screen'>Contact</div>
    </Container>
  )
}

export default Contact