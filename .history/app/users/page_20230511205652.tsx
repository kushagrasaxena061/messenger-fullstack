import { signOut } from 'next-auth/react';
import EmptyState from '../components/EmptyState';


const People = () => {
  return (
    <div>
      <div className="hidden lg:block lg:pl-80 h-full">
        <EmptyState />
      </div>
      <button onClick={() => signOut()}>LOGOUT</button>
    </div>
  
   );
}
 
export default People;
