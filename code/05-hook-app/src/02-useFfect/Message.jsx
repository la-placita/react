import { useEffect } from "react";

export const Message = ({ user }) => {
    const componentName = Message.name;

    useEffect(() => {
        console.log(`🚀 <${componentName}/> component mounted`);
        return () => {
            console.log(`🛑 <${componentName}/> component unmounted`);
        };
    }, []);
    
    return (
        <div className="alert alert-primary">
            <strong>The User "{user}" Exists</strong>
        </div>
    );
};
