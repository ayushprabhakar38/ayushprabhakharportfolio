import devOpsIllustration from "figma:asset/0f2b8240daa0ca412dd09132e094a609cdc258d9.png";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="neuro-section">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block neuro-card-sm px-6 py-3 mb-6">
                <p className="text-sm" style={{ color: 'var(--neuro-text-secondary)' }}>
                  DevOps Professional
                </p>
              </div>
              
              <h1 className="mb-6" style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                color: 'var(--neuro-text-primary)',
                lineHeight: '1.2'
              }}>
                Ayush Prabhakar
              </h1>
              
              <p className="mb-8" style={{ 
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                color: 'var(--neuro-text-secondary)',
                lineHeight: '1.6'
              }}>
                Building, automating, and scaling reliable systems
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="#contact" className="neuro-button">
                  Get in Touch
                </a>
                <a href="#skills" className="neuro-button">
                  View Skills
                </a>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className="neuro-card p-8">
                <img 
                  src={devOpsIllustration} 
                  alt="DevOps Professional" 
                  className="w-full max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
