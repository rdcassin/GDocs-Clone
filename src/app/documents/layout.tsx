interface DocumentsLayoutProps {
    children: React.ReactNode;
}

const DocumentsLayout = ({ children }) => {
    return (
        <div className="flex flex-col gap-y-4">
            <p className="w-full bg-red-500">Document navbar</p>
            { children }
        </div>
    );
}
 
export default DocumentsLayout;