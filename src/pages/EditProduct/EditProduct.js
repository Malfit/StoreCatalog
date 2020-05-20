import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import './EditProduct.scss';
import { getCurrentProduct,
  editProduct } from '../../redux/actions/root.actions';
import { Link } from 'react-router-dom';

const EditProduct = () =>  {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCurrentProduct(id));
}, [dispatch, id]);

  const product = useSelector(state => state.currentProduct); 

  const [title, setTitle] = useState(product.title);
  const [photo, setPhoto] = useState(product.photo);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [sale, setSale] = useState(product.sale);
  const [dateEndSale, setDateEndSale] = useState(product.dateEndSale);
  
  useEffect(() => {
    setTitle(product.title);
    setPhoto(product.photo);
    setDescription(product.description);
    setPrice(product.price);
    setSale(product.sale);
    setDateEndSale(product.dateEndSale);
},[product.title, product.photo, product.description,
  product.price, product.sale, product.dateEndSale]);
  
  const [titleClassEd, setTitleClass] = useState('');
  const [photoClassEd, setPhotoClass] = useState('');
  const [descriptionClassEd, setDescriptionClass] = useState('');
  const [priceClassEd, setPriceClass] = useState('');
  const [saleClassEd, setSaleClass] = useState('');
  const [dateEndSaleClassEd, setDateEndSaleClass] = useState('');

  const changeTitle = (e) => {
    setTitle(e.target.value)
    checkTitleValidation();
  };

  const changePhoto = (e) => {
    setPhoto(e.target.value)
    checkPhotoValidation();
  };

  const changeDescription = (e) => {
    setDescription(e.target.value)
  };

  const changePrice = (e) => {
    setPrice(e.target.value)
    checkPriceValidation();
  };

  const changeSale = (e) => {
    setSale(e.target.value)
    checkSaleValidation ();
  };

  const changeDateEndSale = (e) => {
    setDateEndSale(e.target.value)
    checkDateEndSaleValidation();
  };

  const checkTitleErr = () => {
    const reg = /^[\D]{3,7}$/;
    return !reg.test(title);
  };

  const checkPhotoErr = () => {
    const reg = /^[a-zA-Z0-9]/;
    return !reg.test(photo);
  };

  const checkPriceErr = () => {
    const reg = /^[0-9.]/;
    return !reg.test(price);
  };

  const checkSaleErr = () => {
    const reg = /^[0-9]/;
    return !reg.test(sale);
  };

  const checkDateEndSaleErr = () => {
    const reg = /^[a-zA-Z0-9]/;
    return !reg.test(dateEndSale);
  };

  const checkTitleValidation = () => {
    if (checkTitleErr()) {
      setTitleClass('form__error');
    } else {
      setTitleClass('');
    }
  };

  const checkPhotoValidation = () => {
    if (checkPhotoErr()) {
      setPhotoClass('form__error');
    } else {
      setPhotoClass('');
    }
  };

  const checkDescriptionValidation = () => {
    if (description.length > 200) {
      setDescriptionClass('form__error');
    } else {
      setDescriptionClass('');
    }
  }

  const checkPriceValidation = () => {
    if (checkPriceErr()) {
      setPriceClass('form__error');
    } else {
      setPriceClass('');
    }
  };

  const checkSaleValidation = () => {
    if ((checkSaleErr() || sale < 10 || sale > 90) && sale.length > 0) { 
      setSaleClass('form__error');
    } else {
      setSaleClass('');
    }
  };
  
  const checkDateEndSaleValidation = () => {
    if (checkDateEndSaleErr()) {
      setDateEndSaleClass('form__error');
    } else {
      setDateEndSaleClass('');
    }
  };

  const approvedDispatch = () => {
    console.log(title, photo, description, price, sale, dateEndSale, id);
    if (!checkTitleErr() && !checkPhotoErr() && !checkPriceErr() && !checkDescriptionValidation()
    && !checkSaleErr() && !checkDateEndSaleErr()) {
      dispatch(editProduct(
        id,
        title,
        photo,
        description,
        price,
        sale,
        dateEndSale,
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
        className={`form__inputTitle ${titleClassEd}`}
        placeholder='Mark (4-7 characters)'
        onInput={changeTitle} 
        value={title}
      />
      <input
        className={`form__inputPhoto ${photoClassEd}`}
        placeholder='URL Photo' 
        onInput={changePhoto} 
        value={photo}
      />
      <input
        className={`form__inputDescription ${descriptionClassEd}`}
        placeholder='Model (max 200 characters)' 
        onInput={changeDescription} 
        value={description}
      />
      <input
        className={`form__inputPrice ${priceClassEd}`} 
        placeholder='Price' 
        onInput={changePrice} 
        value={price}
      />
      <input
        className={`form__inputSale ${saleClassEd}`} 
        placeholder='Sale %' 
        onInput={changeSale} 
        value={sale}
      />
      <input
        className={`form__inputDateEndSale ${dateEndSaleClassEd}`} 
        placeholder='Date (ending sale)' 
        onInput={changeDateEndSale} 
        value={dateEndSale}
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