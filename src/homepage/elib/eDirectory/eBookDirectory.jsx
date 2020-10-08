import React from 'react';

import EBookLibItem from '../eItem/eBookLib';

import './eBookDirectory.scss'

class eBookDirectory extends React.Component {
  constructor(){
      super();

      this.state={
          sections:  [{
              title: 'SEM 1',
              imageUrl: '',
              id: 1,
              linkUrl: '/SEM1'
                         },
            {
              title: 'SEM2',
              imageUrl: '',
              id: 2,
              linkUrl : '/SEM2'
                         },
            {
              title: 'SEM3',
              imageUrl: '',
              id: 3,
              linkUrl : '/SEM3'
                          },
            {
              title: 'SEM4',
              imageUrl: '',
              id: 4,
              linkUrl : '/SEM4'
                         },
            {
              title: 'SEM 5',
              imageUrl: '',
              id: 5,
              linkUrl : '/SEM5'
                          },
            {
              title: 'SEM 6',
              imageUrl: '',
              id: 6,
              linkUrl : '/SEM6'
                           },
             {
              title: 'SEM 7',
              imageUrl: '',
              id: 7,
              linkUrl : '/SEM7'
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
                <EBookLibItem key={id} {...otherSectionsProps}/>
            ))}
        </div>
             );
}
}

export default eBookDirectory;