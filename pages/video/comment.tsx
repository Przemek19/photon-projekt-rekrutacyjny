import type { NextPage } from 'next';
import type { IComment } from '../../src/helpers/interfaces/Comment';

import styles from '../../styles/Video.module.css';
import { millisecondsToTime } from '../../src/helpers/utils';
import Image from 'next/image';

interface ICommentDataProps {
  data: IComment,
};

const Comment: NextPage<ICommentDataProps> = (props: ICommentDataProps) => {
  if (!props.data) props.data = { id: 0, author: 'Undefined', content: '', timestamp: 0, avatar: '/user.png' };
  return (
    <div className={ styles.CommentContainer }>
      <div className={ styles.CommentAvatarContainer }>
        <Image src={ props.data.avatar } width={48} height={48} />
      </div>
      <div className={ styles.CommentData }>
        <div className={ styles.CommentTop }>
          <span className= { styles.CommentAuthor }>{ props.data.author }</span>
          <span className={styles.CommentDate}>{ millisecondsToTime(Date.now() - props.data.timestamp) }</span>
        </div>
        <div className={ styles.CommentBottom }>
          { props.data.content }
        </div>
      </div>
    </div>
  );
}

export default Comment;
