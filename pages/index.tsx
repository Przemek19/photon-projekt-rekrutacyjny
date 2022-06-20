import type { NextPage } from 'next';
import type { IVideo } from '../src/interfaces/Video';

import { ApiUrl } from '../src/helpers/ApiConfig';
import { VideosPerPage } from '../src/helpers/ApiConfig';
import axios from 'axios';
import { useEffect, useState } from 'react';

import styles from '../styles/Home.module.scss';
import Navbar from './navbar';
import VideoPreview from './videopreview';
import Pagination from './pagination';

const VideoList: NextPage = () => {
  const [ videos, setVideos ] = useState<IVideo[ ]>([ ]);
  const [ searchedVideos, setSearchedVideos ] = useState<IVideo[ ]>([ ]);
  const [ videosToShow, setVideosToShow ] = useState<IVideo[ ]>([ ]);

  const [ appearance, setAppearance ] = useState<string | null>('dark');

  useEffect(() => {
    if (!localStorage.getItem('appearance')) {
      localStorage.setItem('appearance', 'dark');
    } else {
      setAppearance(localStorage.getItem('appearance'));
    }
  }, [ ]);

  const updateAppearance = (theme: string) => {
    setAppearance(theme);
  }

  useEffect(() => {
    document.title = 'Photon Education'
  }, [ ]);

  const loadVideos = () => {
    axios.get(`${ApiUrl}/videos`).then((response) => {
      setVideos(response.data.data);
      setSearchedVideos(response.data.data);
      setVideosToShow(response.data.data.slice(0, VideosPerPage));
    });
  }

  const search = (query: string) => {
    const queryVideos: IVideo[ ] = [ ];
    query = query.toLowerCase();
    for (let i in videos) {
      if (videos[i].attributes.title.toLowerCase().search(query) !== -1) {
        queryVideos.push(videos[i]);
      }
    }
    setSearchedVideos(queryVideos);
  }

  useEffect(() => {
    loadVideos();
  }, [ ]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const query = queryParams.get('query');
    if (query) {
      search(query);
    }
  }, [ videos ]);

  useEffect(() => {
    changePage(1);
  }, [ searchedVideos ]);

  const changePage = (page: number) => {
    let _videosToShow = [ ...searchedVideos ];
    _videosToShow = _videosToShow.slice((page - 1) * VideosPerPage, (page - 1) * VideosPerPage + VideosPerPage);
    setVideosToShow(_videosToShow);
  }

  return (
    <div className={ `${ styles.Container } ${ !!appearance ? appearance : 'dark' }` }>
      <Navbar search={ search } changeAppearance={ updateAppearance } />
      <div className={ styles.VideoList }>
        {
          videosToShow
            .map((video: IVideo) =>
              <VideoPreview key={ video.id } video={ video } />
            )
        }
      </div>
      <Pagination items={ searchedVideos.length } changePage={ changePage } />
    </div>
  )
}

export default VideoList;
