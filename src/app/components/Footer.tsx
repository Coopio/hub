"use client";

import { useEffect } from 'react';

const Footer: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        { "proName": "FOREXCOM:SPXUSD", "title": "S&P 500 Index" },
        { "description": "FTSE100", "proName": "VANTAGE:UK100" },
        { "description": "Bitcoin", "proName": "BINANCE:BTCUSDT" },
        { "description": "Ethereum", "proName": "BINANCE:ETHUSDT" },
        { "description": "Solana", "proName": "BINANCE:SOLUSDT" },
        { "description": "BIST", "proName": "BIST:XU100" },
        { "description": "Bonk", "proName": "BINANCE:BONKUSDT" },
        { "description": "Ape", "proName": "BINANCE:APEUSDT" },
        { "description": "Arbitrum", "proName": "BINANCE:ARBUSDT" },
        { "description": "Jupiter", "proName": "BINANCE:JUPUSDT" },
        { "description": "Doge", "proName": "BINANCE:DOGEUSDT" },
        { "description": "Floki", "proName": "BINANCE:FLOKIUSDT" },
        { "description": "Dymension", "proName": "BINANCE:DYMUSDT" },
        { "description": "SolChat", "proName": "GATEIO:CHATUSDT" },
        { "description": "Dog (Rune)", "proName": "MEXC:DOGUSDT" }
      ],
      "showSymbolLogo": true,
      "isTransparent": false,
      "displayMode": "adaptive",
      "colorTheme": "light",
      "locale": "en"
    });
    document.getElementById('tradingview-widget')?.appendChild(script);
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white shadow-md z-50">
      <div id="tradingview-widget" className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </footer>
  );
};

export default Footer;
