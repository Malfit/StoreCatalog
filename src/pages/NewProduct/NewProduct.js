import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link  } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { postNewProductData } from '../../redux/actions/root.actions';
import './NewProduct.scss';

export const NewProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const formData = useRef({
    title: '',
    photo: '',
    description: '',
    price: '',
    sale: '',
    dateEndSale: '',
  });

  const [dateEnd, setDateEnd] = useState('');

  const [titleClass, setTitleClass] = useState('');
  const [photoClass, setPhotoClass] = useState('');
  const [descriptionClass, setDescriptionClass] = useState('');
  const [priceClass, setPriceClass] = useState('');
  const [saleClass, setSaleClass] = useState('');

  const changeValue = (value, name) => {
    formData.current[name] = value;
    checkValidation();
  };

  const changeDateValue = (e) => {
    setDateEnd(e.target.value);
  }

  const checkTitleErr = () => {
    const reg = /^[\D]{2,7}$/;
    return !reg.test(formData.current.title);
  };

  const checkPhotoErr = () => {
    const reg = /^[a-zA-z0-9\D]/;
    return !reg.test(formData.current.photo);
  };

  const checkPriceErr = () => {
    const reg = /^[\d.]{1,}$/;
    return !reg.test(formData.current.price);
  };

  const checkSaleErr = () => {
    const reg = /^[\d]{2}$/;
    return !reg.test(formData.current.sale);
  };

  const checkValidation = () => {
    const { title, photo, description, price, sale } = formData.current;
    if (checkTitleErr() && title.length > 0) {
      setTitleClass('form__error');
    } else {
      setTitleClass('');
    }
    if (checkPhotoErr() && photo.length > 0) {
      setPhotoClass('form__error');
    } else {
      setPhotoClass('');
    }
    if (description.length > 200) {
      setDescriptionClass('form__error');
    } else {
      setDescriptionClass('');
    }
    if ((checkPriceErr() && price.length > 0) || price > 99999999.99) {
      setPriceClass('form__error');
    } else {
      setPriceClass('');
    }
    if ((checkSaleErr() || sale < 10 || sale > 90) && sale.length > 0) { 
      setSaleClass('form__error');
    } else {
      setSaleClass('');
    }
  };

  const approvedDispatch = () => {
    const {
      title, photo, description, price, sale
    } = formData.current;

    if (!checkTitleErr() && !checkPhotoErr() && !checkPriceErr()) {
      dispatch(postNewProductData(
        title,
        photo,
        description,
        price,
        sale,
        Date.parse(dateEnd),
        history,
      ));
    }
  };
  return (
    <form className='newProduct'> 
      <div className='newText'>Add configuration for your new product</div>   
      <input
        className={`form__inputTitle ${titleClass}`}
        placeholder='Mark (2-7 characters)'
        onInput={e => changeValue(e.target.value, 'title')} 
      />
      <input
        className={`form__inputPhoto ${photoClass}`}
        placeholder='URL Photo' 
        onInput={e => changeValue(e.target.value, 'photo')} 
      />
      <input
        className={`form__inputDescription ${descriptionClass}`}
        placeholder='Model (max 200 characters)' 
        onInput={e => changeValue(e.target.value, 'description')} 
      />
      <input
        className={`form__inputPrice ${priceClass}`}
        placeholder='Price' 
        onInput={e => changeValue(e.target.value, 'price')} 
      />

      <input
         className={`form__inputSale ${saleClass}`} 
         placeholder='Discount 10-90%' 
         onInput={e => changeValue(e.target.value, 'sale')} 
      /> 
      <TextField
              id='date'
              label='Date (ending discount)'
              type='date'
              className='form__inputDate'
              value={dateEnd}
              onChange={changeDateValue}
              InputLabelProps={{
                shrink: true,
              }}
            />
      <span>
      <Button 
        className='add-btn' 
        variant='contained' 
        color='primary' 
        onClick={approvedDispatch}
      > 
        Create 
      </Button>
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

export default NewProduct;