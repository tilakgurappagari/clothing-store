import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';


class ShopPage extends Component{

    state={
        collections : SHOP_DATA
    }


    render(){
        // const {collections} = this.state;

        const collections = this.state.collections.map(collection=>(
            <CollectionPreview key={collection.id}
                items={collection.items}
                title={collection.title}
            >
            </CollectionPreview>
        ))


        return(
            <div className="shop-page">
                {collections}
            </div>
        );
    }
}

export default ShopPage;