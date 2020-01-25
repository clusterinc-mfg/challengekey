import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { useQuery } from '@apollo/react-hooks';

import BottomBar from '../../components/BottomBar/BottomBar';
import FilterMenu from '../../components/FilterMenu/FilterMenu';
import Layout from '../../components/Layout/Layout';
import ProgramRow from '../../components/ProgramRow/ProgramRow';
import { Spinner } from '../../components/Spinner/Spinner';
import { PROGRAM_SEARCH } from '../../graphQL/queries';
import { ProgramContainer, ResultsHeader } from './HomePage.styles';

//TODO: Build the home page
/*
  add appropriate types

  renderProgramContainer:  
    *   Finish the function renderHeader.  If a search term is present, it should return
        "129 Items For Engineering!" where 129 is the number of items and engineering is the search term.
        If the term is not present, it should return "129 Items Found!" where 129 is the total number of items.

    *   Render the list of programs under the ResultsHeader

  HomePage:
    *  Use hooks when possible.

    *  When the home page compoent renders it should trigger the PROGRAM_SEARCH query.
       The graphQL query PROGRAM_SEARCH accepts the following variables:
       offset, limit, term, and filter.  It returns two items, count & programs.
       run the query and render out the HomePage.

    *  Pull the term and filter from the redux store

    *  Create a piece of state called page

    *  Inside of the layout component render the FilterMenu, ProgramContainer, and BottomBar

    *  If the query is loading, render the spinner.  Once is it done call the renderProgramContainer function.

*/

const renderProgramContainer = (programs:any[], count:number, term:string | null = null) => {
  const renderPrograms = programs =>
    programs.map((program, i) => (
      <ProgramRow key={program.id + program.name} program={program} />
    ));

  // write the renderHeader function
  const renderHeader = () =>
    term ? `${count} items found for ${term}!` : `${count} items found!`;

  return (
    <ProgramContainer>
      <ResultsHeader>{renderHeader()}</ResultsHeader>
      {/* Render the list of programs here using a function called renderPrograms */}
      {renderPrograms(programs)}
    </ProgramContainer>
  );
};

const HomePage = () => {
  const itemsPerPage = 10;

  const [page, setPage] = useState(1);

  // Pull the term and filter from the redux store
  const term = useSelector((state: any) => state.term, shallowEqual);
  const filter = useSelector((state: any) => state.filter, shallowEqual);

  let variables = {
    data: {
      offset: (page - 1) * itemsPerPage,
      limit: itemsPerPage,
      term,
      filter,
    },
  };

  // Use the PROGRAM_SEARCH QUERY to get the count and programs list
  // supply that query with the offest, limit, term, and filter options
  const { loading, data } = useQuery(PROGRAM_SEARCH, { variables });

  const returnCount = () => !loading ? data.programSearch.count : 0
  const returnPrograms = () => !loading ? data.programSearch.programs : []

  return (
    <Layout>
      <FilterMenu /> 
{/* Filter Menu goes here */}
      {loading ? <Spinner /> : renderProgramContainer(returnPrograms(), returnCount(), term)}
{/* Spinner or programs container */}
{/* Bottom Bar */}
      <BottomBar
        count={returnCount()}
        page={page}
        setPage={setPage}
        itemsPerPage={itemsPerPage}
      />
    </Layout>
  );
};

export default HomePage;
