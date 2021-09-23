import React, {useState} from 'react';
import './App.css'

export default function Heart() {
    const [age, setAge] = useState(0);
    const [upper, setUpper] = useState('upper');
    const [lower, setLower] = useState('lower');

    function handleSubmit(e){
        e.preventDefault();
        const upperLimit = parseFloat((220-age)*0.85).toFixed(0);
        const lowerLimit = parseFloat((220-age)*0.65).toFixed(0);
        setUpper(upperLimit);
        setLower(lowerLimit);
       
    }
   
    
    return (
        <div class='container-fluid'>
            <h1>Heart rate limits calculator</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Age</label>
                    <input type='number' value={age}
                    onChange={e => setAge(e.target.value)} class="form-control mb-3"/>
                </div>
                <div>
                    <label>Heart rate limits</label>
                    <output class="form-control mb-3">{lower} - {upper}</output>
                </div>
                <button class="btn btn-primary">Calculate</button>
            </form>
        </div>
         
    )
    
}
