import Header from "../Components/Header";
import Middle from "../Components/Middle";

const Dashboard=()=>{
    return (<div className="container-main">
        <div className="header">
            <Header></Header>
            
        </div>
        <div>
        <Middle></Middle>
        </div>
    </div>);
}
export default Dashboard;