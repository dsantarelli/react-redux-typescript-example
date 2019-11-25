import React from 'react';

interface Props {
  progress?: number,
  message?: string
}
const ProgressBar: React.FunctionComponent<Props> = (props: Props) => {
  const progressValue = (props.progress) ? props.progress : 100;
  const progressMessage = (props.message) ? props.message : "Loading...";
  return (
    <div className='progress' style={{ height: 40 }}>
      <div
        className='progress-bar progress-bar-striped progress-bar-animated bg-dark'
        role='progressbar'
        aria-valuenow={progressValue}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ width: `${progressValue}%`, fontSize: 18, fontWeight: "bold" }}
      >{progressMessage}</div>
    </div>
  );
};

export default ProgressBar;
