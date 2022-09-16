// @ts-nocheck
//и тут я пожалел, что начал кодить на тайпскрипт :(
import { FC, useState, useEffect, useRef } from 'react';

const FormPrice: FC = () => {
    const checkboxRef = useRef(null);
    const tableRef = useRef(null);


    const toggleBox = () => {
        const content = tableRef.current;
        if(checkboxRef.current.checked) 
            content.classList.add('hidden');  
        else 
        content.classList.remove('hidden');         
    };

    return (
        <div className="price">
            <div className="price-header">
                <input id="same-price" type="checkbox" ref={checkboxRef} onChange={toggleBox}/>
                <label htmlFor="same-price">The same price for all cities</label>
            </div>
            <table className="table" ref={tableRef}>
                <tbody>
                    <tr>
                        <th>City</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>Almaty</td>
                        <td><input type="number"/></td>
                    </tr>
                    <tr>
                        <td>Astana</td>
                        <td><input type="number"/></td>
                    </tr> 
                    <tr>
                        <td>Shymkent</td>
                        <td><input type="number"/></td>
                    </tr>   
                </tbody>                                              
            </table>
        </div>
    );
};

export default FormPrice;

