import React from "react"


class Header extends React.Component
{
    Name = "headerName";
    container =
        {
            padding:10,
            backgroundColor: 'darkblue'
        }
    render()
    {
        return
        (
            <header style={this.container} className={this.Name}>
                <h1>Книги</h1>
            </header>
        );
    }

}