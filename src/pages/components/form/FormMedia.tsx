import { FC, useState } from 'react';

const FormMedia: FC = () => {
    const [images, setImages] = useState<string[]>();

    return (
        <div className={"media"}>
            <div className='imageContainer'>
                <div className='addImg'>
                    +
                </div>
                {images?.map((imageSrc, index, array) => (
                    <img src={imageSrc} className="img-thumbnail" alt="product-image"></img>
                ))}
            </div>
            <div className='fileuploading'>
                <label htmlFor="avatar" className="form-label">Choose image for avatar</label>
                <input className="form-control"  type="file" id="avatar" name="avatar" multiple />   
            </div>     
        </div>
    );
};

export default FormMedia;