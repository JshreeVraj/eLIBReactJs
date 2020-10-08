import React from 'react';

import LibItem from '../libItem/libItem';

import './directory.scss';

class Directory extends React.Component {
  constructor(){
      super();

      this.state={
          sections:  [{
              title: 'BOOK HISTORY',
              imageUrl: 'https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?cs=srgb&dl=pile-of-assorted-novel-books-694740.jpg&fm=jpg',
              id: 1,
              linkUrl: '/BookHistory'
                         },
            {
              title: 'RENEW BOOK(S)',
              imageUrl: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?cs=srgb&dl=brown-book-page-1112048.jpg&fm=jpg',
              id: 2,
              linkUrl : '/RenewBooks'
                         },
            {
              title: 'RESERVE BOOK(S)',
              imageUrl: 'https://images.pexels.com/photos/207732/pexels-photo-207732.jpeg?cs=srgb&dl=abstract-art-black-and-white-books-207732.jpg&fm=jpg',
              id: 3,
              linkUrl : '/ReserveBooks'
                          },
            {
              title: 'eBOOKS',
              imageUrl: 'https://images.pexels.com/photos/76942/pexels-photo-76942.jpeg?cs=srgb&dl=reading-reader-kindle-female-76942.jpg&fm=jpg',
              size: 'large',
              id: 4,
              linkUrl : '/eBooks'
                         },
            {
              title: 'DEPARTMENT LIBRARY',
              imageUrl: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?cs=srgb&dl=assorted-books-on-shelf-1370295.jpg&fm=jpg',
              size: 'large',
              id: 5,
              linkUrl : '/DeptLib'
                          }
          ]
          
      }
  }
  render()
  {
      return (
        <div className='directory-menu'>
            {
            this.state.sections.map(({ id, ...otherSectionsProps }) =>(
                <LibItem key={id} {...otherSectionsProps}/>
            ))}
        </div>
      );
}
}

export default Directory;