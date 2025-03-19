import React, { useEffect, useState } from 'react';
import { BookOpen, Download, ExternalLink, Newspaper } from 'lucide-react';

interface NewsItem {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  source: string;
}

const EbookPage = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/api/news/health', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch news: ${response.status}`);
        }

        const data = await response.json();
        console.log("daata here", data);
        if (data.status === 'error') {
          throw new Error(data.message || 'Failed to fetch news');
        }

        // Transform the data to match our interface
        const transformedNews: NewsItem[] = data.articles
          .filter((item: any) => item.title && !item.title.includes('[Removed]'))
          .map((item: any) => ({
            title: item.title,
            description: item.description || 'No description available',
            url: item.url,
            image: item.urlToImage,
            publishedAt: new Date(item.publishedAt).toLocaleDateString(),
            source: item.source.name
          }));

        setNews(transformedNews);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Unable to load latest health news. Please try again later.');
        // Generate more dynamic fallback data
        const today = new Date().toLocaleDateString();
        setNews([
          {
            title: "New Cancer Treatment Shows Promise in Clinical Trials",
            description: "Researchers have developed a novel approach to cancer treatment that targets specific genetic mutations.",
            url: "#",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
            publishedAt: today,
            source: "Cancer Research Journal"
          },
          {
            title: "Breakthrough in Early Cancer Detection",
            description: "Scientists have discovered a new blood test that can detect multiple types of cancer at early stages.",
            url: "#",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
            publishedAt: today,
            source: "Medical News Today"
          },
          {
            title: "Lifestyle Changes That May Help Prevent Cancer",
            description: "New study reveals the impact of diet and exercise on cancer prevention.",
            url: "#",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
            publishedAt: today,
            source: "Health & Wellness Magazine"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const resources = [
    {
      title: "Understanding Cancer: A Comprehensive Guide",
      description: "A complete guide covering cancer basics, prevention, and treatment options.",
      format: "PDF",
      size: "2.5 MB",
      language: "English",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "कैंसर से जुड़ी बुनियादी जानकारी",
      description: "कैंसर के बारे में महत्वपूर्ण जानकारी और मार्गदर्शन।",
      format: "PDF",
      size: "1.8 MB",
      language: "Hindi",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cancer Prevention Lifestyle Guide",
      description: "Daily habits and lifestyle changes for cancer prevention.",
      format: "PDF",
      size: "3.2 MB",
      language: "English",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Latest News Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-primary-900">Latest Health News</h2>
          <Newspaper className="h-8 w-8 text-primary-600" />
        </div>
        
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          </div>
        ) : error ? (
          <div className="text-center py-8 text-gray-600">
            {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <a 
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={item.image || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-primary-600 mb-2">
                    {item.source} • {item.publishedAt}
                  </p>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* Resources Section */}
      <section>
        <h2 className="text-3xl font-bold text-primary-900 mb-8">Educational Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Format: {resource.format}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Download className="h-4 w-4 mr-2" />
                    Size: {resource.size}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Language: {resource.language}
                  </div>
                </div>

                <button className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition flex items-center justify-center">
                  <Download className="h-5 w-5 mr-2" />
                  Download Free
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary-50 rounded-xl p-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-900 mb-6">Why Our Resources?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Expert-Reviewed Content</h3>
              <p className="text-gray-600">
                All our resources are reviewed and verified by leading oncologists and healthcare professionals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Regular Updates</h3>
              <p className="text-gray-600">
                Our content is regularly updated to reflect the latest research and medical advancements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EbookPage;