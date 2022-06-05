import React from 'react'
import {useSession } from 'next-auth/react'
import Image from 'next/image'

type Props = {
    seed?: string
    large?: boolean
}

function Avatar({seed, large}: Props) {
    const {data: session} = useSession()
  return (
    <div className={`w-10 h-10 bg-white border-gray-300 rounded-full relative overflow-hidden ${
        large && 'h-20 w-20'
        }`}
    >
        <Image 
            layout="fill"
            src={`https://avatars.dicebear.com/api/open-peeps/${
                seed || session?.user?.name || 'placeholder'
            }.svg`} 
        />
    </div>
  )
}

export default Avatar