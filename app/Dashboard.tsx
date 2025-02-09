import Image from 'next/image';
import ProgresBar from './components/progresBar';
import { LabelCheap } from './components/Label';
import { BellIconOutline } from './components/icons/Bell';
import { CircleStackIcon } from './components/icons/CircleStack';
import { HomeIcon } from './components/icons/Home';
import { EllipsisHorizontalIcon, EllipsisVerticalIcon } from './components/icons/Elipsis';
import { MagnifyingGlassIcon } from './components/icons/Search';
import Container from './libs/Container';

export default function DashboardPage() {
  const months = [
    {
      name: 'Jan',
      active: true
    },
    {
      name: 'Feb',
      active: false
    },
    {
      name: 'Mar',
      active: false
    },
    {
      name: 'Apr',
      active: false
    },
    {
      name: 'May',
      active: false
    }
  ];
  const apps = [
    {
      name: 'Github',
      color: 'bg-red-200'
    },
    {
      name: 'Vscode',
      color: 'bg-blue-200'
    },
    {
      name: 'Bitbucket',
      color: 'bg-violet-200'
    }
  ]

  const dataPerMonth = [
    {
      type: 'notifiaction',
      title: 'Prohaskobury',
      subTitle: '057 Klein Vista'
    },
    {
      type: 'notifiaction',
      title: 'Prohaskobury',
      subTitle: '057 Klein Vista'
    },
    {
      type: 'notifiaction',
      title: 'Prohaskobury',
      subTitle: '057 Klein Vista'
    },
    {
      type: 'notifiaction',
      title: 'Prohaskobury',
      subTitle: '057 Klein Vista'
    }
  ]
  return (
    <Container>
      <div className="w-full mb-10 flex justify-end">
          <div className="w-full max-w-md flex justify-end">
            <div className="flex relative items-center">
              <input
                type="text"
                placeholder="Search"
                className="w-50 pl-5 m-auto pr-4 py-2 rounded-lg focus:outline-none text-violet-700 text-xs font-light focus:ring-2 focus:ring-blue-500"
              />
              <MagnifyingGlassIcon className="h-4 w-4 text-violet-700 absolute right-2  my-auto" />
            </div>
            <div className="w-10 h-10 overflow-hidden rounded-full shadow-lg ml-5">
              <Image
                src="/photo-profile.jpeg"
                alt="Profile"
                width={38}
                height={38}
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex">
          <div className="w-1/2">
            <div className="w-full mb-10">
              <div>
                <span className="text-2xl font-bold">Welcome!</span>
              </div>
              <span className="text-sm">View my current profile progresses.</span>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <button className="p-5 bg-violet-700 h-10 w-32 my-auto flex items-center justify-center rounded-lg text-gray-200 text-sm font-bold">Your Pro</button>
            <button className="p-5 bg-transparent h-10 w-32 my-auto flex items-center justify-center rounded-lg text-gray-400 text-sm font-bold">Your Profile</button>
            <button className="bg-white shadow-sm p-2 rounded-lg">
              <EllipsisHorizontalIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="w-full flex">
          {/* Left Sidebar */}

          {/* Main Content */}
          <div className="flex w-1/2 mr-10">
            <div className="w-full md:w-full space-y-8">
              <div className="bg-white rounded-3xl shadow-sm p-6">
                <div className="flex mb-5">
                  <div className="flex w-1/3">
                    <ProgresBar />
                  </div>
                  <div className="flex-col w-2/3 p-5">
                    {apps.map((a) => (                 
                      <div className="flex max-h- max-h-5 w-full mb-5">
                        <span className={`relative rounded-full mr-1 ${a.color} w-3.5 h-3.5 m-auto`}></span>
                        <span className="text-violet-700 text-xs font-bold m-auto w-2/4 m-auto">{a.name}</span>
                        <span className="text-[10px] text-violet-700 font-bold">$ 10.0</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex mb-6">
                  {months.map((m) => (
                    <LabelCheap labelText={m.name} active={m.active} />
                  ))}
                </div>
                <div className="flex flex-wrap">
                  {
                    dataPerMonth.map((item) => (
                      <div className="flex w-1/2 mb-5">
                        <span className="flex w-8 h-8 bg-cyan-400 rounded-full p-1 mr-2 items-center justify-center">
                          <BellIconOutline className="w-5 h-5 m-auto text-gray-100 font-bold"/>
                        </span>
                        <span className="text-gray-200 text-xs">
                          <p className="text-violet-700 text-xs font-bold">
                            {item.title}
                          </p>
                          <p className="text-violet-500 font-light text-[10px]">{item.subTitle}</p>
                        </span>
                      </div>
                    ))
                  }
                </div>
              </div>   
            </div>
          </div>
          <div className="flex 1/2 flex-wrap">
            <div className="flex w-full mb-10"> 
              <div className="flex w-1/2 h-20 w-48 bg-white rounded-lg shadow-lg mr-5 p-2">
                <span className="flex w-10 h-10 bg-cyan-400 rounded-full items-center justify-center my-auto mr-2">
                  <CircleStackIcon className="w-6 h-6 m-auto text-gray-100 font-bold m-auto" />
                </span>
                <span className="my-auto ml-2 flex-grow flex-col">
                  <p className="text-xs font-bold text-violet-700">$ 9.00</p>
                  <p className="text-[8px] font-bold text-violet-700">01 Maret 2020</p>
                </span>
                <button>
                  <EllipsisVerticalIcon className="h-6 w-6 text-violet-700" />
                </button>
              </div>
              <div className="flex w-1/2 h-20 w-48 bg-violet-700 rounded-lg shadow-lg p-2">
                <span className="flex w-10 h-10 bg-red-400 rounded-full items-center justify-center my-auto">
                  <HomeIcon className="w-6 h-6 m-auto text-gray-100 font-bold m-auto" />
                </span>
                <span className="my-auto ml-2 flex-grow flex-col">
                  <p className="text-xs font-bold text-gray-100">$ 9.00</p>
                  <p className="text-[8px] font-bold text-gray-100">01 Maret 2020</p>
                </span>
                <button>
                  <EllipsisVerticalIcon className="h-6 w-6 text-gray-100" />
                </button>
              </div>
            </div>
            <div className="flex bg-violet-200 rounded-2xl w-5/6 p-5">
              <div className="w-2/5 rounded-2xl bg-violet-700 p-5">
                <ShieldCheckIcon className="mb-5 h-6 w-6 text-gray-100" />
                <p className="p-1 mb-5 text-gray-100 font-bold text-sm">Decorate For Less with more.</p>
                <p className="p-1 mb-5 text-gray-100 text-[8px] font-light">Click + to create new one.</p>
                <button className="bg-red-400 text-gray-100 rounded-xl h-5 w-32 p-5 flex items-center justify-center">Get Strated</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-1/2">
        </div>

    </Container>
  );
}
