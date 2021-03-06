import gql from 'graphql-tag';

// TODO: Write GraphQL Queries
//GraphQL playground is running on localhost:4000/gql
/*
    PROGRAM_SEARCH:
        Create a named export called PROGRAM_SEARCH.  

        this query should return the count, and programs
        from the programs, it should retrieve id, name, degreeType, 
        deliveryMode, requiredCredits costPerCredit, and school.  
        From the school it should retrieve name, schoolLogo, 
        totalEnrollment, and schoolType.

    GET_PROGRAM:
        Create a named export called GET_PROGRAM.
        It should use the program id to retrieve an individual program.

        this query should return the following fields: id, 
        name, costPerCredit, programUrl, programDescription,
        degreeType, requiredCredits, deliveryMode, and school.
        From the school, it should return the following fields:
        name, schoolLogo, backgroundColor, gradientColor, 
        schoolDescription, and schoolType
*/



export const PROGRAM_SEARCH = gql`
    query programSearch($data: ProgramSearchTermInput) {
        programSearch(data: $data){
        count
        programs {
            id
            name
            degreeType
            deliveryMode
            requiredCredits
            costPerCredit
            school{
                name
                schoolLogo
                totalEnrollment
                schoolType
            }
        }
    }
}
`


export const GET_PROGRAM = gql`
    query program($data: ProgramInput){
        program(data: $data){
            id
            name
            costPerCredit
            programUrl
            programDescription
            degreeType
            requiredCredits
            deliveryMode
            school {
                name
                schoolLogo
                backgroundColor
                gradientColor
                schoolDescription
                schoolType
            }
        }
    }
`