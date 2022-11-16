import { FoverNotificationStatusEnum } from "../enum/fover-notification-status.enum";

export class FoverNotificationModel
{
    status: FoverNotificationStatusEnum;
    title: string;
    message: string[];
    extraInfo?: any;
    stateVisible?: string; // Estado visual do component
}
