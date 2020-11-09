import React from 'react';

const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-log-modal'
        className='btn-floating btn-large green darken-2 modal-trigger'
      >
        <i className='large material-icons'>add</i>
      </a>
      <ul>
        <li>
          <a
            href='#tech-list-modal'
            className='btn-floating green modal-trigger'
          >
            <span
              style={{
                alignItems: 'center',
                textAlign: 'center',
                margin: '7px 0',
              }}
              className='material-icons'
            >
              person
            </span>
          </a>
        </li>
        <li>
          <a href='#add-tech-modal' className='btn-floating red modal-trigger'>
            <span
              style={{
                alignItems: 'center',
                textAlign: 'center',
                margin: '7px 0',
              }}
              className='material-icons'
            >
              person_add
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
