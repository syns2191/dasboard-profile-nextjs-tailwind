
import { CubeTransparentIcon } from '../components/icons/Cube';
import { UserCircleIcon } from '../components/icons/User';
import { DocumentIcon } from '../components/icons/Document';
import { InformationCircleIcon } from '../components/icons/Help';
export default function Container({childs}: {
  childs: JSX.Element
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
      <div className="w-5/6 mx-auto inset-shadow-sm shadow-sm flex-col gap-8 p-8 bg-gray-100 rounded-2xl">
        {childs}
      </div>
    </div>
  );
}


