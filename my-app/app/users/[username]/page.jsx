import React from 'react'
// import { useRouter } from 'next/router';

const ProfilePage = async ({params}) => {
  // const router = await useRouter();
  const { username } = params;

  return (
    <div>Profile Page: {username}</div>
  )
}

export default ProfilePage