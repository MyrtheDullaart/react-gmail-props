import { useState } from 'react'
import initialEmails from './data/emails'
import './styles/App.css'
import EmailsList from './components/EmailsList'
import ActiveEmail from './components/ActiveEmail'
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [activeEmail, setActiveEmail] = useState('allEmails')
  const [searchEmail, setSearchEmail] = useState('')

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  let filteredEmails = emails.filter(email => email.title.toLocaleLowerCase().includes(searchEmail))

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

    return (
      <div className="app">
        <Header searchEmail={searchEmail} setSearchEmail={setSearchEmail} />
        <LeftMenu currentTab={currentTab} setCurrentTab={setCurrentTab} unreadEmails={unreadEmails} starredEmails={starredEmails} hideRead={hideRead} setHideRead={setHideRead} />
        
        { activeEmail === 'allEmails' &&
          <EmailsList filteredEmails={filteredEmails} setEmails={setEmails} setActiveEmail={setActiveEmail}/>
        }

        { activeEmail !== 'allEmails' &&
          <ActiveEmail activeEmail={activeEmail} setActiveEmail={setActiveEmail} />
        }
      </div>
    )
}

export default App
