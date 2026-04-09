<script lang="ts">
	import { Terminal, FolderOpen, ChevronRight } from 'lucide-svelte';
	import { PROYECTOS } from '$lib/features/projects/projects.data';
</script>

<section
	id="proyectos"
	class="min-h-screen w-full border-t border-slate-800/50 bg-[#0a0c10] px-4 py-24 font-mono text-sm sm:px-8 sm:text-base"
>
	<div class="mx-auto max-w-5xl">
		<div class="mb-12 flex items-center gap-2">
			<Terminal size={18} class="text-blue-500" />
			<span class="font-bold text-blue-500">exerr</span>
			<FolderOpen size={16} class="ml-1 text-slate-500" />
			<span class="text-slate-500">~/portfolio</span>
			<span class="ml-1 font-bold text-yellow-400">>></span>
			<span class="ml-2 text-green-400">ls -la ./proyectos_destacados/</span>
		</div>

		<p class="mt-[-2rem] mb-8 pl-1 text-slate-400 opacity-80">total {PROYECTOS.length}</p>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each PROYECTOS as proyecto}
				<div
					class="group relative flex flex-col rounded-lg border border-slate-800 bg-[#11121d] p-6 shadow-lg transition-colors hover:border-cyan-500/50"
				>
					<div class="mb-4 flex items-center justify-between border-b border-slate-800/80 pb-3">
						<span class="text-xs text-slate-500">{proyecto.comando}</span>
						<span
							class="text-[10px] font-bold {proyecto.estado === '[ONLINE]'
								? 'text-green-400'
								: proyecto.estado === '[SECURE]'
									? 'text-blue-400'
									: 'text-yellow-400'}"
						>
							{proyecto.estado}
						</span>
					</div>

					<h3
						class="mb-3 text-xl font-bold text-slate-200 transition-colors group-hover:text-cyan-400"
					>
						<span class="mr-2 text-cyan-500">./</span>{proyecto.nombre}
					</h3>

					<p class="mb-6 flex-grow text-sm leading-relaxed text-slate-400">
						{proyecto.descripcion}
					</p>
					<p class="mb-4 text-xs text-slate-500 italic">{proyecto.cargo}</p>

					<div class="mb-6 flex flex-wrap gap-2">
						{#each proyecto.stack as tech}
							<span
								class="rounded border border-slate-700/50 bg-slate-800/50 px-2 py-1 text-[10px] text-slate-300"
							>
								{tech}
							</span>
						{/each}
					</div>

					<div class="mt-auto flex flex-col gap-2 border-t border-slate-800/80 pt-4">
						{#if proyecto.repoUrl}
							<a
								href={proyecto.repoUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="group/link flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
							>
								<ChevronRight
									size={14}
									class="text-green-500 transition-transform group-hover/link:translate-x-1"
								/>
								<span
									class="underline decoration-slate-700 underline-offset-4 hover:decoration-green-400"
									>Ver_Código_Fuente</span
								>
							</a>
						{/if}

						{#if proyecto.repoUrlFrontend}
							<a
								href={proyecto.repoUrlFrontend}
								target="_blank"
								rel="noopener noreferrer"
								class="group/link flex items-center gap-2 text-slate-400 transition-colors hover:text-blue-400"
							>
								<ChevronRight
									size={14}
									class="text-blue-500 transition-transform group-hover/link:translate-x-1"
								/>
								<span
									class="underline decoration-slate-700 underline-offset-4 hover:decoration-blue-400"
									>Repo_Frontend</span
								>
							</a>
						{/if}

						{#if proyecto.repoUrlBackend}
							<a
								href={proyecto.repoUrlBackend}
								target="_blank"
								rel="noopener noreferrer"
								class="group/link flex items-center gap-2 text-slate-400 transition-colors hover:text-green-400"
							>
								<ChevronRight
									size={14}
									class="text-green-500 transition-transform group-hover/link:translate-x-1"
								/>
								<span
									class="underline decoration-slate-700 underline-offset-4 hover:decoration-green-400"
									>Repo_Backend_API</span
								>
							</a>
						{/if}

						{#if proyecto.repoUrlConsumer}
							<a
								href={proyecto.repoUrlConsumer}
								target="_blank"
								rel="noopener noreferrer"
								class="group/link flex items-center gap-2 text-slate-400 transition-colors hover:text-yellow-400"
							>
								<ChevronRight
									size={14}
									class="text-yellow-500 transition-transform group-hover/link:translate-x-1"
								/>
								<span
									class="underline decoration-slate-700 underline-offset-4 hover:decoration-yellow-400"
									>Repo_Backend_Consumer</span
								>
							</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
