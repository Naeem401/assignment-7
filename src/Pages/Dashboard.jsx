
import Header from '../component/Header';
import PropertyCard from '../component/PropertyCard';
import useCardData from '../Hook/useCardData';
import ChatButton from '../component/ChatButton';


function Dashboard() {
  const [card] = useCardData();
  
  return (
    <div>
      <Header title={"Dashboard"} />
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 w-[90%] mx-auto'>
        {card.map((item, index) => (
          <PropertyCard key={index} item={item} />
        ))}
      </div>
      
      {/* Add Chat Button Component */}
      <ChatButton />
    </div>
  );
}

export default Dashboard;