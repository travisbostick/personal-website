import React from 'react';
import YouTube from 'react-youtube';

function PromotionalVideosPage() {
  return (
    <div className='container content mt-1'>
      <p className='intro'>
        In Spring 2018, I volunteered with an organization to create 3 videos
        for a local non-profit in Atlanta called Pro Bono Partnership of
        Atlanta.
      </p>
      <p className='intro'>
        I conducted several interviews with lawyers and staff, gathered b-roll
        of legal check-ups and Atlanta, and edited together videos to explain
        and promote the services of the non-profit.
      </p>
      <div className='video-wrapper mb-4'>
        <YouTube className='video' videoId='JEXLyK3LLMQ' />
      </div>
      <div className='video-wrapper mb-4'>
        <YouTube className='video' videoId='SOY3jUyQY4M' />
      </div>
      <div className='video-wrapper mb-4'>
        <YouTube className='video' videoId='vlJBQC_WJjg' />
      </div>
    </div>
  );
}

export default PromotionalVideosPage;
