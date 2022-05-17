import React from 'react'
import ReactDOM from 'react-dom';

// CSS
import './index.css';
function BookList(){
    return (
        <section className='booklist'> 
            <Book/> 
        </section>
    );
}

const Book = () =>{
    const title = 'Verity';
    const author = 'Colleen Hoover';
    return <article className='book'>
        <img src="https://images-na.ssl-images-amazon.com/images/I/610QYM5NxRL._AC_UL127_SR127,127_.jpg" alt=""/>
        <h1>{title}</h1>
        <h4>{author.toUpperCase()}</h4>
    </article>
};

ReactDOM.render(<BookList/>,document.getElementById('root'));