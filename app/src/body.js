import MyComponent from "./addboot";
import GetComponent from "./axioscall" // sorry Justin. out of steam this week
export default function Bodycomp()
{
    return (
        <>
        <div className="container flex">
            <div className="row">
                <div className="col">
                    Appetizers
                    {/* This is where i put the children from the API */}
                    <MyComponent />
                    <GetComponent />

                </div>
                <div className="col">
                   Entrees
                    {/* This is where i put the children from the API */}
                    

                </div>
                
            </div>
        </div>
        </>
    );
}