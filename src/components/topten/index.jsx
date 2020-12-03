import React, { useEffect } from "react";
import { TopTenBar } from "./TopTenBar";
import { TopTenHeader } from "./TopTenHeader";
import { getSubmissions, adminSubmitVote } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export function TopTenStories({ props }) {
  const {
    hasAdminVoted,
    hasAdminFlagged,
    submissions,
    votes,
    flagged,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubmissions());
  }, []);

  // const handleSubmitFlag = () =>{
  //     dispatch(adminSubmitFlag(flagged))
  // }

  const handleSubmitVote = () => {
    dispatch(adminSubmitVote({ prompt_id: submissions[0].prompt_id, votes }));
    props.history.push("/topten");
  };

  return (
    <>
      <section className="table-container mx-auto my-5 text-center">
        <table className="table table-striped table-hover">
          <TopTenHeader votes={votes} />
          <tbody>
            {submissions &&
              submissions.map((el) => (
                <TopTenBar
                  key={el.id}
                  index={el.id}
                  user={el.user}
                  submission={el}
                  hasAdminVoted={hasAdminVoted}
                />
              ))}
          </tbody>
        </table>
        <div className="submit-votes-btn d-flex justify-content-end">
          {hasAdminVoted ? (
            <button className="btn btn-muted" disabled>
              Top 3 Submitted
            </button>
          ) : (
            <button
              className="btn btn-success px-5 m-2"
              onClick={handleSubmitVote}
            >
              Submit Votes
            </button>
          )}
          {/* { hasAdminFlagged ? <button className="btn btn-danger" disabled>Flagged Contents Submitted</button>: <button className="btn btn-danger px-5 m-2" onClick={ handleSubmitFlag }>Submit Flags</button> } */}
        </div>
      </section>
    </>
  );
}
