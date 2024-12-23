import { useEffect, useState } from 'react';
import { axiosInstance } from '../../axios/axios_instance';

const useFetchNotices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axiosInstance.get("api/scrap/korad-official-website/notice/recent/2");
        const fetchedNotices = response.data.map(item => ({
          title: item.content.title,
          content: item.content.content.split('.')[0] + '.', // 첫 번째 마침표를 기준으로 분리한 문장
          url: `https://www.korad.or.kr/korad${item.content.url}` // 전체 URL 생성
        }));
        setNotices(fetchedNotices);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  return { notices, loading, error };
};

export default useFetchNotices;
