import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'

function App() {
  return (
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}

function MainApp(){

  const [networkNotificationsCount,setNetworkNotificationsCount] = useRecoilState(networkAtom);
  const [jobsNotificationCount,setJobsNotificationCount] = useRecoilState(jobsAtom);
  const [messagingNotificationCount,setMessagingNotificationCount] = useRecoilState(messagingAtom);
  const [notificationsCount,setNotificationsCount] = useRecoilState(notificationsAtom);
  const totoalNotificationsCount = useRecoilValue(totalNotificationSelector);

  return <div>
    <button>Home</button>    

    <button>My network ({networkNotificationsCount > 99 ? "99+" : networkNotificationsCount})</button>
    <button>Jobs ({jobsNotificationCount > 99 ? "99+" : jobsNotificationCount})</button>
    <button>Messaging ({messagingNotificationCount > 99 ? "99+" : messagingNotificationCount})</button>
    <button>Notifications ({notificationsCount > 99 ? "99+" :notificationsCount})</button>

    <button onClick={() => {
      setMessagingNotificationCount(c => c+1);
    }}>Me ({totoalNotificationsCount})</button>
  </div>
}

export default App
