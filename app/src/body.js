import MyComponent from "./addboot";
export default function Bodycomp()
{
    return (
        <div className="container flex">
            <div className="row">
                <div className="col">
                    Appetizers
                    {/* This is where i put the children from the API */}
                    <MyComponent />

                </div>
                <div className="col">
                   Entrees
                    {/* This is where i put the children from the API */}
                    <MyComponent />

                </div>
                
            </div>
        </div>
    );
}