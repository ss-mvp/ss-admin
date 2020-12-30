import React, { useState, useEffect } from "react";
import { AxiosWithAuth } from "../../utils";

export default function StoryModal(props) {
  // Rotation State
  const [imageRotation, setImageRotation] = useState(0);
  // subData State
  let [SubData, setSubData] = useState();

  // Rotate Functions
  const rotateRight = () => setImageRotation((cur) => (cur >= 3 ? 0 : cur + 1));
  const rotateLeft = () => setImageRotation((cur) => (cur <= 0 ? 3 : cur - 1));

  useEffect(() => {
    async function GetIt(id) {
      AxiosWithAuth()
        .get(`admin/image/${id}`, { responseType: "arraybuffer" })
        .then((response) => {
          let image = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          setSubData(
            `data:${response.headers[
              "content-type"
            ].toLowerCase()};base64,${image}`
          );
        })
        .catch((err) => {
          console.log(err);
          return;
        });
    }
    GetIt(props.submission.id);
  }, []);

  if (!SubData) return <>Loading...</>;

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
              <img
                src={SubData}
                alt="submission"
                style={{ transform: `rotate(${imageRotation * 90}deg)` }}
              />
            </div>
            <div
              className="modal-controls"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img
                src={require("../../assets/rotate-left.png")}
                alt="rotate left"
                style={{
                  width: "50px",
                  zIndex: "200",
                  padding: "10px",
                  cursor: "pointer",
                }}
                onClick={rotateLeft}
              />
              <img
                src={require("../../assets/rotate-right.png")}
                alt="rotate right"
                style={{
                  width: "50px",
                  zIndex: "200",
                  padding: "10px",
                  cursor: "pointer",
                }}
                onClick={rotateRight}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
