import React from 'react';

const CardContext = React.createContext({

    items: [],
    totalAmount: 0,
    addItem: () => {

    },
    remoteItem: (id) => {

    },
    
})

export default CardContext;