import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentProduct,
  editProduct } from '../../redux/actions/root.actions';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import './EditProduct.scss';

const EditProduct = () =>  {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const product = useSelector(state => state.currentProduct); 
    useEffect(() => {
    dispatch(getCurrentProduct(id));
}, [dispatch, id]);  

  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [sale, setSale] = useState('');
  const [dateEndSale, setDateEndSale] = useState('');
  
  const [titleClassEd, setTitleClassEd] = useState('');
  const [photoClassEd, setPhotoClassEd] = useState('');
  const [descriptionClassEd, setDescriptionClassEd] = useState('');
  const [priceClassEd, setPriceClassEd] = useState('');
  const [saleClassEd, setSaleClassEd] = useState('');

  useEffect(() => {
    setTitle(product.title);
    setPhoto(product.photo);
    setDescription(product.description);
    setPrice(product.price)
    setSale(product.sale)
    setDateEndSale(product.dateEndSale)
  },[product.title, product.photo, product.description,
    product.price, product.sale, product.dateEndSale]);


  const changeTitle = (e) => {    
    checkTitleValidationEd(e.target.value);
    setTitle(e.target.value);
  };

  const changePhoto = (e) => {
    setPhoto(e.target.value)
    checkPhotoValidationEd();
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
    checkDescriptionValidationEd(e.target.value);
  };

  const changePrice = (e) => {
    setPrice(e.target.value)
    checkPriceValidationEd(e.target.value);
  };

  const changeSale = (e) => {
    setSale(e.target.value)
    checkSaleValidationEd (e.target.value);
  };

  const changeDateEndSale = (e) => {
    setDateEndSale(e.target.value)
  };

  const checkTitleErrEd = (value) => {
    const reg = /^[\D]{2,7}$/;
    return !reg.test(value);
  };

  const checkPhotoErrEd = (value) => {
    const reg = /^[a-zA-z0-9\D]/;
    return !reg.test(value);
  };

  const checkPriceErrEd = (value) => {
    const reg = /^[\d.]{1,}$/;
    return !reg.test(value);
  };

  const checkSaleErrEd = (value) => {
    const reg = /^[\d]{2}$/;
    return !reg.test(value);
  };

  const checkTitleValidationEd = (value) => {
    if (checkTitleErrEd(value)) {
      setTitleClassEd('form__error');
    } else {
      setTitleClassEd('');
    }
  };

  const checkPhotoValidationEd = (value) => {
    if (checkPhotoErrEd(value) && photo.length > 0) {
      setPhotoClassEd('form__error');
    } else {
      setPhotoClassEd('');
    }
  };

  const checkDescriptionValidationEd = () => {
    if (description.length > 200) {
      setDescriptionClassEd('form__error');
    } else {
      setDescriptionClassEd('');
    }
  };

  const checkPriceValidationEd = (value) => {
    if ((checkPriceErrEd(value) && price.length > 0) || price > 99999999.99) {
      setPriceClassEd('form__error');
    } else {
      setPriceClassEd('');
    }
  };

  const checkSaleValidationEd = (value) => {
    if ((checkSaleErrEd(value) || value < 10 || value > 90) && value.length > 0) { 
      setSaleClassEd('form__error');
    } else {
      setSaleClassEd('');
    }
  };
  
  const approvedDispatch = () => {
    if (!checkTitleErrEd(title) && !checkPhotoErrEd(photo) && !checkPriceErrEd(price) && !checkDescriptionValidationEd()) {
      dispatch(editProduct(
        id,
        title,
        photo,
        description,
        Number(price),
        Number(sale),
        Date.parse(dateEndSale),
        history
      ));
    } else {
      console.log("smth wrong");
    }
  };

    return (
      <form className='editProduct'>
      <div className='editText'>Edit configuration for your product</div>
      <input
      className={`form__inputTitleEd ${titleClassEd}`}
      placeholder='Mark (2-7 characters)'
      onChange={changeTitle} 
      value={title}
    />
    <input
      className={`form__inputPhotoEd ${photoClassEd}`}
      placeholder='URL Photo' 
      onChange={changePhoto} 
      value={photo}
    />
    <input
      className={`form__inputDescriptionEd ${descriptionClassEd}`}
      placeholder='Model (max 200 characters)' 
      onChange={changeDescription} 
      value={description}
    />
    <input
      className={`form__inputPriceEd ${priceClassEd}`} 
      placeholder='Price' 
      onChange={changePrice} 
      value={price}
    />
    <input
      className={`form__inputSaleEd ${saleClassEd}`} 
      placeholder='Sale %' 
      onChange={changeSale} 
      value={sale}
    />
    <TextField
            id='date'
            label='Date (ending discount)'
            type='date'
            className='form__inputDateEd'
            value={moment(dateEndSale).format('YYYY-MM-DD')}
            onChange={changeDateEndSale}
            InputLabelProps={{
              shrink: true,
            }}
          />
    <span>
    <Button className='add-btn' variant="contained" color="primary" onClick={approvedDispatch}> Save changes</Button>
    <Link to='/product-list'>
      <Button 
        className='add-btn' 
        variant='contained' 
        color='secondary' 
      > 
       Cancel
      </Button>
    </Link>
    </span>
  </form>
     )
}

export default EditProduct;