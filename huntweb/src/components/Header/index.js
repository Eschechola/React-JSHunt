import React from 'react';
import './styles.css';

//statless components
//criar componentes dentro do react com funçoes
const Header = () => (
    <header id="main-header">JSHunt</header>
);

//equivalente a
/*
class Header extends Component {
    render(){
        return <h1>Olá mundo.</h1>
    }
}

*/

export default Header;