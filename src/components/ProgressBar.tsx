import React from 'react';

interface Props {
  progress?: number
}
const ProgressBar: React.FunctionComponent<Props> = (props) => {
  const progressValue = (props.progress) ? props.progress : 100;
  return (
    <div className='progress' style={{ height: 25 }}>
      <div
        className='progress-bar progress-bar-striped progress-bar-animated'
        role='progressbar'
        aria-valuenow={progressValue}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ width: `${progressValue}%`, fontSize: 18, fontWeight: "bold" }}
      >Loading...</div>
    </div>
  );
};

export default ProgressBar;
