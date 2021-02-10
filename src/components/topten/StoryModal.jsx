import React from 'react';

export default function StoryModal({ submission }) {
  return (
    <>
      <div
        className="modal fade"
        id={`storyModal ${submission.id}`}
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="title bg-primary text-white">
              <h4 className="p-3">Story</h4>
            </div>
            <div className="modal-body">
              <img
                src={submission.src}
                alt="submission"
                style={{ transform: `rotate(${submission.rotation}deg)` }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
