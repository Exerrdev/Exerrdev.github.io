<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    
    import { 
        Cpu, 
        MemoryStick, 
        Database, 
        Wifi, 
        Power, 
        Folder, 
        Terminal, 
        FolderOpen 
    } from 'lucide-svelte';

    let cmdIniciado = $state("");
    let mensajeBienvenida = $state("");
    let horaLocal = $state("--:--");
    
    let fase = $state("iniciando"); 
    let scriptElegido = $state("");
    let redireccionando = $state(false);

    const comandoEjecutar = "pnpm run dev:portfolio";
    const textoBienvenida = "Bienvenido a mi portafolio. Soy un desarrollador backend junior enfocado en crear código limpio, aplicar buenas prácticas de seguridad y aprender haciendo.";

    let relojIntervalo: ReturnType<typeof setInterval>;
    const esperar = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    onMount(async () => {
        actualizarHora();
        relojIntervalo = setInterval(actualizarHora, 1000);

        await escribirTexto(comandoEjecutar, (texto) => cmdIniciado = texto, 50);
        await esperar(600);
        
        fase = "log1";
        await esperar(2000);
        
        fase = "log2";
        await esperar(1800);
        
        fase = "log3";
        await esperar(2200);
        
        fase = "log4";
        await esperar(1500);
        
        fase = "bienvenida";
        await escribirTexto(textoBienvenida, (texto) => mensajeBienvenida = texto, 40);
        await esperar(800);
        
        fase = "opciones";
    });

    onDestroy(() => {
        if (relojIntervalo) clearInterval(relojIntervalo);
    });

    function actualizarHora() {
        const ahora = new Date();
        horaLocal = ahora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    function escribirTexto(textoDestino: string, updater: (t: string) => void, velocidad: number): Promise<void> {
        return new Promise((resolve) => {
            let i = 0;
            let temp = "";
            const intervalo = setInterval(() => {
                if (i < textoDestino.length) {
                    temp += textoDestino.charAt(i);
                    updater(temp);
                    i++;
                } else {
                    clearInterval(intervalo);
                    resolve();
                }
            }, velocidad);
        });
    }

    async function ejecutarComando(script: string, idDestino: string) {
        scriptElegido = script;
        fase = "ejecutando";
        redireccionando = false;

        await esperar(800);
        redireccionando = true;

        await esperar(600);
        
        const seccionDestino = document.getElementById(idDestino);
        if (seccionDestino) {
            seccionDestino.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.hash = idDestino;
        }

        setTimeout(() => {
            fase = "opciones";
            scriptElegido = "";
        }, 2000);
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hack-font/3.3.0/web/hack.min.css">
</svelte:head>

<section id="inicio" class="relative min-h-screen w-full bg-[#11121d] font-mono text-[13px] sm:text-[15px] overflow-hidden selection:bg-cyan-500/30 flex items-center justify-center">
    
    <div class="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
    <div class="absolute inset-0 z-0 bg-gradient-to-b from-[#11121d]/90 to-[#11121d]"></div>

    <div class="absolute top-0 left-0 w-full h-7 bg-[#0f101a] border-b border-[#2a2e42] flex items-center justify-between px-3 text-[11px] text-slate-400 z-20">
        <div class="flex items-center gap-4">
            <Terminal size={14} class="text-blue-500" />
            <div class="flex gap-2">
                <span class="text-white bg-slate-800 px-1.5 rounded-sm">1</span>
                <span class="hover:text-white cursor-default">2</span>
                <span class="hover:text-white cursor-default">3</span>
                <span class="hover:text-white cursor-default">4</span>
                <span class="hover:text-white cursor-default">5</span>
                <span class="hover:text-white cursor-default">6</span>
            </div>
        </div>
        
        <div class="flex items-center gap-4">
            <span class="flex items-center gap-1 text-pink-500"><Cpu size={12} /> <span class="text-slate-300">1%</span></span>
            <span class="flex items-center gap-1 text-cyan-500"><MemoryStick size={12} /> <span class="text-slate-300">1.56 GiB</span></span>
            <span class="flex items-center gap-1 text-yellow-500"><Database size={12} /> <span class="text-slate-300">46.75 GB</span></span>
            <span class="flex items-center gap-1 text-green-500"><Wifi size={12} /> <span class="text-slate-300">Connected</span></span>
            <span class="text-white ml-2">{horaLocal}</span>
            <Power size={14} class="text-red-500 hover:text-red-400 cursor-pointer" />
        </div>
    </div>

    <div class="relative z-10 w-full max-w-4xl mx-4 p-8 bg-[#0a0c10] border border-slate-800/80 rounded-xl shadow-2xl text-slate-300 min-h-[350px]">
        
        {#if fase !== "ejecutando"}
            <div>
                <span class="text-cyan-400 font-bold">╭─</span><span class="text-blue-500">(</span><span class="text-green-400 font-bold">exerr</span><span class="text-slate-100 font-bold">㉿</span><span class="text-cyan-400 font-bold">dev</span><span class="text-blue-500">)</span><span class="text-cyan-400 font-bold">─[</span><span class="text-cyan-300 font-bold">~</span><span class="text-cyan-400 font-bold">]</span>
                <br>
                <span class="text-cyan-400 font-bold">╰─$</span> 
                <span class="text-slate-100 ml-1">{cmdIniciado}</span>
                {#if fase === "iniciando"}<span class="inline-block w-2.5 h-4 bg-slate-300 ml-1 animate-pulse align-middle"></span>{/if}
            </div>

            <div class="flex flex-col gap-1 text-slate-400 opacity-90 mt-4 mb-5 pl-1">
                {#if fase !== "iniciando"}
                    <p class="animate-fade-in flex items-center gap-2">
                        <span class="text-blue-400 font-bold">//</span> [A] exerr 
                        <Folder size={14} class="text-yellow-500" /> 
                        ~/portfolio/dev >>
                    </p>
                {/if}
                {#if fase === "log2" || fase === "log3" || fase === "log4" || fase === "bienvenida" || fase === "opciones"}
                    <p class="text-green-400 animate-fade-in">> Cargando módulos de Arquitectura Hexagonal... [OK]</p>
                {/if}
                {#if fase === "log3" || fase === "log4" || fase === "bienvenida" || fase === "opciones"}
                    <p class="text-green-400 animate-fade-in">> Iniciando servicios de Backend y Seguridad... [OK]</p>
                {/if}
                {#if fase === "log4" || fase === "bienvenida" || fase === "opciones"}
                    <p class="text-yellow-400 animate-fade-in">> Verificando entorno de Ciberseguridad... [WARN: Traffic detected, IDs monitoring]</p>
                {/if}
            </div>

            {#if fase === "bienvenida" || fase === "opciones"}
                <div class="animate-fade-in">
                    <span class="text-cyan-400 font-bold">╭─</span><span class="text-blue-500">(</span><span class="text-green-400 font-bold">exerr</span><span class="text-slate-100 font-bold">㉿</span><span class="text-cyan-400 font-bold">dev</span><span class="text-blue-500">)</span><span class="text-cyan-400 font-bold">─[</span><span class="text-cyan-300 font-bold">~/portfolio/welcome</span><span class="text-cyan-400 font-bold">]</span>
                    <br>
                    <span class="text-cyan-400 font-bold">╰─$</span> 
                    <span class="text-emerald-300 ml-1">{mensajeBienvenida}</span>
                    {#if fase === "bienvenida"}<span class="inline-block w-2.5 h-4 bg-emerald-400 ml-1 animate-pulse align-middle"></span>{/if}
                </div>
            {/if}

            {#if fase === "opciones"}
                <div class="mt-6 animate-fade-in pl-1">
                    <p class="text-slate-400 mb-4">-- Por favor selecciona uno de los comandos siguientes para continuar --</p>
                    <div class="flex flex-wrap gap-6">
                        <button onclick={() => ejecutarComando('./sobre_mi.sh', 'sobre-mi')} class="text-slate-300 hover:text-green-400 transition-colors flex items-center gap-2 group focus:outline-none">
                            <span class="text-green-500">rwx</span>
                            <span class="underline decoration-slate-700 underline-offset-4 group-hover:decoration-green-400">./sobre_mi.sh</span>
                        </button>
                        <button onclick={() => ejecutarComando('./proyectos.sh', 'proyectos')} class="text-slate-300 hover:text-green-400 transition-colors flex items-center gap-2 group focus:outline-none">
                            <span class="text-green-500">rwx</span>
                            <span class="underline decoration-slate-700 underline-offset-4 group-hover:decoration-green-400">./proyectos.sh</span>
                        </button>
                        <button onclick={() => ejecutarComando('./contacto.sh', 'contacto')} class="text-slate-300 hover:text-green-400 transition-colors flex items-center gap-2 group focus:outline-none">
                            <span class="text-green-500">rwx</span>
                            <span class="underline decoration-slate-700 underline-offset-4 group-hover:decoration-green-400">./contacto.sh</span>
                        </button>
                    </div>
                </div>
            {/if}
        
        {:else}
            <div class="animate-fade-in">
                <span class="text-cyan-400 font-bold">╭─</span><span class="text-blue-500">(</span><span class="text-green-400 font-bold">exerr</span><span class="text-slate-100 font-bold">㉿</span><span class="text-cyan-400 font-bold">dev</span><span class="text-blue-500">)</span><span class="text-cyan-400 font-bold">─[</span><span class="text-cyan-300 font-bold">~/portfolio</span><span class="text-cyan-400 font-bold">]</span>
                <br>
                <span class="text-cyan-400 font-bold">╰─$</span> 
                <span class="text-slate-100 ml-1">{scriptElegido}</span>
            </div>
            
            <div class="flex flex-col gap-2 mt-4 pl-1 text-slate-400 font-semibold animate-fade-in">
                <p>> Ejecutando script <span class="text-blue-400">{scriptElegido}</span>...</p>
                {#if redireccionando}
                    <p class="text-green-400">> Redirigiendo a la sección solicitada... [OK]</p>
                {:else}
                    <span class="inline-block w-2.5 h-4 bg-slate-300 ml-1 animate-pulse align-middle"></span>
                {/if}
            </div>
        {/if}

    </div>
</section>

<style>
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(2px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
        animation: fadeIn 0.2s ease-out forwards;
    }
</style>