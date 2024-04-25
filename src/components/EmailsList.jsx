import EmailLi from "./EmailLi"

function EmailsList({ filteredEmails, toggleStar, toggleRead }) {
 
    return (
        <main className="emails">
            <ul>
                {filteredEmails.map((email, index) => (
                    <EmailLi key={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar}/>
                ))}
            </ul>
        </main>
    )
}

export default EmailsList