const URL = 'http://zero.webappsecurity.com/index.html';
const SEARCHBAR = '#searchTerm';

class SearchPage {
    static visit(){
        cy.visit(URL);
    }

    static search (searchword){
        cy.get(SEARCHBAR).clear()
        cy.get(SEARCHBAR).type(searchword)
    };
}

export default SearchPage;