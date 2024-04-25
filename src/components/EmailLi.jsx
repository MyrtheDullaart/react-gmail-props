function EmailLi({ toggleRead, toggleStar, email, setActiveEmail }) {

    return (
        <li className={`email ${email.read ? 'read' : 'unread'}`}>
            <div className="select">
                <input
                    className="select-checkbox"
                    type="checkbox"
                    checked={email.read}
                    onChange={() => toggleRead(email)}
                />
            </div>
                <div className="star">
                    <input
                        className="star-checkbox"
                        type="checkbox"
                        checked={email.starred}
                        onChange={() => toggleStar(email)}
                    />
                </div>
                <div className="sender" onClick={() => {setActiveEmail(email)}}>{email.sender}</div>
            <div className="title" onClick={() => {setActiveEmail(email)}}>{email.title}</div>
        </li>
    )
}

export default EmailLi