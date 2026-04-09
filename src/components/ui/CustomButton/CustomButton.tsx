import cs from './CustomButton.module.css';

interface CustomButtonProps {
    // onClick: () => void;
    props: any[];
    children: React.ReactNode;
}


export const CustomButton: React.FC<CustomButtonProps> = ({children, ...props}) => {
    
    return <button {...props} className={cs.headerButton}>
        {children}
    </button>
}