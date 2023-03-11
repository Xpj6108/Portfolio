import Image from 'next/image'
import Profile from "../components/profile";
import ProjectPreview from '@/components/project_preview';


export default function Home() {
  return (
    <div>
      <div>
        <Profile />
      </div>
      <div className='mt-4'>
      <ProjectPreview />
      </div>
    </div>
  )
}
