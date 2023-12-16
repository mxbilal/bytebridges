
interface cardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ title, description, image }: cardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="rounded-full p-3 mr-4">
          <img src={image} />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;
