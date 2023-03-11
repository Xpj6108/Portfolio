
const   Header = () => {
    return (
        <div className="text-center border-b border-slate-400 p-4">
            <div className="text-3xl font-bold">John Smith</div>
            <div className="text-slate-400">
                <div>Software Developer</div>
                <div className="text-sm flex justify-center gap-2">
                    <div>M: 0449 XXX XXX</div>
                    <div>E: john@outlook.com</div>
                </div>
            </div>
        </div>
    );
};

export default  Header;