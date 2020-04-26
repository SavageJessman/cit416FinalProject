import React from 'react'
import { Modal } from "@material-ui/core";
import Comment from '../components/Comment/comment.js'
import Commentview from '../components/commentview.js'
import Rating1 from '../components/rating.js'
import Ratingview from '../components/ratingview.js'
function Popup({ open1, selected,onCloseModal,renderModal }) {
	return (
	
		
      <Modal
      disablePortal
      disableEnforceFocus
      disableAutoFocus open={open1} onClose={onCloseModal} >
      <div className='paper'>
       <h2>{selected.m_title}</h2>
       <img src={selected.m_pic}></img>
      <p>Synopsis:  {selected.m_synopsis}</p>
      <p>Release Date:  {selected.m_release}</p>
      <p>Cast:  {selected.m_cast}</p>

      
      
      <button onClick={onCloseModal} >Close</button>
      <Commentview movieid={selected.m_ID}/>
      <hr></hr>
      <Comment Movieid={selected.m_ID}/>
      <Ratingview Movieid={selected.m_ID}/>
      <Rating1 Movieid={selected.m_ID}/>
      

      </div>
  
      </Modal>
    
   

		
	)
}

export default Popup
