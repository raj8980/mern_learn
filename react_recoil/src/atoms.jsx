import axios from "axios";
import { atom, selector } from "recoil";

 
 export const networkAtom = atom({
    key : "networkAtom",
    default : 104
 });

 export const jobsAtom = atom ({
    key : "jobsAtom",
    default : 0
 });

 export const notificationsAtom = atom({
    key : "notificationsAtom",
    default : 12
 });

 export const messagingAtom = atom({
    key : "messagingAtom",
    default : 0
 });

 export const notifications = atom({
    key : "notifications",
    default : selector({
        key : "networkAtomSelector",
        get : async () =>{
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
 });
 
export const totalNotificationsSelectorBE =selector({
    key : "totalNotificationsSelectorBE",
    get : ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network +
            allNotifications.jobs + 
            allNotifications.messaging +
            allNotifications.notifications 
    }
})


 export const totalNotificationSelector = selector({
    key : "totalNotificationSelector",
    get : ({get}) =>{
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificaitonsAtomCount = get(notificationsAtom);
        const messagingAtomCount = get(messagingAtom);
        return networkAtomCount+jobsAtomCount+notificaitonsAtomCount+messagingAtomCount;
    }
 })