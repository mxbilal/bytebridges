interface cardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ title, description, image }: cardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
      <div className="flex flex-col mb-4">
        <div className="rounded-full p-3 mr-4">
          <img src={image} width={60} height="auto" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <hr className="w-2/5 border-primary border mt-1" />
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;
