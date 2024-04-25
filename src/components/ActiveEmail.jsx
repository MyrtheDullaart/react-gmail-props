function ActiveEmail({ activeEmail, setActiveEmail }) {
    return (
        <main className='active-email'>
            <div>
                <button onClick={() => {setActiveEmail('allEmails')}}>Back</button>
                <h2>{activeEmail.title}</h2>
                <p>Sender: {activeEmail.sender}</p>
                <p>{activeEmail.content}</p>
            </div>
        </main>
    )
}

export default ActiveEmail