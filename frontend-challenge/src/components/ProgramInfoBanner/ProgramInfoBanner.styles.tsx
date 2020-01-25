import styled from 'styled-components'

//TODO: Style the Program Info Banner
/*
    BannerWrapper:
        * use css grid
        * create two rows and 5 columns
        * each column should have a gap of 1rem
        * there should be 5rem of horizontal padding
        * there should be 1 rem of vertical padding
        * there should be a 2px border on the bottom that has a color of #888
    
    FieldTitle:
        * the font should be bold
        * the top margin should be 1rem

    FieldValue:
        * the font-size should be 1.5rem
        * the color should be based on a prop called dmode if
            if true the color should be #38e, false should be #888
*/

export const BannerWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 1rem;
    padding: 0rem 5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #888;
`

export const FieldTitle = styled.p`
    font-weight: bold;
    margin-top: 1rem;
`

interface FieldValueProps {
    dmode?: boolean
}

export const FieldValue = styled.p`
    font-size: 1.5rem;
    color: ${(props:FieldValueProps) =>  props.dmode ? "#38e" : "#888" }
`