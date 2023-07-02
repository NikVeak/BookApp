import React,{ Component }  from "react"


class Header extends Component
{
    Name = "headerName";

    render()
    {
        return(
            <header className={this.Name}>
                <h1>Книги</h1>
            </header>
        );
    }

}

export default Header;