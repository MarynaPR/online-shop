import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

// pass products as props, add to cart reflected in props
const Products = ({ products,onAddToCart }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            {/* keeps products from hiding under navbar */}
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product
                         product={product}
                        //  pass the function to add products to cart into Product component
                        onAddToCart={onAddToCart}
                          />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;