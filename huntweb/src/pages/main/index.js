import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';

export default class Main extends Component{
    //estado é sempre um objeto
    //todas as variaveis que serão alteradas ficarão em products
    state = {
        products: [],
        productInfo: {},
        page: 1
    }
    
    
    //método executado assim que o componente de exibido em tela
    componentDidMount(){
        this.loadProducts();
    }

    prevPage = () => {
        const {page, productInfo} = this.state

        if(page==1){
            return;
        }
        else{
            const pageNumer = page-1;
            this.loadProducts(pageNumer);
        }
    };

    nextPage = () =>{
        const {page, productInfo} = this.state
        
        if(page==productInfo.pages){
            return;
        }
        else{
            const pageNumer = page + 1;
            this.loadProducts(pageNumer);
        }
    };

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const {docs, ...productInfo} = response.data
        
        //voce mudou o estado de products
        this.setState({ products: response.data.docs, productInfo, page })
    }

    render(){
        const { products, page, productInfo } = this.state;
        return( 
            <div className="product-list">
                {
                    products.map(
                        product => (
                            //ele pede a key senão da erro no console
                            <article key = {product._id}>
                                <strong>{product.title}</strong>
                                <p>{product.description}</p>

                                <Link to={`/products/${product._id}`}>Acessar</Link>
                            </article>
                        )
                    )
                }

                <div className="actions">
                    <button disabled={page===1} onClick={this.prevPage} >Anterior</button>
                    <button disabled={page===productInfo.pages} onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        )
    }
}