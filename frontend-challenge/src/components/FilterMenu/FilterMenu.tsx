import React from 'react';
import {useDispatch} from 'react-redux'

import {updateFilter} from '../../redux/Filter/filter.actions'
import {filterType} from '../../redux/types'
import { Container, MenuContainer, MenuItem } from './FilterMenu.styles';

//TODO: Finish the Filter Menu

/*
  update the filter state to the
  appropriate type when the MenuItem is clicked
*/


const FilterMenu = () => {
  const dispatch = useDispatch()

  return(
    <Container>
    <MenuContainer>
      Filter by: <MenuItem onClick={ ()=>{dispatch(updateFilter(filterType.certificate))} }>Certificate</MenuItem> |
      <MenuItem onClick={ ()=>{dispatch(updateFilter(filterType.bachelors))} }>Bachelors</MenuItem> |
      <MenuItem onClick={ ()=>{dispatch(updateFilter(filterType.masters))} }>Masters</MenuItem> |
      <MenuItem onClick={ ()=>{dispatch(updateFilter(filterType.phd))} }>Ph.D.</MenuItem> |
      <MenuItem onClick={ ()=>{dispatch(updateFilter(filterType.all))} }>All</MenuItem>
    </MenuContainer>
  </Container>
  )

}


export default FilterMenu;
