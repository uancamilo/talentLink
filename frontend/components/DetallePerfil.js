import React, { useState } from "react";
import Link from "next/link";

const StarRating = ({ rating }) => {
	const stars = Array.from({ length: 5 }, (v, i) => (
		<span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>
			★
		</span>
	));
	return <div className="mb-2">{stars}</div>;
};

const Modal = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
			<div className="bg-white p-6 rounded-lg shadow-lg">
				<h2 className="text-xl font-bold mb-4">¡Mentoría Agendada!</h2>
				<p className="mb-4">
					Tu sesión de mentoría ha sido agendada exitosamente.
				</p>
				<button
					className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
					onClick={onClose}
				>
					Aceptar
				</button>
			</div>
		</div>
	);
};

export default function Perfil() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleAgendarMentoria = () => {
		setIsModalOpen(true);
	};

	return (
		<div className="max-w-6xl mx-auto p-6 mt-6 bg-white rounded-lg shadow-md">
			{/* Contenedor para foto, nombre y botón */}
			<div className="flex items-center justify-between mb-4">
				{/* Foto del mentor */}
				<img
					src="https://via.placeholder.com/150"
					alt="Foto del Mentor"
					className="w-32 h-32 object-cover rounded-full"
				/>

				{/* Información del mentor */}
				<div className="flex-grow text-center mx-4">
					<h1 className="text-2xl font-bold text-blue-700">Juan Pérez</h1>
					<p className="text-gray-600">Desarrollador de Software</p>
					{/* Rating en formato de estrellas */}
					<div className="flex justify-center mt-2">
						<StarRating rating={4} />
					</div>
				</div>

				{/* Botón para agendar mentoría */}
				<button
					onClick={handleAgendarMentoria}
					className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
				>
					Agendar Mentoría
				</button>
			</div>

			{/* Descripción de los servicios de mentoría */}
			<div className="mt-4 text-gray-700">
				<h2 className="text-xl font-semibold">Servicios de Mentoría</h2>
				<p className="mt-2">
					Soy un desarrollador de software con más de 10 años de experiencia en
					diseño y desarrollo de aplicaciones web. Mis servicios incluyen
					mentoría en desarrollo de aplicaciones front-end y back-end, así como
					asesoramiento en arquitectura de software.
				</p>
			</div>

			{/* Horario disponible */}
			<div className="mt-4 text-gray-700">
				<h2 className="text-xl font-semibold">Horario Disponible</h2>
				<p className="mt-2">Lunes a Viernes - 10:00 AM a 6:00 PM</p>
			</div>

			{/* Tecnologías en las que tiene conocimiento */}
			<div className="mt-4">
				<h2 className="text-xl font-semibold">Tecnologías</h2>
				<div className="flex flex-wrap mt-2">
					<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">
						JavaScript
					</span>
					<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">
						React
					</span>
					<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">
						Node.js
					</span>
					<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">
						HTML/CSS
					</span>
					<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">
						SQL
					</span>
					<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">
						Python
					</span>
				</div>
			</div>

			{/* Sección de Mentorías en formato de tags */}
			<div className="mt-4">
				<h2 className="text-xl font-semibold">Mentorías Ofrecidas</h2>
				<div className="flex flex-wrap mt-2">
					<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">
						Desarrollo Web
					</span>
					<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">
						Diseño UI/UX
					</span>
					<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">
						Marketing Digital
					</span>
				</div>
			</div>

			{/* Espacio para Reviews */}
			<div className="mt-4 text-gray-700">
				<h2 className="text-xl font-semibold">Reviews</h2>
				<div className="border-t mt-2 pt-2">
					<p className="mb-2">
						<strong>María López:</strong> Juan es un excelente mentor, muy
						paciente y siempre dispuesto a ayudar.
					</p>
					<p className="mb-2">
						<strong>Carlos Ruiz:</strong> Aprendí mucho en nuestras sesiones,
						sus conocimientos son vastos y su enfoque es muy práctico.
					</p>
				</div>
			</div>

			{/* Modal para confirmar agendamiento */}
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</div>
	);
}
