import EmailLi from "./EmailLi"

function EmailsList({ filteredEmails, toggleStar, toggleRead, setActiveEmail }) {
 
    return (
        <main className="emails">
            <ul>
                {filteredEmails.map((email, index) => (
                    <EmailLi key={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar} setActiveEmail={setActiveEmail}/>
                ))}
            </ul>
        </main>
    )
}

export default EmailsList