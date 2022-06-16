import styles from '../../styles/SmallPreview.module.css';
import type { NextPage } from 'next';
import { millisecondsToTime } from '../../src/helpers/utils';

interface IVideoAttributes {
  youTubeVideoId: string,
  title: string,
  description: string,
  fullUrl: string,
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  publishedDate: string,
  createdAt: string,
  updatedAt: string,
};

interface IVideo {
  id: number,
  attributes: IVideoAttributes,
  title: string,
};

interface IVideoProps {
  video: IVideo,
};

const SmallPreview: NextPage<IVideoProps> = (props: IVideoProps) => {
  if (!props.video) {
    props.video = {
      id: 0,
      title: '',
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
          <img className={ styles.VideoPreviewImage } src={`https://img.youtube.com/vi/${ attributes.youTubeVideoId }/hqdefault.jpg`} alt={ props.video.title } />
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
