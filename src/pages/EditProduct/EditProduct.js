import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import './EditProduct.css';
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
  //console.log(id);
  //console.log(product);

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
},[product.title, product.photo, product.description, product.price, product.sale, product.dateEndSale]);
  
  const [titleClass, setTitleClass] = useState('');
  const [photoClass, setPhotoClass] = useState('');
  const [priceClass, setPriceClass] = useState('');
  const [saleClass, setSaleClass] = useState('');
  const [dateEndSaleClass, setDateEndSaleClass] = useState('');

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
  //^[\D]
  const checkPhotoErr = () => {
    const reg = /^[a-zA-Z0-9]/;
    return !reg.test(photo);
  };

  const checkPriceErr = () => {
    const reg = /^[0-9.]/;
    return !reg.test(price);
  };

  const checkSaleErr = () => {
    const reg = /^[0-9]{,1}$/;
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

  const checkPriceValidation = () => {
    if (checkPriceErr()) {
      setPriceClass('form__error');
    } else {
      setPriceClass('');
    }
  };

  const checkSaleValidation = () => {
    if (checkSaleErr()) {
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
    if (!checkTitleErr() && !checkPhotoErr() && !checkPriceErr()
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
        className={`form__inputTitle ${titleClass}`}
        placeholder='Mark (4-7 characters)'
        onInput={changeTitle} 
        value={title}
      />
      <input
        className={`form__inputPhoto ${photoClass}`}
        placeholder='URL Photo' 
        onInput={changePhoto} 
        value={photo}
      />
      <input
        className='form__inputDescription'
        placeholder='Model (max 200 characters)' 
        onInput={changeDescription} 
        value={description}
      />
      <input
        className={`form__inputPrice ${priceClass}`} 
        placeholder='Price' 
        onInput={changePrice} 
        value={price}
      />
      <input
        className={`form__inputSale ${saleClass}`} 
        placeholder='Sale %' 
        onInput={changeSale} 
        value={sale}
      />
      <input
        className={`form__inputDateEndSale ${dateEndSaleClass}`} 
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
          //onClick={approvedDispatch}
        > 
         Cancel
        </Button>
      </Link>
      </span>
    </form>
    )
}

export default EditProduct;



  //const [isEditEnable, setIsEditEnable] = useState(false);

  // const editingActivate = () => {
  //   setIsEditEnable(!isEditEnable);
  // }


// {!isEditEnable && (
//   <div onDoubleClick={editingActivate}>
//     <p>{product.title}</p>
//   </div>)
//   }     
//   {isEditEnable &&  (
//     <div  onBlur={editingBlurActivate} onFocus={() => true}>
//       <input type="text" placeholder="enter some text" value={product.title} />
//     </div>
//   ) }   
  
//   {!isEditEnable && (
//   <div onDoubleClick={editingActivate}>
//     <p>{product.photo}</p>
//   </div>)
//   }     
//   {isEditEnable &&  (
//     <div  onBlur={editingBlurActivate} onFocus={() => true}>
//       <input type="text" placeholder="enter some text" value={product.photo} />
//     </div>
//   ) }

//   {!isEditEnable && (
//   <div onDoubleClick={editingActivate}>
//     <p>{product.description}</p>
//   </div>)
//   }     
//   {isEditEnable &&  (
//     <div  onBlur={editingBlurActivate} onFocus={() => true}>
//       <input type="text" placeholder="enter some text" value={product.description} />
//     </div>
//   ) } 

//   {!isEditEnable && (
//   <div onDoubleClick={editingActivate}>
//     <p>{product.price}</p>
//   </div>)
//   }     
//   {isEditEnable &&  (
//     <div  onBlur={editingBlurActivate} onFocus={() => true}>
//       <input type="text" placeholder="enter some text" value={product.price} />
//     </div>
//   ) } 

//   {!isEditEnable && (
//   <div onDoubleClick={editingActivate}>
//     <p>{product.sale}</p>
//   </div>)
//   }     
//   {isEditEnable &&  (
//     <div  onBlur={editingBlurActivate} onFocus={() => true}>
//       <input type="text" placeholder="enter some text" value={product.sale} />
//     </div>
//   ) }

//   {!isEditEnable && (
//   <div onDoubleClick={editingActivate}>
//     <p>{product.dateEndSale}</p>
//   </div>)
//   }     
//   {isEditEnable &&  (
//     <div  onBlur={editingBlurActivate} onFocus={() => true}>
//       <input type="text" placeholder="enter some text" value={product.dateEndSale} />
//     </div>
//   ) }