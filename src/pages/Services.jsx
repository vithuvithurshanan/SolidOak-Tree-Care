import { business } from '../data/business'
import { services } from '../data/services'
import { usePageTitle } from '../hooks/usePageTitle'
import ArrowButton from '../components/ArrowButton'
import './Services.css'

const serviceDetails = {
  'tree-removal': {
    description:
      'Whether it\'s a dead tree threatening your home, a storm-damaged trunk, or a tree in the wrong spot, our crew handles removals of any size safely and efficiently. We use rigging, climbing, and crane techniques depending on access and tree size — always with full cleanup afterward.',
    bullets: [
      'Residential & commercial properties',
      'Any size — small ornamentals to 80-ft hardwoods',
      'Lot clearing and multi-tree projects',
      'Full debris haul-away included',
    ],
  },
  'tree-trimming-pruning': {
    description:
      'Proper pruning improves tree health, reduces storm risk, and keeps your property looking sharp. Our ISA-trained crew removes dead wood, shapes the canopy, and clears branches from structures — without over-trimming or damaging the tree.',
    bullets: [
      'Crown thinning & canopy shaping',
      'Dead wood & hazard limb removal',
      'Clearance pruning from roofs and power lines',
      'Fruit tree and ornamental pruning',
    ],
  },
  'stump-grinding': {
    description:
      'Left-behind stumps are tripping hazards, attract pests, and prevent new planting. Our stump grinder chews stumps down below grade so you can re-seed, landscape, or build over the area.',
    bullets: [
      'Ground 6–12 inches below surface',
      'Multiple stumps — bulk pricing available',
      'Chips left on-site or hauled away',
      'Backfill and leveling included',
    ],
  },
  'emergency-tree-service': {
    description:
      'Storms don\'t wait for business hours — and neither do we. Our emergency team is on-call to respond to fallen trees, hanging limbs, and storm damage before they cause more harm to your property.',
    bullets: [
      '24/7 emergency dispatch',
      'Same-day response to storm calls',
      'Roof and vehicle extrication',
      'Insurance documentation photos available',
    ],
  },
  'land-clearing': {
    description:
      'Clearing a wooded lot, prepping for a build, or reclaiming an overgrown property? We remove trees, brush, and stumps to leave a clean, graded surface ready for your next project.',
    bullets: [
      'Residential lot clearing',
      'New construction site prep',
      'Brush and shrub removal',
      'Stump grinding included in clearing packages',
    ],
  },
  'tree-health-consulting': {
    description:
      'Not sure if a tree is healthy, hazardous, or worth saving? Our arborist consults assess tree structure, disease, pest damage, and storm risk — giving you a clear action plan backed by professional expertise.',
    bullets: [
      'Visual risk assessment & written report',
      'Disease and pest identification',
      'Treatment and fertilization recommendations',
      'Pre-purchase property inspections',
    ],
  },
}

const tileColors = ['green', 'rust', 'olive', 'charcoal', 'green', 'rust']

function Services() {
  usePageTitle('Tree Care Services')

  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container page-hero-card services-hero-card">
          <div className="pill pill-light">Our Services</div>
          <h1>Tree Care for Every Property</h1>
          <p>
            {business.name} offers a full range of professional tree services
            for residential and commercial properties in Buffalo, NY.
          </p>
        </div>
      </section>

      <section>
        <div className="container services-grid">
          {services.map((service, index) => {
            const detail = serviceDetails[service.slug]
            const color = tileColors[index % tileColors.length]
            return (
              <div className={`service-card service-card-${color}`} key={service.slug}>
                <div className="service-card-top">
                  <div className="service-card-icon">{service.icon}</div>
                  <div className="pill pill-light service-card-pill">{service.title}</div>
                </div>
                <h2>{service.title}</h2>
                {detail && (
                  <>
                    <p className="service-card-desc">{detail.description}</p>
                    <ul className="service-card-bullets">
                      {detail.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </>
                )}
                <div className="service-card-cta">
                  <ArrowButton to="/contact" variant="light">
                    Get a Quote
                  </ArrowButton>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <h2>Not Sure Which Service You Need?</h2>
          <p>Contact us for a free consultation and estimate.</p>
          <ArrowButton to="/contact" variant="light">
            Get a Free Quote
          </ArrowButton>
        </div>
      </section>
    </div>
  )
}

export default Services
