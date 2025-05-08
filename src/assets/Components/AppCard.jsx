const AppCard = ({ app }) => {
    return (
      <div className='border p-4 rounded shadow hover:bg-amber-50'>
        <img src={app.thumbnail} alt={app.name} className='h-64 w-64 object-cover rounded mb-2' />
        <h3 className='text-lg font-semibold'>{app.name}</h3>
        <p>Rating: {app.rating}</p>
        <p>Downloads: {app.downloads.toLocaleString()}</p>
      </div>
    );
  };
  
  export default AppCard;
  
  