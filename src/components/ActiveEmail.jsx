function ActiveEmail({ activeEmail, setActiveEmail }) {
    return (
        <main className='active-email'>
            <div className="email-header">
                <button id="back-button" onClick={() => {setActiveEmail('allEmails')}}>Back</button>
            </div>
            <div className="email-info">
                <h2>{activeEmail.title}</h2>
                <p>{activeEmail.sender}</p>
            </div>
            <div className="email-content">
                <p>{activeEmail.content}</p>
            </div>
        </main>
    )
}

export default ActiveEmail