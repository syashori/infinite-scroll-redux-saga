import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getFoto, searchFoto } from '../redux/action'
import Modal from '../components/Modal'

const DevelopmentTest = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [image, setImage] = useState('')
  const data = useSelector(state => state.fotoData)
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = (image) => {
    setImage(image)
    setModal(!modal);
  };

  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      dispatch(getFoto(page, query))
      setPage(page + 1)
    }
  }
  useEffect(() => {
    dispatch(getFoto(page, query))
    setPage(page + 1)
    // eslint-disable-next-line
  }, []);

  const inputQuery = (data) => {
    setQuery(data)
    dispatch(searchFoto(data))
    setPage(2);
  }

  return (
    <div className='container search-page'>
      <div className='search-box'>
        <input type="text" onChange={(event) => inputQuery(event.target.value)} placeholder='Search Foto' />
      </div>
      <div className='foto'>
        {
          data.map((item, index) =>
            <div key={index} className='single-foto'>
              <Link to={`/dev-test/${item.id}`} className='link'>
                <div>
                  Detail
                </div>
              </Link>
              <img className='image' src={item.urls.small} alt={item.urls.small} onClick={()=>toggleModal(item.urls.regular)} />
            </div>
          )
        }
      </div>
      {modal && (
        <Modal toggleModal = {toggleModal} image = {image} />
      )}
    </div>
  )
}

export default DevelopmentTest