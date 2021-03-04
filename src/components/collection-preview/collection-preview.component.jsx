import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';



const CollectionPreview = (props) =>{


    const items = props.items.filter((item,idx)=>idx < 4).map(item=>(
        <CollectionItem key={item.id}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
        ></CollectionItem>
    ))

    return(
        <div className="collection-preview">
            <h1 className="title">{props.title.toUpperCase()}</h1>
            <div className="preview">
                {items}
            </div>
        </div>
    );
}

export default CollectionPreview;