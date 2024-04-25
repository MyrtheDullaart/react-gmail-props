import EmailLi from "./EmailLi"

function EmailsList({ filteredEmails, setEmails, setActiveEmail }) {
 
    return (
        <main className="emails">
            <ul>
                {filteredEmails.map((email, index) => (
                    <EmailLi key={index} email={email} setEmails={setEmails} setActiveEmail={setActiveEmail}/>
                ))}
            </ul>
        </main>
    )
}

export default EmailsList