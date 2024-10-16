import React, { useState, useEffect } from "react";

const Mentorias = () => {
	const [interest, setInterest] = useState("");
	const [results, setResults] = useState([]);
	const [allMentorias, setAllMentorias] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedMentor, setSelectedMentor] = useState(null);

	// Simulando una lista de mentorías
	const mentorias = [
		{
			id: 1,
			area: "Desarrollo Web",
			mentor: "Juan Pérez",
			fecha: "2024-10-20",
			hora: "10:00 AM - 12:00 PM",
			calificacion: 4.5,
		},
		{
			id: 2,
			area: "Desarrollo de Aplicaciones Móviles",
			mentor: "María López",
			fecha: "2024-10-21",
			hora: "2:00 PM - 4:00 PM",
			calificacion: 4.0,
		},
		{
			id: 3,
			area: "Data Science",
			mentor: "Pedro González",
			fecha: "2024-10-22",
			hora: "1:00 PM - 3:00 PM",
			calificacion: 4.8,
		},
		{
			id: 4,
			area: "Ciberseguridad",
			mentor: "Ana Torres",
			fecha: "2024-10-23",
			hora: "3:00 PM - 5:00 PM",
			calificacion: 5.0,
		},
		{
			id: 5,
			area: "Desarrollo de Software",
			mentor: "Luis Rodríguez",
			fecha: "2024-10-24",
			hora: "11:00 AM - 1:00 PM",
			calificacion: 4.7,
		},
		{
			id: 6,
			area: "Inteligencia Artificial",
			mentor: "Claudia Sánchez",
			fecha: "2024-10-25",
			hora: "4:00 PM - 6:00 PM",
			calificacion: 4.6,
		},
		{
			id: 7,
			area: "Gestión de Proyectos de Software",
			mentor: "Ricardo Gómez",
			fecha: "2024-10-26",
			hora: "9:00 AM - 11:00 AM",
			calificacion: 4.3,
		},
		{
			id: 8,
			area: "Desarrollo de API",
			mentor: "Laura Martínez",
			fecha: "2024-10-27",
			hora: "1:00 PM - 3:00 PM",
			calificacion: 4.2,
		},
		{
			id: 9,
			area: "Programación en Python",
			mentor: "Sofía Díaz",
			fecha: "2024-10-28",
			hora: "2:00 PM - 4:00 PM",
			calificacion: 4.9,
		},
		{
			id: 10,
			area: "Desarrollo Frontend",
			mentor: "Andrés Ruiz",
			fecha: "2024-10-29",
			hora: "3:00 PM - 5:00 PM",
			calificacion: 4.4,
		},
	];

	useEffect(() => {
		// Cargar todas las mentorías al montar el componente
		setAllMentorias(mentorias);
		setResults(mentorias);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const filteredResults = allMentorias.filter((mentorship) =>
			mentorship.area.toLowerCase().includes(interest.toLowerCase())
		);
		setResults(filteredResults);
	};

	const handleClear = () => {
		setInterest("");
		setResults(allMentorias);
	};

	const handleSchedule = (mentor) => {
		setSelectedMentor(mentor);
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
		setSelectedMentor(null);
	};

	const handleConfirmSchedule = () => {
		// Lógica para confirmar la sesión agendada
		alert(`Sesión agendada con ${selectedMentor}`);
		handleCloseModal();
	};

	const renderStars = (rating) => {
		const stars = [];
		for (let i = 0; i < 5; i++) {
			stars.push(
				<span
					key={i}
					className={
						i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"
					}
				>
					★
				</span>
			);
		}
		return stars;
	};

	return (
		<div className="container mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
			<h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
				Buscar Mentorías
			</h2>
			<form onSubmit={handleSubmit} className="flex flex-col space-y-4">
				<div className="flex items-center">
					<label
						htmlFor="interest"
						className="block text-lg font-semibold text-gray-700 mb-2 mr-4"
					>
						Área de Interés
					</label>
					<input
						type="text"
						id="interest"
						value={interest}
						onChange={(e) => setInterest(e.target.value)}
						required
						className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<div className="ml-4 flex space-x-2">
						<button
							type="submit"
							className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
						>
							Buscar Mentorías
						</button>
						<button
							type="button"
							onClick={handleClear}
							className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200"
						>
							Limpiar Búsqueda
						</button>
					</div>
				</div>
			</form>

			{/* Mostrar resultados como tarjetas */}
			{results.length > 0 && (
				<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{results.map((result) => (
						<div
							key={result.id}
							className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
						>
							<img
								src={`https://via.placeholder.com/150`}
								alt={result.area}
								className="w-full h-32 object-cover rounded-lg mb-4"
							/>
							<h3 className="text-xl font-semibold text-blue-700">
								{result.area}
							</h3>
							<p className="text-gray-600">Mentor: {result.mentor}</p>
							<p className="text-gray-600">Fecha: {result.fecha}</p>
							<p className="text-gray-600">Hora: {result.hora}</p>
							<div className="mt-2">
								<p className="text-gray-600">Calificación:</p>
								<div>{renderStars(result.calificacion)}</div>
							</div>
							<button
								onClick={() => handleSchedule(result.mentor)}
								className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
							>
								Agendar Sesión
							</button>
						</div>
					))}
				</div>
			)}

			{/* Modal */}
			{modalOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white rounded-lg p-6 shadow-lg w-96">
						<h3 className="text-xl font-bold mb-4">Confirmar Agendar Sesión</h3>
						<p>
							¿Estás seguro de que deseas agendar una sesión con{" "}
							{selectedMentor}?
						</p>
						<div className="mt-4 flex justify-end">
							<button
								onClick={handleCloseModal}
								className="mr-2 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200"
							>
								Cancelar
							</button>
							<button
								onClick={handleConfirmSchedule}
								className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
							>
								Confirmar
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Mentorias;
