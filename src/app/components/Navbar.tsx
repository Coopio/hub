'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  GlobeAltIcon, // Icon for "The Hub"
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

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleDropdownToggle = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleWindowClick = (event: MouseEvent) => {
      if (dropdownRefs.current.every(ref => ref && !ref.contains(event.target as Node))) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  const iconClass = "h-8 w-8 text-orange-500 flex-shrink-0";  // Consistent styling for all icons
  const titleClass = "font-bold";  // Styling for titles

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold flex items-center space-x-2">
          <GlobeAltIcon className="h-14 w-14 text-orange-500 flex-shrink-0" /> {/* New Icon for "The Hub" */}
          <span>BARS</span>
        </div>
        <div className="flex space-x-4">
          {/* Dashboard */}
          <Link href="/" className="text-white flex items-center space-x-2">
            <RectangleGroupIcon className={iconClass} />
            <div>
              <span className={titleClass}>Dashboard</span>

            </div>
          </Link>

          {/* Markets Dropdown */}
          <div className="relative" ref={(el) => (dropdownRefs.current[0] = el)}>
            <button
              className="text-white flex items-center space-x-2"
              onClick={() => handleDropdownToggle('markets')}
            >
              <ChartBarIcon className={iconClass} />
              <div>
                <span className={titleClass}>Markets</span>
                <p className="text-sm text-gray-300">Prices & Trends</p>
              </div>
            </button>
            {openDropdown === 'markets' && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg p-2 z-50">
                <Link href="/cryptocurrencies" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <CurrencyDollarIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>Cryptocurrencies</span>
                    <p className="text-sm text-gray-600">Market prices, volume, and trends.</p>
                  </div>
                </Link>
                <Link href="/defi" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <BeakerIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>DeFi</span>
                    <p className="text-sm text-gray-600">Performance of DeFi tokens and projects.</p>
                  </div>
                </Link>
                <Link href="/memecoins" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <ArrowsUpDownIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>Memecoins</span>
                    <p className="text-sm text-gray-600">Performance and trends of popular memecoins.</p>
                  </div>
                </Link>
                <Link href="/runes" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <RocketLaunchIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>Runes</span>
                    <p className="text-sm text-gray-600">Market data for Runes.</p>
                  </div>
                </Link>
                <Link href="/nfts" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <CubeTransparentIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>NFTs</span>
                    <p className="text-sm text-gray-600">Marketplace activity and trending collections.</p>
                  </div>
                </Link>
                <Link href="/ordinals" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <PencilSquareIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>Ordinals</span>
                    <p className="text-sm text-gray-600">Market data and trends for Bitcoin Ordinals.</p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* News Dropdown */}
          <div className="relative" ref={(el) => (dropdownRefs.current[1] = el)}>
            <button
              className="text-white flex items-center space-x-2"
              onClick={() => handleDropdownToggle('news')}
            >
              <NewspaperIcon className={iconClass} />
              <div>
                <span className={titleClass}>News</span>
                <p className="text-sm text-gray-300">Analysis & Updates</p>
              </div>
            </button>
            {openDropdown === 'news' && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg p-2 z-50">
                <Link href="/crypto-news" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <SpeakerWaveIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>Crypto News</span>
                    <p className="text-sm text-gray-600">General news in the cryptocurrency space.</p>
                  </div>
                </Link>
                <Link href="/defi-news" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <CurrencyEuroIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>DeFi News</span>
                    <p className="text-sm text-gray-600">Updates and trends in decentralized finance.</p>
                  </div>
                </Link>
                <Link href="/web3-blockchain" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <SignalIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>Web3 & Blockchain</span>
                    <p className="text-sm text-gray-600">Developments in Web3 and blockchain technology.</p>
                  </div>
                </Link>
                <Link href="/market-reports" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <ClipboardIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>Market Reports</span>
                    <p className="text-sm text-gray-600">In-depth market analysis and reports.</p>
                  </div>
                </Link>
                <Link href="/social-buzz" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <UserGroupIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>Social Buzz</span>
                    <p className="text-sm text-gray-600">Aggregated social media updates.</p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Analytics Dropdown */}
          <div className="relative" ref={(el) => (dropdownRefs.current[2] = el)}>
            <button
              className="text-white flex items-center space-x-2"
              onClick={() => handleDropdownToggle('analytics')}
            >
              <ComputerDesktopIcon className={iconClass} />
              <div>
                <span className={titleClass}>Analytics</span>
                <p className="text-sm text-gray-300">Tools & Signals</p>
              </div>
            </button>
            {openDropdown === 'analytics' && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg p-2 z-50">
                <Link href="/trading-tools" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <ChartPieIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>Trading Tools</span>
                    <p className="text-sm text-gray-600">Price trackers, charting tools, signals.</p>
                  </div>
                </Link>
                <Link href="/on-chain-analytics" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <DocumentChartBarIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>On-Chain Analytics</span>
                    <p className="text-sm text-gray-600">Access analytics platforms like Glassnode and Dune.</p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Invest & Trade Dropdown */}
          <div className="relative" ref={(el) => (dropdownRefs.current[3] = el)}>
            <button
              className="text-white flex items-center space-x-2"
              onClick={() => handleDropdownToggle('invest')}
            >
              <PresentationChartBarIcon className={iconClass} />
              <div>
                <span className={titleClass}>Trade</span>
                <p className="text-sm text-gray-300">Spot & Futures</p>
              </div>
            </button>
            {openDropdown === 'invest' && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg p-2 z-50">
                <Link href="/copy-trading" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <DocumentTextIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>Copy Trading</span>
                    <p className="text-sm text-gray-600">Analytics on trading bots and copy strategies.</p>
                  </div>
                </Link>
                <Link href="/crypto-trading" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <ArrowTrendingUpIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>Crypto Trading</span>
                    <p className="text-sm text-gray-600">Quick Buy, Spot Market, and P2P Trading.</p>
                  </div>
                </Link>
                <Link href="/bot-trading-tools" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <WrenchScrewdriverIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>Bot Trading Tools</span>
                    <p className="text-sm text-gray-600">Tools for grid, arbitrage, and high-frequency trading.</p>
                  </div>
                </Link>
                <Link href="/defi-trading" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <AdjustmentsHorizontalIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>DeFi Trading</span>
                    <p className="text-sm text-gray-600">Token Swap and Bridges on DEXs.</p>
                  </div>
                </Link>
                <Link href="/web3-trading" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <BookOpenIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>Web3 Trading</span>
                    <p className="text-sm text-gray-600">Trade NFTs, Ordinals, and Runes.</p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Airdrops Dropdown */}
          <div className="relative" ref={(el) => (dropdownRefs.current[4] = el)}>
            <button
              className="text-white flex items-center space-x-2"
              onClick={() => handleDropdownToggle('airdrops')}
            >
              <FireIcon className={iconClass} />
              <div>
                <span className={titleClass}>Airdrops</span>
                <p className="text-sm text-gray-300">Presales & Whitelists</p>
              </div>
            </button>
            {openDropdown === 'airdrops' && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg p-2 z-50">
                <Link href="/airdrops-pre-markets" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <CubeIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>Airdrops & Pre-Markets</span>
                    <p className="text-sm text-gray-600">Token Presales, Airdrop Trackers, Whitelist Entries, and Bounty Programs.</p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Community Dropdown */}
          <div className="relative" ref={(el) => (dropdownRefs.current[5] = el)}>
            <button
              className="text-white flex items-center space-x-2"
              onClick={() => handleDropdownToggle('community')}
            >
              <UserGroupIcon className={iconClass} />
              <div>
                <span className={titleClass}>Community</span>
                <p className="text-sm text-gray-300">The Crypto People</p>
              </div>
            </button>
            {openDropdown === 'community' && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg p-2 z-50">
                <Link href="/forums-discussions" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <IdentificationIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>Forums & Discussions</span>
                    <p className="text-sm text-gray-600">Join user forums for discussions and insights.</p>
                  </div>
                </Link>
                <Link href="/social-media-feeds" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <HandRaisedIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>Social Media Feeds</span>
                    <p className="text-sm text-gray-600">Real-time updates from influencers and platforms.</p>
                  </div>
                </Link>
                <Link href="/community-initiatives" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <Squares2X2Icon className={iconClass} />
                  <div>
                    <span className={titleClass}>Community Initiatives</span>
                    <p className="text-sm text-gray-600">DAOs, governance proposals, and community voting.</p>
                  </div>
                </Link>
                <Link href="/events-meetups" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center space-x-2">
                  <BookOpenIcon className={iconClass} />
                  <div>
                    <span className={titleClass}>Events & Meetups</span>
                    <p className="text-sm text-gray-600">Listings of upcoming webinars and conferences.</p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
