import { createContext } from "react";

export interface NotificationProps {
    title: string,
    message: string,
    status: string,
}

export interface notificationContextProps {
    notification: NotificationProps | null,
    showNotification: (data:NotificationProps) => void,
    hideNotification: () => void
}

const notificationContext = createContext<notificationContextProps>({
    notification: null,//{title,message,status}
    showNotification: function (data: NotificationProps){ },
    hideNotification: function () { }
})
export default notificationContext;






export enum NotificationActionType {
    SHOW_NOTIFICATION = 'SHOW_NOTIFICATION',
    HIDE_NOTIFICATION = 'HIDE_NOTIFICATION'
}
export interface ShowNotificationType {
    type: NotificationActionType.SHOW_NOTIFICATION,
    notification: {
        title: string,
        message: string,
        status: string,
    }
   
}
export interface hideNotificationType {
    type: NotificationActionType.HIDE_NOTIFICATION,
    notification: null
}
export type NotificationAction = ShowNotificationType | hideNotificationType;

export interface NOTIFICATION_STATE_TYPE {
    notification: NotificationProps | null,
}
export const NOTIFICATION_INITIAL_STATE: NOTIFICATION_STATE_TYPE = {
    notification: null
}

