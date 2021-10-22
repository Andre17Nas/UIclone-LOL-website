
import Champions from '../components/champions';
import HeaderVideo from '../components/headervideo';
import Navbar from '../components/navbar';
import News from '../components/news';
import GlobalStyle from '../src/styles/GlobalStyle';

export default function Home() {
  return (
    <div>    
      <GlobalStyle/>
       <Navbar/> 
       <HeaderVideo/>
       <News/>
       <Champions/>
    </div>
  )
}
