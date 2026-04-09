export interface Proyecto {
	id: string;
	nombre: string;
	descripcion: string;
	cargo: string;
	stack: string[];
	comando: string;
	repoUrl?: string;
	repoUrlFrontend?: string;
	repoUrlBackend?: string;
	repoUrlConsumer?: string;
	estado: string;
}

export const PROYECTOS: Proyecto[] = [
	{
		id: 'manganostore',
		nombre: 'MangaNoStore',
		descripcion:
			'Arquitectura desacoplada usando NestJS (API) y SvelteKit. Integración con pagos, gestión de stock y almacenamiento R2.',
		stack: ['NestJS', 'Postgres', 'SvelteKit'],
		cargo: 'Full Stack Developer',
		comando: './ejecutar_ecommerce.sh',
		repoUrlFrontend: 'https://github.com/Exerrdev/Manga-web-Frontend',
		repoUrlBackend: 'https://github.com/Exerrdev/Manga-crud-backend',
		repoUrlConsumer: 'https://github.com/Exerrdev/Manga-consumer-backend',
		estado: '[ONLINE]'
	},
	{
		id: 'ArmandoPartidos',
		nombre: 'Armando Partidos',
		descripcion:
			'Aplicación para gestionar partidos de fútbol. Registro de jugadores, equipos y resultados.',
		cargo: 'Full Stack Developer',
		stack: ['Svelte5', 'PostgreSQL', 'NestJS', 'TypeScript'],
		comando: 'pnpm start:dev',
		repoUrl: 'https://www.armandopartidos.com',
		estado: '[ONLINE]'
	},
	{
		id: 'vetmongo',
		nombre: 'Vetmongo',
		descripcion:
			'Sistema de gestión clínica. Control de historiales médicos, pacientes y agenda veterinaria con base de datos documental.',
		cargo: 'Full Stack Developer',
		stack: ['NestJS', 'MongoDB', 'React'],
		comando: './start_clinic_system.sh',
		repoUrl: 'https://github.com/Exerrdev/Vetmongo',
		estado: '[SECURE]'
	},
	{
		id: 'blueteam',
		nombre: 'Blue Team Lab',
		descripcion:
			'Laboratorio de detección de amenazas. IDS, análisis de logs y mitigación de vulnerabilidades OWASP en entorno controlado.',
		cargo: 'Security Analyst',
		stack: ['Kali', 'ELK Stack', 'Defense'],
		comando: 'sudo nmap -p- --open -sS --min-rate 5000',
		repoUrl: '#',
		estado: '[MONITORING]'
	}
];
