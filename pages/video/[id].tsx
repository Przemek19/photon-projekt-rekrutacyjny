import { ApiUrl } from '../../src/helpers/ApiConfig';
import { dateToText } from '../../src/helpers/utils';
import axios from 'axios';
import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Video.module.css';
import Navbar from '../navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import SmallPreview from './smallpreview';
import Comment from './comment';
import Image from 'next/image';

interface IComment {
	id: number,
	author: string,
	avatar: string,
	content: string,
	timestamp: number,
};

const VideoPage: NextPage = (props: any) => {
	const sendComment = (e: any) => {
		if (e.key === 'Enter' && e.target.value.length > 0) {
			const newComments = [ ...comments ];
			newComments.unshift({
				id: newComments.length,
				author: 'Anonimowy',
				avatar: '/user.png',
				content: e.target.value,
				timestamp: Date.now(),
			});
			updateCommentValue('');
			updateComments(newComments);
		}
	}

	const updateCommentHandler = (e: any) => {
		updateCommentValue(e.target.value);
	}
	
	const [ videoData, updateVideoData ]: any = useState({ });
	const [ commentValue, updateCommentValue ]: any = useState('');
	const [ videos, setVideos ]: any = useState([ ]);
	const [ comments, updateComments ]: any = useState([
		{
			id: 0,
			author: 'Pevo',
			avatar: '/user.png',
			content: 'Świetny filmik!',
			timestamp: 1655402776743,
		},
		{
			id: 1,
			author: 'Photon Education',
			avatar: '/icon.png',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis pretium fringilla. Vestibulum in lobortis diam, in molestie elit. Vivamus maximus ex et ullamcorper sodales. Nulla sit amet purus in diam porttitor gravida',
			timestamp: 1655102676743,
		},
		{
			id: 2,
			author: 'Pevo',
			avatar: '/user.png',
			content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla id ullamcorper dolor. Aenean eget vestibulum sapien. Nulla imperdiet, arcu quis tempus tincidunt, ante urna pretium nibh, eget tristique dui libero vitae nibh. Fusce eu augue convallis, ullamcorper urna eu, maximus neque. Nam gravida nibh non massa pulvinar, nec fringilla urna tempus. Curabitur vel turpis velit. Aenean sed massa sed ex semper tempus ac a ipsum. Sed sed justo massa. Vestibulum eu odio luctus, consectetur nisl eu, gravida neque. In hac habitasse platea dictumst. Aliquam erat volutpat. Nulla facilisis magna eget malesuada interdum. Morbi condimentum est finibus orci interdum consectetur. Vestibulum eu lacus ullamcorper, placerat massa nec, luctus ante.',
			timestamp: 1655401676743,
		},
	]);

	useEffect(() => {
		const _comments = comments.sort((a: IComment, b: IComment) => {
			return b.timestamp - a.timestamp;
		});
		updateComments(_comments);
	}, [ comments ]);

	useEffect(() => {
		axios.get(`${ApiUrl}/videos${window.location.pathname.replace('/video', '')}`).then(response => {
			updateVideoData(response.data.data);
		});
	}, [ ]);

  const loadVideos = () => {
    axios.get(`${ApiUrl}/videos`).then((response: any) => {
      setVideos(response.data.data);
    });
  }

  useEffect(() => {
    loadVideos();
  }, [ ]);

	return (
		<div>
			<Navbar search={ () => {} } />
			{
				videoData.id &&
				(
				<div className={ styles.Container }>
					<div className={ styles.LeftContainer }>
						<div className={ styles.FrameContainer }>
							<iframe src={`https://www.youtube.com/embed/${ videoData.attributes.youTubeVideoId }`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className={ styles.Frame }></iframe>
						</div>
						<span className={ styles.Title}>{ videoData.attributes.title }</span>
						<div className={ styles.ViewsAndLikesContainer }>
							<div className={ styles.ViewsContainer }>
								<span className={ styles.Views }>{ videoData.attributes.viewCount } wyświetleń • { dateToText(new Date(videoData.attributes.publishedDate)) }</span>
							</div>
							<div className={ styles.LikesContainer }>
								<span className={ styles.Likes }><FontAwesomeIcon icon={faThumbsUp} /> <span>{ videoData.attributes.likeCount }</span></span>
								<span className={ styles.Dislikes }><FontAwesomeIcon icon={faThumbsDown} /> <span>{ videoData.attributes.dislikeCount }</span></span>
							</div>
						</div>

						<div className={ styles.AuthorContainer }>
							<div className={ styles.AuthorAvatar }>
								<Image src="/icon.png" alt="author" layout="fill" objectFit="contain" />
							</div>
							<div className={ styles.Author }>
								<span className={ styles.AuthorName }>Photon Education</span>
								<span className={ styles.Subscriptions }>883 subskrybentów</span>
							</div>
						</div>
						<div className={ styles.DescriptionContainer } dangerouslySetInnerHTML={{ __html: videoData.attributes.description }}>
						</div>
						<div className={ styles.WriteCommentContainer }>
							<div className={ styles.CommentAvatar }>
								<Image src="/user.png" alt="avatar" layout="fill" objectFit="contain" />
							</div>

							<textarea placeholder="Dodaj komentarz" onChange={ updateCommentHandler } onKeyUp={ sendComment } value={ commentValue }></textarea>
						</div>
						<div className={ styles.CommentsContainer }>
								{
									comments
										.map((comment: any) => 
											<Comment key={ comment.id } data={ comment } />
										)
								}
						</div>
					</div>
					<div className={styles.RightContainer}>
						{
							videos
								.map((video: any) =>
									<SmallPreview key={ video.id } video={ video } />
								)
						}
					</div>
				</div>
				)
			}
		</div>
	);
}

export default VideoPage;
