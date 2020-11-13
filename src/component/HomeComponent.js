import {Link} from 'react-router-dom'

function HomeComponent(){

return(
    <div>
          <h1>Welcome to Home Page!!!</h1>
          please <Link to="/employee-list">click here</Link> to move to home page
    </div>
)    

}
export default  HomeComponent;