import { forwardRef, useState } from 'react';
import images from '~/assets/imgs';

function Image({ src, alt, ...props }, ref) {
    // eslint-disable-next-line jsx-a11y/alt-text
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(images.noImage);
    };

    return <img ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />;
}

export default forwardRef(Image);
