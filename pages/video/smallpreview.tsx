import type { NextPage } from 'next';
import type { IVideo } from '../../src/interfaces/Video';

import styles from '../../styles/SmallPreview.module.scss';
import { millisecondsToTime } from '../../src/helpers/utils';

interface IVideoProps {
  video: IVideo,
};

const SmallPreview: NextPage<IVideoProps> = (props: IVideoProps) => {
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
    }
  }
  const attributes = props.video.attributes;
  
  const publishedDate = new Date(attributes.publishedDate).getTime();
  const now = new Date().getTime();
  const timeSinceUpload = millisecondsToTime(now - publishedDate);
  
  return (
    <div className={ styles.Container } >
      <a href={`/video/${ props.video.id }`}>
        <div className={ styles.Miniature }>
          <img className={ styles.VideoPreviewImage } src={`https://img.youtube.com/vi/${ attributes.youTubeVideoId }/hqdefault.jpg`} alt={ attributes.title } />
        </div>

        <div className={ styles.VideoInfo }>
          <span className={ styles.VideoPreviewTitle }>{ attributes.title }</span>
          <span className={ styles.VideoPreviewAuthor }>Photon Education</span>
          <span className={ styles.VideoPreviewInfo }>{ attributes.viewCount } wyświetleń • { timeSinceUpload }</span>
        </div>
      </a>
    </div>
  );
}

export default SmallPreview;
