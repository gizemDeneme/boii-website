import Image from 'next/image';

interface RoomCardProps {
  image: string;
  title: string;
}

export default function RoomCard({ image, title }: RoomCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">
          Modern konfor ve şık tasarımın buluştuğu odalarımızda 
          huzurlu bir konaklama deneyimi sizi bekliyor.
        </p>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Detayları Gör
        </button>
      </div>
    </div>
  );
} 