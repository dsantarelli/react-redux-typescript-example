import React from 'react';

interface Props {}

const ProgressBar: React.FunctionComponent<Props> = () => {
  return (
    <div className='progress' style={{ height: 25 }}>
      <div
        className='progress-bar progress-bar-striped progress-bar-animated'
        role='progressbar'
        aria-valuenow={100}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ width: '100%', fontSize: 18, fontWeight: "bold" }}
      >Loading...</div>
    </div>
  );
};

export default ProgressBar;
