import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_COMMENTS_API } from '../utils/constants';
import { setComments } from '../utils/commentSlice';

const Comment = ({ data }) => {
    return (
      <div className="flex p-2">
        <img className="w-16 h-16 p-2 rounded-full" alt="user" src={data?.authorProfileImageUrl} />
        <div>
          <div className="py-1 font-bold">{data?.authorDisplayName}</div>
          <div className="font-light text-sm">{data?.textOriginal}</div>
        </div>
      </div>
    );
  };

const CommentsList = ({ list, isComment }) => {
    return (
      list?.length > 0 &&
      list.map((comment) => {
        return (
          <div className="hidden md:block" key={comment?.id}>
            <Comment data={isComment ? comment?.snippet : comment?.snippet?.topLevelComment?.snippet} />
            {comment?.replies?.comments?.length > 0 && (
              <div className="pl-16">
                <CommentsList list={comment?.replies?.comments} isComment={true}/>
              </div>
            )}
          </div>
        );
      })
    );
  };

const CommentsContainer = ({videoId}) => {   
  const dispatch = useDispatch();
  useEffect(() => {
    getComments(videoId);
  }, [videoId]);

  const commentsList = useSelector((store) => store.comments.list);

  async function getComments(videoID) {
    const data = await fetch(YOUTUBE_COMMENTS_API.replace("[VIDEO_ID]", videoID));
    const response = await data.json();
    dispatch(setComments(response));
  }
  return (
    <div className="p-2 md:m-2">
      <h1 className="font-bold text-lg md:text-2xl">Comments</h1>
        <CommentsList list={commentsList?.items} />
    </div>
  );
}

export default CommentsContainer