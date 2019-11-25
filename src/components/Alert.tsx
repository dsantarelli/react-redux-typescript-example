import React, { FunctionComponent } from 'react';

interface Props {
    type: AlertType,
    message: string
}
const Alert: FunctionComponent<Props> = (props: Props) => {

    const className = "alert alert-" + props.type.toLowerCase();
    return (
        <div className={className} role="alert">
            {props.message}
        </div>
    );
};

export enum AlertType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUCCESS = 'success',
    DANGER = 'danger',
    WARNING = 'warning',
    INFO = 'info',
    LIGHT = 'light',
    DARK = 'dark'
}

export default Alert;