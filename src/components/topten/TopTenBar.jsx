import React, { useState, useEffect } from "react";
import StoryModal from "./StoryModal";
import VoteButton from "./buttons/VoteButton";
import FlagButton from "./buttons/FlagButton";

export function TopTenBar({ submission, hasAdminVoted }) {
  return (
    <>
      <tr>
        <td>{submission.codename}</td>
        <td style={{ display: "flex", justifyContent: 'space-evenly' }}>
          <button
            className="btn btn-outline-primary m-2 px-4"
            data-toggle="modal"
            data-target={`#storyModal ${submission.id}`}
          >
            View
          </button>
          <StoryModal key={submission.id} submission={submission} />
          <VoteButton
            story_id={submission.id}
            user_id={submission.userId}
            topThree={submission.topThree}
            vote={submission.vote}
            hasAdminVoted={hasAdminVoted}
          />
          <FlagButton submission={submission} />
        </td>
        <td>{submission.score}</td>
      </tr>
    </>
  );
}
