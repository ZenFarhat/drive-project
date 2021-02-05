import React from "react";

function FilesView() {
  return (
    <div className='fileView'>
      <div className='fileView__row'></div>
      <div className='filesView__titles'>
        <div className='fileView__titles--left'>
          <p>Name</p>
        </div>
        <div className='fileView__titles--right'>
          <p>Last Modified</p>
          <p>File(s) Size</p>
        </div>
      </div>
      {/* File items */}
    </div>
  );
}

export default FilesView;
