import Link from "next/link";

const StarRating = ({ rating }) => {
	const stars = Array.from({ length: 5 }, (v, i) => (
		<span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>
			★
		</span>
	));
	return <div className="flex justify-center mb-2">{stars}</div>;
};

const MentorshipCarousel = () => {
	const mentorias = [
		{
			id: 1,
			titulo: "Mentoría en Desarrollo Web",
			mentor: "Juan Pérez",
			horario: "Lunes - 10:00 AM",
			imagen: "https://via.placeholder.com/150", // Imagen placeholder
			calificacion: 4,
		},
		{
			id: 2,
			titulo: "Mentoría en Diseño UI/UX",
			mentor: "Ana Gómez",
			horario: "Martes - 3:00 PM",
			imagen: "https://via.placeholder.com/150", // Imagen placeholder
			calificacion: 5,
		},
		{
			id: 3,
			titulo: "Mentoría en Marketing Digital",
			mentor: "Carlos Ruiz",
			horario: "Miércoles - 11:00 AM",
			imagen: "https://via.placeholder.com/150", // Imagen placeholder
			calificacion: 3,
		},
	];

	return (
		<>
			{mentorias.length > 0 && (
				<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{mentorias.map((mentoria) => (
						<div
							key={mentoria.id}
							className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
						>
							<img
								src={mentoria.imagen}
								alt={mentoria.titulo}
								className="w-full h-32 object-cover rounded-lg mb-4"
							/>
							<h3 className="text-xl font-semibold text-blue-700">
								{mentoria.titulo}
							</h3>
							<p className="text-gray-600">Mentor: {mentoria.mentor}</p>
							<p className="text-gray-600">Horario: {mentoria.horario}</p>
							<div className="mt-2">
								<p className="text-gray-600">Calificación:</p>
								<StarRating rating={mentoria.calificacion} />
							</div>
							<Link href="/login">
								<button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
									Agendar Sesión
								</button>
							</Link>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default MentorshipCarousel;
