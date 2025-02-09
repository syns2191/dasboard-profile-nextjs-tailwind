
import { CubeTransparentIcon } from '../components/icons/Cube';
import { UserCircleIcon } from '../components/icons/User';
import { DocumentIcon } from '../components/icons/Document';
import { InformationCircleIcon } from '../components/icons/Help';
import Image from 'next/image';
import { StarIcon } from '../components/icons/Star';
import { CogIcon } from '../components/icons/Cog';
import CircleGap from '../components/CircleGap';
export default function Container({children}: {
  children: JSX.Element | JSX.Element[] | string
}) { 
  return (
    <div className="flex min-h-[900px] bg-stone-50 rounded-3xl shadow-lg py-3 pr-3 pl-0">
      <div className="flex w-1/6 pt-5 flex-col">
        <div className="w-full flex mx-auto h-fit mb-10">
          <p className="text-lg text-violet-700 font-bold mx-auto">OpenCart</p>
        </div>
        <div className="flex w-full">
          <ul className="mx-auto">
            <li className="flex py-3">
              <CubeTransparentIcon className="h-6 w-6 text-violet-700 mr-3" />
              <span className="text-sm font-bold text-violet-700 my-auto">Dashboard</span>
            </li>
            <li className="flex py-3">
              <UserCircleIcon className="h-6 w-6 text-violet-700 mr-3" />
              <span className="text-sm font-bold text-violet-700 my-auto">Profile</span>
            </li>
            <li className="flex py-3">
              <DocumentIcon className="h-6 w-6 text-violet-700 mr-3" />
              <span className="text-sm font-bold text-violet-700 y-auto">Statement</span>
            </li>
            <li className="flex py-3">
              <InformationCircleIcon className="h-6 w-6 text-violet-700 mr-3" />
              <span className="text-sm font-bold text-violet-700 my-auto">Help</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-5/6 mx-auto inset-shadow-sm shadow-sm flex-col gap-8 bg-gray-100 rounded-2xl">
        <div className="flex bg-violet-500 rounded-t-3xl min-h-80">
          <div className="flex my-auto ml-10">
            <div className="relative flex items-center justify-center h-32 w-32 rounded-full bg-violet-300 mr-10">
              <div className="absolute left-0 -top-3 h-full w-1/2 bg-violet-500"></div>
              <div className="flex bg-violet-500 items-center justify-center h-[96%] w-[96%] m-auto rounded-full z-10">
                <div className="flex bg-white items-center justify-center h-[85%] w-[85%] m-auto rounded-full">
                  <Image
                    alt="profile-big"
                    src="/photo-profile.jpeg"
                    width={96}
                    height={96}
                    className="rounded-full m-auto"
                  />
                </div>
              </div>
              <span className="w-7 h-7 rounded-full bg-yellow-300 absolute flex items-center justify-center z-20 right-3 bottom-2">
                <StarIcon className="h-4 w-4 text-gray-400 m-auto" />
              </span>
            </div>
            <div className="h-32 flex items-center justify-center mr-10">
              <p className="text-8xl font-medium text-gray-100">87</p>
            </div>
            <div className="h-32 flex flex-col items-center justify-center p-5">
              <p className="text-gray-100 text-2xl font-medium w-full mb-2">Your learning level points</p>
              <p className="text-gray-100 text-sm font-medium w-full">James, you did a great job last week!</p>
            </div>
          </div>

        </div>
        <div className="relative w-full -top-24 flex p-10">
          <div className="flex-col mr-20">
            <button className="relative top-8 bg-red-500 rounded-3xl w-lg py-3 px-5 text-gray-100 text-sm font-medium">Improve your skill</button>
          </div>
          <div className="flex flex-col bg-white min-h-96 w-80 rounded-2xl shadow-lg p-5 mr-20 items-center ">
            <div className="flex h-16 w-full mb-5">
              <div className="flex-col flex m-auto flex-grow">
                <p className="text-lg font-medium">Your main skillset</p>
                <p className="text-[9px] text-gray-500 font-medium">YOU IMPROVED IT BY 12 POINTS LAST WEEK</p>
              </div>
              <CogIcon className="h-6 w-6 text-gray-500 m-auto" />
            </div>
            
            <CircleGap />
            <div className="flex w-full p-2 mt-8">
              <div className="flex flex-col items-center justify-center w-1/3 mr-3">
                <span className="flex bg-violet-700 h-6 w-6 rounded-full items-center justify-center mb-2">
                  <span className="h-[70%] w-[70%] bg-white rounded-full"></span>
                </span>
                <span className="text-[10px] font-bold text-gray-800 m-auto">Graphic Design</span>
                <span className="text-[10px] font-bold text-gray-400">35%</span>
              </div>
              <div className="flex flex-col items-center justify-center w-1/3 mr-3">
                <span className="flex bg-orange-400 h-6 w-6 rounded-full items-center justify-center mb-2">
                  <span className="h-[70%] w-[70%] bg-white rounded-full"></span>
                </span>
                <span className="text-[10px] font-bold text-gray-800">UX / UI</span>
                <span className="text-[10px] font-bold text-gray-400">35%</span>
              </div>
              <div className="flex flex-col items-center justify-center w-1/3 mr-3">
                <span className="flex bg-yellow-300 h-6 w-6 rounded-full items-center justify-center mb-2">
                  <span className="h-[70%] w-[70%] bg-white rounded-full"></span>
                </span>
                <span className="text-[10px] font-bold text-gray-800">Management</span>
                <span className="text-[10px] font-bold text-gray-400">35%</span>
              </div>
            </div>
          </div>
          <div className="flex bg-white min-h-96 min-w-80 rounded-2xl shadow-lg p-5 mr-10">Your main skillset</div>
        </div>
      </div>

    </div>
  );
}


