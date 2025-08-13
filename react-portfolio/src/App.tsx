import {MainHeading} from './appComponents/Heading';
import Greeting from './appComponents/Greeting';
import QualCards from './appComponents/QualCards';

/**
 * Handles the welcome page
 * @returns 
 */
function App(){
  return <div>
        <MainHeading />
        <Greeting />
        <div>
          <QualCards />
        </div>
    </div>
}

export default App;