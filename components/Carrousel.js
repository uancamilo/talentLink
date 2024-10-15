import React from "react";

const MentorshipCarousel = () => {
	const mentorias = [
		{
			id: 1,
			titulo: "Mentoría en Desarrollo Web",
			mentor: "Juan Pérez",
			horario: "Lunes - 10:00 AM",
			imagen: "https://via.placeholder.com/150", // Imagen placeholder
		},
		{
			id: 2,
			titulo: "Mentoría en Diseño UI/UX",
			mentor: "Ana Gómez",
			horario: "Martes - 3:00 PM",
			imagen: "https://via.placeholder.com/150", // Imagen placeholder
		},
		{
			id: 3,
			titulo: "Mentoría en Marketing Digital",
			mentor: "Carlos Ruiz",
			horario: "Miércoles - 11:00 AM",
			imagen: "https://via.placeholder.com/150", // Imagen placeholder
		},
	];

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<div className="flex overflow-x-scroll space-x-4 py-4">
				{mentorias.map((mentoria) => (
					<div
						key={mentoria.id}
						className="min-w-[250px] bg-white shadow-md rounded-lg p-4 text-center flex-shrink-0"
					>
						<img
							src={mentoria.imagen}
							alt={mentoria.titulo}
							className="w-full h-32 object-cover rounded-md mb-4"
						/>
						<h3 className="text-lg font-semibold">{mentoria.titulo}</h3>
						<p className="text-gray-500">Mentor: {mentoria.mentor}</p>
						<p className="text-gray-600">{mentoria.horario}</p>
						<button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
							Agendar Sesión
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default MentorshipCarousel;
