export const HelpModal = () => {
    return (
        <dialog id="Help_modal" className="modal">
  <div className="modal-box bg-mainbackground">
    <h3 className="font-bold text-lg">Welcome to my expense tracker Project 🚀</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    )
}
