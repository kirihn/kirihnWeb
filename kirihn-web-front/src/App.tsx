import './utils/locales/localization'
import { useTranslation } from 'react-i18next'
import './App.scss'
import { Header } from './components/header'

function App() {

  const { t, i18n } = useTranslation()

  function changeLanguage(lng : string){
    i18n.changeLanguage(lng)
  }

  return (
    <>
    <button onClick={() => changeLanguage('en')}>English</button>
    <button onClick={() => changeLanguage('ru')}>Russian</button>
      <Header t={t} />
    </>
  )
}

export default App
