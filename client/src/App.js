import react from 'react';

const App = () => {
    return (
        <>
        <div>
            <h1>Fish Colector</h1>
        </div>
        <div>
            {/* not ready to use form as a component. see components/form */}
            <form > 
                <h1 >Add a Fish to Collection</h1>                                                                        
                    <input placeholder="Name"/>
                    <input placeholder="Location"/>
                    <input placeholder="What bait did you use?"/>
                    <input placeholder="Beer you were drinking?"/>
                        <div>
                            <button>Upload Picture</button>
                        </div>
                        <button>Submit</button>
                        <button>Clear</button>
            </form>
        </div>
        </>
    );
}

export default App;