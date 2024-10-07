const Dialog = () => {
    return (
        <dialog open={false} className="custom-dialog" style={{ width: "100%", height: "100%", padding: "20px", zIndex: "100",  backgroundColor:"#000"}}>
            <h2>Dialog Title</h2>
            <p>This is the content inside the dialog.</p>
            <p>This is the content inside the dialog.</p>
            <p>This is the content inside the dialog.</p>
            <p>This is the content inside the dialog.</p>
            <p>This is the content inside the dialog.</p>
            <p>This is the content inside the dialog.</p>
            <p>This is the content inside the dialog.</p>
            <p>This is the content inside the dialog.</p>
            <p>This is the content inside the dialog.</p>
            <p>This is the content inside the dialog.</p>
            <p>This is the content inside the dialog.</p>
            <p>This is the content inside the dialog.</p>

            <button className="close-dialog-btn">Close Dialog</button>
        </dialog>
    );
};

export default Dialog;
