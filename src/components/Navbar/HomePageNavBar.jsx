import { Command, CommandInput } from '@/components/ui/command';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const HomePageNavBar = () => {
  return (
    <>
      <div className='flex justify-between border-b-2 border-gray-200'>
        <div className='m-2 p-2'>
          <Command className="border-2 rounded-full">
            <CommandInput placeholder="Search" className="bg-gray-200" />
          </Command>
        </div>
        <div>
          <ul className='flex m-2'>
            <li className='m-1 p-1 pt-2'>Write</li>
            <li className='m-1 p-1'>
                <img className="w-8 h-8" src="https://www.freeiconspng.com/thumbs/bell-icons/bell-icon-16.png" alt="Bell icon" />
            </li>
            <li className='m-1 p-1'>
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePageNavBar;
