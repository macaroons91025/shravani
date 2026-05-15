import emailjs from 'emailjs-com';
import {  useEffect } from 'react';
import Navbar from './components/navbar';
import Skills from './components/skills';
import Projects from './components/Projects';
import cherryBlossomBg from './components/snow-tree.png';
import './App.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_m9lvioj',
        'template_lq04hzd',
        e.target,
        '4Lk1JOVw_RUFKckzj'
      )
      .then(
        (result) => { alert('Message sent successfully!'); },
        (error)  => { alert('Failed to send message.'); console.log(error.text); }
      );

    e.target.reset();
  };

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const petals = [];
    const petalColors = ['#f8c9d4', '#f3b0c3', '#f9d6e0', '#ffebee'];

    class Petal {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.size = Math.random() * 8 + 4;
        this.speed = Math.random() * 2 + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = Math.random() * 0.2 - 0.1;
        this.color = petalColors[Math.floor(Math.random() * petalColors.length)];
        this.wave = Math.random() * 0.5 + 0.5;
      }

      update() {
        this.y += this.speed;
        this.angle += this.spin;
        this.x += Math.sin(this.y * 0.01 * this.wave) * 1.5;
        if (this.y > canvas.height) {
          this.y = -10;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size, this.size * 0.8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < 80; i++) petals.push(new Petal());

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petals.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.removeChild(canvas);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="cherry-blossom-container">
      <div className="cherry-blossom-bg">
        <img src={cherryBlossomBg} alt="Cherry Blossom Background" className="bg-image" />
      </div>

      <div className="content-overlay">
        <Navbar />

        {/* ── HERO ── */}
        <section id="name" className="h-screen flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-bold text-rose-900 mb-4">
            Hello, I'm <span className="text-rose-700">Shravani Kalidas Satav</span>
          </h1>
          <p className="text-xl sm:text-2xl text-rose-800 font-medium mb-2">
            <span className="text-rose-600 font-semibold">M.A English | Theatre | Applied Theatre | Student</span>
          </p>
          <p className="text-md sm:text-lg text-rose-700 max-w-xl">
            I'm just a curious soul who is extremely passionate about practices in theatre and exploring the landscape of theatre!
          </p>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="min-h-screen flex flex-col sm:flex-row items-center justify-center px-6 py-12">
          <div className="flex flex-col items-center sm:items-start sm:mr-16 mb-10 sm:mb-0">
            <img
              src="/your-photo.jpeg"
              alt="Profile"
              className="w-48 h-48 rounded-full border-4 border-rose-300 shadow-lg object-cover"
            />
            <div className="mt-6 flex flex-col items-center gap-4">
              <div className="flex gap-4">
                <a href="https://shravanisatavcv.tiiny.site" className="bg-rose-600 text-white px-5 py-2 rounded-lg shadow hover:bg-rose-700 text-center">Resume</a>
                <a href="https://in.linkedin.com/in/shravani-satav-669249317" className="bg-rose-500 text-white px-5 py-2 rounded-lg shadow hover:bg-rose-600 text-center" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="max-w-xl text-left">
            <p className="uppercase text-sm tracking-widest text-rose-500 mb-2">Introduction</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-rose-900">Overview.</h1>
            <ul className="space-y-4 text-lg text-rose-800 font-medium list-disc">
              <li>Managed and executed full production logistics as Production Head for 4 major theatre productions.</li>
              <li>Contributed to 8 total productions developing broad creative skills from technicalities like lighting design to abstract storytelling and performative techniques.</li>
              <li>Provided Dramaturgy assistance for CHICAGO: The Musical, focusing on script analysis, performance style, stage directions and musical elements.</li>
              <li>Represented the Theater Club as student body coordinator</li>
              <li>Lead Researcher & Author of three comprehensive academic papers (assignments)</li>
              <li>Contribution towards volunteering work in Theatre Festivals (Nataak Express)</li>
            </ul>
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section id="education" className="min-h-screen py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-rose-500 text-sm tracking-widest mb-2 py-5">WHAT I HAVE STUDIED SO FAR</h3>
            <h2 className="text-5xl font-extrabold text-rose-900 mb-12">Education.</h2>

            <div className="relative border-l-4 border-rose-400 pl-8">
              <div className="mb-12 relative">
                <div className="absolute -left-6 top-1 w-10 h-10 bg-white border-4 border-rose-400 rounded-full flex items-center justify-center text-rose-500 font-bold shadow-md">M</div>
                <div className="bg-rose-100 p-6 rounded-lg shadow-md text-left">
                  <h3 className="text-lg font-semibold text-rose-900 mb-1">Master of Arts M.A. in English</h3>
                  <p className="text-sm text-rose-800 mb-1">St. Mira's College For Girls, Pune</p>
                  <p className="text-xs text-rose-600">2025 – 2027</p>
                  <ul className="list-disc list-inside text-sm mt-2 text-rose-700">
                    <li>Completed SSC Board with strong academic foundation</li>
                  </ul>
                </div>
              </div>

              <div className="mb-12 relative">
                <div className="absolute -left-6 top-1 w-10 h-10 bg-white border-4 border-rose-400 rounded-full flex items-center justify-center text-rose-500 font-bold shadow-md">B</div>
                <div className="bg-rose-100 p-6 rounded-lg shadow-md text-left">
                  <h3 className="text-lg font-semibold text-rose-900 mb-1">Bachelor of Arts B.A. in English</h3>
                  <p className="text-sm text-rose-800 mb-1">St. Mira's College For Girls, Pune</p>
                  <p className="text-xs text-rose-600">2022 – 2025</p>
                  <ul className="list-disc list-inside text-sm mt-2 text-rose-700">
                    <li>Completed HSC Board with Computer Science as a Bifocal Subject.</li>
                  </ul>
                </div>
              </div>

              <div className="mb-12 relative">
                <div className="absolute -left-6 top-1 w-10 h-10 bg-white border-4 border-rose-400 rounded-full flex items-center justify-center text-rose-500 font-bold shadow-md">S</div>
                <div className="bg-rose-100 p-6 rounded-lg shadow-md text-left">
                  <h3 className="text-lg font-semibold text-rose-900 mb-1">Schooling</h3>
                  <p className="text-sm text-rose-800 mb-1">St. Francis De Sales School</p>
                  <p className="text-xs text-rose-600">2008 – 2020</p>
                  <ul className="list-disc list-inside text-sm mt-2 text-rose-700">
                    <li>Completed SSC Board with strong academic foundation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" className="min-h-screen py-24 px-6 text-rose-900 relative">
          <div className="text-center mb-24">
            <h3 className="text-rose-400 uppercase tracking-[0.2em] text-sm font-light mb-3">Where I've Worked</h3>
            <h2 className="text-5xl sm:text-6xl font-light tracking-wide text-rose-900">Experience.</h2>
            <div className="w-16 h-px bg-rose-300 mx-auto mt-4"></div>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2" style={{ width: '4px', backgroundColor: '#fb7185', borderRadius: '2px' }}></div>

            {/* ── Experience 1 – Left ── */}
            <div className="group relative mb-20 flex justify-start">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-4 border-rose-400 rounded-full flex items-center justify-center text-rose-500 font-bold shadow-md z-20">1</div>
              <div className="w-1/2 pr-16 text-right relative">
                <div className="absolute right-0 top-6 w-12 bg-rose-300 group-hover:bg-rose-400 transition-colors duration-300" style={{ height: '4px' }}></div>
                <div className="relative">
                  <div className="group-hover:opacity-0 group-hover:scale-95 transition-all duration-300">
                    <h3 className="text-xl font-medium text-rose-800">Applied Theatre Storytelling Course</h3>
                    <div className="text-sm text-rose-500 mt-1">By Aanand Chabukswar.<br />Storytelling & Narratives in Learning & Education Course</div>
                  </div>
                  {/* Desktop hover popup */}
                  <div className="exp-image-popup left-side">
                    <div className="bg-white/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-rose-200/50">
                      <img src="/experience1.png" alt="course" className="w-full h-32 object-cover" />
                    </div>
                  </div>
                  {/* Mobile static image */}
                  <div className="exp-image-static">
                    <img src="/experience1.png" alt="course" />
                  </div>
                </div>
              </div>
              <div className="w-1/2"></div>
            </div>

            {/* ── Experience 2 – Right ── */}
            <div className="group relative mb-20 flex justify-end">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-4 border-rose-400 rounded-full flex items-center justify-center text-rose-500 font-bold shadow-md z-20">2</div>
              <div className="w-1/2"></div>
              <div className="w-1/2 pl-16 text-left relative">
                <div className="absolute left-0 top-6 w-12 bg-rose-300 group-hover:bg-rose-400 transition-colors duration-300" style={{ height: '4px' }}></div>
                <div className="relative">
                  <div className="group-hover:opacity-0 group-hover:scale-95 transition-all duration-300">
                    <h3 className="text-xl font-medium text-rose-800">My Mother Said I Never Should</h3>
                    <div className="text-sm text-rose-500 mt-1">Actor - Jackie<br />Student Production</div>
                  </div>
                  {/* Desktop hover popup */}
                  <div className="exp-image-popup right-side">
                    <div className="bg-white/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-rose-200/50">
                      <img src="/experience2.jpeg" alt="my mother said i never should" className="w-full h-32 object-cover" />
                    </div>
                  </div>
                  {/* Mobile static image */}
                  <div className="exp-image-static">
                    <img src="/experience2.jpeg" alt="my mother said i never should" />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Experience 3 – Left ── */}
            <div className="group relative mb-20 flex justify-start">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-4 border-rose-400 rounded-full flex items-center justify-center text-rose-500 font-bold shadow-md z-20">3</div>
              <div className="w-1/2 pr-16 text-right relative">
                <div className="absolute right-0 top-6 w-12 bg-rose-300 group-hover:bg-rose-400 transition-colors duration-300" style={{ height: '4px' }}></div>
                <div className="relative">
                  <div className="group-hover:opacity-0 group-hover:scale-95 transition-all duration-300">
                    <h3 className="text-xl font-medium text-rose-800">Nataak Express Theatre Festival</h3>
                    <div className="text-sm text-rose-500 mt-1">Make a Play in a Day Workshop<br />Backstage Management and Volunteering</div>
                  </div>
                  {/* Desktop hover popup */}
                  <div className="exp-image-popup left-side">
                    <div className="bg-white/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-rose-200/50">
                      <img src="/experience3.jpeg" alt="naatak" className="w-full h-32 object-cover" />
                    </div>
                  </div>
                  {/* Mobile static image */}
                  <div className="exp-image-static">
                    <img src="/experience3.jpeg" alt="naatak" />
                  </div>
                </div>
              </div>
              <div className="w-1/2"></div>
            </div>

            {/* ── Experience 4 – Right ── */}
            <div className="group relative mb-20 flex justify-end">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-4 border-rose-400 rounded-full flex items-center justify-center text-rose-500 font-bold shadow-md z-20">4</div>
              <div className="w-1/2"></div>
              <div className="w-1/2 pl-16 text-left relative">
                <div className="absolute left-0 top-6 w-12 bg-rose-300 group-hover:bg-rose-400 transition-colors duration-300" style={{ height: '4px' }}></div>
                <div className="relative">
                  <div className="group-hover:opacity-0 group-hover:scale-95 transition-all duration-300">
                    <h3 className="text-xl font-medium text-rose-800">Chicago - The Musical</h3>
                    <div className="text-sm text-rose-500 mt-1">3 Performances<br />Dramaturge of the play<br />Actor - Mary Sunshine</div>
                  </div>
                  {/* Desktop hover popup */}
                  <div className="exp-image-popup right-side">
                    <div className="bg-white/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-rose-200/50">
                      <img src="/experience4.JPG" alt="chicago" className="w-full h-32 object-cover" />
                    </div>
                  </div>
                  {/* Mobile static image */}
                  <div className="exp-image-static">
                    <img src="/experience4.JPG" alt="chicago" />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Experience 5 – Left ── */}
            <div className="group relative mb-20 flex justify-start">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-4 border-rose-400 rounded-full flex items-center justify-center text-rose-500 font-bold shadow-md z-20">5</div>
              <div className="w-1/2 pr-16 text-right relative">
                <div className="absolute right-0 top-6 w-12 bg-rose-300 group-hover:bg-rose-400 transition-colors duration-300" style={{ height: '4px' }}></div>
                <div className="relative">
                  <div className="group-hover:opacity-0 group-hover:scale-95 transition-all duration-300">
                    <h3 className="text-xl font-medium text-rose-800">For Coloured Girls When the Rainbow is Enuf</h3>
                    <div className="text-sm text-rose-500 mt-1">Production Head<br />3 Performances<br />Actor - Multiple roles</div>
                  </div>
                  {/* Desktop hover popup */}
                  <div className="exp-image-popup left-side">
                    <div className="bg-white/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-rose-200/50">
                      <img src="/experience5.jpeg" alt="colored girls" className="w-full h-32 object-cover" />
                    </div>
                  </div>
                  {/* Mobile static image */}
                  <div className="exp-image-static">
                    <img src="/experience5.jpeg" alt="colored girls" />
                  </div>
                </div>
              </div>
              <div className="w-1/2"></div>
            </div>

            {/* ── Experience 6 – Right ── */}
            <div className="group relative mb-20 flex justify-end">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-4 border-rose-400 rounded-full flex items-center justify-center text-rose-500 font-bold shadow-md z-20">6</div>
              <div className="w-1/2"></div>
              <div className="w-1/2 pl-16 text-left relative">
                <div className="absolute left-0 top-6 w-12 bg-rose-300 group-hover:bg-rose-400 transition-colors duration-300" style={{ height: '4px' }}></div>
                <div className="relative">
                  <div className="group-hover:opacity-0 group-hover:scale-95 transition-all duration-300">
                    <h3 className="text-xl font-medium text-rose-800">Shatter</h3>
                    <div className="text-sm text-rose-500 mt-1">Production Head<br />Vignette of Fem voices in popular Media<br />Actor - Gauri</div>
                  </div>
                  {/* Desktop hover popup */}
                  <div className="exp-image-popup right-side">
                    <div className="bg-white/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-rose-200/50">
                      <img src="/experience6.jpeg" alt="shatter" className="w-full h-32 object-cover" />
                    </div>
                  </div>
                  {/* Mobile static image */}
                  <div className="exp-image-static">
                    <img src="/experience6.jpeg" alt="shatter" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="min-h-screen flex items-center justify-center">
          <Skills />
        </section>

        {/* ── PROJECTS ── */}
        <Projects />

        {/* ── CONTACT ── */}
        <section className="px-6 py-16 min-h-screen" id="contact">
          <h2 className="text-4xl font-bold text-center mb-12 text-rose-900">Contact.</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <form onSubmit={handleSubmit} className="bg-rose-50 p-8 rounded-xl shadow-md space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium mb-2 text-rose-800">Name</label>
                  <input type="text" name="name" required placeholder="Your name" className="w-full p-3 rounded-lg border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400 text-rose-900" />
                </div>
                <div>
                  <label className="block font-medium mb-2 text-rose-800">Email</label>
                  <input type="email" name="email" required placeholder="Your email" className="w-full p-3 rounded-lg border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400 text-rose-900" />
                </div>
              </div>
              <div>
                <label className="block font-medium mb-2 text-rose-800">Message</label>
                <textarea name="message" required rows="5" placeholder="Hey Shravani! Would like to connect with you!" className="w-full p-3 rounded-lg border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400 text-rose-900" />
              </div>
              <div className="pt-4">
                <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold hover:opacity-90 transition">
                  Send Message
                </button>
              </div>
            </form>
            <div className="flex justify-center">
              <img src="/doll.png" alt="Earth Illustration" className="rounded-xl w-3/4 md:w-full" />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;