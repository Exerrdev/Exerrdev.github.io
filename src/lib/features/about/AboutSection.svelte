<script lang="ts">
  
    import { Terminal, FolderOpen, ShieldCheck } from 'lucide-svelte';

    const stats = [
        { key: "OS", value: "ExerrDev OS 2026.03", color: "text-blue-400" },
        { key: "Kernel", value: "Junior-Backend-x86_64", color: "text-cyan-400" },
        { key: "Uptime", value: "8 years (Gastronomy) + 1 year (Dev)", color: "text-green-400" },
        { key: "Shell", value: "SvelteKit + NestJS", color: "text-yellow-400" },
        { key: "Resolution", value: "Hexagonal Architecture", color: "text-pink-500" },
        { key: "WM", value: "TailwindCSS", color: "text-purple-400" }
    ];

    
    const techStack = [
        { name: "NestJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
        { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "SvelteKit", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg" },
        { name: "Angular", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" },
        { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },     
        { name: "CyberSec", icon: ShieldCheck, color: "text-purple-400" }
    ];
</script>

<section id="sobre-mi" class="min-h-screen w-full bg-[#0a0c10] font-mono text-sm sm:text-base py-24 px-4 sm:px-8 border-t border-slate-800/50">
    <div class="max-w-5xl mx-auto">
        
        <div class="mb-12 flex items-center gap-2">
            <Terminal size={18} class="text-blue-500" />
            <span class="text-blue-500 font-bold">exerr</span>
            <FolderOpen size={16} class="text-slate-500 ml-1" />
            <span class="text-slate-500">~/personal</span>
            <span class="text-yellow-400 font-bold ml-1">>></span>
            <span class="text-green-400 ml-2">whoami --verbose</span>
        </div>

        <div class="grid lg:grid-cols-12 gap-12 items-start">
            
            <div class="lg:col-span-5">
                <div class="bg-[#11121d] border border-slate-800 rounded-lg flex flex-col items-center justify-start p-6 relative overflow-hidden group">
                    <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#6366f1 1px, transparent 1px); background-size: 20px 20px;"></div>
                    
                    <div class="relative z-10 text-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity w-full flex flex-col items-center">
                        <pre class="text-[7px] sm:text-[8px] leading-tight mb-2">
{`      
     .ndMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMnd.
   .dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMd.
  .MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM.
  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  MMMMMMMMMMMMMM"   "MMMMMMMMMM"   "MMMMMMMMMMMMM
  MMMMMMMMMMMMMM       MMMMMMMM       MMMMMMMMMMMM
  MMMMMMMMMMMMMM       MMMMMMMM       MMMMMMMMMMMM
  MMMMMMMMMMMMMMNm...mNMMMMMMMMNm...mNMMMMMMMMMMMM
  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  MMMMMMMMMMMN                       NMMMMMMMMMMMMMM
  "MMMMMMMMMMN                     NMMMMMMMMMMMM"
    "NMMMMMMMMMMNm...............mNMMMMMMMMMMMN"
         "NNMMMMMMMMMMMMMMMMMMMMMMMMMMMMNN"
`}
                        </pre>
                        <p class="text-center text-[10px] font-bold tracking-[0.2em] mb-4">[ PHOTO_NOT_FOUND ]</p>
                    </div>

                    <div class="w-full text-slate-700 text-xs mb-4">----------------------------------</div>

                    <div class="w-full space-y-1 z-10 mb-4">
                        {#each stats as stat}
                            <div class="flex text-[11px]">
                                <span class="{stat.color} font-bold w-20">{stat.key}:</span>
                                <span class="text-slate-400 ml-2">{stat.value}</span>
                            </div>
                        {/each}
                    </div>

                    <div class="w-full text-slate-700 text-xs mb-4">----------------------------------</div>

                    <div class="w-full z-10">
                        <h3 class="text-[11px] font-bold text-slate-300 mb-4 flex items-center gap-2">
                            <span class="text-blue-500">[#]</span> PAQUETES_INSTALADOS
                        </h3>
                        
                        <div class="grid grid-cols-3 gap-x-2 gap-y-4 text-center">
                            {#each techStack as tech}
                                <div class="flex flex-col items-center justify-center gap-1.5 group/tech">
                                    
                                    {#if tech.img}
                                        <img 
                                            src={tech.img} 
                                            alt={tech.name} 
                                            class="w-6 h-6 opacity-70 grayscale group-hover/tech:grayscale-0 group-hover/tech:opacity-100 transition-all duration-300 drop-shadow-md" 
                                        />
                                    {:else}
                                        <svelte:component 
                                            this={tech.icon} 
                                            size={24} 
                                            class="{tech.color} opacity-70 group-hover/tech:opacity-100 transition-all duration-300"
                                        />
                                    {/if}

                                    <span class="text-[9px] text-slate-400 group-hover/tech:text-slate-200 transition-colors">
                                        {tech.name}
                                    </span>
                                </div>
                            {/each}
                        </div>
                    </div>

                </div>
            </div>

            <div class="lg:col-span-7 space-y-8">
                <div>
                    <h2 class="text-3xl font-bold text-white mb-6">
                        <span class="text-blue-500">~</span> Hola, soy <span class="text-cyan-400">Jaime</span>.
                    </h2>
                    
                    <div class="space-y-6 text-slate-400 leading-relaxed text-[15px]">
                        <p>
                            Soy un Desarrollador de Software Junior que aprende <strong class="text-blue-400">haciendo</strong>. Mi historia es atípica: pasé 8 años liderando equipos en el mundo de la gastronomía, forjando disciplina y capacidad de respuesta bajo presión.
                        </p>
                        <p>
                            Hoy, esa energía la vuelco en el <strong class="text-slate-200">Backend</strong>. No me quedo en la teoría: ya he desplegado proyectos Full Stack completos con <strong class="text-slate-200">NestJS</strong> y <strong class="text-slate-200">Svelte</strong>, aplicando principios de <strong class="text-cyan-400 underline decoration-cyan-900 underline-offset-4">Arquitectura Hexagonal</strong>.
                        </p>
                    </div>
                </div>

                <div class="bg-[#11121d] border border-slate-800 p-6 rounded-lg relative overflow-hidden shadow-inner">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-xs font-bold text-blue-500">
                            [#] ENFOQUE_ACTUAL
                        </h3>
                        <span class="text-[10px] text-slate-600">v1.0.0</span>
                    </div>
                    
                    <div class="space-y-4">
                        <div class="flex justify-between text-[11px]">
                            <span class="text-slate-300">Construcción de Proyectos Reales</span>
                            <span class="text-cyan-400">100%</span>
                        </div>
                        <div class="h-4 w-full bg-slate-900/50 border border-slate-800 rounded-sm p-0.5 flex items-center">
                            <div class="h-full bg-cyan-500 flex items-center justify-end pr-2 overflow-hidden" style="width: 100%">
                                <span class="text-[8px] text-slate-900 font-bold">########################################</span>
                            </div>
                        </div>
                    </div>
                    
                    <p class="mt-4 text-[10px] text-slate-500 italic">
                        Logs: 2 Apps Full Stack OK • Migración Svelte OK • Seguridad Defensiva IN_PROGRESS
                    </p>
                </div>

                <div class="flex flex-wrap gap-4 pt-4">
                    <a href="#contacto" class="px-6 py-2 bg-slate-200 text-[#0a0c10] font-bold text-xs uppercase hover:bg-white transition-all">
                        [ Contactar ]
                    </a>
                    <a href="https://linkedin.com/in/jaime-sanchez-herrera" target="_blank" class="px-6 py-2 border border-slate-700 text-slate-300 font-bold text-xs uppercase hover:border-cyan-500 hover:text-cyan-400 transition-all">
                        [ LinkedIn ]
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    :global(section) {
        scroll-margin-top: 2rem;
    }
</style>