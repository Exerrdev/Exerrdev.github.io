<script lang="ts">
    import { Terminal, Mail, Linkedin, Github, Send } from 'lucide-svelte';

    
    const user = "jaime.sanchez.h"; 
    const domain = "gmail.com";   
    
    function contactar() {
        
        window.location.href = `mailto:${user}@${domain}`;
    }
</script>

<section id="contacto" class="min-h-[80vh] w-full bg-[#0a0c10] font-mono text-sm sm:text-base py-24 px-4 sm:px-8 border-t border-slate-800/50">
    <div class="max-w-4xl mx-auto">
        
        <div class="mb-12 flex items-center gap-2">
            <Terminal size={18} class="text-blue-500" />
            <span class="text-blue-500 font-bold">exerr</span>
            <span class="text-yellow-400 font-bold ml-1">>></span>
            <span class="text-green-400 ml-2">./establecer_conexion.sh --secure</span>
        </div>

        <div class="bg-[#11121d] border border-slate-800 rounded-xl p-8 shadow-2xl relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 opacity-5">
                <Send size={120} />
            </div>

            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span class="text-blue-500">[!]</span> ¿Hablamos?
            </h2>

            <p class="text-slate-400 mb-10 leading-relaxed">
                Actualmente estoy buscando mi primera oportunidad profesional como Junior Backend. 
                Si tienes una propuesta, una duda técnica o simplemente quieres conectar, 
                mis canales de comunicación están encriptados y listos.
            </p>

            <div class="grid sm:grid-cols-2 gap-6">
                <button 
                    onclick={contactar}
                    class="flex items-center gap-4 p-4 bg-[#0a0c10] border border-slate-700 rounded-lg hover:border-blue-500 hover:bg-blue-500/5 transition-all group text-left"
                >
                    <div class="p-3 bg-slate-800 rounded-md text-blue-400 group-hover:text-blue-300">
                        <Mail size={20} />
                    </div>
                    <div>
                        <p class="text-[10px] text-slate-500 uppercase tracking-widest">Email</p>
                        <p class="text-slate-200 font-bold group-hover:text-white">Enviar Mensaje</p>
                    </div>
                </button>

                <a 
                    href="https://www.linkedin.com/in/jaimesh/" 
                    target="_blank"
                    class="flex items-center gap-4 p-4 bg-[#0a0c10] border border-slate-700 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/5 transition-all group"
                >
                    <div class="p-3 bg-slate-800 rounded-md text-cyan-400 group-hover:text-cyan-300">
                        <Linkedin size={20} />
                    </div>
                    <div>
                        <p class="text-[10px] text-slate-500 uppercase tracking-widest">Red Profesional</p>
                        <p class="text-slate-200 font-bold group-hover:text-white">LinkedIn Profile</p>
                    </div>
                </a>

                <a 
                    href="https://github.com/Exerrdev" 
                    target="_blank"
                    class="flex items-center gap-4 p-4 bg-[#0a0c10] border border-slate-700 rounded-lg hover:border-green-500 hover:bg-green-400/5 transition-all group"
                >
                    <div class="p-3 bg-slate-800 rounded-md text-green-400 group-hover:text-green-300">
                        <Github size={20} />
                    </div>
                    <div>
                        <p class="text-[10px] text-slate-500 uppercase tracking-widest">Código</p>
                        <p class="text-slate-200 font-bold group-hover:text-white">Github / Exerrdev</p>
                    </div>
                </a>
            </div>

            <div class="mt-12 pt-6 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500">
                <p>© 2026 Jaime Sanchez Herrera - Built with SvelteKit & Love</p>
                <div class="flex gap-4">
                    <span class="flex items-center gap-1"><span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Sistema Operativo</span>
                    <span>v4.0.0-stable</span>
                </div>
            </div>
        </div>
    </div>
</section>