import React,{useState, useEffect} from "react";

const Pagination = ({pageLimit, books}) =>
{
    const [currentPageNow, setCurrentPageNow] = useState(1);
    const [currentPageBooks, setCurrentPageBooks] = useState([]);
    const [pageNumberGroup, setPageNumberGroup] = useState([]);

    useEffect(()=>
    {
       setCurrentPageBooks(getPageData());
       setPageNumberGroup(getPageNumberGroup());
        console.log("walk");
    }, [books, currentPageNow]);

    const nextPage = () => setCurrentPageNow(
        (prev)=>prev+1
    );

    const previousPage = () => setCurrentPageNow(
        (prev)=>prev-1
    );

    const changePageTo = (pageNumber) =>
        setCurrentPageNow(pageNumber);

    const getPageData = () =>
    {
        const startIndex = currentPageNow * pageLimit - pageLimit;
        const endIndex = startIndex + pageLimit;
        return books.slice(startIndex, endIndex);
    }

    const getPageNumberGroup = () =>
    {
        let start = Math.floor((currentPageNow - 1) / 3) * 3;
        console.log(new Array(3).fill(" ").map((_, index) => start + index + 1));
        return new Array(3).fill(" ").map((_, index) => start + index + 1);
    }
    return(
        <div>
            <h1 className="heading">Books in pagination</h1>
            <ul className="books-container">
                {
                    currentPageBooks.map(({id})=>
                    {
                        return(
                          <li key={id} className="book">
                              {id}
                          </li>
                        );
                    })
                }
            </ul>
            <div className="page-num-container">
                <button
                    className={`page-change-btn ${currentPageNow === 1 ? "disabled" : ""}  `}
                    disabled={currentPageNow === 1}
                    onClick={previousPage}
                >
                    Previous
                </button>
                <button
                    disabled={currentPageNow === Math.floor(books.length / pageLimit)}
                    className={`page-change-btn ${
                        currentPageNow === Math.floor(books.length / pageLimit)
                            ? "disabled"
                            : ""
                    }  `}
                    onClick={nextPage}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Pagination;