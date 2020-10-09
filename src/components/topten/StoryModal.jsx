import React, { useEffect } from 'react';
import { useState } from 'react';
import { AxiosWithAuth } from '../../utils';

export default function StoryModal(props) {
  let [SubData, sSubData] = useState();
  useEffect(() => {
    async function GetIt(id)
    {
      AxiosWithAuth().get(`admin/image/${id}`, { responseType: "arraybuffer" })
        .then((response) =>
        {
          let image = btoa(
            new Uint8Array(response.data)
              .reduce((data, byte) => data + String.fromCharCode(byte), '')
          );
          sSubData(`data:${response.headers['content-type'].toLowerCase()};base64,${image}`);
        });
    }
    GetIt(props.submission.id);
  }, []);

  if (!SubData)
    return(<>Loading...</>)

  return (
    <>
      <div
        className="modal fade"
        id={`storyModal ${props.submission.id}`}
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
              <img src={SubData} alt="submission" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
