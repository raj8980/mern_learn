import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notifications, notificationsAtom, totalNotificationSelector, totalNotificationsSelectorBE } from './atoms'

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
  const totoalNotificationsCountBE = useRecoilValue(totalNotificationsSelectorBE);

  const [networkCount,setNetworkCount] = useRecoilState(notifications);



  return <div>
    <button>Home</button>    

    <button>My network ({networkCount.network > 99 ? "99+" : networkCount.network})</button>
    <button>Jobs ({networkCount.jobs > 99 ? "99+" : networkCount.jobs})</button>
    <button>Messaging ({networkCount.messaging > 99 ? "99+" : networkCount.messaging})</button>
    <button>Notifications ({networkCount.notifications > 99 ? "99+" :networkCount.notifications})</button>

    <button onClick={() => {
      setMessagingNotificationCount(c => c+1);
    }}>Me ({totoalNotificationsCountBE})</button>
  </div>
}

export default App
