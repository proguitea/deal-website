import { motion } from 'framer-motion';

const enterVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function RealtyHub() {
  return (
    <section className="bg-anthracite" style={{ borderTop: '1px solid rgba(201,169,110,0.5)' }}>
      <div className="mx-auto px-6" style={{ maxWidth: '680px', paddingTop: '80px', paddingBottom: '80px' }}>
        <motion.div
          variants={enterVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col md:flex-row gap-10 md:gap-14 items-start"
        >
          {/* Left column — 60% */}
          <div className="flex flex-col gap-5 w-full md:w-[60%]">
            <span
              className="font-display text-jade flex items-center gap-2"
              style={{ fontSize: '7px', letterSpacing: '5px', opacity: 0.7 }}
            >
              {/* Live pulse — subtle red accent signalling on-chain activity */}
              <motion.span
                aria-hidden="true"
                className="inline-block w-1 h-1 rounded-full bg-red"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
              REALTY HUB
            </span>

            <h2
              className="font-display font-bold text-brass"
              style={{ fontSize: '28px', lineHeight: 1.15, letterSpacing: '0.04em' }}
            >
              The deal behind the deal.
            </h2>

            <p
              className="font-mono text-offwhite/70"
              style={{ fontSize: '13px', lineHeight: 1.8, fontWeight: 300 }}
            >
              DEAL is the first physical location of{' '}
              <a
                href="http://demonopol.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brass/80 hover:text-brass transition-colors duration-200"
                style={{ textDecoration: 'none' }}
              >
                Demonopol.com
              </a>{' '}
              —<br />
              a real estate ecosystem built on the Tay Ho corridor.<br />
              Property ownership. Tokenized. Starting from 1 USD.<br />
              The café is where it begins.
            </p>

            <a
              href="http://demonopol.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-brass/50 hover:text-brass transition-colors duration-200"
              style={{ fontSize: '13px', textDecoration: 'none' }}
            >
              demonopol.com →
            </a>

            <p
              className="font-mono text-offwhite/25"
              style={{ fontSize: '10px', letterSpacing: '0.5px' }}
            >
              Interior QR available at the deal table.
            </p>
          </div>

          {/* Right column — 40% */}
          <div className="flex flex-col items-center gap-4 w-full md:w-[40%]">
            <div
              style={{
                width: '120px',
                height: '120px',
                border: '1px dashed rgba(201,169,110,0.28)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <img
                id="demonopol-qr"
                src="/qr-placeholder.svg"
                alt=""
                width={120}
                height={120}
              />
            </div>

            <span
              className="font-display text-jade"
              style={{ fontSize: '7px', letterSpacing: '4px', opacity: 0.6, textAlign: 'center' }}
            >
              SCAN · DEMONOPOL.COM
            </span>

            <div className="flex flex-row gap-2 flex-wrap justify-center">
              {(['From 1 USD', 'Tay Ho', 'On-chain'] as const).map((pill) => (
                <span
                  key={pill}
                  className="font-display text-brass"
                  style={{
                    fontSize: '7px',
                    letterSpacing: '2px',
                    padding: '4px 10px',
                    border: '0.5px solid rgba(201,169,110,0.4)',
                    background: 'transparent',
                    textTransform: 'uppercase',
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
