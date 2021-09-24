import './sass/App.scss'
// import { useMediaPredicate } from 'react-media-hook'

import AppContainer from './components/AppContainer'
import MyIdDiv from './components/MyIdDiv'
import MyIdCard from './components/MyIdCard'
import MyTabsDiv from './components/MyTabsDiv'

function App() {

  // const biggerThan768 = useMediaPredicate("(min-width: 768px)")
  // App Component
  
  return (
    <div className="App">
      <AppContainer>
        {/* {biggerThan768 && 
          <MyIdDiv>
            <MyIdCard />
          </MyIdDiv>
        } */}

        <MyIdDiv>
          <MyIdCard />
        </MyIdDiv>

        <MyTabsDiv />

      </AppContainer>
    </div>
  );
}

export default App;
