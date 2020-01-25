import React, {useState} from 'react'

import {Button, ButtonContainer, Container, Spacer} from './BottomBar.styles'

interface BottomBarProps {
  count: number;
  page: number;
  setPage: Function;
  itemsPerPage: number;
}

const BottomBar = ({count, page, setPage, itemsPerPage}) => {

    const [active, setActive] = useState(1)

    const updatePage = (number) => {
      setPage(number)
      setActive(number)
    }

    const renderButtons = () => {
        const numberOfPages = Math.ceil(count / itemsPerPage)
        let buttons = []

        const moveBack = () => { updatePage(page - 1) }
        const moveForward = () => { updatePage(page + 1) }

        const numberOfButtons = active + 3 > numberOfPages ? numberOfPages - active : 3;

        for (
          let i = Math.min(active, numberOfPages - 3);
          i <= Math.min(active-1 + numberOfButtons, numberOfPages - 1);
          i++
        ) {
          if (i >= 1) { buttons.push(i); }
        }
    
        if(numberOfPages > 4 && active < numberOfPages - 3){
            buttons[buttons.length - 1] === numberOfPages - 1 ? null : buttons.push(null);
        }
        
        buttons.push(numberOfPages);

        buttons = buttons.map((pageNumber, i) =>
          pageNumber ? (
            <Button
              key={i}
              onClick={() => { updatePage(pageNumber) }}
                isActive={pageNumber === active}
            >
              {pageNumber}
            </Button>
          ) : (
            <Spacer key={i}>...</Spacer>
          )
        );


        if(page !== 1){ buttons.unshift( <Button key={"prev"} onClick={ ()=>{moveBack()} } isEnd> {"< Prev"}</Button> ) }
        if(numberOfPages > 1 && active !== numberOfPages) { buttons.push( <Button key={"next"} onClick={ ()=>{moveForward()} } isEnd>{"Next >"}</Button>)   }
        
        return buttons
    }


    return(
        <Container>
            <ButtonContainer>
                {renderButtons()}
            </ButtonContainer>
        </Container>
    )
}

export default BottomBar