import React from 'react';
import Preloader from '../Preloader';
import SubHeader from '../SubHeader';
import ClearFix from '../ClearFix';
import SermonList from './SermonList';

class SermonMain extends React.Component {
  render() {
    return (
      <div>
          <SubHeader title="Sermons" />
          <ClearFix />
          <SermonList />
      </div>
    )
  }
}

export default SermonMain;
