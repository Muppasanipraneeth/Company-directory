import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  Award,
  Briefcase,
  ExternalLink,
  Globe,
  Lightbulb,
  Star,
  Users,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">

      <section className="relative pt-32 pb-20 bg-white overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-slate-100 rounded-full border border-slate-300">
                <Award className="w-4 h-4 text-slate-700" />
                <span className="text-slate-700 font-medium text-sm md:text-base">🎉 Top Indian Startup 2025</span>
              </div>
            </div>


            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 leading-tight">
              Welcome to <span className="text-slate-700">Frontlines Edutech</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto font-medium">
              Transforming Education Through Innovation
            </p>

            <p className="text-base text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover career opportunities with India's leading edtech startup. Join a team revolutionizing education.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="px-8 py-6 text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-slate-900 hover:bg-slate-800 text-white border-0"
              >
                <Link to="/jobs" className="flex items-center gap-2">
                  Explore Opportunities <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="px-8 py-6 text-base font-semibold rounded-lg border-2 border-slate-900 text-slate-900 transition-all duration-300"
                variant="outline"
              >
                <a href="https://www.linkedin.com/company/frontlines-edutech-private-limited-flm/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Visit LinkedIn <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">50K+</div>
              <p className="text-slate-300 font-medium">Students Impacted</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">100+</div>
              <p className="text-slate-300 font-medium">Courses Offered</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">4.8⭐</div>
              <p className="text-slate-300 font-medium">User Rating</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">Top 10</div>
              <p className="text-slate-300 font-medium">Indian Startups</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">About Frontlines Edutech</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  Frontlines Edutech (FLM) is an innovative education technology company dedicated to
                  democratizing quality education across India and beyond.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Through cutting-edge technology and expert educators, we're revolutionizing how students
                  learn, breaking barriers and opening doors to unlimited opportunities.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our recent recognition as one of India's top startups is a testament to our commitment
                  to excellence and innovation in the education sector.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="border-l-4 border-l-slate-400 shadow-sm hover:shadow-md transition bg-slate-50">
                  <CardHeader className="pb-3">
                    <Globe className="w-8 h-8 text-slate-700 mb-2" />
                    <CardTitle className="text-lg text-slate-900">Global Reach</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">Connecting educators and students worldwide</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-slate-400 shadow-sm hover:shadow-md transition bg-slate-50">
                  <CardHeader className="pb-3">
                    <Lightbulb className="w-8 h-8 text-slate-700 mb-2" />
                    <CardTitle className="text-lg text-slate-900">Innovation First</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">Leveraging AI and modern tech</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="mission" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">Our Mission</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm hover:shadow-md transition bg-white">
                <CardHeader className="pb-4">
                  <Briefcase className="w-10 h-10 text-slate-700 mb-3" />
                  <CardTitle className="text-2xl text-slate-900">Empower</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    Empower every individual with quality education and skills for the future
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition bg-white">
                <CardHeader className="pb-4">
                  <Lightbulb className="w-10 h-10 text-slate-700 mb-3" />
                  <CardTitle className="text-2xl text-slate-900">Innovate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    Drive innovation in education technology for better learning experiences
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition bg-white">
                <CardHeader className="pb-4">
                  <Users className="w-10 h-10 text-slate-700 mb-3" />
                  <CardTitle className="text-2xl text-slate-900">Connect</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    Build a community of learners and educators working towards mutual growth
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">Why Join FLM?</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition hover:border-blue-600">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Diverse Roles</CardTitle>
                  <CardDescription>Explore various positions across departments</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    From entry-level to senior positions, we have opportunities for everyone
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition hover:border-indigo-600">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl">Great Team</CardTitle>
                  <CardDescription>Collaborate with talented professionals</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our team is passionate about innovation and mutual support
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition hover:border-purple-600">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Growth Opportunities</CardTitle>
                  <CardDescription>Advance your career with us</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We invest in our people with training and mentorship programs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      <section id="achievements" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">Recognition & Achievements</h2>

            <div className="space-y-6">
              <div className="p-8 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl shadow-lg border-l-4 border-l-yellow-500 hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Top 10 Indian Startups 2025</h3>
                    <p className="text-gray-700">
                      Recognized as one of the most innovative and impactful startups transforming the education sector in India
                    </p>
                  </div>
                  <Star className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                </div>
              </div>

              <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg border-l-4 border-l-blue-500 hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">EdTech Excellence Award</h3>
                    <p className="text-gray-700">
                      Honored for pioneering work in making quality education accessible to all learners
                    </p>
                  </div>
                  <Star className="w-6 h-6 text-blue-600 flex-shrink-0" />
                </div>
              </div>

              <div className="p-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl shadow-lg border-l-4 border-l-purple-500 hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Innovation Impact Award</h3>
                    <p className="text-gray-700">
                      Celebrated for using cutting-edge technology to revolutionize learning outcomes
                    </p>
                  </div>
                  <Star className="w-6 h-6 text-purple-600 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 border-y-4 border-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              🎉 Heartfelt Congratulations! 🎉
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-medium">
              To the entire Frontlines Edutech team on being recognized as one of India's top startups.
              Your dedication to transforming education and making quality learning accessible to all is truly inspiring.
            </p>
            <p className="text-lg text-gray-700 mb-12">
              This recognition is a testament to your innovation, hard work, and unwavering commitment to excellence.
              We look forward to seeing even greater achievements ahead!
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">What We Offer</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Live Classes', description: 'Interactive sessions with expert educators', icon: '🎓', color: 'from-blue-100 to-blue-50' },
                { title: 'Self-Paced Courses', description: 'Learn at your own pace with comprehensive materials', icon: '📚', color: 'from-indigo-100 to-indigo-50' },
                { title: 'Mentorship', description: 'One-on-one guidance from industry experts', icon: '🤝', color: 'from-purple-100 to-purple-50' },
                { title: 'Career Support', description: 'Job placement and career counseling', icon: '💼', color: 'from-pink-100 to-pink-50' },
                { title: 'Certifications', description: 'Industry-recognized certificates', icon: '🏆', color: 'from-green-100 to-green-50' },
                { title: 'Community', description: 'Network with thousands of learners', icon: '🌐', color: 'from-orange-100 to-orange-50' },
              ].map((service, idx) => (
                <Card key={idx} className={`border-0 shadow-lg hover:shadow-xl transition bg-gradient-to-br ${service.color} hover:scale-105 duration-300`}>
                  <CardHeader>
                    <div className="text-5xl mb-3">{service.icon}</div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Journey?</h2>
            <p className="text-xl text-blue-100 mb-12">
              Explore exciting opportunities and be part of India's top startup transforming education
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="px-8 py-6 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-blue-600 hover:bg-blue-50"
              >
                <Link to="/jobs" className="flex items-center gap-2">
                  Explore Opportunities <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="px-8 py-6 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-blue-600 hover:bg-blue-50"
                variant="outline"
              >
                <a href="https://www.linkedin.com/company/frontlines-edutech-private-limited-flm/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Visit LinkedIn <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">FLM</span>
                </div>
                <h4 className="font-bold text-lg">Frontlines Edutech</h4>
              </div>
              <p className="text-gray-400">Transforming education through innovation</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#mission" className="hover:text-white transition">Mission</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Courses</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/frontlines-edutech-private-limited-flm/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition font-medium">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 Frontlines Edutech (FLM). All rights reserved.</p>
            <p className="mt-2 text-sm">Celebrating Excellence in Education Technology</p>
          </div>
        </div>
      </footer>
    </div>
  );
};