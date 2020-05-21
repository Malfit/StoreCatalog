import React, { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { getProductsData } from '../../redux/actions/root.actions';
import Dropdown from '../../components/Dropdown';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PriceWithSaleAndDate from '../../components/PriceWithSale/PriceWithSaleAndDate';
import './ProductList.css';

  const useStyles = makeStyles(() => ({
    root: {
      maxWidth: 4000,
      minWidth: 200,
      minHeight: 200,
      maxHeight: 381,
      margin: (40, 20),  
    },
    media: {
      minWidth: 200,
      minHeight: 200,
      maxWidth: 4000,
      maxHeight: 4000,    
    }
  }));

  const ProductList = () =>  {
  const dispatch = useDispatch();
  const classes = useStyles();
      
  useEffect(() => {
      dispatch(getProductsData());
  }, [dispatch]);
  const products = useSelector(state => state.products);

  return (
    <div className='obertka'>
    {products.map((item, index) => {
      return (
        <div key={item+index} className='productList'>
          <Card className={classes.root}>
            <CardHeader
              action={
                <IconButton aria-label='settings'>
                  <Dropdown
                      id = {item.id}
                    />
                </IconButton>
              }
              title={item.title}
            />
            <CardMedia
              className={classes.media}
              image={item.photo}
            />
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                {item.description}
              </Typography>
              <Typography variant='body2' color='primary' component='p'>
                <PriceWithSaleAndDate 
                    price={item.price}
                    sale={item.sale}
                    date={item.dateEndSale}
                 />
              </Typography>
            </CardContent>
          </Card>
        </div>
      )
    })}
    </div>
  )
}

export default ProductList;