import React, { useReducer } from "react";
import notificationContext, {
  NOTIFICATION_INITIAL_STATE,
  NOTIFICATION_STATE_TYPE,
  NotificationAction,
  NotificationActionType,
  NotificationProps,
  notificationContextProps,
} from "./notification.context";
interface NotificationProviderProps {}

const reducer = (
  state: NOTIFICATION_STATE_TYPE,
  action: NotificationAction
) => {
  if (action.type === NotificationActionType.SHOW_NOTIFICATION) {
    return {
      notification: null,
    };
  } else if (action.type === NotificationActionType.HIDE_NOTIFICATION) {
    return {
      notification: action.notification,
    };
  }
  return state;
};

const NotificationProvider: React.FC<NotificationProviderProps> = (props) => {
  const [state, dispatch] = useReducer(reducer, NOTIFICATION_INITIAL_STATE);

  const handleShowNotification = (data: NotificationProps) => {
    dispatch({
      type: NotificationActionType.SHOW_NOTIFICATION,
      notification: data,
    });
  };
  const handleHideNotification = () => {
    dispatch({
      type: NotificationActionType.HIDE_NOTIFICATION,
      notification: null,
    });
  };

  const notification: notificationContextProps = {
    notification: state.notification, //{title,message,status}
    showNotification: handleShowNotification,
    hideNotification: handleHideNotification,
  };
  return (
    <notificationContext.Provider value={notification}>
      {props.children}
    </notificationContext.Provider>
  );
};

export default NotificationProvider;
