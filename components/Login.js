import React from "react";
import Link from "next/link";

const LoginForm = () => {
	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6">
				<h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
				<form>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="email"
						>
							Correo Electrónico
						</label>
						<input
							id="email"
							type="email"
							placeholder="example@correo.com"
							className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="password"
						>
							Contraseña
						</label>
						<input
							id="password"
							type="password"
							placeholder="********"
							className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div className="flex items-center justify-between mb-4">
						<div className="flex items-center">
							<input
								id="remember"
								type="checkbox"
								className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
							/>
							<label
								htmlFor="remember"
								className="ml-2 block text-sm text-gray-700"
							>
								Recordarme
							</label>
						</div>

						<a href="#" className="text-sm text-blue-500 hover:text-blue-700">
							¿Olvidaste tu contraseña?
						</a>
					</div>
					<Link href="/mentorias">
						<button
							className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							Iniciar Sesión
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
