import Link from 'next/link';
import {
  RectangleGroupIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  BeakerIcon,
  ArrowsUpDownIcon,
  RocketLaunchIcon,
  CubeTransparentIcon,
  PencilSquareIcon,
  NewspaperIcon,
  SpeakerWaveIcon,
  CurrencyEuroIcon,
  SignalIcon,
  ClipboardIcon,
  UserGroupIcon,
  ComputerDesktopIcon,
  ChartPieIcon,
  DocumentChartBarIcon,
  PresentationChartBarIcon,
  DocumentTextIcon,
  ArrowTrendingUpIcon,
  WrenchScrewdriverIcon,
  AdjustmentsHorizontalIcon,
  BookOpenIcon,
  FireIcon,
  CubeIcon,
  IdentificationIcon,
  HandRaisedIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';

export default function Home() {
  const iconWrapperClass = "flex items-center justify-center h-12 w-12 bg-orange-100 rounded-full";  // Consistent wrapper for all icons
  const iconClass = "h-8 w-8 text-orange-500";  // Consistent styling for all icons
  const titleClass = "font-bold text-lg";  // Styling for titles
  const descriptionClass = "text-sm text-gray-600"; // Styling for descriptions
  const sectionClass = "bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300";

  const sections = [
    {
      category: 'Dashboard',
      items: [
        {
          href: '/',
          icon: <RectangleGroupIcon className={iconClass} />,
          title: 'Dashboard',
          description: 'Main dashboard with an overview of all activities.',
        }
      ]
    },
    {
      category: 'Markets',
      items: [
        {
          href: '/cryptocurrencies',
          icon: <CurrencyDollarIcon className={iconClass} />,
          title: 'Cryptocurrencies',
          description: 'Market prices, volume, and trends of various cryptocurrencies.',
        },
        {
          href: '/defi',
          icon: <BeakerIcon className={iconClass} />,
          title: 'DeFi',
          description: 'Performance and analytics of DeFi tokens and projects.',
        },
        {
          href: '/memecoins',
          icon: <ArrowsUpDownIcon className={iconClass} />,
          title: 'Memecoins',
          description: 'Trends and market data of popular memecoins.',
        },
        {
          href: '/runes',
          icon: <RocketLaunchIcon className={iconClass} />,
          title: 'Runes',
          description: 'Detailed market data for Runes tokens.',
        },
        {
          href: '/nfts',
          icon: <CubeTransparentIcon className={iconClass} />,
          title: 'NFTs',
          description: 'Overview of the NFT marketplace activity and trending collections.',
        },
        {
          href: '/ordinals',
          icon: <PencilSquareIcon className={iconClass} />,
          title: 'Ordinals',
          description: 'Market data and trends for Bitcoin Ordinals.',
        }
      ]
    },
    {
      category: 'News & Analysis',
      items: [
        {
          href: '/crypto-news',
          icon: <SpeakerWaveIcon className={iconClass} />,
          title: 'Crypto News',
          description: 'Stay updated with the latest news in the cryptocurrency space.',
        },
        {
          href: '/defi-news',
          icon: <CurrencyEuroIcon className={iconClass} />,
          title: 'DeFi News',
          description: 'Latest updates and trends in decentralized finance.',
        },
        {
          href: '/web3-blockchain',
          icon: <SignalIcon className={iconClass} />,
          title: 'Web3 & Blockchain',
          description: 'Developments and news in Web3 and blockchain technology.',
        },
        {
          href: '/market-reports',
          icon: <ClipboardIcon className={iconClass} />,
          title: 'Market Reports',
          description: 'In-depth market analysis and reports.',
        }
      ]
    },
    {
      category: 'Tools & Analytics',
      items: [
        {
          href: '/trading-tools',
          icon: <ChartPieIcon className={iconClass} />,
          title: 'Trading Tools',
          description: 'Access various tools for price tracking, charting, and signals.',
        },
        {
          href: '/on-chain-analytics',
          icon: <DocumentChartBarIcon className={iconClass} />,
          title: 'On-Chain Analytics',
          description: 'Explore analytics platforms like Glassnode and Dune.',
        }
      ]
    },
    {
      category: 'Trading',
      items: [
        {
          href: '/copy-trading',
          icon: <DocumentTextIcon className={iconClass} />,
          title: 'Copy Trading',
          description: 'Learn about copy trading strategies and performance analytics.',
        },
        {
          href: '/crypto-trading',
          icon: <ArrowTrendingUpIcon className={iconClass} />,
          title: 'Crypto Trading',
          description: 'Quick access to spot market, P2P, and other trading options.',
        },
        {
          href: '/bot-trading-tools',
          icon: <WrenchScrewdriverIcon className={iconClass} />,
          title: 'Bot Trading Tools',
          description: 'Tools for grid, arbitrage, and high-frequency trading.',
        },
        {
          href: '/defi-trading',
          icon: <AdjustmentsHorizontalIcon className={iconClass} />,
          title: 'DeFi Trading',
          description: 'Token swaps and bridges on decentralized exchanges (DEXs).',
        },
        {
          href: '/web3-trading',
          icon: <BookOpenIcon className={iconClass} />,
          title: 'Web3 Trading',
          description: 'Trade NFTs, Ordinals, and Runes in the Web3 ecosystem.',
        }
      ]
    },
    {
      category: 'Airdrops & Community',
      items: [
        {
          href: '/airdrops-pre-markets',
          icon: <FireIcon className={iconClass} />,
          title: 'Airdrops & Pre-Markets',
          description: 'Track airdrops, token presales, whitelist entries, and bounty programs.',
        },
        {
          href: '/forums-discussions',
          icon: <IdentificationIcon className={iconClass} />,
          title: 'Forums & Discussions',
          description: 'Join community discussions and forums for insights and networking.',
        },
        {
          href: '/social-media-feeds',
          icon: <HandRaisedIcon className={iconClass} />,
          title: 'Social Media Feeds',
          description: 'Real-time updates from influencers and key platforms.',
        },
        {
          href: '/community-initiatives',
          icon: <Squares2X2Icon className={iconClass} />,
          title: 'Community Initiatives',
          description: 'Participate in DAOs, governance proposals, and community voting.',
        },
        {
          href: '/events-meetups',
          icon: <BookOpenIcon className={iconClass} />,
          title: 'Events & Meetups',
          description: 'Find upcoming webinars, conferences, and community events.',
        }
      ]
    }
  ];

  return (
    <main className="pt-24 flex min-h-screen flex-col items-center justify-start p-10 bg-gray-100">
      <div className="w-full max-w-7xl">
        {sections.map((section) => (
          <div key={section.category} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{section.category}</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {section.items.map((item) => (
                <Link href={item.href} key={item.title} className={sectionClass}>
                  <div className="flex items-center space-x-4">
                    <div className={iconWrapperClass}>{item.icon}</div> {/* Wrapper around icon */}
                    <div>
                      <h3 className={titleClass}>{item.title}</h3>
                      <p className={descriptionClass}>{item.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
