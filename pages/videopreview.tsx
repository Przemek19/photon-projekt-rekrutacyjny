import type { NextPage } from 'next';
import type { IVideo } from '../src/helpers/interfaces/Video';

import styles from '../styles/VideoPreview.module.css';
import { millisecondsToTime } from '../src/helpers/utils';

interface IVideoProps {
  video: IVideo,
};

const VideoPreview: NextPage<IVideoProps> = (props: IVideoProps) => {
  if (!props.video) {
    props.video = {
      id: 0,
      attributes: {
        youTubeVideoId: '',
        title: '',
        description: '',
        fullUrl: '',
        viewCount: '',
        likeCount: '',
        dislikeCount: '',
        publishedDate: '',
        createdAt: '',
        updatedAt: '',
      }
    };
  }

  const attributes = props.video.attributes;
  
  const publishedDate = new Date(attributes.publishedDate).getTime();
  const now = new Date().getTime();
  const timeSinceUpload = millisecondsToTime(now - publishedDate);
  
  return (
    <div className={ styles.Container } >
      <a href={`/video/${ props.video.id }`}>
        <img className={ styles.VideoPreviewImage } src={`https://img.youtube.com/vi/${ attributes.youTubeVideoId }/hqdefault.jpg`} alt={ attributes.title } />
        <span className={ styles.VideoPreviewTitle }>{ attributes.title }</span>
        <span className={ styles.VideoPreviewAuthor }>Photon Education</span>
        <span className={ styles.VideoPreviewInfo }>{ attributes.viewCount } wyświetleń • { timeSinceUpload }</span>
      </a>
    </div>
  );
}

export default VideoPreview;
