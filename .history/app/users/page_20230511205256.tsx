import EmptyState from '../components/EmptyState';
import { signOut } from 'next-auth/react';


const People = () => {
  return (
    <div>
      <div className="hidden lg:block lg:pl-80 h-full">
        <button onClick={() => signOut()} className='p-5 text-3xl bg-sky-500 tett-white font-bold'>Logout</button>
        <EmptyState />
      </div>
    </div>
  
   );
}
 
export default People;
