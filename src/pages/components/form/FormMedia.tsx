import { FC, useState, useRef, useEffect, SetStateAction } from 'react';
import { useFormContext } from './FormProvider';

const FormMedia: FC = () => {
    const [images, setImages] = useState([]);
    const [imageUrls, setUrls] = useState([]);
    const inputRef = useRef(null);
    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls: string[] = [];
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
        setUrls(newImageUrls);
    }, [images]);
    const {product, setProduct} = useFormContext();

    const addNewImage = () => {
        inputRef.current.click();
    };
    const readyToUpload = (e: any) => {
        setImages([...images, ...e.target.files]);
        setProduct({...product, images: [...images, ...e.target.files]});
    };

    return (
        <div className={"media"}>
            <div className='imageContainer'>
                {imageUrls.map((imageSrc, index, array) => (
                    <div key={index} className={"imgBlock"}>
                        <img src={imageSrc} className="img-thumbnail upload-images" alt="product-image"/>
                    </div>
                ))}
                <div className='addImg' onClick={addNewImage}>
                    +
                </div>                
            </div>
            <div className='fileuploading'>
                <label htmlFor="images" className="form-label">Choose images</label>
                <input accept="image/*" onChange={readyToUpload} ref={inputRef} className="form-control"  type="file" id="images" name="images" multiple />   
            </div>     
        </div>
    );
};

export default FormMedia;