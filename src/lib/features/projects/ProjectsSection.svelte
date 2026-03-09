<script lang="ts">
    
    import { Terminal, FolderOpen, ChevronRight } from 'lucide-svelte';
    import { PROYECTOS } from '$lib/features/projects/projects.data';
</script>

<section id="proyectos" class="min-h-screen w-full bg-[#0a0c10] font-mono text-sm sm:text-base py-24 px-4 sm:px-8 border-t border-slate-800/50">
    
    <div class="max-w-5xl mx-auto">
        <div class="mb-12 flex items-center gap-2">
            <Terminal size={18} class="text-blue-500" />
            <span class="text-blue-500 font-bold">exerr</span>
            <FolderOpen size={16} class="text-slate-500 ml-1" />
            <span class="text-slate-500">~/portfolio</span>
            <span class="text-yellow-400 font-bold ml-1">>></span>
            <span class="text-green-400 ml-2">ls -la ./proyectos_destacados/</span>
        </div>
        
        <p class="mt-[-2rem] mb-8 text-slate-400 opacity-80 pl-1">total {PROYECTOS.length}</p>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {#each PROYECTOS as proyecto}
                <div class="group relative flex flex-col bg-[#11121d] border border-slate-800 p-6 rounded-lg hover:border-cyan-500/50 transition-colors shadow-lg">
                    
                    <div class="flex justify-between items-center mb-4 border-b border-slate-800/80 pb-3">
                        <span class="text-xs text-slate-500">{proyecto.comando}</span>
                        <span class="text-[10px] font-bold {proyecto.estado === '[ONLINE]' ? 'text-green-400' : proyecto.estado === '[SECURE]' ? 'text-blue-400' : 'text-yellow-400'}">
                            {proyecto.estado}
                        </span>
                    </div>

                    <h3 class="text-xl font-bold text-slate-200 mb-3 group-hover:text-cyan-400 transition-colors">
                        <span class="text-cyan-500 mr-2">./</span>{proyecto.nombre}
                    </h3>

                    <p class="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                        {proyecto.descripcion}
                    </p>

                    <div class="flex flex-wrap gap-2 mb-6">
                        {#each proyecto.stack as tech}
                            <span class="text-[10px] px-2 py-1 bg-slate-800/50 text-slate-300 border border-slate-700/50 rounded">
                                {tech}
                            </span>
                        {/each}
                    </div>

                    <div class="mt-auto border-t border-slate-800/80 pt-4 flex flex-col gap-2">
                        
                        {#if proyecto.repoUrl}
                            <a href={proyecto.repoUrl} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group/link">
                                <ChevronRight size={14} class="text-green-500 group-hover/link:translate-x-1 transition-transform" />
                                <span class="underline decoration-slate-700 underline-offset-4 hover:decoration-green-400">Ver_Código_Fuente</span>
                            </a>
                        {/if}

                        {#if proyecto.repoUrlFrontend}
                            <a href={proyecto.repoUrlFrontend} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group/link">
                                <ChevronRight size={14} class="text-blue-500 group-hover/link:translate-x-1 transition-transform" />
                                <span class="underline decoration-slate-700 underline-offset-4 hover:decoration-blue-400">Repo_Frontend</span>
                            </a>
                        {/if}

                        {#if proyecto.repoUrlBackend}
                            <a href={proyecto.repoUrlBackend} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors group/link">
                                <ChevronRight size={14} class="text-green-500 group-hover/link:translate-x-1 transition-transform" />
                                <span class="underline decoration-slate-700 underline-offset-4 hover:decoration-green-400">Repo_Backend_API</span>
                            </a>
                        {/if}

                        {#if proyecto.repoUrlConsumer}
                            <a href={proyecto.repoUrlConsumer} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-slate-400 hover:text-yellow-400 transition-colors group/link">
                                <ChevronRight size={14} class="text-yellow-500 group-hover/link:translate-x-1 transition-transform" />
                                <span class="underline decoration-slate-700 underline-offset-4 hover:decoration-yellow-400">Repo_Backend_Consumer</span>
                            </a>
                        {/if}

                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>