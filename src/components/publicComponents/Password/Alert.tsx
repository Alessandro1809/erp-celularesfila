

interface AlertProps {
    alert: {
        mensaje: string;
        error?: boolean;
    };
}

export const Alert: React.FC<AlertProps> = ({ alert }) => {
    return (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4 sm:px-6 lg:px-8">
            <div className={`${alert.error ? 'from-red-400 to-red-600' : 'from-indigo-400 to-indigo-600'} bg-gradient-to-r rounded-xl p-3 text-center uppercase text-white font-bold text-sm`}>
                {alert.mensaje}
            </div>
        </div>
    );
};
