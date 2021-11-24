import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const content = useSelector((state) => state.userReducer);
  console.log('content');
  console.log(content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USERS' });
  }, [dispatch]);

  return (
    <div>
      {content?.users.map((user) => (
        <div key={user.name}>
          Name: {user?.name?.first} {user.name?.last} <br />
          Gender: {user?.gender} <br />
          Age: {user?.dob?.age} <br />
        </div>
      ))}
    </div>
  );
}
