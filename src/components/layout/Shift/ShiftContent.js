import './shift_content.css';

export default function shiftContent(className) {
    const shiftedContentClassName = 'layout_shifted';
    
    if (undefined === className) {
        return [shiftedContentClassName];
    }
    
    return [...className, shiftedContentClassName];
}
