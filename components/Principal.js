import Link from "next/link";
import { useEffect, useState } from "react";

const StarRating = ({ rating }) => {
	const stars = Array.from({ length: 5 }, (v, i) => (
		<span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>
			★
		</span>
	));
	return <div className="mb-2">{stars}</div>;
};

const Principal = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [visibleMentorias, setVisibleMentorias] = useState(5);
	const [mentorias, setMentorias] = useState([]);

	const allMentorias = [
		{
			id: 1,
			titulo: "Mentoría en Desarrollo Web",
			mentor: "Juan Pérez",
			horario: "Lunes - 10:00 AM",
			imagen: "https://via.placeholder.com/150",
			calificacion: 4,
			descripcion:
				"Juan es un desarrollador web con 10 años de experiencia en tecnologías front-end y back-end.",
		},
		{
			id: 2,
			titulo: "Mentoría en Diseño UI/UX",
			mentor: "Ana Gómez",
			horario: "Martes - 3:00 PM",
			imagen: "https://via.placeholder.com/150",
			calificacion: 5,
			descripcion:
				"Ana es una experta en diseño UI/UX con un enfoque en mejorar la experiencia del usuario.",
		},
		{
			id: 3,
			titulo: "Mentoría en Marketing Digital",
			mentor: "Carlos Ruiz",
			horario: "Miércoles - 11:00 AM",
			imagen: "https://via.placeholder.com/150",
			calificacion: 3,
			descripcion:
				"Carlos ha trabajado en marketing digital por más de 8 años, ayudando a empresas a crecer en línea.",
		},
		{
			id: 4,
			titulo: "Mentoría en Data Science",
			mentor: "Sofía López",
			horario: "Jueves - 2:00 PM",
			imagen: "https://via.placeholder.com/150",
			calificacion: 4,
			descripcion:
				"Sofía es una científica de datos con amplia experiencia en análisis de datos y machine learning.",
		},
		{
			id: 5,
			titulo: "Mentoría en Ciberseguridad",
			mentor: "Pedro Torres",
			horario: "Viernes - 1:00 PM",
			imagen: "https://via.placeholder.com/150",
			calificacion: 5,
			descripcion:
				"Pedro es un experto en ciberseguridad con experiencia en la protección de sistemas y redes.",
		},
		{
			id: 6,
			titulo: "Mentoría en Desarrollo de Aplicaciones Móviles",
			mentor: "Laura Martínez",
			horario: "Sábado - 10:00 AM",
			imagen: "https://via.placeholder.com/150",
			calificacion: 4,
			descripcion:
				"Laura tiene experiencia en el desarrollo de aplicaciones móviles tanto para iOS como para Android.",
		},
		{
			id: 7,
			titulo: "Mentoría en Gestión de Proyectos",
			mentor: "Ricardo Gómez",
			horario: "Lunes - 4:00 PM",
			imagen: "https://via.placeholder.com/150",
			calificacion: 4,
			descripcion:
				"Ricardo es un gestor de proyectos con experiencia en metodologías ágiles y liderazgo de equipos.",
		},
		{
			id: 8,
			titulo: "Mentoría en Inteligencia Artificial",
			mentor: "Claudia Sánchez",
			horario: "Martes - 5:00 PM",
			imagen: "https://via.placeholder.com/150",
			calificacion: 5,
			descripcion:
				"Claudia es especialista en IA y machine learning, con un enfoque en aplicaciones prácticas.",
		},
		{
			id: 9,
			titulo: "Mentoría en Desarrollo de API",
			mentor: "Andrés Ruiz",
			horario: "Miércoles - 2:00 PM",
			imagen: "https://via.placeholder.com/150",
			calificacion: 4,
			descripcion:
				"Andrés tiene experiencia en diseño y desarrollo de APIs RESTful utilizando Node.js.",
		},
		{
			id: 10,
			titulo: "Mentoría en Programación en Python",
			mentor: "María Pérez",
			horario: "Jueves - 11:00 AM",
			imagen: "https://via.placeholder.com/150",
			calificacion: 4,
			descripcion:
				"María es una desarrolladora de software con experiencia en programación en Python y análisis de datos.",
		},
	];

	useEffect(() => {
		setMentorias(allMentorias); // Inicialmente carga todas las mentorías
	}, []);

	// Filtrar mentorías según el término de búsqueda
	const filteredMentorias = mentorias.filter((mentoria) =>
		mentoria.titulo.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// Cargar más mentorías
	const loadMore = () => {
		setVisibleMentorias((prev) => Math.min(prev + 2, filteredMentorias.length));
	};

	return (
		<div className="flex">
			{/* Aside */}
			<aside className="w-64 bg-gray-100 p-4 rounded-lg shadow-md">
				<h2 className="text-xl font-semibold mb-4">Filtros</h2>
				<ul className="space-y-2">
					{/* Filtros por categoría */}
					<li>
						<h3 className="text-lg font-semibold mb-2">Categorías</h3>
						<button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg">
							Desarrollo Web
						</button>
						<button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mt-2">
							Diseño UI/UX
						</button>
						<button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mt-2">
							Marketing Digital
						</button>
					</li>

					{/* Filtros por nivel de experiencia */}
					<li>
						<h3 className="text-lg font-semibold mb-2">Nivel de Experiencia</h3>
						<select className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-lg">
							<option value="">Todos los niveles</option>
							<option value="principiante">Principiante</option>
							<option value="intermedio">Intermedio</option>
							<option value="avanzado">Avanzado</option>
						</select>
					</li>

					{/* Filtros por rango de precio */}
					<li>
						<h3 className="text-lg font-semibold mb-2">Rango de Precios</h3>
						<input
							type="range"
							min="0"
							max="500"
							className="w-full h-2 bg-gray-300 rounded-lg cursor-pointer"
						/>
						<div className="flex justify-between text-sm">
							<span>$0</span>
							<span>$500</span>
						</div>
					</li>

					{/* Filtros por disponibilidad de horario */}
					<li>
						<h3 className="text-lg font-semibold mb-2">Disponibilidad</h3>
						<label className="flex items-center">
							<input type="checkbox" className="mr-2" />
							Mañanas
						</label>
						<label className="flex items-center mt-2">
							<input type="checkbox" className="mr-2" />
							Tardes
						</label>
						<label className="flex items-center mt-2">
							<input type="checkbox" className="mr-2" />
							Noches
						</label>
					</li>
				</ul>
			</aside>

			{/* Main content */}
			<div className="m-6 flex-grow">
				{/* Buscador en la parte superior */}
				<div className="mb-4">
					<input
						type="text"
						placeholder="Buscar..."
						className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-lg"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>

				<div className="grid grid-cols-1 gap-6">
					{filteredMentorias.slice(0, visibleMentorias).map((mentoria) => (
						<div
							key={mentoria.id}
							className="flex items-start bg-white shadow-md rounded-lg p-4"
						>
							<img
								src={mentoria.imagen}
								alt={mentoria.titulo}
								className="w-32 h-32 rounded-full mr-4"
							/>
							<div className="flex-grow">
								<h3 className="text-xl font-bold">{mentoria.titulo}</h3>
								<StarRating rating={mentoria.calificacion} />
								<p className="font-semibold">{mentoria.mentor}</p>
								<p className="text-gray-600">{mentoria.descripcion}</p>
								<p className="text-gray-600">{mentoria.horario}</p>
								<Link
									href={`/perfil`}
									className="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg"
								>
									Ver Detalles
								</Link>
							</div>
						</div>
					))}
				</div>

				{/* Botón "Ver más" */}
				{visibleMentorias < filteredMentorias.length && (
					<div className="mt-4">
						<button
							className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
							onClick={loadMore}
						>
							Ver más
						</button>
					</div>
				)}

				{/* Mensaje si no hay mentorías */}
				{filteredMentorias.length === 0 && (
					<p className="text-gray-600 mt-4">No se encontraron mentorías.</p>
				)}
			</div>
		</div>
	);
};

export default Principal;
