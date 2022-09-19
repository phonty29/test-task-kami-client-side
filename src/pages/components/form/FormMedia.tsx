// @ts-nocheck
import { FC, useState, useRef, useEffect, SetStateAction } from 'react';
import { useFormContext } from './FormProvider';

const FormMedia: FC = () => {
    const [imageUrls, setUrls] = useState([]);
    const inputRef = useRef(null);
    const {sendProduct, setSendProduct, fetchedProduct, setFetchedProduct} = useFormContext();
    useEffect(() => {
        if (sendProduct.images.length < 1) return;
        if (typeof sendProduct.images[0] != 'string') {
            const newImageUrls: string[] = [];
            sendProduct.images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
            setUrls(newImageUrls);
        }
    }, [sendProduct.images]);

    return (
        <div className={"media"}>
            <div className='imageContainer'>
                {fetchedProduct.images.length > 1 && fetchedProduct.images.map((imageUrl, index, array) => (
                    <div key={index} className={"imgBlock"}>
                        <img src={`/${imageUrl}`} className="img-thumbnail upload-images" alt="product-image"/>
                    </div>
                ))}
                {imageUrls.map((imageUrl, index, array) => (
                    <div key={index} className={"imgBlock"}>
                        <img src={imageUrl} className="img-thumbnail upload-images" alt="product-image"/>
                    </div>
                ))}
                <div className='addImg' onClick={() => {inputRef.current.click()}}>
                    +
                </div>                
            </div>
            <div className='fileuploading'>
                <label htmlFor="images" className="form-label">Choose images</label>
                <input accept="image/*" onChange={(e) => {setSendProduct({...sendProduct, images: [...sendProduct.images, ...e.target.files]})}} ref={inputRef} className="form-control"  type="file" id="images" name="images" multiple />   
            </div>     
        </div>
    );
};

export default FormMedia;