import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Briefcase, ExternalLink, Globe, Lightbulb, Star, Users } from 'lucide-react';

export const FLMLandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">FLM</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Frontlines Edutech</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
            <a href="#mission" className="text-gray-600 hover:text-blue-600 transition">Mission</a>
            <a href="#achievements" className="text-gray-600 hover:text-blue-600 transition">Achievements</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition">Services</a>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            Join Us
          </Button>
        </div>
      </nav>

      {/* Hero Section - Celebration */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Celebration Badge */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-full border border-yellow-200">
                <Award className="w-5 h-5 text-yellow-600 animate-bounce" />
                <span className="text-yellow-900 font-semibold">🎉 Top Indian Startup Recognition 🎉</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Frontlines Edutech (FLM)
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Transforming Education Through Innovation and Technology
            </p>

            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Congratulations on being recognized as one of India's top startups!
              We're proud to showcase the excellence and innovation that drives Frontlines Edutech forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg"
              >
                Explore More <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-lg border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              >
                View on LinkedIn <ExternalLink className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="text-blue-100">Students Impacted</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-blue-100">Courses Offered</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8⭐</div>
              <p className="text-blue-100">User Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Top 10</div>
              <p className="text-blue-100">Indian Startups</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">About Frontlines Edutech</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Frontlines Edutech (FLM) is an innovative education technology company dedicated to
                  democratizing quality education across India and beyond.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through cutting-edge technology and expert educators, we're revolutionizing how students
                  learn, breaking barriers and opening doors to unlimited opportunities.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our recent recognition as one of India's top startups is a testament to our commitment
                  to excellence and innovation in the education sector.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-600">
                  <Globe className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Global Reach</h3>
                  <p className="text-sm text-gray-600">Connecting educators and students worldwide</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-indigo-600">
                  <Lightbulb className="w-8 h-8 text-indigo-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Innovation First</h3>
                  <p className="text-sm text-gray-600">Leveraging AI and modern tech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="mission" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Mission</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <Briefcase className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Empower</h3>
                <p className="text-gray-700">
                  Empower every individual with quality education and skills for the future
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200">
                <Lightbulb className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovate</h3>
                <p className="text-gray-700">
                  Drive innovation in education technology for a better learning experience
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                <Users className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Connect</h3>
                <p className="text-gray-700">
                  Build a community of learners and educators working towards mutual growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="achievements" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Recognition & Achievements</h2>

            <div className="space-y-6">
              <div className="p-8 bg-white rounded-xl shadow-lg border-l-4 border-yellow-500 hover:shadow-xl transition group">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Top 10 Indian Startups 2024</h3>
                    <p className="text-gray-600">
                      Recognized as one of the most innovative and impactful startups transforming
                      the education sector in India
                    </p>
                  </div>
                  <Star className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                </div>
              </div>

              <div className="p-8 bg-white rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition group">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">EdTech Excellence Award</h3>
                    <p className="text-gray-600">
                      Honored for pioneering work in making quality education accessible to all learners
                    </p>
                  </div>
                  <Star className="w-6 h-6 text-blue-500 flex-shrink-0" />
                </div>
              </div>

              <div className="p-8 bg-white rounded-xl shadow-lg border-l-4 border-indigo-500 hover:shadow-xl transition group">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-indigo-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Innovation Impact Award</h3>
                    <p className="text-gray-600">
                      Celebrated for using cutting-edge technology to revolutionize learning outcomes
                    </p>
                  </div>
                  <Star className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">What We Offer</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Live Classes',
                  description: 'Interactive live sessions with expert educators',
                  icon: '🎓',
                  color: 'from-blue-100 to-blue-50'
                },
                {
                  title: 'Self-Paced Courses',
                  description: 'Learn at your own pace with comprehensive course materials',
                  icon: '📚',
                  color: 'from-indigo-100 to-indigo-50'
                },
                {
                  title: 'Mentorship',
                  description: 'One-on-one guidance from industry experts',
                  icon: '🤝',
                  color: 'from-purple-100 to-purple-50'
                },
                {
                  title: 'Career Support',
                  description: 'Job placement assistance and career counseling',
                  icon: '💼',
                  color: 'from-pink-100 to-pink-50'
                },
                {
                  title: 'Certifications',
                  description: 'Industry-recognized certificates upon completion',
                  icon: '🏆',
                  color: 'from-green-100 to-green-50'
                },
                {
                  title: 'Community',
                  description: 'Network with thousands of learners worldwide',
                  icon: '🌐',
                  color: 'from-orange-100 to-orange-50'
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className={`p-8 bg-gradient-to-br ${service.color} rounded-xl border border-gray-200 hover:shadow-lg transition`}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 border-y-4 border-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              🎉 Heartfelt Congratulations! 🎉
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              To the entire Frontlines Edutech team on being recognized as one of India's top startups.
              Your dedication to transforming education and making quality learning accessible to all is truly inspiring.
            </p>
            <p className="text-lg text-gray-600 mb-12">
              This recognition is a testament to your innovation, hard work, and unwavering commitment to excellence.
              We look forward to seeing even greater achievements ahead!
            </p>
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white text-lg"
            >
              Join the FLM Community <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Learning Journey?</h2>
            <p className="text-xl text-blue-100 mb-10">
              Join thousands of students who are already learning with Frontlines Edutech
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gap-2 bg-white text-blue-600 hover:bg-blue-50 text-lg font-semibold"
              >
                Get Started Now <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white text-white hover:bg-blue-700 text-lg"
              >
                Learn More <ExternalLink className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold text-lg mb-4">Frontlines Edutech</h4>
              <p className="text-gray-400">Transforming education through innovation</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
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
                <a href="https://www.linkedin.com/company/frontlines-edutech-private-limited-flm/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-blue-400 transition">Twitter</a>
                <a href="#" className="hover:text-pink-400 transition">Instagram</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Frontlines Edutech (FLM). All rights reserved.</p>
            <p className="mt-2 text-sm">Created as a celebration of innovation and excellence in education</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
