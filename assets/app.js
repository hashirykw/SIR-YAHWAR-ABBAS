/* ---------------------------------------------------------------------------
   RA.DATA — Physics syllabus, papers, equations, laws, terms, practice bank.
   Syllabus outcomes are summarised in our own words from Cambridge
   International's published syllabuses:
     O Level Physics 5054 — 2026–2028 (v2)
     IGCSE Physics 0625 — 2026–2028
     AS & A Level Physics 9702 — 2025–2027
   --------------------------------------------------------------------------- */
window.RA = window.RA || {};
RA.DATA = (function () {

/* ------------------------------------------------------------------ 5054 */
const O = {
  code: '5054', name: 'O Level Physics', short: 'O Level', years: '2026–2028',
  sections: [
  { n: 1, t: 'Motion, forces and energy', topics: [
    { n: '1.1', t: 'Physical quantities and measurement techniques', pts: [
      'Measure length and volume with rules, tapes, micrometers and measuring cylinders, and by displacement',
      'Time with clocks and digital timers; average many readings to measure a small distance or a short interval',
      'Scalars against vectors, and the resultant of two perpendicular vectors by drawing or calculation'],
      terms: ['Scalar', 'Vector', 'Resultant'] },
    { n: '1.2', t: 'Motion', pts: [
      'Speed, velocity and acceleration, including average speed for a whole journey',
      'Reading distance–time and speed–time graphs: the gradient and the area under the line',
      'Free fall near the Earth at about 9.8 m/s²'],
      terms: ['Speed', 'Velocity', 'Acceleration'], formula: 'v = s / t  ·  a = Δv / Δt', lab: 'motion' },
    { n: '1.3', t: 'Mass and weight', pts: [
      'Mass as the amount of matter and its resistance to a change in motion',
      'Weight as the gravitational force on a mass, measured with a force meter',
      'Gravitational field strength as weight per unit mass, equal to the free-fall acceleration'],
      terms: ['Mass', 'Weight', 'Gravitational field strength'], formula: 'g = W / m' },
    { n: '1.4', t: 'Density', pts: [
      'Density as mass per unit volume',
      'Measuring the density of a liquid, a regular solid and an irregular solid that sinks',
      'Predicting whether an object floats from its density'],
      terms: ['Density'], formula: 'ρ = m / V' },
    { n: '1.5.1', t: 'Balanced and unbalanced forces', pts: [
      'Naming forces and drawing free-body diagrams',
      'Newton’s first and third laws in everyday situations',
      'Resultant force along a line and F = ma'],
      terms: ['Resultant force', 'Newton’s first law', 'Newton’s third law'], formula: 'F = ma', lab: 'forces' },
    { n: '1.5.2', t: 'Friction', pts: [
      'Friction, drag and air resistance oppose motion and can heat surfaces',
      'Terminal velocity for an object with a constant driving force',
      'Thinking, braking and stopping distance and what changes each one'],
      terms: ['Friction', 'Drag', 'Terminal velocity'], lab: 'forces' },
    { n: '1.5.3', t: 'Elastic deformation', pts: [
      'Forces change the size and shape of an object',
      'Load–extension graphs and the spring constant',
      'The limit of proportionality on a load–extension graph'],
      terms: ['Spring constant', 'Limit of proportionality'], formula: 'k = F / x' },
    { n: '1.5.4', t: 'Circular motion', pts: [
      'A force at right angles to the motion changes direction but not speed',
      'How the force needed changes with speed, radius and mass (qualitative)',
      'F = mv²/r is not needed at O Level'],
      terms: ['Centripetal force'] },
    { n: '1.5.5', t: 'Turning effect of forces', pts: [
      'Moment as force × perpendicular distance from the pivot',
      'The principle of moments for an object in equilibrium',
      'An experiment to check the principle of moments'],
      terms: ['Moment', 'Principle of moments', 'Equilibrium'], formula: 'moment = F × d' },
    { n: '1.5.6', t: 'Centre of gravity', pts: [
      'What the centre of gravity is',
      'Finding the centre of gravity of a lamina with a plumb line',
      'How the position of the centre of gravity affects stability'],
      terms: ['Centre of gravity', 'Stability'] },
    { n: '1.6', t: 'Momentum', pts: [
      'Momentum p = mv and impulse FΔt = Δ(mv)',
      'Resultant force as the rate of change of momentum',
      'Conservation of momentum in one dimension'],
      terms: ['Momentum', 'Impulse'], formula: 'p = mv  ·  FΔt = Δ(mv)', lab: 'forces' },
    { n: '1.7.1', t: 'Energy', pts: [
      'Energy stores: kinetic, gravitational potential, chemical, elastic, nuclear, electrostatic, internal',
      'Energy transferred mechanically, electrically, by heating and by waves, and always conserved',
      'Kinetic energy ½mv² and change in gravitational potential energy mgΔh'],
      terms: ['Kinetic energy', 'Gravitational potential energy', 'Conservation of energy'], formula: 'Eₖ = ½mv²  ·  ΔEₚ = mgΔh', lab: 'energy' },
    { n: '1.7.2', t: 'Work', pts: [
      'Work done as force × distance moved in the direction of the force',
      'Work done is energy transferred',
      'Calculations with W = Fd'],
      terms: ['Work done'], formula: 'W = Fd' },
    { n: '1.7.3', t: 'Energy resources', pts: [
      'Renewable and non-renewable sources',
      'How each source turns a turbine and generator, or does not',
      'Comparing sources on cost, availability, reliability and environmental impact'],
      terms: ['Renewable', 'Non-renewable'] },
    { n: '1.7.4', t: 'Efficiency', pts: [
      'Efficiency in terms of energy and in terms of power',
      'Expressing efficiency as a percentage',
      'Why no real machine is 100% efficient'],
      terms: ['Efficiency'], formula: 'efficiency = useful output ÷ total input × 100%', lab: 'energy' },
    { n: '1.7.5', t: 'Power', pts: [
      'Power as work done or energy transferred per unit time',
      'The watt as one joule per second',
      'Calculations with P = W/t and P = ΔE/t'],
      terms: ['Power'], formula: 'P = W / t' },
    { n: '1.8', t: 'Pressure', pts: [
      'Pressure as force per unit area, with everyday examples',
      'Pressure in a liquid acts in all directions and rises with depth',
      'Change in pressure beneath a liquid surface Δp = ρgΔh'],
      terms: ['Pressure'], formula: 'p = F / A  ·  Δp = ρgΔh' }
  ]},
  { n: 2, t: 'Thermal physics', topics: [
    { n: '2.1.1', t: 'States of matter', pts: [
      'Properties of solids, liquids and gases',
      'Names for each change of state',
      'Changes of state transfer energy'],
      terms: ['Melting', 'Boiling', 'Condensation'] },
    { n: '2.1.2', t: 'Particle model', pts: [
      'Arrangement and motion of particles in each state',
      'Temperature and the kinetic energy of particles; absolute zero at −273 °C',
      'Gas pressure from particle collisions, and pV = constant at constant temperature'],
      terms: ['Absolute zero', 'Brownian motion'], formula: 'p₁V₁ = p₂V₂' },
    { n: '2.2.1', t: 'Thermal expansion', pts: [
      'Uses and consequences of expansion, including the liquid-in-glass thermometer',
      'Expansion in solids, liquids and gases compared, in particle terms',
      'Converting between kelvin and degrees Celsius'],
      terms: ['Thermal expansion'], formula: 'T (K) = θ (°C) + 273' },
    { n: '2.2.2', t: 'Specific heat capacity', pts: [
      'A temperature rise is a rise in internal energy',
      'Specific heat capacity as energy per kilogram per degree',
      'Experiments to measure it for a solid and a liquid'],
      terms: ['Specific heat capacity', 'Internal energy'], formula: 'c = ΔE / (mΔθ)', lab: 'heat' },
    { n: '2.2.3', t: 'Melting, boiling and evaporation', pts: [
      'Energy goes in during melting and boiling with no change in temperature',
      'Boiling against evaporation, and why evaporation cools',
      'Melting and boiling points of water at standard pressure'],
      terms: ['Evaporation', 'Latent heat'], lab: 'heat' },
    { n: '2.3.1', t: 'Conduction', pts: [
      'Experiments that compare good and bad thermal conductors',
      'Lattice vibrations, plus free electrons in metals',
      'Choosing materials for their conductivity'],
      terms: ['Conduction', 'Insulator'] },
    { n: '2.3.2', t: 'Convection', pts: [
      'Convection in liquids and gases comes from density changes',
      'Experiments that show convection currents',
      'Everyday heating by convection'],
      terms: ['Convection'] },
    { n: '2.3.3', t: 'Radiation', pts: [
      'Infrared radiation needs no medium',
      'How surface colour and texture affect emission, absorption and reflection',
      'Emission rate rises with surface temperature and surface area'],
      terms: ['Infrared radiation'] },
    { n: '2.3.4', t: 'Consequences of thermal energy transfer', pts: [
      'Cooking pans, room heaters and infrared thermometers explained',
      'Keeping a drink hot or cold, and insulating a building',
      'Applying all three transfer methods to one design'],
      terms: [] }
  ]},
  { n: 3, t: 'Waves', topics: [
    { n: '3.1', t: 'General properties of waves', pts: [
      'Waves move energy, not matter; transverse against longitudinal',
      'Wave speed, frequency, wavelength and amplitude',
      'Reflection, refraction and diffraction in a ripple tank'],
      terms: ['Wavelength', 'Frequency', 'Amplitude'], formula: 'v = fλ', lab: 'waves' },
    { n: '3.2.1', t: 'Reflection of light', pts: [
      'Normal, angle of incidence and angle of reflection',
      'The law of reflection',
      'The image in a plane mirror'],
      terms: ['Normal', 'Virtual image'], lab: 'refract' },
    { n: '3.2.2', t: 'Refraction of light', pts: [
      'Refraction at a boundary and refractive index',
      'Critical angle and total internal reflection',
      'Optical fibres in communication and medicine'],
      terms: ['Refractive index', 'Critical angle', 'Total internal reflection'], formula: 'n = sin i / sin r  ·  n = 1 / sin c', lab: 'refract' },
    { n: '3.2.3', t: 'Thin lenses', pts: [
      'Converging and diverging lenses, focal length and principal focus',
      'Ray diagrams for real and virtual images, and linear magnification',
      'Correcting short and long sight'],
      terms: ['Focal length', 'Real image', 'Magnification'], formula: 'magnification = image height ÷ object height', lab: 'lens' },
    { n: '3.2.4', t: 'Dispersion of light', pts: [
      'A prism splits white light into a spectrum',
      'The seven colours in order of frequency and of wavelength',
      'Why each colour refracts by a different amount'],
      terms: ['Dispersion', 'Spectrum'] },
    { n: '3.3', t: 'Electromagnetic spectrum', pts: [
      'The regions in order of frequency and wavelength',
      'All travel at 3.0 × 10⁸ m/s in a vacuum',
      'Uses of each region and the hazards of over-exposure'],
      terms: ['Electromagnetic wave', 'Ionising'] },
    { n: '3.4', t: 'Sound', pts: [
      'Sound as a longitudinal wave that needs a medium',
      'Audible range 20 Hz to 20 kHz; speed in air about 330–350 m/s',
      'Ultrasound for cleaning, scanning and sonar'],
      terms: ['Compression', 'Rarefaction', 'Ultrasound'], lab: 'waves' }
  ]},
  { n: 4, t: 'Electricity and magnetism', topics: [
    { n: '4.1', t: 'Simple magnetism and magnetic fields', pts: [
      'Poles, attraction, repulsion and induced magnetism',
      'Soft iron temporary magnets against steel permanent magnets',
      'Field lines: direction and strength'],
      terms: ['Magnetic field', 'Induced magnetism'] },
    { n: '4.2.1', t: 'Electric charge', pts: [
      'Charge in coulombs; like charges repel, unlike attract',
      'Charging by friction moves electrons',
      'Field patterns, conductors and insulators'],
      terms: ['Charge', 'Electric field'] },
    { n: '4.2.2', t: 'Electric current', pts: [
      'Current as rate of flow of charge; conventional current',
      'Free electrons in metals; d.c. against a.c.',
      'Using analogue and digital ammeters'],
      terms: ['Current', 'Conventional current'], formula: 'I = Q / t', lab: 'circuit' },
    { n: '4.2.3', t: 'E.m.f. and potential difference', pts: [
      'e.m.f. as work done by the source per unit charge',
      'p.d. as work done per unit charge across a component',
      'Using voltmeters; e.m.f.s add in series'],
      terms: ['E.m.f.', 'Potential difference'], formula: 'E = W / Q  ·  V = W / Q', lab: 'circuit' },
    { n: '4.2.4', t: 'Resistance', pts: [
      'R = V/I and measuring it with a voltmeter and ammeter',
      'Resistance against length and cross-sectional area of a wire',
      'I–V graphs for a resistor, a filament lamp and a diode'],
      terms: ['Resistance', 'Ohm’s law'], formula: 'R = V / I', lab: 'circuit' },
    { n: '4.3.1', t: 'Circuit diagrams and components', pts: [
      'Drawing and reading circuit diagrams with the standard symbols',
      'Cells, lamps, resistors, thermistors, LDRs, diodes, LEDs, relays, fuses',
      'What each component does in a circuit'],
      terms: ['Thermistor', 'LDR', 'Diode'] },
    { n: '4.3.2', t: 'Series and parallel circuits', pts: [
      'Current is the same in series; currents at a junction add up',
      'p.d.s add in series and are equal across parallel branches',
      'Combined resistance for series and parallel resistors'],
      terms: ['Series', 'Parallel'], lab: 'circuit' },
    { n: '4.3.3', t: 'Action and use of components', pts: [
      'Thermistors and LDRs as input sensors',
      'A variable potential divider',
      'The potential divider equation'],
      terms: ['Potential divider'], formula: 'R₁ / R₂ = V₁ / V₂', lab: 'circuit' },
    { n: '4.4.1', t: 'Uses of electricity', pts: [
      'Heating, lighting, charging and motors',
      'Lamps in parallel work independently',
      'Power, energy and the cost of electricity in kWh'],
      terms: ['Kilowatt-hour'], formula: 'P = IV  ·  E = IVt', lab: 'circuit' },
    { n: '4.4.2', t: 'Electrical safety', pts: [
      'Hazards: damaged insulation, overheating cables, damp, overloading',
      'Fuses and trip switches, and choosing a fuse rating',
      'Live, neutral and earth; double insulation and earthing'],
      terms: ['Fuse', 'Earth wire'] },
    { n: '4.5.1', t: 'Electromagnetic induction', pts: [
      'Demonstrating induction with a magnet and a coil',
      'What makes the induced e.m.f. bigger',
      'Lenz’s law: the induced current opposes the change'],
      terms: ['Electromagnetic induction', 'Lenz’s law'] },
    { n: '4.5.2', t: 'The a.c. generator', pts: [
      'Rotating coil, slip rings and brushes',
      'Sketching e.m.f.–time graphs',
      'Linking peaks and zeros to the coil’s position'],
      terms: ['Generator', 'Slip rings'] },
    { n: '4.5.3', t: 'Magnetic effect of a current', pts: [
      'Field patterns round a straight wire and a solenoid',
      'Changing the size or direction of the current changes the field',
      'Relays and loudspeakers'],
      terms: ['Solenoid', 'Relay'] },
    { n: '4.5.4', t: 'Force on a current-carrying conductor', pts: [
      'A wire carrying current in a field feels a force',
      'Relative directions of force, field and current (left-hand rule)',
      'Parallel wires attract or repel'],
      terms: ['Fleming’s left-hand rule'] },
    { n: '4.5.5', t: 'The d.c. motor', pts: [
      'A coil in a field turns when current flows',
      'More turns, more current or a stronger field turn it harder',
      'The split-ring commutator keeps it turning one way'],
      terms: ['Commutator'] },
    { n: '4.5.6', t: 'The transformer', pts: [
      'Iron core, primary and secondary coils; step-up and step-down',
      'The turns ratio equation',
      'High-voltage transmission cuts power loss in cables'],
      terms: ['Transformer', 'Step-up'], formula: 'Vₚ / Vₛ = Nₚ / Nₛ' },
    { n: '4.6', t: 'Uses of an oscilloscope', pts: [
      'Displaying a waveform',
      'Measuring p.d. with the Y-gain and time with the timebase',
      'Reading frequency from the trace'],
      terms: ['Timebase', 'Y-gain'], lab: 'waves' }
  ]},
  { n: 5, t: 'Nuclear physics', topics: [
    { n: '5.1.1', t: 'The atom', pts: [
      'A positive nucleus with electrons around it',
      'Alpha scattering: a tiny, dense, positive nucleus and mostly empty space',
      'Almost all the mass is in the nucleus'],
      terms: ['Nucleus', 'Alpha scattering'] },
    { n: '5.1.2', t: 'The nucleus', pts: [
      'Protons and neutrons; ions from losing or gaining electrons',
      'Proton number Z, nucleon number A and nuclide notation',
      'Isotopes'],
      terms: ['Proton number', 'Nucleon number', 'Isotope'] },
    { n: '5.2.1', t: 'Detection of radioactivity', pts: [
      'Cloud chamber, spark counter and Geiger–Müller tube',
      'Count rate in counts per second or per minute',
      'Correcting for background radiation and where it comes from'],
      terms: ['Count rate', 'Background radiation'], lab: 'decay' },
    { n: '5.2.2', t: 'The three types of emission', pts: [
      'Alpha, beta and gamma: what each one is',
      'Ionising and penetrating power compared',
      'Deflection in electric and magnetic fields'],
      terms: ['Alpha particle', 'Beta particle', 'Gamma ray'], lab: 'decay' },
    { n: '5.2.3', t: 'Radioactive decay', pts: [
      'Decay is spontaneous and random',
      'Writing decay equations in nuclide notation',
      'What happens to Z and A in alpha and beta decay'],
      terms: ['Radioactive decay'], lab: 'decay' },
    { n: '5.2.4', t: 'Fission and fusion', pts: [
      'Fusion of light nuclei powers the stars',
      'Fission of uranium-235 after a neutron is absorbed, and chain reactions',
      'Control rods, moderators and coolant in a reactor'],
      terms: ['Fission', 'Fusion', 'Chain reaction'] },
    { n: '5.2.5', t: 'Half-life', pts: [
      'Half-life from a table or a decay curve',
      'Carbon-14 dating',
      'Choosing an isotope for a job by its emission and half-life'],
      terms: ['Half-life'], lab: 'decay' },
    { n: '5.2.6', t: 'Safety precautions', pts: [
      'Ionising radiation can kill cells, cause mutations and cancer',
      'Less time, more distance, more shielding',
      'Storing and handling sources safely'],
      terms: [] }
  ]},
  { n: 6, t: 'Space physics', topics: [
    { n: '6.1.1', t: 'The Earth', pts: [
      'Rotation in about 24 hours, orbit in about 365 days, tilted axis',
      'The Moon’s orbit and phases in about a month',
      'Orbital speed from orbit radius and period'],
      terms: ['Orbit', 'Orbital period'], formula: 'v = 2πr / T' },
    { n: '6.1.2', t: 'The Solar System', pts: [
      'The Sun, eight planets, dwarf planets, asteroids, moons and comets',
      'Reading planetary data tables',
      'Gravitational field strength and orbital speed fall with distance'],
      terms: ['Planet', 'Comet'] },
    { n: '6.2.1', t: 'The Sun as a star', pts: [
      'A medium-sized star, mostly hydrogen and helium',
      'Radiates mainly infrared, visible and ultraviolet',
      'Hydrogen fuses into helium in a stable star'],
      terms: [] },
    { n: '6.2.2', t: 'Stars', pts: [
      'Galaxies, the Milky Way and the light-year',
      'From nebula to protostar to stable star',
      'White dwarf, neutron star or black hole, depending on mass'],
      terms: ['Light-year', 'Supernova'] },
    { n: '6.2.3', t: 'The Universe', pts: [
      'The Milky Way is one of billions of galaxies',
      'Redshift grows with distance',
      'Redshift as evidence for the Big Bang'],
      terms: ['Redshift', 'Big Bang'] }
  ]}
  ]
};

/* ------------------------------------------------------------------ 0625
   Same six areas as 5054. Supplement = Extended tier only. */
const IG = {
  code: '0625', name: 'IGCSE Physics', short: 'IGCSE', years: '2026–2028',
  sections: [
  { n: 1, t: 'Motion, forces and energy', topics: [
    { n: '1.1', t: 'Physical quantities and measurement techniques', pts: ['Rules, micrometers, measuring cylinders and timers', 'Averaging to measure small lengths and short times', 'Scalars and vectors (Supplement: resultant of perpendicular vectors)'], terms: ['Scalar', 'Vector'] },
    { n: '1.2', t: 'Motion', pts: ['Speed and average speed; distance–time and speed–time graphs', 'Acceleration from a speed–time graph (Supplement)', 'Free fall and falling with air resistance (Supplement)'], terms: ['Speed', 'Acceleration'], formula: 'v = s / t  ·  a = Δv / Δt', lab: 'motion' },
    { n: '1.3', t: 'Mass and weight', pts: ['Mass, weight and the force meter', 'g as weight per unit mass', 'Weight as the effect of a gravitational field on a mass (Supplement)'], terms: ['Mass', 'Weight'], formula: 'g = W / m' },
    { n: '1.4', t: 'Density', pts: ['Density of liquids, regular and irregular solids', 'Floating and sinking', 'Liquids that float on other liquids (Supplement)'], terms: ['Density'], formula: 'ρ = m / V' },
    { n: '1.5.1', t: 'Effects of forces', pts: ['Load–extension graphs; resultant force and its effect on motion', 'Spring constant and F = ma (Supplement)', 'Friction, and circular motion qualitatively (Supplement)'], terms: ['Resultant force', 'Spring constant'], formula: 'F = ma  ·  k = F / x', lab: 'forces' },
    { n: '1.5.2', t: 'Turning effect of forces', pts: ['Moment of a force', 'The principle of moments', 'More than one force on each side of a pivot (Supplement)'], terms: ['Moment'], formula: 'moment = F × d' },
    { n: '1.5.3', t: 'Centre of gravity', pts: ['Centre of gravity and stability', 'Finding it for a plane lamina', 'Why low, wide objects are more stable'], terms: ['Centre of gravity'] },
    { n: '1.6', t: 'Momentum', pts: ['Momentum and impulse (Supplement)', 'Resultant force as rate of change of momentum (Supplement)', 'Conservation of momentum (Supplement)'], terms: ['Momentum', 'Impulse'], formula: 'p = mv', lab: 'forces' },
    { n: '1.7.1', t: 'Energy', pts: ['Energy stores and transfers; conservation of energy', 'Kinetic and gravitational potential energy equations (Supplement)', 'Sankey diagrams (Supplement)'], terms: ['Kinetic energy', 'Conservation of energy'], formula: 'Eₖ = ½mv²  ·  ΔEₚ = mgΔh', lab: 'energy' },
    { n: '1.7.2', t: 'Work', pts: ['Work done as energy transferred', 'W = Fd', 'Mechanical and electrical work'], terms: ['Work done'], formula: 'W = Fd' },
    { n: '1.7.3', t: 'Energy resources', pts: ['Renewable and non-renewable sources compared', 'Electricity generation with a turbine and generator', 'Efficiency (Supplement)'], terms: ['Efficiency'], lab: 'energy' },
    { n: '1.7.4', t: 'Power', pts: ['Power as rate of doing work', 'P = W/t and P = ΔE/t', 'The watt'], terms: ['Power'], formula: 'P = W / t' },
    { n: '1.8', t: 'Pressure', pts: ['Pressure as force per unit area', 'Pressure under a liquid rises with depth and density', 'Δp = ρgΔh (Supplement)'], terms: ['Pressure'], formula: 'p = F / A' }
  ]},
  { n: 2, t: 'Thermal physics', topics: [
    { n: '2.1.1', t: 'States of matter', pts: ['Solids, liquids and gases', 'Changes of state', 'Energy and changes of state'], terms: ['Melting', 'Boiling'] },
    { n: '2.1.2', t: 'Particle model', pts: ['Particle arrangement and motion', 'Brownian motion', 'Pressure from collisions (Supplement)'], terms: ['Brownian motion'] },
    { n: '2.1.3', t: 'Gases and the absolute scale of temperature', pts: ['Gas pressure, volume and temperature', 'Kelvin and Celsius', 'pV = constant at constant temperature (Supplement)'], terms: ['Absolute zero'], formula: 'p₁V₁ = p₂V₂' },
    { n: '2.2.1', t: 'Thermal expansion', pts: ['Uses and consequences of expansion', 'Solids, liquids and gases compared', 'Expansion in particle terms (Supplement)'], terms: ['Thermal expansion'] },
    { n: '2.2.2', t: 'Specific heat capacity', pts: ['Temperature rise and internal energy', 'Specific heat capacity (Supplement)', 'Measuring c in the lab (Supplement)'], terms: ['Specific heat capacity'], formula: 'c = ΔE / (mΔθ)', lab: 'heat' },
    { n: '2.2.3', t: 'Melting, boiling and evaporation', pts: ['Melting and boiling points of water', 'Evaporation and cooling', 'Boiling against evaporation (Supplement)'], terms: ['Evaporation'], lab: 'heat' },
    { n: '2.3.1', t: 'Conduction', pts: ['Good and bad conductors', 'Lattice vibrations and free electrons (Supplement)', 'Experiments on conduction'], terms: ['Conduction'] },
    { n: '2.3.2', t: 'Convection', pts: ['Convection currents', 'Density changes in fluids', 'Experiments on convection'], terms: ['Convection'] },
    { n: '2.3.3', t: 'Radiation', pts: ['Infrared needs no medium', 'Surface colour and texture', 'Temperature and surface area affect emission (Supplement)'], terms: ['Infrared radiation'] },
    { n: '2.3.4', t: 'Consequences of thermal energy transfer', pts: ['Everyday applications', 'Insulation', 'Complex cases using all three methods (Supplement)'], terms: [] }
  ]},
  { n: 3, t: 'Waves', topics: [
    { n: '3.1', t: 'General properties of waves', pts: ['Transverse and longitudinal waves', 'v = fλ', 'Diffraction and gap width (Supplement)'], terms: ['Wavelength', 'Frequency'], formula: 'v = fλ', lab: 'waves' },
    { n: '3.2.1', t: 'Reflection of light', pts: ['The law of reflection', 'Plane mirror images', 'Constructions and calculations (Supplement)'], terms: ['Normal'], lab: 'refract' },
    { n: '3.2.2', t: 'Refraction of light', pts: ['Refraction at a boundary', 'Refractive index and critical angle (Supplement)', 'Optical fibres (Supplement)'], terms: ['Refractive index', 'Critical angle'], formula: 'n = sin i / sin r', lab: 'refract' },
    { n: '3.2.3', t: 'Thin lenses', pts: ['Converging lenses and ray diagrams', 'Real and virtual images', 'Diverging lenses and sight correction (Supplement)'], terms: ['Focal length'], lab: 'lens' },
    { n: '3.2.4', t: 'Dispersion of light', pts: ['Dispersion by a prism', 'The seven colours', 'Monochromatic light (Supplement)'], terms: ['Dispersion'] },
    { n: '3.3', t: 'Electromagnetic spectrum', pts: ['Order of the spectrum and speed in vacuum', 'Uses and hazards', 'Digital signals and communications (Supplement)'], terms: ['Electromagnetic wave'] },
    { n: '3.4', t: 'Sound', pts: ['Sound needs a medium; echoes', 'Audible range and speed of sound', 'Ultrasound uses (Supplement)'], terms: ['Ultrasound'], lab: 'waves' }
  ]},
  { n: 4, t: 'Electricity and magnetism', topics: [
    { n: '4.1', t: 'Simple phenomena of magnetism', pts: ['Poles and magnetic materials', 'Field lines', 'Temporary and permanent magnets (Supplement)'], terms: ['Magnetic field'] },
    { n: '4.2.1', t: 'Electric charge', pts: ['Charging by friction', 'Conductors and insulators', 'Electric field patterns (Supplement)'], terms: ['Charge'] },
    { n: '4.2.2', t: 'Electric current', pts: ['Current and ammeters', 'd.c. and a.c.', 'I = Q/t (Supplement)'], terms: ['Current'], formula: 'I = Q / t', lab: 'circuit' },
    { n: '4.2.3', t: 'E.m.f. and potential difference', pts: ['e.m.f. and p.d. in volts', 'Voltmeters', 'Definitions in terms of work done per unit charge (Supplement)'], terms: ['E.m.f.'], lab: 'circuit' },
    { n: '4.2.4', t: 'Resistance', pts: ['R = V/I', 'Length and thickness of a wire', 'I–V graphs (Supplement)'], terms: ['Resistance'], formula: 'R = V / I', lab: 'circuit' },
    { n: '4.2.5', t: 'Electrical energy and electrical power', pts: ['Energy transfer in circuits', 'P = IV and E = IVt', 'Cost in kWh'], terms: ['Kilowatt-hour'], formula: 'P = IV', lab: 'circuit' },
    { n: '4.3.1', t: 'Circuit diagrams and components', pts: ['Standard circuit symbols', 'Thermistors and LDRs', 'Diodes and LEDs (Supplement)'], terms: ['Thermistor', 'Diode'] },
    { n: '4.3.2', t: 'Series and parallel circuits', pts: ['Current and p.d. rules', 'Combined resistance', 'Parallel resistor calculations (Supplement)'], terms: ['Series', 'Parallel'], lab: 'circuit' },
    { n: '4.3.3', t: 'Action and use of circuit components', pts: ['Potential dividers', 'Sensors in circuits', 'The potential divider equation (Supplement)'], terms: ['Potential divider'], lab: 'circuit' },
    { n: '4.4', t: 'Electrical safety', pts: ['Mains hazards', 'Fuses and trip switches', 'Earthing and double insulation'], terms: ['Fuse'] },
    { n: '4.5.1', t: 'Electromagnetic induction', pts: ['Inducing an e.m.f.', 'Factors that change its size', 'Lenz’s law and direction (Supplement)'], terms: ['Electromagnetic induction'] },
    { n: '4.5.2', t: 'The a.c. generator', pts: ['Slip rings and brushes', 'Output against time', 'Coil position and e.m.f. (Supplement)'], terms: ['Generator'] },
    { n: '4.5.3', t: 'Magnetic effect of a current', pts: ['Fields round wires and solenoids', 'Relays and loudspeakers', 'Field strength and direction (Supplement)'], terms: ['Solenoid'] },
    { n: '4.5.4', t: 'Force on a current-carrying conductor', pts: ['The motor effect', 'Reversing current or field', 'Relative directions (Supplement)'], terms: ['Motor effect'] },
    { n: '4.5.5', t: 'The d.c. motor', pts: ['How a d.c. motor turns', 'Increasing the turning effect', 'The split-ring commutator (Supplement)'], terms: ['Commutator'] },
    { n: '4.5.6', t: 'The transformer', pts: ['Step-up and step-down', 'Turns ratio', 'Efficiency and power loss in cables (Supplement)'], terms: ['Transformer'], formula: 'Vₚ / Vₛ = Nₚ / Nₛ' }
  ]},
  { n: 5, t: 'Nuclear physics', topics: [
    { n: '5.1.1', t: 'The atom', pts: ['Nucleus and electrons', 'Ions', 'Alpha scattering evidence (Supplement)'], terms: ['Nucleus'] },
    { n: '5.1.2', t: 'The nucleus', pts: ['Protons, neutrons and nuclide notation', 'Isotopes', 'Fission and fusion (Supplement)'], terms: ['Isotope', 'Fission', 'Fusion'] },
    { n: '5.2.1', t: 'Detection of radioactivity', pts: ['Background radiation and its sources', 'Count rate', 'Corrected count rate (Supplement)'], terms: ['Background radiation'], lab: 'decay' },
    { n: '5.2.2', t: 'The three types of nuclear emission', pts: ['Alpha, beta and gamma', 'Penetration and ionisation', 'Deflection in fields (Supplement)'], terms: ['Alpha particle', 'Beta particle', 'Gamma ray'], lab: 'decay' },
    { n: '5.2.3', t: 'Radioactive decay', pts: ['Random, spontaneous decay', 'Changes to the nucleus', 'Decay equations (Supplement)'], terms: ['Radioactive decay'], lab: 'decay' },
    { n: '5.2.4', t: 'Half-life', pts: ['Half-life from a graph or table', 'Uses of isotopes', 'Corrected half-life calculations (Supplement)'], terms: ['Half-life'], lab: 'decay' },
    { n: '5.2.5', t: 'Safety precautions', pts: ['Effects on living cells', 'Time, distance, shielding', 'Safe storage and handling'], terms: [] }
  ]},
  { n: 6, t: 'Space physics', topics: [
    { n: '6.1.1', t: 'The Earth', pts: ['Day, year, seasons and the Moon', 'Orbital motion', 'v = 2πr/T (Supplement)'], terms: ['Orbit'], formula: 'v = 2πr / T' },
    { n: '6.1.2', t: 'The Solar System', pts: ['Planets and other bodies', 'Planetary data', 'Orbits and gravitational field strength (Supplement)'], terms: ['Planet'] },
    { n: '6.2.1', t: 'The Sun as a star', pts: ['Composition', 'Radiation from the Sun', 'Fusion in a stable star (Supplement)'], terms: [] },
    { n: '6.2.2', t: 'Stars', pts: ['Galaxies and light-years', 'Life cycle of stars (Supplement)', 'Supernovae and remnants (Supplement)'], terms: ['Light-year'] },
    { n: '6.2.3', t: 'The Universe', pts: ['Galaxies and the Milky Way', 'Redshift and the Big Bang (Supplement)', 'CMBR and the Hubble constant (Supplement)'], terms: ['Redshift', 'Hubble constant'] }
  ]}
  ]
};

/* ------------------------------------------------------------------ 9702 */
const A = {
  code: '9702', name: 'AS & A Level Physics', short: 'A Level', years: '2025–2027',
  sections: [
  { n: 1, lvl: 'AS Level', t: 'Physical quantities and units', topics: [
    { n: '1.1', t: 'Physical quantities', pts: ['A quantity is a number and a unit', 'Making sensible estimates of everyday quantities', 'Orders of magnitude'], terms: ['Physical quantity'] },
    { n: '1.2', t: 'SI units', pts: ['The base units and derived units', 'Prefixes from pico to tera', 'Checking an equation is homogeneous'], terms: ['Base unit', 'Homogeneous'] },
    { n: '1.3', t: 'Errors and uncertainties', pts: ['Systematic against random errors', 'Precision against accuracy', 'Combining uncertainties in a calculated result'], terms: ['Systematic error', 'Random error', 'Precision', 'Accuracy'] },
    { n: '1.4', t: 'Scalars and vectors', pts: ['Scalars and vectors', 'Adding and subtracting coplanar vectors', 'Resolving a vector into perpendicular components'], terms: ['Scalar', 'Vector'] }
  ]},
  { n: 2, lvl: 'AS Level', t: 'Kinematics', topics: [
    { n: '2.1', t: 'Equations of motion', pts: ['Displacement, velocity and acceleration from graphs', 'The SUVAT equations for uniform acceleration', 'Projectiles: horizontal and vertical motion apart'], terms: ['Displacement', 'Acceleration'], formula: 'v = u + at  ·  s = ut + ½at²  ·  v² = u² + 2as', lab: 'motion' }
  ]},
  { n: 3, lvl: 'AS Level', t: 'Dynamics', topics: [
    { n: '3.1', t: 'Momentum and Newton’s laws of motion', pts: ['Mass as resistance to change in motion; weight', 'F = ma and force as rate of change of momentum', 'Newton’s three laws'], terms: ['Linear momentum', 'Newton’s second law'], formula: 'F = Δp / Δt', lab: 'forces' },
    { n: '3.2', t: 'Non-uniform motion', pts: ['Friction and drag', 'Motion with air resistance', 'Terminal velocity'], terms: ['Drag', 'Terminal velocity'], lab: 'forces' },
    { n: '3.3', t: 'Linear momentum and its conservation', pts: ['Conservation of momentum in one and two dimensions', 'Elastic collisions: relative speed of approach = separation', 'Inelastic collisions lose kinetic energy'], terms: ['Elastic collision', 'Inelastic collision'], lab: 'forces' }
  ]},
  { n: 4, lvl: 'AS Level', t: 'Forces, density and pressure', topics: [
    { n: '4.1', t: 'Turning effects of forces', pts: ['Centre of gravity', 'Moment of a force and the couple', 'Torque of a couple'], terms: ['Couple', 'Torque'] },
    { n: '4.2', t: 'Equilibrium of forces', pts: ['Principle of moments', 'No resultant force and no resultant torque', 'Closed vector triangles'], terms: ['Equilibrium'] },
    { n: '4.3', t: 'Density and pressure', pts: ['Δp = ρgΔh', 'Upthrust from the pressure difference', 'Archimedes’ principle F = ρgV'], terms: ['Upthrust'], formula: 'Δp = ρgΔh  ·  F = ρgV' }
  ]},
  { n: 5, lvl: 'AS Level', t: 'Work, energy and power', topics: [
    { n: '5.1', t: 'Energy conservation', pts: ['Work done as force × displacement in the direction of the force', 'Efficiency', 'Power, and P = Fv'], terms: ['Work done', 'Efficiency'], formula: 'P = Fv', lab: 'energy' },
    { n: '5.2', t: 'Gravitational potential energy and kinetic energy', pts: ['Deriving ΔEp = mgΔh', 'Deriving Ek = ½mv²', 'Energy changes in a uniform field'], terms: ['Kinetic energy'], formula: 'Eₖ = ½mv²', lab: 'energy' }
  ]},
  { n: 6, lvl: 'AS Level', t: 'Deformation of solids', topics: [
    { n: '6.1', t: 'Stress and strain', pts: ['Hooke’s law and the spring constant', 'Stress, strain and the Young modulus', 'Measuring the Young modulus of a wire'], terms: ['Stress', 'Strain', 'Young modulus'], formula: 'E = σ / ε' },
    { n: '6.2', t: 'Elastic and plastic behaviour', pts: ['Elastic against plastic deformation', 'Work done is the area under a force–extension graph', 'Elastic potential energy ½Fx = ½kx²'], terms: ['Elastic limit', 'Plastic deformation'], formula: 'Eₚ = ½kx²' }
  ]},
  { n: 7, lvl: 'AS Level', t: 'Waves', topics: [
    { n: '7.1', t: 'Progressive waves', pts: ['Displacement, amplitude, phase difference, period, frequency, wavelength, speed', 'Measuring frequency on a calibrated oscilloscope', 'Intensity ∝ amplitude²'], terms: ['Phase difference', 'Intensity'], formula: 'v = fλ', lab: 'waves' },
    { n: '7.2', t: 'Transverse and longitudinal waves', pts: ['Comparing the two kinds', 'Reading displacement–distance and displacement–time graphs', 'Examples of each'], terms: ['Transverse', 'Longitudinal'], lab: 'waves' },
    { n: '7.3', t: 'Doppler effect for sound waves', pts: ['A moving source changes the observed frequency', 'fₒ = fₛv / (v ± vₛ)', 'Source moving towards and away'], terms: ['Doppler effect'], formula: 'fₒ = fₛv / (v ± vₛ)' },
    { n: '7.4', t: 'Electromagnetic spectrum', pts: ['All travel at c in free space', 'Approximate wavelength of each region', 'Visible light 400–700 nm'], terms: ['Electromagnetic spectrum'] },
    { n: '7.5', t: 'Polarisation', pts: ['Only transverse waves can be polarised', 'Malus’s law', 'Intensity through more than one filter'], terms: ['Polarisation', 'Malus’s law'], formula: 'I = I₀cos²θ' }
  ]},
  { n: 8, lvl: 'AS Level', t: 'Superposition', topics: [
    { n: '8.1', t: 'Stationary waves', pts: ['The principle of superposition', 'Nodes and antinodes on strings and in air columns', 'Wavelength from the node spacing'], terms: ['Node', 'Antinode', 'Stationary wave'] },
    { n: '8.2', t: 'Diffraction', pts: ['What diffraction is', 'How gap width compared with wavelength matters', 'Diffraction in a ripple tank'], terms: ['Diffraction'] },
    { n: '8.3', t: 'Interference', pts: ['Coherence and the conditions for interference', 'Two-source patterns in water, sound, light and microwaves', 'Double slit: λ = ax/D'], terms: ['Coherence', 'Path difference'], formula: 'λ = ax / D' },
    { n: '8.4', t: 'The diffraction grating', pts: ['The grating equation', 'Measuring wavelength with a grating', 'Highest order seen'], terms: ['Diffraction grating'], formula: 'd sin θ = nλ' }
  ]},
  { n: 9, lvl: 'AS Level', t: 'Electricity', topics: [
    { n: '9.1', t: 'Electric current', pts: ['Current as the flow of charge carriers', 'Charge is quantised', 'Q = It and I = Anvq'], terms: ['Charge carrier', 'Drift velocity'], formula: 'Q = It  ·  I = Anvq', lab: 'circuit' },
    { n: '9.2', t: 'Potential difference and power', pts: ['p.d. as energy transferred per unit charge', 'V = W/Q', 'P = VI = I²R = V²/R'], terms: ['Potential difference'], formula: 'P = VI = I²R = V²/R', lab: 'circuit' },
    { n: '9.3', t: 'Resistance and resistivity', pts: ['Ohm’s law and I–V characteristics', 'Resistivity R = ρL/A', 'Thermistors and LDRs'], terms: ['Resistivity'], formula: 'R = ρL / A', lab: 'circuit' }
  ]},
  { n: 10, lvl: 'AS Level', t: 'D.C. circuits', topics: [
    { n: '10.1', t: 'Practical circuits', pts: ['Circuit symbols', 'e.m.f. against p.d.', 'Internal resistance and terminal p.d.'], terms: ['Internal resistance'], formula: 'E = I(R + r)', lab: 'circuit' },
    { n: '10.2', t: 'Kirchhoff’s laws', pts: ['First law: conservation of charge', 'Second law: conservation of energy', 'Deriving series and parallel resistance'], terms: ['Kirchhoff’s first law', 'Kirchhoff’s second law'], lab: 'circuit' },
    { n: '10.3', t: 'Potential dividers', pts: ['The potential divider principle', 'Potentiometers and null methods', 'Thermistor and LDR dividers'], terms: ['Potentiometer'], lab: 'circuit' }
  ]},
  { n: 11, lvl: 'AS Level', t: 'Particle physics', topics: [
    { n: '11.1', t: 'Atoms, nuclei and radiation', pts: ['Alpha scattering and the nuclear atom', 'Nuclide notation and conservation in decay', 'α, β⁻, β⁺, γ and antiparticles'], terms: ['Antiparticle', 'Neutrino'], lab: 'decay' },
    { n: '11.2', t: 'Fundamental particles', pts: ['Six quarks and their charges', 'Hadrons: baryons and mesons', 'Leptons, and quark changes in β decay'], terms: ['Quark', 'Hadron', 'Lepton'] }
  ]},
  { n: 12, lvl: 'A Level', t: 'Motion in a circle', topics: [
    { n: '12.1', t: 'Kinematics of uniform circular motion', pts: ['The radian', 'Angular speed ω = 2π/T', 'v = rω'], terms: ['Radian', 'Angular speed'], formula: 'v = rω' },
    { n: '12.2', t: 'Centripetal acceleration', pts: ['A constant force at right angles gives circular motion', 'a = v²/r = rω²', 'F = mv²/r = mrω²'], terms: ['Centripetal acceleration'], formula: 'F = mv² / r' }
  ]},
  { n: 13, lvl: 'A Level', t: 'Gravitational fields', topics: [
    { n: '13.1', t: 'Gravitational field', pts: ['Field strength as force per unit mass', 'Field lines', 'Uniform field near the surface'], terms: ['Gravitational field strength'] },
    { n: '13.2', t: 'Gravitational force between point masses', pts: ['Newton’s law of gravitation', 'Circular orbits', 'Geostationary orbits'], terms: ['Geostationary orbit'], formula: 'F = Gm₁m₂ / r²' },
    { n: '13.3', t: 'Gravitational field of a point mass', pts: ['g = GM/r²', 'Why g is nearly constant near the Earth', 'Field inside and outside a sphere'], terms: [], formula: 'g = GM / r²' },
    { n: '13.4', t: 'Gravitational potential', pts: ['Potential as work done per unit mass bringing it from infinity', 'φ = −GM/r', 'Ep = −GMm/r'], terms: ['Gravitational potential'], formula: 'φ = −GM / r' }
  ]},
  { n: 14, lvl: 'A Level', t: 'Temperature', topics: [
    { n: '14.1', t: 'Thermal equilibrium', pts: ['Energy flows from hot to cold', 'Equal temperature means no net flow', 'Thermal equilibrium'], terms: ['Thermal equilibrium'] },
    { n: '14.2', t: 'Temperature scales', pts: ['Thermometric properties', 'The thermodynamic scale', 'T/K = θ/°C + 273.15'], terms: ['Thermodynamic temperature'] },
    { n: '14.3', t: 'Specific heat capacity and specific latent heat', pts: ['Specific heat capacity', 'Latent heat of fusion and of vaporisation', 'Measuring both'], terms: ['Specific latent heat'], formula: 'E = mcΔθ  ·  E = mL', lab: 'heat' }
  ]},
  { n: 15, lvl: 'A Level', t: 'Ideal gases', topics: [
    { n: '15.1', t: 'The mole', pts: ['Amount of substance as a base quantity', 'The Avogadro constant', 'Moles and number of particles'], terms: ['Mole', 'Avogadro constant'] },
    { n: '15.2', t: 'Equation of state', pts: ['pV = nRT', 'pV = NkT', 'k = R/Nₐ'], terms: ['Ideal gas'], formula: 'pV = nRT' },
    { n: '15.3', t: 'Kinetic theory of gases', pts: ['The kinetic theory assumptions', 'pV = ⅓Nm⟨c²⟩', 'Mean kinetic energy = (3/2)kT'], terms: ['Root-mean-square speed'], formula: 'pV = ⅓Nm⟨c²⟩' }
  ]},
  { n: 16, lvl: 'A Level', t: 'Thermodynamics', topics: [
    { n: '16.1', t: 'Internal energy', pts: ['Internal energy as random kinetic plus potential energy', 'It depends on the state of the system', 'Temperature rise and internal energy'], terms: ['Internal energy'] },
    { n: '16.2', t: 'The first law of thermodynamics', pts: ['W = pΔV at constant pressure', 'ΔU = q + W', 'Sign conventions'], terms: ['First law of thermodynamics'], formula: 'ΔU = q + W' }
  ]},
  { n: 17, lvl: 'A Level', t: 'Oscillations', topics: [
    { n: '17.1', t: 'Simple harmonic oscillations', pts: ['a = −ω²x defines SHM', 'x = x₀ sin ωt and v = v₀ cos ωt', 'v = ±ω√(x₀² − x²)'], terms: ['Simple harmonic motion'], formula: 'a = −ω²x' },
    { n: '17.2', t: 'Energy in simple harmonic motion', pts: ['Kinetic and potential energy exchange', 'Total energy E = ½mω²x₀²', 'Energy–displacement graphs'], terms: [] },
    { n: '17.3', t: 'Damped and forced oscillations, resonance', pts: ['Light, critical and heavy damping', 'Forced oscillations', 'Resonance at the natural frequency'], terms: ['Damping', 'Resonance'] }
  ]},
  { n: 18, lvl: 'A Level', t: 'Electric fields', topics: [
    { n: '18.1', t: 'Electric fields and field lines', pts: ['Field strength as force per unit positive charge', 'F = qE', 'Field line diagrams'], terms: ['Electric field strength'] },
    { n: '18.2', t: 'Uniform electric fields', pts: ['E = ΔV/Δd between plates', 'Charged particles moving in a uniform field', 'Parabolic paths'], terms: [], formula: 'E = ΔV / Δd' },
    { n: '18.3', t: 'Electric force between point charges', pts: ['Coulomb’s law', 'A charged sphere acts as a point charge', 'Comparing with gravitation'], terms: ['Coulomb’s law'], formula: 'F = Q₁Q₂ / (4πε₀r²)' },
    { n: '18.4', t: 'Electric field of a point charge', pts: ['E = Q/(4πε₀r²)', 'Field direction', 'Combining fields'], terms: [] },
    { n: '18.5', t: 'Electric potential', pts: ['Potential as work per unit positive charge', 'Field strength is minus the potential gradient', 'V = Q/(4πε₀r)'], terms: ['Electric potential'] }
  ]},
  { n: 19, lvl: 'A Level', t: 'Capacitance', topics: [
    { n: '19.1', t: 'Capacitors and capacitance', pts: ['C = Q/V', 'Capacitors in series and parallel', 'Isolated spheres'], terms: ['Capacitance', 'Farad'], formula: 'C = Q / V' },
    { n: '19.2', t: 'Energy stored in a capacitor', pts: ['Area under the V–Q graph', 'W = ½QV = ½CV²', 'Uses of stored energy'], terms: [], formula: 'W = ½CV²' },
    { n: '19.3', t: 'Discharging a capacitor', pts: ['V, Q and I against time', 'Time constant τ = RC', 'x = x₀e^(−t/RC)'], terms: ['Time constant'], formula: 'τ = RC' }
  ]},
  { n: 20, lvl: 'A Level', t: 'Magnetic fields', topics: [
    { n: '20.1', t: 'Concept of a magnetic field', pts: ['Fields from moving charges and permanent magnets', 'Field lines', 'Field patterns'], terms: [] },
    { n: '20.2', t: 'Force on a current-carrying conductor', pts: ['F = BIL sin θ', 'Fleming’s left-hand rule', 'Magnetic flux density and the tesla'], terms: ['Magnetic flux density', 'Tesla'], formula: 'F = BIL sin θ' },
    { n: '20.3', t: 'Force on a moving charge', pts: ['F = BQv sin θ', 'Circular paths and the Hall voltage', 'Velocity selection in crossed fields'], terms: ['Hall voltage'], formula: 'F = BQv sin θ' },
    { n: '20.4', t: 'Magnetic fields due to currents', pts: ['Wire, coil and solenoid patterns', 'A ferrous core strengthens a solenoid', 'Forces between parallel conductors'], terms: [] },
    { n: '20.5', t: 'Electromagnetic induction', pts: ['Magnetic flux Φ = BA and flux linkage', 'Faraday’s law', 'Lenz’s law'], terms: ['Magnetic flux', 'Faraday’s law'], formula: 'E = −dΦN / dt' }
  ]},
  { n: 21, lvl: 'A Level', t: 'Alternating currents', topics: [
    { n: '21.1', t: 'Characteristics of alternating currents', pts: ['Period, frequency, peak value', 'Mean power is half the peak for a resistive load', 'r.m.s. = peak/√2'], terms: ['Root-mean-square'], formula: 'I_rms = I₀ / √2', lab: 'waves' },
    { n: '21.2', t: 'Rectification and smoothing', pts: ['Half-wave rectification with a diode', 'Full-wave with a bridge rectifier', 'Smoothing with a capacitor'], terms: ['Rectification'] }
  ]},
  { n: 22, lvl: 'A Level', t: 'Quantum physics', topics: [
    { n: '22.1', t: 'Energy and momentum of a photon', pts: ['E = hf', 'p = E/c', 'The electronvolt'], terms: ['Photon', 'Electronvolt'], formula: 'E = hf' },
    { n: '22.2', t: 'Photoelectric effect', pts: ['Threshold frequency and work function', 'hf = Φ + ½mv²max', 'Intensity changes current, not maximum energy'], terms: ['Work function', 'Threshold frequency'], formula: 'hf = Φ + ½mv²ₘₐₓ' },
    { n: '22.3', t: 'Wave-particle duality', pts: ['Photoelectric effect as particle evidence', 'Electron diffraction as wave evidence', 'de Broglie λ = h/p'], terms: ['de Broglie wavelength'], formula: 'λ = h / p' },
    { n: '22.4', t: 'Energy levels in atoms and line spectra', pts: ['Discrete energy levels', 'Emission and absorption line spectra', 'hf = E₁ − E₂'], terms: ['Line spectrum'] }
  ]},
  { n: 23, lvl: 'A Level', t: 'Nuclear physics', topics: [
    { n: '23.1', t: 'Mass defect and nuclear binding energy', pts: ['E = mc²', 'Mass defect and binding energy per nucleon', 'Why fission and fusion release energy'], terms: ['Mass defect', 'Binding energy'], formula: 'E = mc²' },
    { n: '23.2', t: 'Radioactive decay', pts: ['Activity A = λN', 'λ = 0.693/t½', 'x = x₀e^(−λt)'], terms: ['Activity', 'Decay constant'], formula: 'A = λN', lab: 'decay' }
  ]},
  { n: 24, lvl: 'A Level', t: 'Medical physics', topics: [
    { n: '24.1', t: 'Production and use of ultrasound', pts: ['The piezoelectric transducer', 'Acoustic impedance Z = ρc and reflection', 'Attenuation and pulse-echo imaging'], terms: ['Acoustic impedance'], formula: 'Z = ρc' },
    { n: '24.2', t: 'Production and use of X-rays', pts: ['X-ray tubes and minimum wavelength', 'Attenuation I = I₀e^(−μx) and contrast', 'CT scanning'], terms: ['Attenuation coefficient'], formula: 'I = I₀e^(−μx)' },
    { n: '24.3', t: 'PET scanning', pts: ['β⁺ tracers', 'Annihilation into two gamma photons', 'Building an image from the detections'], terms: ['Annihilation'] }
  ]},
  { n: 25, lvl: 'A Level', t: 'Astronomy and cosmology', topics: [
    { n: '25.1', t: 'Standard candles', pts: ['Luminosity and radiant flux intensity', 'F = L/(4πd²)', 'Standard candles for distance'], terms: ['Luminosity', 'Standard candle'], formula: 'F = L / (4πd²)' },
    { n: '25.2', t: 'Stellar radii', pts: ['Wien’s displacement law', 'Stefan–Boltzmann law', 'Estimating a star’s radius'], terms: ['Wien’s law'], formula: 'L = 4πσr²T⁴' },
    { n: '25.3', t: 'Hubble’s law and the Big Bang theory', pts: ['Redshift Δλ/λ ≈ v/c', 'Hubble’s law v ≈ H₀d', 'Expansion and the Big Bang'], terms: ['Hubble’s law'], formula: 'v ≈ H₀d' }
  ]}
  ]
};

/* ------------------------------------------------------------------ papers */
const PMETA = {
  '5054': { name: 'O Level Physics', papers: {
    1: { n: 'Multiple Choice', min: 60, m: 40, w: '30%', note: '40 four-option questions' },
    2: { n: 'Theory', min: 105, m: 80, w: '50%', note: 'Short-answer and structured questions' },
    3: { n: 'Practical Test', min: 90, m: 40, w: '20%', note: 'Experiments in a lab (or Paper 4)' },
    4: { n: 'Alternative to Practical', min: 60, m: 40, w: '20%', note: 'Written practical paper (or Paper 3)' } } },
  '0625': { name: 'IGCSE Physics', papers: {
    1: { n: 'Multiple Choice (Core)', min: 45, m: 40, w: '30%', note: 'Core tier, grades C–G' },
    2: { n: 'Multiple Choice (Extended)', min: 45, m: 40, w: '30%', note: 'Extended tier, grades A*–G' },
    3: { n: 'Theory (Core)', min: 75, m: 80, w: '50%', note: 'Short-answer and structured' },
    4: { n: 'Theory (Extended)', min: 75, m: 80, w: '50%', note: 'Short-answer and structured' },
    5: { n: 'Practical Test', min: 75, m: 40, w: '20%', note: 'Either tier (or Paper 6)' },
    6: { n: 'Alternative to Practical', min: 60, m: 40, w: '20%', note: 'Either tier (or Paper 5)' } } },
  '9702': { name: 'AS & A Level Physics', papers: {
    1: { n: 'Multiple Choice', min: 75, m: 40, w: '31% AS · 15.5% A Level', note: '40 questions on AS content' },
    2: { n: 'AS Level Structured Questions', min: 75, m: 60, w: '46% AS · 23% A Level', note: 'Structured questions on AS content' },
    3: { n: 'Advanced Practical Skills', min: 120, m: 40, w: '23% AS · 11.5% A Level', note: 'Two 20-mark practical questions' },
    4: { n: 'A Level Structured Questions', min: 120, m: 100, w: '38.5% A Level', note: 'A Level content; AS knowledge assumed' },
    5: { n: 'Planning, Analysis and Evaluation', min: 75, m: 30, w: '11.5% A Level', note: 'Two questions: plan, then analyse' } } }
};

/* AO weightings (percent) */
const AO = {
  '5054': { overall: [50, 30, 20], p1: [63, 37, 0], p2: [63, 37, 0], p3: [0, 0, 100] },
  '0625': { overall: [50, 30, 20], p1: [63, 37, 0], p3: [63, 37, 0], p5: [0, 0, 100] },
  '9702': { overall: [40, 40, 20], p1: [50, 50, 0], p2: [50, 50, 0], p3: [0, 0, 100], p4: [50, 50, 0], p5: [0, 0, 100] }
};

/* ------------------------------------------------------------------ equations
   lv: O = 5054, IG = 0625, AS / A = 9702. */
const RATIOS = [
  { id: 'spd', g: 'Motion', n: 'Speed', f: 'v = s / t', sym: 's distance · t time', u: 'm/s', lv: 'O IG' },
  { id: 'acc', g: 'Motion', n: 'Acceleration', f: 'a = Δv / Δt', sym: 'Δv change in velocity', u: 'm/s²', lv: 'O IG AS' },
  { id: 'suv1', g: 'Motion', n: 'Equation of motion', f: 'v = u + at', sym: 'u initial, v final velocity', u: 'm/s', lv: 'AS' },
  { id: 'suv2', g: 'Motion', n: 'Equation of motion', f: 's = ut + ½at²', sym: 's displacement', u: 'm', lv: 'AS' },
  { id: 'suv3', g: 'Motion', n: 'Equation of motion', f: 'v² = u² + 2as', sym: 'no time term', u: '', lv: 'AS' },
  { id: 'gfs', g: 'Forces', n: 'Gravitational field strength', f: 'g = W / m', sym: 'W weight · m mass', u: 'N/kg', lv: 'O IG' },
  { id: 'rho', g: 'Forces', n: 'Density', f: 'ρ = m / V', sym: 'V volume', u: 'kg/m³', lv: 'O IG AS' },
  { id: 'fma', g: 'Forces', n: 'Newton’s second law', f: 'F = ma', sym: 'F resultant force', u: 'N', lv: 'O IG AS' },
  { id: 'k', g: 'Forces', n: 'Spring constant', f: 'k = F / x', sym: 'x extension', u: 'N/m', lv: 'O IG AS' },
  { id: 'mom', g: 'Forces', n: 'Moment', f: 'moment = F × d', sym: 'd perpendicular distance to pivot', u: 'N m', lv: 'O IG AS' },
  { id: 'p', g: 'Forces', n: 'Momentum', f: 'p = mv', sym: '', u: 'kg m/s', lv: 'O IG AS' },
  { id: 'imp', g: 'Forces', n: 'Impulse', f: 'FΔt = Δ(mv)', sym: 'force × time', u: 'N s', lv: 'O IG AS' },
  { id: 'pres', g: 'Forces', n: 'Pressure', f: 'p = F / A', sym: 'A area', u: 'Pa', lv: 'O IG AS' },
  { id: 'dp', g: 'Forces', n: 'Pressure in a liquid', f: 'Δp = ρgΔh', sym: 'Δh change in depth', u: 'Pa', lv: 'O IG AS' },
  { id: 'up', g: 'Forces', n: 'Upthrust', f: 'F = ρgV', sym: 'V volume displaced', u: 'N', lv: 'AS' },
  { id: 'ek', g: 'Energy', n: 'Kinetic energy', f: 'Eₖ = ½mv²', sym: '', u: 'J', lv: 'O IG AS' },
  { id: 'ep', g: 'Energy', n: 'Gravitational PE change', f: 'ΔEₚ = mgΔh', sym: 'Δh change in height', u: 'J', lv: 'O IG AS' },
  { id: 'w', g: 'Energy', n: 'Work done', f: 'W = Fd', sym: 'd distance in the direction of F', u: 'J', lv: 'O IG AS' },
  { id: 'pw', g: 'Energy', n: 'Power', f: 'P = W / t = ΔE / t', sym: '', u: 'W', lv: 'O IG AS' },
  { id: 'pfv', g: 'Energy', n: 'Power and velocity', f: 'P = Fv', sym: '', u: 'W', lv: 'AS' },
  { id: 'eff', g: 'Energy', n: 'Efficiency', f: 'useful output ÷ total input × 100%', sym: 'energy or power', u: '%', lv: 'O IG AS' },
  { id: 'eel', g: 'Energy', n: 'Elastic potential energy', f: 'Eₚ = ½Fx = ½kx²', sym: '', u: 'J', lv: 'AS' },
  { id: 'ym', g: 'Energy', n: 'Young modulus', f: 'E = σ / ε', sym: 'σ = F/A, ε = x/L', u: 'Pa', lv: 'AS' },
  { id: 'shc', g: 'Thermal', n: 'Specific heat capacity', f: 'c = ΔE / (mΔθ)', sym: 'Δθ temperature change', u: 'J/(kg °C)', lv: 'O IG A' },
  { id: 'lat', g: 'Thermal', n: 'Specific latent heat', f: 'E = mL', sym: '', u: 'J/kg', lv: 'A' },
  { id: 'boy', g: 'Thermal', n: 'Gas at constant temperature', f: 'p₁V₁ = p₂V₂', sym: '', u: '', lv: 'O IG' },
  { id: 'kel', g: 'Thermal', n: 'Kelvin', f: 'T = θ + 273', sym: 'θ in °C', u: 'K', lv: 'O IG A' },
  { id: 'pvnrt', g: 'Thermal', n: 'Ideal gas', f: 'pV = nRT = NkT', sym: '', u: '', lv: 'A' },
  { id: 'first', g: 'Thermal', n: 'First law', f: 'ΔU = q + W', sym: 'W done on the gas', u: 'J', lv: 'A' },
  { id: 'wave', g: 'Waves', n: 'Wave speed', f: 'v = fλ', sym: 'f frequency · λ wavelength', u: 'm/s', lv: 'O IG AS' },
  { id: 'snell', g: 'Waves', n: 'Refractive index', f: 'n = sin i / sin r', sym: 'i incidence, r refraction', u: '', lv: 'O IG' },
  { id: 'crit', g: 'Waves', n: 'Critical angle', f: 'n = 1 / sin c', sym: '', u: '', lv: 'O IG' },
  { id: 'mag', g: 'Waves', n: 'Linear magnification', f: 'image height ÷ object height', sym: '', u: '', lv: 'O IG' },
  { id: 'malus', g: 'Waves', n: 'Malus’s law', f: 'I = I₀ cos²θ', sym: '', u: '', lv: 'AS' },
  { id: 'dbl', g: 'Waves', n: 'Double slit', f: 'λ = ax / D', sym: 'a slit spacing, x fringe width', u: 'm', lv: 'AS' },
  { id: 'grat', g: 'Waves', n: 'Diffraction grating', f: 'd sin θ = nλ', sym: 'd line spacing', u: '', lv: 'AS' },
  { id: 'dop', g: 'Waves', n: 'Doppler (moving source)', f: 'fₒ = fₛv / (v ± vₛ)', sym: '', u: 'Hz', lv: 'AS' },
  { id: 'iqt', g: 'Electricity', n: 'Current', f: 'I = Q / t', sym: 'Q charge', u: 'A', lv: 'O IG AS' },
  { id: 'vwq', g: 'Electricity', n: 'e.m.f. and p.d.', f: 'V = W / Q', sym: 'W energy transferred', u: 'V', lv: 'O IG AS' },
  { id: 'ohm', g: 'Electricity', n: 'Resistance', f: 'R = V / I', sym: '', u: 'Ω', lv: 'O IG AS' },
  { id: 'pow', g: 'Electricity', n: 'Electrical power', f: 'P = IV = I²R = V²/R', sym: '', u: 'W', lv: 'O IG AS' },
  { id: 'eivt', g: 'Electricity', n: 'Electrical energy', f: 'E = IVt', sym: '', u: 'J', lv: 'O IG' },
  { id: 'pd', g: 'Electricity', n: 'Potential divider', f: 'R₁ / R₂ = V₁ / V₂', sym: '', u: '', lv: 'O IG AS' },
  { id: 'res', g: 'Electricity', n: 'Resistivity', f: 'R = ρL / A', sym: 'ρ resistivity', u: 'Ω', lv: 'AS' },
  { id: 'emf', g: 'Electricity', n: 'Internal resistance', f: 'E = I(R + r)', sym: 'r internal resistance', u: 'V', lv: 'AS' },
  { id: 'trans', g: 'Electricity', n: 'Transformer', f: 'Vₚ / Vₛ = Nₚ / Nₛ', sym: 'N turns', u: '', lv: 'O IG' },
  { id: 'cap', g: 'Fields', n: 'Capacitance', f: 'C = Q / V', sym: '', u: 'F', lv: 'A' },
  { id: 'capw', g: 'Fields', n: 'Energy in a capacitor', f: 'W = ½CV²', sym: '', u: 'J', lv: 'A' },
  { id: 'tau', g: 'Fields', n: 'Time constant', f: 'τ = RC', sym: '', u: 's', lv: 'A' },
  { id: 'grav', g: 'Fields', n: 'Gravitation', f: 'F = Gm₁m₂ / r²', sym: '', u: 'N', lv: 'A' },
  { id: 'coul', g: 'Fields', n: 'Coulomb’s law', f: 'F = Q₁Q₂ / (4πε₀r²)', sym: '', u: 'N', lv: 'A' },
  { id: 'bil', g: 'Fields', n: 'Force on a wire', f: 'F = BIL sin θ', sym: 'B flux density', u: 'N', lv: 'A' },
  { id: 'bqv', g: 'Fields', n: 'Force on a charge', f: 'F = BQv sin θ', sym: '', u: 'N', lv: 'A' },
  { id: 'circ', g: 'Fields', n: 'Centripetal force', f: 'F = mv² / r = mrω²', sym: '', u: 'N', lv: 'A' },
  { id: 'orb', g: 'Fields', n: 'Orbital speed', f: 'v = 2πr / T', sym: 'T period', u: 'm/s', lv: 'O IG' },
  { id: 'shm', g: 'Modern', n: 'Simple harmonic motion', f: 'a = −ω²x', sym: '', u: '', lv: 'A' },
  { id: 'hf', g: 'Modern', n: 'Photon energy', f: 'E = hf', sym: 'h Planck constant', u: 'J', lv: 'A' },
  { id: 'pe', g: 'Modern', n: 'Photoelectric equation', f: 'hf = Φ + ½mv²ₘₐₓ', sym: 'Φ work function', u: '', lv: 'A' },
  { id: 'db', g: 'Modern', n: 'de Broglie wavelength', f: 'λ = h / p', sym: '', u: 'm', lv: 'A' },
  { id: 'mc2', g: 'Modern', n: 'Mass–energy', f: 'E = mc²', sym: '', u: 'J', lv: 'A' },
  { id: 'act', g: 'Modern', n: 'Activity', f: 'A = λN  ·  λ = 0.693 / t½', sym: 'λ decay constant', u: 'Bq', lv: 'A' },
  { id: 'hub', g: 'Modern', n: 'Hubble’s law', f: 'v ≈ H₀d', sym: '', u: '', lv: 'A' }
];

/* ------------------------------------------------------------------ laws (shown as "concepts") */
const CONCEPTS = [
  ['Newton’s first law', 'An object stays at rest, or moves at constant velocity, unless a resultant force acts on it.'],
  ['Newton’s second law', 'The resultant force on an object equals its rate of change of momentum; for constant mass, F = ma.'],
  ['Newton’s third law', 'If A pushes on B, B pushes back on A with a force equal in size and opposite in direction, of the same type.'],
  ['Conservation of energy', 'Energy cannot be made or destroyed, only transferred from one store to another. The total stays the same.'],
  ['Conservation of momentum', 'In a closed system with no external force, the total momentum before an event equals the total after.'],
  ['Principle of moments', 'For an object in equilibrium, the sum of clockwise moments about any point equals the sum of anticlockwise moments.'],
  ['Hooke’s law', 'The extension of a spring is proportional to the load, up to the limit of proportionality.'],
  ['Law of reflection', 'The angle of incidence equals the angle of reflection, both measured from the normal.'],
  ['Ohm’s law', 'The current through a metallic conductor is proportional to the p.d. across it, at constant temperature.'],
  ['Lenz’s law', 'An induced current always flows in the direction that opposes the change that produced it.'],
  ['Kirchhoff’s first law', 'The total current into a junction equals the total current out. Charge is conserved. (9702)'],
  ['Kirchhoff’s second law', 'Round any closed loop, the sum of the e.m.f.s equals the sum of the p.d.s. Energy is conserved. (9702)'],
  ['Superposition', 'Where two waves meet, the resultant displacement is the sum of the individual displacements. (9702)'],
  ['First law of thermodynamics', 'The increase in internal energy equals the energy supplied by heating plus the work done on the system. (9702)']
];

/* ------------------------------------------------------------------ glossary */
const TERMS = [
  ['Acceleration', 'Rate of change of velocity. A vector, in m/s².'],
  ['Alpha particle', 'A helium nucleus (two protons, two neutrons). Strongly ionising, stopped by paper.'],
  ['Amplitude', 'The maximum displacement of a point on a wave from its rest position.'],
  ['Antinode', 'A point on a stationary wave where the amplitude is greatest.'],
  ['Background radiation', 'Ionising radiation always present, from radon, rocks, buildings, food, drink and cosmic rays.'],
  ['Beta particle', 'A fast electron emitted from a nucleus when a neutron turns into a proton.'],
  ['Brownian motion', 'The random jittering of small particles in a fluid, caused by collisions with fast-moving molecules.'],
  ['Capacitance', 'Charge stored per unit potential difference, C = Q/V, in farads.'],
  ['Centre of gravity', 'The point through which the whole weight of an object appears to act.'],
  ['Centripetal force', 'The resultant force towards the centre that keeps an object moving in a circle.'],
  ['Chain reaction', 'Fission in which neutrons released cause further fissions.'],
  ['Coherence', 'Two sources are coherent if they keep a constant phase difference.'],
  ['Conduction', 'Thermal energy transfer through a material by particle vibrations (and free electrons in metals).'],
  ['Convection', 'Thermal energy transfer in a fluid as warmer, less dense regions rise and cooler ones sink.'],
  ['Count rate', 'The number of decays detected per second or per minute.'],
  ['Critical angle', 'The angle of incidence in the denser medium for which the angle of refraction is 90°.'],
  ['Current', 'The rate of flow of charge, I = Q/t, in amperes.'],
  ['Damping', 'Loss of energy from an oscillating system, so the amplitude falls.'],
  ['Density', 'Mass per unit volume, in kg/m³ or g/cm³.'],
  ['Diffraction', 'The spreading of a wave as it passes through a gap or round an edge.'],
  ['Diode', 'A component that lets current flow easily in one direction only.'],
  ['Displacement', 'Distance moved in a stated direction. A vector.'],
  ['Dispersion', 'The splitting of white light into its colours, because each colour refracts by a different amount.'],
  ['Efficiency', 'Useful energy (or power) output divided by total input, often as a percentage.'],
  ['E.m.f.', 'Electromotive force: the work done by a source in moving unit charge round a complete circuit.'],
  ['Electromagnetic induction', 'The production of an e.m.f. in a conductor when the magnetic field through it changes.'],
  ['Equilibrium', 'No resultant force and no resultant moment act, so the object stays at rest or moves at constant velocity.'],
  ['Evaporation', 'Escape of the more energetic molecules from a liquid surface at any temperature, which cools the liquid.'],
  ['Fission', 'The splitting of a heavy nucleus into two smaller nuclei, releasing energy and neutrons.'],
  ['Focal length', 'The distance from the centre of a lens to its principal focus.'],
  ['Frequency', 'The number of complete waves passing a point per second, in hertz.'],
  ['Fusion', 'The joining of two light nuclei to make a heavier nucleus, releasing energy.'],
  ['Gamma ray', 'High-frequency electromagnetic radiation from a nucleus. Weakly ionising, very penetrating.'],
  ['Gravitational field strength', 'Force per unit mass on a small mass placed in the field, in N/kg.'],
  ['Half-life', 'The time taken for half the unstable nuclei in a sample to decay.'],
  ['Impulse', 'Force multiplied by the time it acts; equal to the change in momentum.'],
  ['Internal energy', 'The total kinetic and potential energy of the particles in a system.'],
  ['Internal resistance', 'The resistance inside a source, which wastes some of the e.m.f. as the current flows.'],
  ['Isotope', 'Atoms of the same element with the same proton number but different nucleon numbers.'],
  ['Kilowatt-hour', 'The energy transferred by a 1 kW appliance in 1 hour: 3.6 MJ.'],
  ['Latent heat', 'Energy transferred to change the state of a substance without a change in temperature.'],
  ['Magnetic flux density', 'Force per unit length per unit current on a wire at right angles to the field, in tesla.'],
  ['Mass', 'The amount of matter in an object; it resists changes in motion.'],
  ['Moment', 'The turning effect of a force: force × perpendicular distance from the pivot.'],
  ['Momentum', 'Mass × velocity. A vector, in kg m/s.'],
  ['Node', 'A point on a stationary wave where the amplitude is always zero.'],
  ['Nucleon number', 'The total number of protons and neutrons in a nucleus (A).'],
  ['Photon', 'A packet of electromagnetic energy, E = hf.'],
  ['Potential difference', 'The work done per unit charge in moving charge between two points.'],
  ['Power', 'The rate of doing work or transferring energy, in watts.'],
  ['Pressure', 'Force per unit area acting at right angles to a surface, in pascals.'],
  ['Proton number', 'The number of protons in a nucleus (Z).'],
  ['Redshift', 'An increase in the observed wavelength of light from a galaxy moving away from us.'],
  ['Refractive index', 'The ratio of the speed of light in a vacuum to its speed in the material; also sin i / sin r.'],
  ['Resistance', 'Potential difference divided by current, R = V/I, in ohms.'],
  ['Resistivity', 'Resistance of a 1 m length of material with 1 m² cross-section; R = ρL/A.'],
  ['Resonance', 'Large-amplitude oscillation when the driving frequency equals the natural frequency.'],
  ['Resultant force', 'The single force that has the same effect as all the forces acting together.'],
  ['Scalar', 'A quantity with size only, such as mass, speed or energy.'],
  ['Specific heat capacity', 'Energy needed to raise the temperature of 1 kg of a substance by 1 °C.'],
  ['Speed', 'Distance travelled per unit time. A scalar.'],
  ['Spring constant', 'Force per unit extension of a spring, in N/m.'],
  ['Terminal velocity', 'The constant velocity reached when drag balances the driving force or weight.'],
  ['Thermistor', 'A resistor whose resistance falls as its temperature rises (NTC).'],
  ['Total internal reflection', 'Complete reflection at a boundary when light in the denser medium meets it beyond the critical angle.'],
  ['Transformer', 'Two coils on an iron core that change an alternating voltage up or down.'],
  ['Vector', 'A quantity with size and direction, such as velocity, force or momentum.'],
  ['Velocity', 'Speed in a stated direction. A vector.'],
  ['Wavelength', 'The distance between two neighbouring crests, or between any two points in phase.'],
  ['Weight', 'The gravitational force on a mass, in newtons.'],
  ['Work done', 'Force × distance moved in the direction of the force; equal to the energy transferred.'],
  ['Work function', 'The minimum energy needed to free an electron from the surface of a metal.'],
  ['Young modulus', 'Stress divided by strain for a material, while it obeys Hooke’s law.']
];

/* ------------------------------------------------------------------ unit trainer (Lab: what is the SI unit?) */
const ACCOUNTS = ['m/s', 'm/s²', 'N', 'J', 'W', 'Pa', 'kg/m³', 'N m', 'kg m/s', 'A', 'V', 'Ω', 'C', 'Hz', 'N/kg', 'N/m', 'J/(kg °C)', 'Bq', 'T', 'F'];
const TX = [
  { q: 'Force', a: 'N', why: 'The newton: the force that gives 1 kg an acceleration of 1 m/s². In base units, kg m s⁻².' },
  { q: 'Energy or work done', a: 'J', why: 'The joule: 1 N moved through 1 m. kg m² s⁻².' },
  { q: 'Power', a: 'W', why: 'The watt: one joule per second.' },
  { q: 'Pressure', a: 'Pa', why: 'The pascal: one newton per square metre.' },
  { q: 'Acceleration', a: 'm/s²', why: 'Change in velocity (m/s) per second.' },
  { q: 'Momentum', a: 'kg m/s', why: 'Mass × velocity. The same unit as impulse, N s.' },
  { q: 'Moment of a force', a: 'N m', why: 'Force × perpendicular distance. Not written as J, even though the base units match.' },
  { q: 'Density', a: 'kg/m³', why: 'Mass per unit volume.' },
  { q: 'Gravitational field strength', a: 'N/kg', why: 'Force per unit mass. Numerically the same as m/s².' },
  { q: 'Spring constant', a: 'N/m', why: 'Force per unit extension.' },
  { q: 'Specific heat capacity', a: 'J/(kg °C)', why: 'Energy per kilogram per degree.' },
  { q: 'Electric charge', a: 'C', why: 'The coulomb: one ampere for one second.' },
  { q: 'Potential difference', a: 'V', why: 'The volt: one joule per coulomb.' },
  { q: 'Resistance', a: 'Ω', why: 'The ohm: one volt per ampere.' },
  { q: 'Electric current', a: 'A', why: 'The ampere is an SI base unit.' },
  { q: 'Frequency', a: 'Hz', why: 'The hertz: one complete cycle per second.' },
  { q: 'Activity of a radioactive source', a: 'Bq', why: 'The becquerel: one decay per second.' },
  { q: 'Magnetic flux density', a: 'T', why: 'The tesla: N A⁻¹ m⁻¹. (9702)' },
  { q: 'Capacitance', a: 'F', why: 'The farad: one coulomb per volt. (9702)' },
  { q: 'Velocity', a: 'm/s', why: 'Displacement per unit time.' }
];

/* ------------------------------------------------------------------ MCQ bank
   Written for practice in the style of the multiple-choice papers. Not Cambridge questions. */
const MCQ = [
  { lv: 'O', ref: '1.2', q: 'A car accelerates uniformly from rest to 20 m/s in 8.0 s. What is its acceleration?', o: ['0.40 m/s²', '2.5 m/s²', '12 m/s²', '160 m/s²'], a: 1, why: 'a = Δv / t = 20 ÷ 8.0 = 2.5 m/s².' },
  { lv: 'O', ref: '1.2', q: 'On a speed–time graph, what does the area under the line give?', o: ['Acceleration', 'Distance travelled', 'Force', 'Average speed'], a: 1, why: 'Area = speed × time = distance.' },
  { lv: 'O', ref: '1.3', q: 'An astronaut of mass 70 kg stands on the Moon, where g = 1.6 N/kg. What is her weight there?', o: ['44 N', '70 N', '112 N', '686 N'], a: 2, why: 'W = mg = 70 × 1.6 = 112 N. Her mass is still 70 kg.' },
  { lv: 'O', ref: '1.4', q: 'A stone of mass 54 g raises the water in a measuring cylinder from 40 cm³ to 60 cm³. What is its density?', o: ['0.37 g/cm³', '0.90 g/cm³', '1.35 g/cm³', '2.7 g/cm³'], a: 3, why: 'V = 60 − 40 = 20 cm³. ρ = 54 ÷ 20 = 2.7 g/cm³.' },
  { lv: 'O', ref: '1.5.1', q: 'A resultant force of 12 N acts on a 3.0 kg trolley. What is its acceleration?', o: ['0.25 m/s²', '4.0 m/s²', '9.0 m/s²', '36 m/s²'], a: 1, why: 'a = F / m = 12 ÷ 3.0 = 4.0 m/s².' },
  { lv: 'O', ref: '1.5.2', q: 'A skydiver falls at terminal velocity. Which statement is correct?', o: ['Her weight is zero', 'Air resistance is greater than her weight', 'The resultant force on her is zero', 'She is still accelerating'], a: 2, why: 'At terminal velocity drag equals weight, so the resultant force is zero and the velocity is constant.' },
  { lv: 'O', ref: '1.5.3', q: 'A spring stretches 4.0 cm under a load of 2.0 N. What is the spring constant?', o: ['0.5 N/m', '2.0 N/m', '8.0 N/m', '50 N/m'], a: 3, why: 'k = F / x = 2.0 ÷ 0.040 m = 50 N/m. Convert cm to m first.' },
  { lv: 'O', ref: '1.5.5', q: 'A 3.0 N weight hangs 0.40 m from a pivot. What weight 0.60 m on the other side balances it?', o: ['1.5 N', '2.0 N', '4.5 N', '7.2 N'], a: 1, why: '3.0 × 0.40 = W × 0.60, so W = 1.2 ÷ 0.60 = 2.0 N.' },
  { lv: 'O', ref: '1.6', q: 'A 2.0 kg trolley at 3.0 m/s hits and sticks to a stationary 1.0 kg trolley. What is their speed afterwards?', o: ['1.0 m/s', '1.5 m/s', '2.0 m/s', '3.0 m/s'], a: 2, why: 'Momentum before = 6.0 kg m/s. Afterwards 3.0 kg moves at 6.0 ÷ 3.0 = 2.0 m/s.' },
  { lv: 'O', ref: '1.7.1', q: 'A 0.50 kg ball is dropped from 5.0 m. Ignoring air resistance, what is its kinetic energy just before it lands? (g = 9.8 N/kg)', o: ['2.5 J', '4.9 J', '24.5 J', '49 J'], a: 2, why: 'Ek = loss in Ep = mgh = 0.50 × 9.8 × 5.0 = 24.5 J.' },
  { lv: 'O', ref: '1.7.4', q: 'A motor takes in 500 J of electrical energy and lifts a load, gaining 150 J of potential energy. What is its efficiency?', o: ['15%', '30%', '70%', '333%'], a: 1, why: 'Efficiency = 150 ÷ 500 × 100% = 30%.' },
  { lv: 'O', ref: '1.8', q: 'What is the change in pressure 10 m below the surface of water? (ρ = 1000 kg/m³, g = 9.8 N/kg)', o: ['980 Pa', '9 800 Pa', '98 000 Pa', '980 000 Pa'], a: 2, why: 'Δp = ρgΔh = 1000 × 9.8 × 10 = 98 000 Pa.' },
  { lv: 'O', ref: '2.1.2', q: 'A gas at constant temperature has volume 200 cm³ at 100 kPa. It is compressed to 50 cm³. What is its new pressure?', o: ['25 kPa', '200 kPa', '400 kPa', '1000 kPa'], a: 2, why: 'p₁V₁ = p₂V₂: 100 × 200 = p₂ × 50, so p₂ = 400 kPa.' },
  { lv: 'O', ref: '2.2.2', q: 'How much energy raises 2.0 kg of water by 5.0 °C? (c = 4200 J/(kg °C))', o: ['840 J', '2 100 J', '21 000 J', '42 000 J'], a: 3, why: 'ΔE = mcΔθ = 2.0 × 4200 × 5.0 = 42 000 J.' },
  { lv: 'O', ref: '2.3.3', q: 'Which surface is the best emitter of infrared radiation?', o: ['Shiny white', 'Shiny silver', 'Dull black', 'Dull white'], a: 2, why: 'Dull black surfaces are the best emitters and absorbers of infrared.' },
  { lv: 'O', ref: '3.1', q: 'A wave has frequency 50 Hz and wavelength 4.0 m. What is its speed?', o: ['0.08 m/s', '12.5 m/s', '54 m/s', '200 m/s'], a: 3, why: 'v = fλ = 50 × 4.0 = 200 m/s.' },
  { lv: 'O', ref: '3.2.2', q: 'Light enters glass at an angle of incidence of 40°. The angle of refraction is 25°. What is the refractive index?', o: ['0.66', '1.52', '1.60', '2.37'], a: 1, why: 'n = sin 40° ÷ sin 25° = 0.643 ÷ 0.423 = 1.52.' },
  { lv: 'O', ref: '3.2.2', q: 'Glass has refractive index 1.5. What is its critical angle?', o: ['34°', '42°', '48°', '56°'], a: 1, why: 'sin c = 1 / n = 0.667, so c = 41.8°, about 42°.' },
  { lv: 'O', ref: '3.2.3', q: 'An object is placed between a converging lens and its principal focus. What kind of image forms?', o: ['Real, inverted, smaller', 'Real, inverted, larger', 'Virtual, upright, larger', 'Virtual, inverted, smaller'], a: 2, why: 'Inside the focal length the lens acts as a magnifying glass: virtual, upright and magnified.' },
  { lv: 'O', ref: '3.3', q: 'Which electromagnetic waves have the longest wavelength?', o: ['Gamma rays', 'Ultraviolet', 'Microwaves', 'Radio waves'], a: 3, why: 'Radio waves sit at the long-wavelength, low-frequency end of the spectrum.' },
  { lv: 'O', ref: '3.4', q: 'An echo returns 0.60 s after a shout towards a cliff. Sound travels at 330 m/s. How far away is the cliff?', o: ['99 m', '198 m', '275 m', '550 m'], a: 0, why: 'The sound goes there and back: total 330 × 0.60 = 198 m, so the cliff is 99 m away.' },
  { lv: 'O', ref: '4.2.2', q: 'A charge of 30 C flows through a lamp in 1 minute. What is the current?', o: ['0.5 A', '2.0 A', '30 A', '1800 A'], a: 0, why: 'I = Q / t = 30 ÷ 60 s = 0.5 A.' },
  { lv: 'O', ref: '4.2.4', q: 'A current of 0.20 A flows through a resistor with 3.0 V across it. What is its resistance?', o: ['0.067 Ω', '0.60 Ω', '3.2 Ω', '15 Ω'], a: 3, why: 'R = V / I = 3.0 ÷ 0.20 = 15 Ω.' },
  { lv: 'O', ref: '4.3.2', q: 'Two 6.0 Ω resistors are connected in parallel. What is the combined resistance?', o: ['3.0 Ω', '6.0 Ω', '12 Ω', '36 Ω'], a: 0, why: '1/R = 1/6 + 1/6 = 1/3, so R = 3.0 Ω. Parallel always gives less than the smallest resistor.' },
  { lv: 'O', ref: '4.4.1', q: 'A 2.0 kW heater runs for 3 hours. Electricity costs Rs 50 per kWh. What does it cost?', o: ['Rs 100', 'Rs 150', 'Rs 300', 'Rs 600'], a: 2, why: 'Energy = 2.0 kW × 3 h = 6 kWh. Cost = 6 × 50 = Rs 300.' },
  { lv: 'O', ref: '4.4.2', q: 'An appliance takes 4.6 A from a 230 V supply. Which fuse should be fitted?', o: ['3 A', '5 A', '13 A', '30 A'], a: 1, why: 'Choose the fuse just above the normal current: 5 A.' },
  { lv: 'O', ref: '4.5.6', q: 'A transformer has 100 turns on the primary and 2000 on the secondary. The input is 12 V a.c. What is the output?', o: ['0.6 V', '12 V', '120 V', '240 V'], a: 3, why: 'Vₛ = Vₚ × Nₛ / Nₚ = 12 × 2000 / 100 = 240 V.' },
  { lv: 'O', ref: '5.1.2', q: 'A nucleus of carbon-14 has 6 protons. How many neutrons does it have?', o: ['6', '8', '14', '20'], a: 1, why: 'Neutrons = nucleon number − proton number = 14 − 6 = 8.' },
  { lv: 'O', ref: '5.2.2', q: 'Which radiation is stopped by a few millimetres of aluminium but passes through paper?', o: ['Alpha', 'Beta', 'Gamma', 'Infrared'], a: 1, why: 'Beta passes paper but is absorbed by a few mm of aluminium.' },
  { lv: 'O', ref: '5.2.3', q: 'A nucleus emits an alpha particle. What happens to its proton number Z and nucleon number A?', o: ['Z −2, A −4', 'Z +1, A unchanged', 'Z −1, A unchanged', 'Z unchanged, A −4'], a: 0, why: 'An alpha particle is ⁴₂He, so Z falls by 2 and A falls by 4.' },
  { lv: 'O', ref: '5.2.5', q: 'A source has a half-life of 6 hours. What fraction is left after 18 hours?', o: ['1/3', '1/6', '1/8', '1/18'], a: 2, why: '18 h = 3 half-lives: ½ × ½ × ½ = 1/8.' },
  { lv: 'O', ref: '6.1.1', q: 'A satellite orbits at radius 7.0 × 10⁶ m with period 6000 s. What is its orbital speed?', o: ['1.2 km/s', '3.7 km/s', '7.3 km/s', '42 km/s'], a: 2, why: 'v = 2πr / T = 2π × 7.0 × 10⁶ ÷ 6000 ≈ 7300 m/s.' },
  { lv: 'AS', ref: '1.3', q: 'A length is measured as 50.0 ± 0.5 cm. What is the percentage uncertainty?', o: ['0.1%', '0.5%', '1%', '5%'], a: 2, why: '0.5 ÷ 50.0 × 100 = 1%.' },
  { lv: 'AS', ref: '2.1', q: 'A ball is thrown up at 15 m/s. How high does it rise? (g = 9.81 m/s²)', o: ['1.5 m', '7.6 m', '11.5 m', '23 m'], a: 2, why: 'v² = u² + 2as: 0 = 225 − 2 × 9.81 × s, so s = 11.5 m.' },
  { lv: 'AS', ref: '3.3', q: 'In a perfectly elastic collision, which quantity is conserved besides momentum?', o: ['Velocity', 'Kinetic energy', 'Force', 'Acceleration'], a: 1, why: 'Elastic means total kinetic energy is conserved as well as momentum.' },
  { lv: 'AS', ref: '6.1', q: 'A wire of cross-section 1.0 × 10⁻⁶ m² carries 50 N and extends by 0.5 mm over 2.0 m. What is the Young modulus?', o: ['5.0 × 10⁷ Pa', '2.0 × 10¹⁰ Pa', '2.0 × 10¹¹ Pa', '1.0 × 10¹² Pa'], a: 2, why: 'Stress = 5.0 × 10⁷ Pa. Strain = 0.0005 ÷ 2.0 = 2.5 × 10⁻⁴. E = 2.0 × 10¹¹ Pa.' },
  { lv: 'AS', ref: '7.5', q: 'Unpolarised light of intensity I₀ passes through two polarisers at 60° to each other. What intensity emerges?', o: ['I₀/8', 'I₀/4', 'I₀/2', '3I₀/8'], a: 0, why: 'The first filter halves it to I₀/2. Then I = (I₀/2) cos² 60° = (I₀/2)(¼) = I₀/8.' },
  { lv: 'AS', ref: '8.4', q: 'A grating has 500 lines per mm. Light of 600 nm falls on it. What is the highest order seen?', o: ['1', '2', '3', '4'], a: 2, why: 'd = 2.0 × 10⁻⁶ m. n ≤ d / λ = 3.33, so the highest order is 3.' },
  { lv: 'AS', ref: '9.3', q: 'A wire is stretched to twice its length, keeping its volume constant. By what factor does its resistance change?', o: ['½', '2', '4', '8'], a: 2, why: 'L doubles and A halves, so R = ρL/A increases by 2 × 2 = 4.' },
  { lv: 'AS', ref: '10.1', q: 'A cell of e.m.f. 6.0 V and internal resistance 1.0 Ω drives current through a 5.0 Ω resistor. What is the terminal p.d.?', o: ['1.0 V', '5.0 V', '6.0 V', '7.2 V'], a: 1, why: 'I = 6.0 ÷ 6.0 = 1.0 A. Terminal p.d. = IR = 5.0 V.' },
  { lv: 'AS', ref: '11.2', q: 'A proton is made of which quarks?', o: ['uud', 'udd', 'uds', 'ud̄'], a: 0, why: 'uud: +⅔ + ⅔ − ⅓ = +1.' },
  { lv: 'A', ref: '12.2', q: 'A 0.20 kg mass moves in a circle of radius 0.50 m at 3.0 m/s. What is the centripetal force?', o: ['0.6 N', '1.2 N', '3.6 N', '1.8 N'], a: 2, why: 'F = mv²/r = 0.20 × 9.0 ÷ 0.50 = 3.6 N.' },
  { lv: 'A', ref: '15.2', q: 'An ideal gas at 300 K is heated at constant volume to 600 K. What happens to its pressure?', o: ['It halves', 'It stays the same', 'It doubles', 'It quadruples'], a: 2, why: 'pV = nRT: at constant V, p ∝ T. T doubles, so p doubles.' },
  { lv: 'A', ref: '19.3', q: 'A 100 μF capacitor discharges through a 50 kΩ resistor. What is the time constant?', o: ['0.5 s', '2.0 s', '5.0 s', '50 s'], a: 2, why: 'τ = RC = 50 000 × 100 × 10⁻⁶ = 5.0 s.' },
  { lv: 'A', ref: '22.2', q: 'Light of frequency 1.0 × 10¹⁵ Hz falls on a metal of work function 3.0 eV. What is the maximum kinetic energy of the electrons? (h = 6.63 × 10⁻³⁴ J s)', o: ['1.1 eV', '3.0 eV', '4.1 eV', '7.1 eV'], a: 0, why: 'hf = 6.63 × 10⁻¹⁹ J = 4.14 eV. Ek max = 4.14 − 3.0 ≈ 1.1 eV.' },
  { lv: 'A', ref: '23.2', q: 'A sample has decay constant 0.0231 per day. What is its half-life?', o: ['3.0 days', '15 days', '30 days', '43 days'], a: 2, why: 't½ = 0.693 ÷ λ = 0.693 ÷ 0.0231 = 30 days.' }
];

/* flat topic index for search, bot and command palette */
const INDEX = [];
[[O, '5054', 'O Level'], [IG, '0625', 'IGCSE'], [A, '9702', null]].forEach(([S, c, lv]) => S.sections.forEach(sec => sec.topics.forEach(t => {
  INDEX.push({ id: c + '-' + t.n, code: c, n: t.n, t: t.t, sec: sec.t, lvl: sec.lvl || lv, pts: t.pts, terms: t.terms || [], lab: t.lab || null });
})));

return { O, IG, A, SYL: { '5054': O, '0625': IG, '9702': A }, PMETA, AO, RATIOS, CONCEPTS, TERMS, ACCOUNTS, TX, MCQ, INDEX };
})();

/* =========================================================================
   RA core — utilities, sound, theme, smooth scroll, nav, reveals, tilt,
   cursor, toast, modal, command palette, Prism the help desk.
   ========================================================================= */
(function () {
'use strict';
const RA = window.RA = window.RA || {};
const C = RA.C = window.RA_CONFIG || {};
if (!C.waUrl) C.waUrl = t => C.whatsapp ? 'https://wa.me/' + C.whatsapp + (t ? '?text=' + encodeURIComponent(t) : '') : (C.instagram || 'contact.html');
const D = RA.DATA;
const $ = RA.$ = (s, r) => (r || document).querySelector(s);
const $$ = RA.$$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const root = document.documentElement;
root.classList.add('js');
RA.RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
RA.FINE = matchMedia('(hover:hover) and (pointer:fine)').matches;
RA.esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
RA.store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } },
  del(k) { try { localStorage.removeItem(k); } catch (e) { } }
};
RA.fmt = (n, dp) => {
  if (n == null || !isFinite(n)) return '—';
  dp = dp == null ? 0 : dp;
  const s = Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: dp, maximumFractionDigits: dp });
  return n < 0 && Math.abs(n) >= Math.pow(10, -dp) / 2 ? '(' + s + ')' : s;
};
RA.num = v => { const n = parseFloat(String(v).replace(/[^0-9.\-]/g, '')); return isFinite(n) ? n : 0; };
RA.clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const Q = RA._q = RA._q || [];
RA.page = fn => Q.push(fn);

/* ---------------------------------------------------------------- sound */
RA.Snd = (function () {
  let ctx = null, master = null, on = RA.store.get('ya-sound', true), last = 0;
  function ensure() {
    if (!on) return null;
    if (!ctx) {
      try { ctx = new (window.AudioContext || window.webkitAudioContext)(); master = ctx.createGain(); master.gain.value = 0.2; master.connect(ctx.destination); }
      catch (e) { return null; }
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  function tone(f, dur, type, vol, when, slide) {
    const c = ensure(); if (!c) return;
    const t = c.currentTime + (when || 0), o = c.createOscillator(), g = c.createGain();
    o.type = type || 'sine'; o.frequency.setValueAtTime(f, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(f * slide, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol || 0.2, t + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.03);
  }
  function noise(dur, vol, freq) {
    const c = ensure(); if (!c) return;
    const len = Math.floor(c.sampleRate * dur), buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    s.buffer = buf; f.type = 'bandpass'; f.frequency.value = freq || 1200; f.Q.value = 0.8; g.gain.value = vol || 0.2;
    s.connect(f); f.connect(g); g.connect(master); s.start();
  }
  const api = {
    get on() { return on; },
    set(v) { on = !!v; RA.store.set('ya-sound', on); if (on) api.chime(); },
    unlock() { if (on) ensure(); },
    tick() { const n = performance.now(); if (n - last < 70) return; last = n; tone(2100, 0.035, 'sine', 0.035); },
    click() { tone(880, 0.06, 'triangle', 0.16); },
    soft() { tone(640, 0.09, 'sine', 0.12); },
    open() { tone(480, 0.14, 'sine', 0.14, 0, 1.6); },
    close() { tone(760, 0.12, 'sine', 0.12, 0, 0.6); },
    chime() { tone(880, 0.35, 'sine', 0.16); tone(1318.5, 0.5, 'sine', 0.12, 0.07); },
    coin() { tone(1568, 0.07, 'square', 0.04); tone(2093, 0.3, 'sine', 0.12, 0.06); tone(2637, 0.35, 'sine', 0.06, 0.12); },
    stamp() { noise(0.12, 0.3, 500); tone(96, 0.18, 'sine', 0.35); },
    err() { tone(220, 0.16, 'sawtooth', 0.08); tone(175, 0.22, 'sawtooth', 0.07, 0.09); },
    whoosh() { noise(0.4, 0.14, 900); },
    alarm() { [0, 0.24, 0.48].forEach(w => tone(1046.5, 0.16, 'square', 0.06, w)); }
  };
  return api;
})();
const Snd = RA.Snd;

/* ---------------------------------------------------------------- theme */
RA.theme = function (t) {
  root.dataset.theme = t; RA.store.set('ya-theme', t);
  const m = $('meta[name="theme-color"]'); if (m) m.content = t === 'light' ? '#f3efe2' : '#04070a';
  $$('[data-theme-btn]').forEach(b => b.setAttribute('aria-pressed', String(t === 'light')));
  if (RA.BG) RA.BG.theme(t);
  document.dispatchEvent(new CustomEvent('ra:theme', { detail: t }));
};

/* ---------------------------------------------------------------- smooth scroll */
function smooth() {
  const ST = window.ScrollTrigger;
  if (window.gsap && ST) gsap.registerPlugin(ST);
  if (!RA.RM && window.Lenis) {
    const lenis = RA.lenis = new Lenis({ duration: 1.35, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true, wheelMultiplier: 0.95 });
    if (window.gsap && ST) { lenis.on('scroll', ST.update); gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(400, 33); }
    else { const raf = t => { lenis.raf(t); requestAnimationFrame(raf); }; requestAnimationFrame(raf); }
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]'); if (!a) return;
    const h = a.getAttribute('href'); if (h.length < 2) return;
    const el = document.getElementById(decodeURIComponent(h.slice(1))); if (!el) return;
    e.preventDefault(); RA.go(el); history.replaceState(null, '', h);
  });
}
RA.go = function (target, offset) {
  if (typeof target === 'string') target = $(target);
  if (target == null) return;
  offset = offset == null ? -96 : offset;
  if (RA.lenis) RA.lenis.scrollTo(target, { offset, duration: 1.3 });
  else if (typeof target === 'number') scrollTo({ top: target, behavior: RA.RM ? 'auto' : 'smooth' });
  else scrollTo({ top: target.getBoundingClientRect().top + scrollY + offset, behavior: RA.RM ? 'auto' : 'smooth' });
};
RA.lock = function (on) {
  if (RA.lenis) on ? RA.lenis.stop() : RA.lenis.start();
  document.body.style.overflow = on ? 'hidden' : '';
};

/* ---------------------------------------------------------------- nav + menu */
function nav() {
  const n = $('.nav'); if (!n) return;
  let lastY = scrollY;
  const upd = () => {
    const y = scrollY;
    n.classList.toggle('solid', y > 30);
    const mb = $('.mbar'); if (mb) { const end = y + innerHeight > document.documentElement.scrollHeight - 160; mb.classList.toggle('mb-hide', y > 240 && y > lastY + 2 && !end); if (y < lastY - 2 || end) mb.classList.remove('mb-hide'); }
    if (!root.classList.contains('menu-open')) n.classList.toggle('hide', y > 260 && y > lastY + 2);
    if (y < lastY - 2) n.classList.remove('hide');
    lastY = y;
  };
  addEventListener('scroll', upd, { passive: true }); upd();
  const burger = $('.burger'), menu = $('.menu');
  if (!burger || !menu) return;
  $$('nav a', menu).forEach((a, i) => a.style.transitionDelay = (0.12 + i * 0.045) + 's');
  const set = open => {
    root.classList.toggle('menu-open', open); burger.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open)); RA.lock(open); open ? Snd.open() : Snd.close();
    if (open) n.classList.remove('hide');
  };
  burger.addEventListener('click', () => set(!root.classList.contains('menu-open')));
  document.addEventListener('pointerdown', e => { if (root.classList.contains('menu-open') && !e.target.closest('.menu,.burger')) set(false); });
  menu.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && root.classList.contains('menu-open')) set(false); });
}

/* ---------------------------------------------------------------- reveals */
function splitWords(el) {
  if (el.dataset.splitDone) return; el.dataset.splitDone = '1';
  let i = 0;
  const walk = node => {
    Array.from(node.childNodes).forEach(ch => {
      if (ch.nodeType === 3) {
        if (!ch.textContent.trim()) return;
        const frag = document.createDocumentFragment();
        ch.textContent.split(/(\s+)/).forEach(p => {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(' ')); return; }
          const o = document.createElement('span'); o.className = 'slw';
          const w = document.createElement('span'); w.className = 'sw';
          Array.from(p).forEach(c => { const s = document.createElement('span'); s.className = 'sc'; s.style.setProperty('--i', i++); s.textContent = c; w.appendChild(s); });
          o.appendChild(w); frag.appendChild(o);
        });
        ch.replaceWith(frag);
      } else if (ch.nodeType === 1 && ch.tagName !== 'BR' && !ch.hasAttribute('data-nosplit')) walk(ch);
    });
  };
  if (!el.hasAttribute('aria-label') && /^H[1-6]$/.test(el.tagName)) el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
  walk(el);
}
RA.split = splitWords;
RA.reveal = function (scope) {
  $$('.ph', scope).forEach(p => { if (!p.closest('.ldx,.pt') && !p.classList.contains('wp')) p.classList.add('wp'); });
  $$('.hero-fig .portrait', scope).forEach(p => p.classList.add('wp'));
  const els = $$('[data-rv],[data-split],.wp,.hair', scope).filter(e => !e.classList.contains('in'));
  /* text is never split or hidden: headings and paragraphs show the moment the page paints */
  els.forEach(e => { if (e.hasAttribute('data-split')) { e.dataset.splitDone = '1'; e.classList.add('in'); } });
  const vh = innerHeight;
  const later = els.filter(e => { if (e.hasAttribute('data-split')) return false; const r = (e.classList.contains('wp') && e.parentElement ? e.parentElement : e).getBoundingClientRect(); return r.top > vh * 0.98 && !RA.RM; });
  els.forEach(e => { if (!e.hasAttribute('data-split') && later.indexOf(e) < 0) e.classList.add('in'); });
  later.forEach(e => e.classList.add('rv-wait'));
  els.length = 0; later.forEach(e => els.push(e));
  if (RA.RM || !('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = RA._io || (RA._io = new IntersectionObserver(es => {
    const hit = es.filter(en => en.isIntersecting).map(en => en.target);
    hit.sort((a, b) => { const ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect(); return (ra.top - rb.top) || (ra.left - rb.left); });
    let k = 0;
    hit.forEach(t => {
      if (t.matches('.card[data-rv],.proc-s,[data-rv="scale"]') && !t.style.getPropertyValue('--d')) t.style.setProperty('--d', (Math.min(k++, 6) * 0.09).toFixed(2) + 's');
      t.classList.add('in'); RA._io.unobserve(t);
      if (t.matches('.folio,.eyebrow')) decode(t); else $$('.folio,.eyebrow', t).forEach(decode);
    });
  }, { rootMargin: '0px 0px -7% 0px', threshold: 0.06 }));
  /* a clip-path:inset(100%) photo has zero visible area and Chrome's observer counts that, so watch its parent instead */
  const iow = RA._iow || (RA._iow = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return; (en.target._wp || []).forEach(w => w.classList.add('in')); en.target._wp = null; RA._iow.unobserve(en.target);
  }), { rootMargin: '0px 0px -7% 0px', threshold: 0 }));
  els.forEach(e => {
    if (e.classList.contains('wp') && e.parentElement) { const h = e.parentElement; (h._wp || (h._wp = [])).push(e); iow.observe(h); }
    else io.observe(e);
  });
  $$('.folio,.eyebrow', scope).forEach(f => { if (!f._dec && !f.closest('[data-rv],.sec-head .meta')) decodeOnView(f); });
  $$('.sec-head .meta', scope).forEach(m => { const f = $('.folio', m); if (f && !f._dec) decodeOnView(f); });
};
/* labels decode like a reading settling */
const GLYPH = 'ABCDEFGHJKLMNPRSTUVWXYZ0123456789#/+=';
function decode(el) {
  if (!el || el._dec) return; el._dec = 1; return;
  const nodes = []; const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT); let n; while ((n = w.nextNode())) if (n.textContent.trim()) nodes.push([n, n.textContent]);
  const total = nodes.reduce((a, x) => a + x[1].length, 0); if (!total) return;
  const t0 = performance.now(), dur = Math.min(1100, 380 + total * 22);
  const step = now => {
    const p = Math.min(1, (now - t0) / dur); let off = 0;
    nodes.forEach(([node, txt]) => {
      let out = '';
      for (let i = 0; i < txt.length; i++) { const c = txt[i], q = (off + i) / total; out += (p >= 1 || q < p * 1.15 - 0.15 || /[\s·—–&.,:;()'’]/.test(c)) ? c : GLYPH[(Math.random() * GLYPH.length) | 0]; }
      node.textContent = out; off += txt.length;
    });
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
function decodeOnView(el) {
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { decode(en.target); io.disconnect(); } }), { threshold: 0.6 });
  io.observe(el);
}
function counters() {
  const els = $$('[data-count]'); if (!els.length) return;
  const run = el => {
    const end = parseFloat(el.dataset.count), dp = (el.dataset.count.split('.')[1] || '').length, dur = 1600, t0 = performance.now();
    const step = t => { const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 4); el.textContent = (end * e).toLocaleString('en-US', { minimumFractionDigits: dp, maximumFractionDigits: dp }); if (p < 1) requestAnimationFrame(step); };
    if (RA.RM) el.textContent = end.toLocaleString('en-US'); else requestAnimationFrame(step);
  };
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } }), { threshold: 0.4 });
  els.forEach(e => io.observe(e));
}

/* ---------------------------------------------------------------- tilt, magnetic, cursor */
RA.tilt = function (scope) {
  $$('[data-tilt]', scope).forEach(el => {
    if (el._tilt) return; el._tilt = 1;
    if (!$('.sheen', el) && el.classList.contains('card')) { const s = document.createElement('i'); s.className = 'sheen'; el.prepend(s); }
    if (!RA.FINE || RA.RM) return;
    const max = parseFloat(el.dataset.tilt) || 5;
    let raf = 0;
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.setProperty('--mx', (x * 100).toFixed(1) + '%'); el.style.setProperty('--my', (y * 100).toFixed(1) + '%');
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { el.style.transform = 'perspective(1100px) rotateX(' + ((0.5 - y) * max).toFixed(2) + 'deg) rotateY(' + ((x - 0.5) * max).toFixed(2) + 'deg) translateZ(0)'; });
    });
    el.addEventListener('pointerleave', () => { cancelAnimationFrame(raf); el.style.transform = ''; });
  });
};
function autoTilt() {
  $$('.card').forEach(c => { if (c.hasAttribute('data-tilt') || c.closest('.vpanel,form,[data-rail],[data-stack]') || $('input,select,textarea,table,canvas', c)) return; c.setAttribute('data-tilt', '3.5'); });
}
function magnetic() {
  if (!RA.FINE || RA.RM) return;
  $$('[data-mag]').forEach(el => {
    el.addEventListener('pointermove', e => { const r = el.getBoundingClientRect(); el.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * 0.22).toFixed(1) + 'px,' + ((e.clientY - r.top - r.height / 2) * 0.3).toFixed(1) + 'px)'; });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}
function cursor() {
  if (!RA.FINE || RA.RM) return;
  const c = $('.cursor'); if (!c) return;
  const dot = $('.c-dot', c), ring = $('.c-ring', c);
  let x = -100, y = -100, rx = -100, ry = -100, shown = false;
  addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return; x = e.clientX; y = e.clientY;
    if (!shown) { shown = true; rx = x; ry = y; root.classList.add('has-cursor'); }
    c.classList.toggle('hover', !!e.target.closest('a,button,[role=button],input,select,textarea,label,[data-tilt]'));
  }, { passive: true });
  addEventListener('pointerdown', () => c.classList.add('down')); addEventListener('pointerup', () => c.classList.remove('down'));
  document.addEventListener('mouseleave', () => c.classList.add('gone')); document.addEventListener('mouseenter', () => c.classList.remove('gone'));
  (function f() { rx += (x - rx) * 0.2; ry += (y - ry) * 0.2; dot.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)'; ring.style.transform = 'translate3d(' + rx.toFixed(1) + 'px,' + ry.toFixed(1) + 'px,0)'; requestAnimationFrame(f); })();
}
function uiSounds() {
  addEventListener('pointerdown', () => Snd.unlock(), { once: true });
  if (RA.FINE) document.addEventListener('pointerover', e => {
    const t = e.target.closest('a,button'); if (!t || (e.relatedTarget && t.contains(e.relatedTarget))) return; Snd.tick();
  });
  document.addEventListener('click', e => { if (e.target.closest('a,button:not([data-nosnd])')) Snd.click(); });
}

/* ---------------------------------------------------------------- toast + modal */
RA.toast = function (msg, ms) {
  let box = $('.toasts'); if (!box) { box = document.createElement('div'); box.className = 'toasts'; box.setAttribute('role', 'status'); box.setAttribute('aria-live', 'polite'); document.body.appendChild(box); }
  const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; box.appendChild(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 420); }, ms || 2600);
};
RA.modal = function (html) {
  const m = $('#modal'); if (!m) return;
  $('#modalBody').innerHTML = html; m.classList.add('open'); m.setAttribute('aria-hidden', 'false'); RA.lock(true); Snd.open();
  const f = $('input,select,textarea,button:not(.xbtn)', $('#modalBody')); setTimeout(() => f && f.focus(), 60);
};
RA.closeModal = function () {
  const m = $('#modal'); if (!m || !m.classList.contains('open')) return;
  m.classList.remove('open'); m.setAttribute('aria-hidden', 'true'); RA.lock(false); Snd.close();
  setTimeout(() => { if (!m.classList.contains('open')) { $('#modalBody').innerHTML = ''; const b = $('.modal-box', m); if (b) b.classList.remove('wide'); } }, 420);
};
function modalWire() {
  const m = $('#modal'); if (!m) return;
  m.addEventListener('click', e => { if (e.target.closest('[data-close]')) RA.closeModal(); });
  addEventListener('keydown', e => { if (e.key === 'Escape') RA.closeModal(); });
}

/* ---------------------------------------------------------------- config binding */
function bindConfig() {
  $$('[data-wa]').forEach(a => { a.href = C.waUrl(a.dataset.wa || ''); a.target = '_blank'; a.rel = 'noopener'; });
  $$('[data-cfg]').forEach(el => { const v = C[el.dataset.cfg]; if (v) el.textContent = v; });
  $$('[data-href]').forEach(a => { const v = C[a.dataset.href]; if (v) { a.href = v; a.target = '_blank'; a.rel = 'noopener'; } else a.hidden = true; });
  $$('[data-need]').forEach(el => { if (!C[el.dataset.need]) el.hidden = true; });
  $$('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
}

/* ---------------------------------------------------------------- dock */
function dock() {
  const d = $('.dock'); if (!d) return;
  $$('[data-theme-btn]').forEach(b => { b.setAttribute('aria-pressed', String(root.dataset.theme === 'light')); b.addEventListener('click', () => RA.theme(root.dataset.theme === 'light' ? 'dark' : 'light')); });
  const sb = $('[data-sound-btn]');
  if (sb) {
    const paint = () => { sb.setAttribute('aria-pressed', String(Snd.on)); sb.innerHTML = Snd.on ? ICON.sound : ICON.mute; sb.setAttribute('aria-label', Snd.on ? 'Turn sound off' : 'Turn sound on'); };
    paint(); sb.addEventListener('click', () => { Snd.set(!Snd.on); paint(); RA.toast(Snd.on ? 'Sound on' : 'Sound off', 1400); });
  }
  $$('[data-sound-toggle]').forEach(t => { const p = () => { t.textContent = Snd.on ? 'Sound: on' : 'Sound: off'; t.setAttribute('aria-pressed', String(Snd.on)); }; p(); t.addEventListener('click', () => { Snd.set(!Snd.on); p(); const sb = $('[data-sound-btn]'); if (sb) sb.innerHTML = Snd.on ? ICON.sound : ICON.mute; }); });
  const top = $('[data-top-btn]'), ring = top && $('circle', top);
  if (top) {
    const upd = () => { const h = document.documentElement.scrollHeight - innerHeight, p = h > 0 ? scrollY / h : 0; if (ring) ring.style.setProperty('--off', (100.5 * (1 - p)).toFixed(1)); };
    addEventListener('scroll', upd, { passive: true }); upd();
    top.addEventListener('click', () => RA.go(0, 0));
  }
}
const ICON = RA.ICON = {
  sound: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
  mute: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="m16 9 5 6M21 9l-5 6"/></svg>',
  arrow: '<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
};

/* ---------------------------------------------------------------- command palette */
function cmdk() {
  const box = $('#cmdk'); if (!box) return;
  const inp = $('#cmdkIn'), list = $('#cmdkList');
  const PAGES = [['Home', 'index.html', 'Start'], ['Courses', 'courses.html', '5054 · 0625 · 9702 papers'], ['Syllabus tracker', 'syllabus.html', 'Every topic'], ['Past papers', 'past-papers.html', 'QP · MS · timer'],
    ['Physics Lab', 'lab.html', 'Ten tools'], ['Student portal', 'portal.html', 'Your study desk'], ['About Sir Yawar', 'about.html', 'Story'], ['Contact & enrol', 'contact.html', 'WhatsApp']];
  const TOOLS = [['motion', 'Motion grapher (SUVAT)'], ['forces', 'Forces & momentum'], ['energy', 'Energy & efficiency'], ['heat', 'Specific heat capacity'], ['waves', 'Waves & oscilloscope'],
    ['refract', 'Refraction & critical angle'], ['lens', 'Thin lens ray diagram'], ['circuit', 'Circuit solver'], ['decay', 'Half-life simulator'], ['quiz', 'MCQ drill'], ['flash', 'Laws & units flashcards']];
  const items = [];
  PAGES.forEach(p => items.push({ g: 'Pages', i: '→', t: p[0], s: p[2], go: p[1] }));
  TOOLS.forEach(t => items.push({ g: 'Lab tools', i: 'LAB', t: t[1], s: 'lab', go: 'lab.html#' + t[0] }));
  if (D) D.INDEX.forEach(t => items.push({ g: 'Syllabus topics', i: t.code, t: t.n + '  ' + t.t, s: t.lvl, go: 'syllabus.html#t-' + t.code + '-' + t.n, k: t.terms.join(' ') + ' ' + t.sec }));
  items.push({ g: 'Actions', i: '♪', t: 'Sound on / off', s: 'sound', fn: () => { const b = $('[data-sound-btn]'); b ? b.click() : Snd.set(!Snd.on); } });
  items.push({ g: 'Actions', i: '⏱', t: 'Time a 5054 Paper 2 (1h 45m)', s: 'timer', go: 'past-papers.html#t-5054-2' });
  items.push({ g: 'Actions', i: '⏱', t: 'Time a 9702 Paper 4 (2h)', s: 'timer', go: 'past-papers.html#t-9702-4' });
  items.push({ g: 'Actions', i: 'WA', t: 'Message Sir Yawar’s team on WhatsApp', s: 'enrol', go: C.waUrl('Assalam o Alaikum, I found Sir Yawar Abbas’s website and would like to enrol in Physics.'), ext: 1 });
  let shown = [], sel = 0;
  function render() {
    const q = inp.value.trim().toLowerCase(), toks = q.split(/\s+/).filter(Boolean);
    shown = items.filter(it => { const h = (it.t + ' ' + it.s + ' ' + (it.k || '') + ' ' + it.g).toLowerCase(); return toks.every(t => h.includes(t)); });
    if (!q) shown = shown.filter(it => it.g !== 'Syllabus topics').concat(items.filter(it => it.g === 'Syllabus topics').slice(0, 6));
    shown = shown.slice(0, 40); sel = 0;
    let g = '', html = '';
    shown.forEach((it, i) => { if (it.g !== g) { g = it.g; html += '<div class="cmdk-grp">' + RA.esc(g) + '</div>'; } html += '<button type="button" class="cmdk-item" role="option" data-i="' + i + '" aria-selected="' + (i === 0) + '"><i>' + RA.esc(it.i) + '</i><span>' + RA.esc(it.t) + '</span><small>' + RA.esc(it.s) + '</small></button>'; });
    list.innerHTML = html || '<div class="empty" style="margin:8px">Nothing matches “' + RA.esc(q) + '”. Try a topic like “critical angle”.</div>';
  }
  function pick(i) { const it = shown[i]; if (!it) return; close(); if (it.fn) return it.fn(); if (it.ext) return window.open(it.go, '_blank', 'noopener'); location.href = it.go; }
  function move(d) { const b = $$('.cmdk-item', list); if (!b.length) return; sel = (sel + d + b.length) % b.length; b.forEach((x, i) => x.setAttribute('aria-selected', String(i === sel))); b[sel].scrollIntoView({ block: 'nearest' }); }
  function open() { box.classList.add('open'); box.setAttribute('aria-hidden', 'false'); inp.value = ''; render(); setTimeout(() => inp.focus(), 30); RA.lock(true); Snd.open(); }
  function close() { if (!box.classList.contains('open')) return; box.classList.remove('open'); box.setAttribute('aria-hidden', 'true'); RA.lock(false); }
  RA.cmdk = open;
  inp.addEventListener('input', render);
  inp.addEventListener('keydown', e => { if (e.key === 'ArrowDown') { e.preventDefault(); move(1); } else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); } else if (e.key === 'Enter') { e.preventDefault(); pick(sel); } });
  list.addEventListener('click', e => { const b = e.target.closest('.cmdk-item'); if (b) pick(+b.dataset.i); });
  box.addEventListener('click', e => { if (e.target.classList.contains('scrim')) close(); });
  addEventListener('keydown', e => {
    const typing = /INPUT|TEXTAREA|SELECT/.test((document.activeElement || {}).tagName || '');
    if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) { e.preventDefault(); box.classList.contains('open') ? close() : open(); }
    else if (e.key === 'Escape') close();
  });
  $$('[data-cmdk]').forEach(b => b.addEventListener('click', open));
}

/* ---------------------------------------------------------------- Prism, the help desk */
function bot() {
  const fab = $('.fab'), box = $('#bot'); if (!fab || !box) return;
  const log = $('.bot-log', box), form = $('.bot-f', box), inp = $('input', form);
  let level = RA.store.get('ya-level', null), greeted = false;
  const wa = q => '<a class="btn btn-xs btn-pri" target="_blank" rel="noopener" href="' + RA.esc(C.waUrl(q)) + '">' + ICON.wa + ' Ask on ' + RA.esc(C.waLabel || 'WhatsApp') + '</a>';
  const lnk = (h, t) => '<a class="btn btn-xs" href="' + h + '">' + RA.esc(t) + '</a>';
  function say(html, who) {
    const m = document.createElement('div'); m.className = 'msg ' + (who || 'b'); m.innerHTML = html; log.appendChild(m);
    log.scrollTop = log.scrollHeight; return m;
  }
  function reply(html) {
    const t = say('<i></i><i></i><i></i>', 'b typing');
    setTimeout(() => { t.remove(); say(html); Snd.soft(); }, RA.RM ? 50 : 420 + Math.random() * 300);
  }
  function lvlName(l) { return { '5054': 'O Level 5054', '0625': 'IGCSE 0625', '9702-AS': 'AS Level 9702', '9702-A2': 'A2 (A Level) 9702' }[l] || ''; }
  const LVBTN = '<div class="mrow"><button class="chip" data-lv="5054">O Level</button><button class="chip" data-lv="0625">IGCSE</button><button class="chip" data-lv="9702-AS">AS</button><button class="chip" data-lv="9702-A2">A2</button></div>';
  const rules = [
    [/^(hi|hello|hey|salam|assalam|aoa|asalam|slam)\b/, () => 'Wa alaikum assalam. I’m Prism, the help desk on Sir Yawar’s site. Ask me about classes, a syllabus topic, an equation or a past paper.' + (level ? '' : LVBTN)],
    [/(fee|fees|price|cost|charges|kitni|how much)/, q => 'Fees depend on your level and the batch, so Sir Yawar’s team quotes them directly. Send them a message' + (level ? ' and mention you are ' + lvlName(level) : '') + '.<div class="mrow">' + wa('Assalam o Alaikum, what is the fee for ' + (lvlName(level) || 'Physics') + ' classes with Sir Yawar Abbas?') + '</div>'],
    [/(timing|time table|timetable|schedule|batch|when.*class|class.*when|days)/, q => 'Batch days and times are set each session, at each campus and online. Ask for the current timetable:<div class="mrow">' + wa('Assalam o Alaikum, what are the class timings for ' + (lvlName(level) || 'Physics') + ' with Sir Yawar Abbas?') + '</div>'],
    [/(recorded|recording|demo|crash|revision)/, () => 'Ask his team about recorded lectures and demo classes for the coming series. Prodigy Educations has posted a demo class with Sir Yawar on YouTube.<div class="mrow">' + wa('Assalam o Alaikum, are recorded Physics lectures or a demo class available' + (level ? ' for ' + lvlName(level) : '') + '?') + lnk('courses.html', 'Courses') + '</div>'],
    [/(online|on-site|onsite|physical|campus|where|location|address|lyceum|prodigy|highbrow|ambitions|classroom|centre|center)/, () => {
      const cs = (C.campuses || []).map(c => '<b>' + RA.esc(c.name) + '</b> — ' + RA.esc(c.note || '')).join('<br>');
      return 'Sir Yawar teaches at more than one place, and online.' + (cs ? '<br><br>' + cs : '') + '<div class="mrow">' + lnk('about.html#where', 'Where he teaches') + wa('Assalam o Alaikum, where can I join Sir Yawar Abbas’s Physics classes?') + '</div>'; }],
    [/(enrol|enroll|register|admission|join|seat|sign up)/, () => 'Fill in the enrolment form and it opens a ready-written WhatsApp message to Sir Yawar’s team.<div class="mrow">' + lnk('contact.html#enrol', 'Enrolment form') + wa('Assalam o Alaikum, I would like to enrol with Sir Yawar Abbas for ' + (lvlName(level) || 'Physics') + '.') + '</div>'],
    [/(portal|login|log in|student id|access code|dashboard)/, () => 'The student portal keeps lectures, announcements and marks for enrolled students, and your own progress from this site. This is a preview: sign in with the demo ID shown on the portal page.<div class="mrow">' + lnk('portal.html', 'Open the portal') + '</div>'],
    [/(youtube|video|lecture|watch)/, () => 'Sir Yawar teaches lectures through the academies he works with; a demo class is on the Prodigy Educations YouTube channel. Enrolled students get lectures filed by topic in the portal.<div class="mrow">' + lnk('portal.html', 'Student portal') + wa('Assalam o Alaikum, are Sir Yawar’s Physics lectures available online?') + '</div>'],
    [/(contact|number|phone|call|whatsapp|instagram|facebook)/, () => (C.phoneDisplay ? 'WhatsApp or call <b>' + RA.esc(C.phoneDisplay) + '</b>.' : 'Message Sir Yawar’s team on WhatsApp.') + '<div class="mrow">' + wa('Assalam o Alaikum') + lnk('contact.html', 'All contacts') + '</div>'],
    [/(thank|thanks|shukria|jazak)/, () => 'Any time. Keep your units on every line.'],
    [/\b(lab|tool|simulator|simulation|calculator|practice)\b/, () => 'The Physics Lab has ten tools: a motion grapher, forces and momentum, energy and efficiency, specific heat capacity, waves, refraction, a lens ray diagram, a circuit solver and a half-life simulator, plus an MCQ drill and flashcards.<div class="mrow">' + lnk('lab.html', 'Open the Lab') + '</div>']
  ];
  function paperQ(q) {
    const code = /9702|a ?level|as\b|a2/.test(q) ? '9702' : (/0625|igcse/.test(q) ? '0625' : (/5054|o ?level/.test(q) ? '5054' : null));
    const pm = q.match(/paper\s*([1-6])/); if (!pm || !D) return null;
    const c = code || (level ? level.slice(0, 4) : '5054'), p = D.PMETA[c].papers[pm[1]];
    if (!p) return D.PMETA[c].name + ' ' + c + ' has no Paper ' + pm[1] + '.';
    const h = Math.floor(p.min / 60), m = p.min % 60;
    return '<b>' + c + ' Paper ' + pm[1] + ' · ' + p.n + '</b><br>' + (h ? h + ' h ' : '') + (m ? m + ' min' : '') + ' · ' + p.m + ' marks · ' + p.w + '<br><span class="muted">' + RA.esc(p.note) + '</span><div class="mrow">' + lnk('past-papers.html#t-' + c + '-' + pm[1], 'Time one now') + lnk('past-papers.html#p-' + c, 'Past papers') + '</div>';
  }
  function ratioQ(q) {
    if (!D) return null;
    const r = D.RATIOS.find(r => q.includes(r.n.toLowerCase()) || (r.id === 'ohm' && /ohm|v ?= ?ir/.test(q)) || (r.id === 'wave' && /wave (speed|equation)/.test(q)) || (r.id === 'snell' && /snell/.test(q)) || (r.id === 'mc2' && /mc2|mc²/.test(q)));
    if (!r) return null;
    return '<b>' + RA.esc(r.n) + '</b><br><code>' + RA.esc(r.f) + '</code>' + (r.sym ? '<br><span class="muted">' + RA.esc(r.sym) + '</span>' : '') + (r.u ? '<br><span class="muted">Unit: ' + RA.esc(r.u) + '</span>' : '') + '<br><span class="muted">Level: ' + lvTxt(r.lv) + '</span><div class="mrow">' + lnk('syllabus.html#eqs', 'Equation sheet') + '</div>';
  }
  function lvTxt(lv) { const m = { O: 'O Level', IG: 'IGCSE', AS: 'AS', A: 'A Level' }; return lv.split(' ').map(x => m[x]).join(' · '); }
  function termQ(q) {
    if (!D) return null;
    const s = q.replace(/^(what is|what are|what's|define|meaning of|explain)\s+(an?\s+|the\s+)?/, '').replace(/[?.!]/g, '').trim();
    if (s.length < 3) return null;
    const all = D.CONCEPTS.map(c => [c[0], c[1], 'law']).concat(D.TERMS.map(t => [t[0], t[1], 'term']));
    const hit = all.find(t => t[0].toLowerCase() === s) || all.find(t => t[0].toLowerCase().startsWith(s)) || all.find(t => s.includes(t[0].toLowerCase()) && t[0].length > 4);
    return hit ? '<b>' + RA.esc(hit[0]) + '</b>' + (hit[2] === 'law' ? ' <span class="tag" style="height:20px">law</span>' : '') + '<br>' + RA.esc(hit[1]) + '<div class="mrow">' + lnk('lab.html#flash', 'Flashcards') + '</div>' : null;
  }
  function topicQ(q) {
    if (!D) return null;
    const toks = q.toLowerCase().replace(/[^a-z0-9.\s]/g, ' ').split(/\s+/).filter(t => t.length > 3 && !/(what|about|topic|syllabus|explain|which|level|physics|there|with|have|does|teach)/.test(t));
    if (!toks.length) return null;
    let best = null, bs = 0;
    D.INDEX.forEach(t => { const h = (t.t + ' ' + t.terms.join(' ') + ' ' + t.pts.join(' ')).toLowerCase(); let s = 0; toks.forEach(k => { if (t.t.toLowerCase().includes(k)) s += 3; else if (h.includes(k)) s += 1; }); if (level && t.code === level.slice(0, 4)) s += 0.5; if (s > bs) { bs = s; best = t; } });
    if (!best || bs < 3) return null;
    return '<b>' + best.code + ' · ' + best.n + ' ' + RA.esc(best.t) + '</b><br>' + best.pts.slice(0, 3).map(p => '• ' + RA.esc(p)).join('<br>') + '<div class="mrow">' + lnk('syllabus.html#t-' + best.code + '-' + best.n, 'Open in syllabus') + (best.lab ? lnk('lab.html#' + best.lab, 'Try it in the Lab') : '') + '</div>';
  }
  function answer(raw) {
    const q = raw.toLowerCase().trim();
    if (/^(5054|o ?level)$/.test(q)) { level = '5054'; RA.store.set('ya-level', level); }
    if (/^(0625|igcse)$/.test(q)) { level = '0625'; RA.store.set('ya-level', level); }
    if (/^(9702|as|as level)$/.test(q)) { level = '9702-AS'; RA.store.set('ya-level', level); }
    for (const [re, fn] of rules) if (re.test(q)) return fn(q);
    const p = paperQ(q); if (p) return p;
    const r = ratioQ(q); if (r) return r;
    if (/^(what|define|meaning|explain)/.test(q)) { const t = termQ(q); if (t) return t; }
    const tp = topicQ(q); if (tp) return tp;
    const t2 = termQ(q); if (t2) return t2;
    if (/5054/.test(q)) return '<b>O Level Physics 5054</b>: Paper 1 Multiple Choice (1 h, 40 marks, 30%), Paper 2 Theory (1 h 45 min, 80 marks, 50%), and either Paper 3 Practical Test or Paper 4 Alternative to Practical (20%).<div class="mrow">' + lnk('courses.html#c5054', 'Course details') + '</div>';
    if (/0625/.test(q)) return '<b>IGCSE Physics 0625</b>: Core takes Papers 1, 3 and 5 or 6; Extended takes Papers 2, 4 and 5 or 6.<div class="mrow">' + lnk('courses.html#c0625', 'Course details') + '</div>';
    if (/9702/.test(q)) return '<b>AS & A Level Physics 9702</b>: AS is Papers 1, 2 and 3; the full A Level adds Paper 4 (structured) and Paper 5 (planning, analysis and evaluation).<div class="mrow">' + lnk('courses.html#c9702', 'Course details') + '</div>';
    return 'I don’t have a confident answer for that one. Sir Yawar’s team will:<div class="mrow">' + wa(raw) + '</div>';
  }
  function open() {
    box.classList.add('open'); box.setAttribute('aria-hidden', 'false'); fab.setAttribute('aria-expanded', 'true'); Snd.open();
    if (!greeted) { greeted = true; reply('Assalam o Alaikum. I’m Prism, the help desk on Sir Yawar’s site.' + (level ? ' You’re set as <b>' + lvlName(level) + '</b>.' : ' Which level are you?' + LVBTN)); }
    setTimeout(() => inp.focus(), 80);
  }
  function close() { box.classList.remove('open'); box.setAttribute('aria-hidden', 'true'); fab.setAttribute('aria-expanded', 'false'); Snd.close(); }
  RA.bot = { open, ask: q => { open(); setTimeout(() => { say(RA.esc(q), 'u'); reply(answer(q)); }, 200); } };
  fab.addEventListener('click', () => box.classList.contains('open') ? close() : open());
  $$('[data-ask]').forEach(b => b.addEventListener('click', () => fab.click()));
  $('.xbtn', box).addEventListener('click', close);
  addEventListener('keydown', e => { if (e.key === 'Escape' && box.classList.contains('open')) close(); });
  form.addEventListener('submit', e => { e.preventDefault(); const v = inp.value.trim(); if (!v) return; inp.value = ''; say(RA.esc(v), 'u'); reply(answer(v)); });
  box.addEventListener('click', e => {
    const lv = e.target.closest('[data-lv]');
    if (lv) { level = lv.dataset.lv; RA.store.set('ya-level', level); say(RA.esc(lv.textContent), 'u'); reply('Noted: <b>' + lvlName(level) + '</b>. Ask me about fees, timings, a topic, an equation or a paper.'); return; }
    const c = e.target.closest('.bot-chips .chip'); if (c) { const q = c.dataset.q || c.textContent; say(RA.esc(q), 'u'); reply(answer(q)); }
  });
}

/* ---------------------------------------------------------------- rails: horizontal galleries */
const CHEV = d => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="' + (d < 0 ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7') + '"/></svg>';
function setVW() { root.style.setProperty('--vw', root.clientWidth + 'px'); }
setVW(); addEventListener('resize', setVW);
RA.rails = function (scope) {
  $$('[data-rail]', scope).forEach(track => {
    if (track._rail) { track._rail(); return; }
    const mode = track.dataset.rail;
    track.classList.add('rail');
    const ctl = document.createElement('div');
    ctl.className = 'rail-ctl' + (/^[mtc]$/.test(mode) ? ' rail-ctl-' + mode : '');
    ctl.innerHTML = '<span class="rail-n"><b>01</b> / <i>01</i></span><span class="rail-bar" aria-hidden="true"><i></i></span><span class="rail-btns">' +
      '<button type="button" class="rail-b" data-d="-1" aria-label="Previous">' + CHEV(-1) + '</button><button type="button" class="rail-b" data-d="1" aria-label="Next">' + CHEV(1) + '</button></span>';
    (track.dataset.railAfter ? $(track.dataset.railAfter) || track : track).after(ctl);
    const n = $('.rail-n b', ctl), tot = $('.rail-n i', ctl), bar = $('.rail-bar i', ctl), prev = $('[data-d="-1"]', ctl), next = $('[data-d="1"]', ctl);
    const items = () => Array.from(track.children).filter(c => c.offsetParent !== null || c.getClientRects().length);
    let raf = 0;
    const upd = () => {
      raf = 0;
      const pl = getComputedStyle(track).paddingLeft; if (track.style.scrollPaddingInline !== pl) track.style.scrollPaddingInline = pl;
      const sw = track.scrollWidth, cw = track.clientWidth, max = sw - cw, x = track.scrollLeft;
      const scrolls = getComputedStyle(track).overflowX !== 'visible' && max > 4;
      ctl.style.display = scrolls ? '' : 'none';
      if (!scrolls) return;
      const its = items(); const pad = parseFloat(getComputedStyle(track).paddingLeft) || 0;
      let idx = 0; its.forEach((it, i) => { if (it.offsetLeft - pad <= x + 8) idx = i; });
      if (x >= max - 4) idx = its.length - 1;
      n.textContent = String(idx + 1).padStart(2, '0'); tot.textContent = String(its.length).padStart(2, '0');
      const tw = Math.max(.08, cw / sw); bar.style.setProperty('--tw', tw.toFixed(3)); bar.style.setProperty('--tx', ((x / max) * (1 / tw - 1)).toFixed(3));
      prev.disabled = x <= 4; next.disabled = x >= max - 4;
    };
    const q = () => { if (!raf) raf = requestAnimationFrame(upd); };
    track._rail = q;
    track.addEventListener('scroll', q, { passive: true }); addEventListener('resize', q);
    if ('MutationObserver' in window) new MutationObserver(q).observe(track, { childList: true });
    ctl.addEventListener('click', e => {
      const b = e.target.closest('.rail-b'); if (!b) return;
      const its = items(), first = its[0], second = its[1];
      const step = first ? (second ? second.offsetLeft - first.offsetLeft : first.offsetWidth) : track.clientWidth * .8;
      const per = Math.max(1, Math.floor((track.clientWidth - 20) / step));
      track.scrollBy({ left: +b.dataset.d * step * per, behavior: RA.RM ? 'auto' : 'smooth' }); Snd.soft();
    });
    /* drag with a mouse */
    let down = false, sx = 0, sl = 0, moved = 0;
    track.addEventListener('pointerdown', e => {
      if (e.pointerType !== 'mouse' || e.button !== 0 || e.target.closest('input,select,textarea,button,summary')) return;
      down = true; moved = 0; sx = e.clientX; sl = track.scrollLeft;
    });
    addEventListener('pointermove', e => {
      if (!down) return; const dx = e.clientX - sx;
      if (!moved && Math.abs(dx) > 6) { moved = 1; track.classList.add('dragging'); }
      if (moved) { track.scrollLeft = sl - dx; e.preventDefault(); }
    });
    addEventListener('pointerup', () => {
      if (!down) return; down = false;
      if (moved) {
        const its = items(), x = track.scrollLeft, pad = parseFloat(getComputedStyle(track).paddingLeft) || 0;
        let best = 0, bd = 1e9; its.forEach(it => { const d = Math.abs(it.offsetLeft - pad - x); if (d < bd) { bd = d; best = it.offsetLeft - pad; } });
        track.classList.remove('dragging'); track.scrollTo({ left: best, behavior: 'smooth' });
        const stop = ev => { ev.preventDefault(); ev.stopPropagation(); };
        track.addEventListener('click', stop, { capture: true, once: true }); setTimeout(() => track.removeEventListener('click', stop, true), 50);
      }
    });
    upd(); setTimeout(upd, 400);
  });
};

/* ---------------------------------------------------------------- button light + photo parallax */
function finish() {
  /* button finish: inner sheen layer and click ripple */
  const dress = b => { if (b.firstElementChild && b.firstElementChild.classList.contains('btn-sheen')) return; const s = document.createElement('span'); s.className = 'btn-sheen'; s.setAttribute('aria-hidden', 'true'); b.prepend(s); };
  $$('.btn').forEach(dress);
  if ('MutationObserver' in window) new MutationObserver(ms => ms.forEach(m => {
    const t = m.target; if (t.nodeType === 1 && t.classList.contains('btn')) dress(t);
    m.addedNodes.forEach(n => { if (n.nodeType !== 1) return; if (n.classList.contains('btn')) dress(n); if (n.firstElementChild) $$('.btn', n).forEach(dress); });
  })).observe(document.body, { childList: true, subtree: true });
  if (!RA.RM) document.addEventListener('pointerdown', e => {
    const b = e.target.closest && e.target.closest('.btn'); if (!b || b.disabled) return;
    const r = b.getBoundingClientRect(), s = document.createElement('span');
    s.className = 'rip'; s.style.setProperty('--rx', (e.clientX - r.left) + 'px'); s.style.setProperty('--ry', (e.clientY - r.top) + 'px');
    b.appendChild(s); setTimeout(() => s.remove(), 950);
  });
  /* cards: the lit edge follows the cursor */
  if (RA.FINE && !RA.RM) document.addEventListener('pointermove', e => {
    const c = e.target.closest && e.target.closest('.card'); if (!c || c._tilt) return;
    const r = c.getBoundingClientRect(); c.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%'); c.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
  }, { passive: true });
  $$('a.btn:not(.btn-ghost):not(.btn-sm):not(.btn-xs):not(.btn-block)').forEach(a => {
    if ($('svg', a) || !a.textContent.trim()) return;
    a.insertAdjacentHTML('beforeend', a.hasAttribute('data-wa') ? ICON.wa.replace('<svg ', '<svg class="ic" ') : ICON.arrow);
  });
  if (RA.FINE && !RA.RM) document.addEventListener('pointermove', e => {
    const b = e.target.closest && e.target.closest('.btn,.rail-b'); if (!b) return;
    const r = b.getBoundingClientRect(); b.style.setProperty('--bx', (e.clientX - r.left).toFixed(0) + 'px'); b.style.setProperty('--by', (e.clientY - r.top).toFixed(0) + 'px');
  }, { passive: true });
  if (window.gsap && window.ScrollTrigger && !RA.RM) {
    $$('.ph[data-par] > img').forEach(img => {
      gsap.fromTo(img, { yPercent: -5 }, { yPercent: 5, ease: 'none', scrollTrigger: { trigger: img.parentNode, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
  }
  $$('.ph > img').forEach(img => { if (img.complete && !img.naturalWidth && img.getAttribute('src')) img.closest('.ph').classList.add('ph-x'); });
  $$('.credo-plate img').forEach(img => { if (img.complete && !img.naturalWidth) img.parentNode.classList.add('nologo'); });
}

/* ---------------------------------------------------------------- preloader: YAWAR rises, fills with light from below, then the camera dives through the A */
function loader() {
  const on = root.classList.contains('ld-on');
  const parts = $$('.ldx-fill,.ldx-ink,.ldx-m');
  const kill = () => { parts.forEach(p => p.remove()); root.classList.remove('ld-on'); };
  try { sessionStorage.setItem('ya-seen', '1'); } catch (e) { }
  if (!on || RA.RM || !window.gsap) { kill(); return Promise.resolve(); }
  RA.lock(true); scrollTo(0, 0);
  const fill = $('.ldx-fill'), ink = $('.ldx-ink'), gold = $('.ldx-gold'), N = $('#ldN');
  const L = $$('.ldx-ink .ldx-w i'), sub = $('.ldx-ink .ldx-s span'), metas = $$('.ldx-m');
  gsap.set(L, { yPercent: 118 }); gsap.set(sub, { yPercent: 120 }); gsap.set(metas, { autoAlpha: 0, y: 10 });
  gsap.set(['.nav', '.fab', '.dock', '.mbar'], { autoAlpha: 0 });
  const st = { lv: 0, ps: 1.32 };
  const paint = () => { gold.style.setProperty('--lv', st.lv.toFixed(2)); fill.style.setProperty('--lv', st.lv.toFixed(2)); gold.style.setProperty('--ps', st.ps.toFixed(3)); N.textContent = String(Math.round(st.lv)).padStart(3, '0'); };
  const fonts = Promise.race([document.fonts && document.fonts.load ? document.fonts.load('900 100px "Big Shoulders Display"') : Promise.resolve(), new Promise(r => setTimeout(r, 250))]);
  const frames = new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  if (window.gsap) gsap.ticker.lagSmoothing(400, 33);
  return Promise.all([fonts, frames]).then(() => new Promise(res => {
    const E = 'expo.out';
    gsap.timeline({ onComplete: kill })
      .to(metas, { autoAlpha: 1, y: 0, duration: .4, ease: E, stagger: .03 }, 0)
      .to(L, { yPercent: 0, duration: .5, ease: E, stagger: .035 }, 0)
      .to(sub, { yPercent: 0, duration: .45, ease: E }, .15)
      .to(st, { lv: 100, duration: .65, ease: 'power2.inOut', onUpdate: paint }, .08)
      .to(st, { ps: 1.06, duration: .9, ease: 'power1.inOut', onUpdate: paint }, 0)
      .add(() => {
        const I = $('.ldx-ink .ldx-i').getBoundingClientRect();
        const o = (I.left + I.width / 2) + 'px ' + (I.top + I.height * .5) + 'px';
        gsap.set([ink, fill], { transformOrigin: o });
      }, .75)
      .to(metas, { autoAlpha: 0, y: -8, duration: .2, ease: 'power2.in' }, .75)
      .to([ink, fill], { scale: 60, duration: .55, ease: 'expo.in' }, .78)
      .to(fill, { opacity: 0, duration: .25, ease: 'power2.in' }, .98)
      .add(() => { RA.lock(false); res(); }, 1.02)
      .to(['.nav', '.fab', '.dock', '.mbar'], { autoAlpha: 1, duration: .5, ease: 'power2.out', clearProps: 'opacity,visibility' }, 1.05)
      .set(ink, { autoAlpha: 0 }, 1.35);
  }));
}

/* ---------------------------------------------------------------- page curtain: the next page's name rises and fills, then lifts */
const PAGES = { 'index.html': ['Home', 'f.01'], '': ['Home', 'f.01'], 'courses.html': ['Courses', 'f.02'], 'syllabus.html': ['Syllabus', 'f.03'], 'past-papers.html': ['Past papers', 'f.04'], 'lab.html': ['The Lab', 'f.05'], 'portal.html': ['Portal', 'f.06'], 'about.html': ['About', 'f.07'], 'contact.html': ['Contact', 'f.08'], 'admin.html': ['Admin', 'f.09'] };
function ptWord(label, folio) {
  const pt = $('.pt'); if (!pt) return;
  $('.pt-f', pt).textContent = (folio || '') + ' — Sir Yawar Abbas';
  const w = $('.pt-w', pt); w.textContent = label; delete w.dataset.splitDone; splitWords(w);
}
function curtain() {
  /* Page changes use the browser's own cross-document view transition (see site.css),
     so there is no cover, no blank frame and no added delay. */
  root.classList.remove('pt-on');
  try { sessionStorage.removeItem('ya-pt'); } catch (e) { }
  return Promise.resolve();
}

/* ---------------------------------------------------------------- motion details */
function motion() {
  const G = window.gsap, ST = window.ScrollTrigger;
  /* scroll progress line */
  const sp = $('.sprog');
  if (sp) { let q = 0; const u = () => { q = 0; const h = document.documentElement.scrollHeight - innerHeight; sp.style.setProperty('--sp', h > 0 ? (scrollY / h).toFixed(4) : 0); }; addEventListener('scroll', () => { if (!q) q = requestAnimationFrame(u); }, { passive: true }); u(); }
  /* footer wordmark: fit to width, fill from the bottom as the page ends */
  const fm = $('.foot-mark');
  if (fm) {
    const o = $('.fm-o', fm);
    const fit = () => { fm.style.setProperty('--fms', '100px'); const w = o.scrollWidth, cs = getComputedStyle(fm.parentNode), W = fm.parentNode.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight); if (w && W) fm.style.setProperty('--fms', Math.min(260, 100 * W / w * 0.99).toFixed(1) + 'px'); };
    fit(); addEventListener('resize', fit); if (document.fonts) { document.fonts.ready.then(fit); document.fonts.addEventListener && document.fonts.addEventListener('loadingdone', fit); } setTimeout(fit, 1500); if ('ResizeObserver' in window) new ResizeObserver(fit).observe(fm.parentNode);
    if (!RA.RM) {
      let q = 0; const u = () => { q = 0; const r = fm.getBoundingClientRect(), h = innerHeight, max = document.documentElement.scrollHeight - h, start = Math.min(r.top + scrollY - h, max - 1); const p = Math.max(0, Math.min(1, (scrollY - start) / Math.max(1, max - start))); fm.style.setProperty('--fl', (p * p * (3 - 2 * p)).toFixed(3)); };
      addEventListener('scroll', () => { if (!q) q = requestAnimationFrame(u); }, { passive: true }); u();
    } else fm.style.setProperty('--fl', 1);
  }
  /* touch screens: photos switch to colour as they cross the middle of the screen (VERZISH) */
  if (!RA.FINE && 'IntersectionObserver' in window) {
    const lv = new IntersectionObserver(es => es.forEach(en => en.target.classList.toggle('is-live', en.isIntersecting)), { rootMargin: '-38% 0px -38% 0px' });
    $$('.ph').forEach(p => lv.observe(p));
  }
  if (RA.RM || !G || !ST) return;
  /* heroes lift away as you scroll */
  const hero = $('.hero');
  if (hero) {
    G.timeline({ scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } })
      .to('.hero-copy', { yPercent: -14, opacity: .2, ease: 'none' }, 0)
      .to('.hero-fig', { yPercent: 10, scale: .95, ease: 'none' }, 0);
  }
  $$('.phero').forEach(ph => {
    const g = $('.phero-g', ph) || $('.wrap', ph); if (!g) return;
    const kids = Array.from(g.children);
    G.timeline({ scrollTrigger: { trigger: ph, start: 'top top', end: 'bottom top', scrub: true } })
      .to(kids[0], { yPercent: -12, opacity: .25, ease: 'none' }, 0)
      .to(kids.slice(1), { yPercent: 9, ease: 'none' }, 0);
  });
  /* the tape speeds up with the scroll */
  const tapes = $$('.tape-in').map(t => t.getAnimations ? t.getAnimations()[0] : null).filter(Boolean);
  if (tapes.length) {
    let v = 1, last = scrollY, lt = performance.now();
    addEventListener('scroll', () => { const now = performance.now(), dv = Math.abs(scrollY - last) / Math.max(16, now - lt) * 16; last = scrollY; lt = now; v = Math.max(v, 1 + Math.min(dv / 6, 7)); }, { passive: true });
    G.ticker.add(() => { v += (1 - v) * 0.05; tapes.forEach(a => a.playbackRate = v); });
  }
  /* VERZISH sticky stack: each card pins under the nav; the ones beneath shrink back and dim as the next arrives */
  $$('[data-stack]').forEach(st => {
    const kids = Array.from(st.children);
    kids.forEach((k, i) => k.style.setProperty('--si', i));
    kids.forEach((k, i) => {
      if (i === kids.length - 1) return;
      const nxt = kids[i + 1];
      G.fromTo(k, { scale: 1, '--dim': 0 }, { scale: 0.9 + Math.min(i, 5) * 0.008, '--dim': .58, ease: 'none', immediateRender: false,
        scrollTrigger: { trigger: nxt, start: 'top bottom', end: () => 'top ' + (parseFloat(getComputedStyle(nxt).top) || 100) + 'px', scrub: true, invalidateOnRefresh: true } });
    });
  });
  /* rails glide in from the right */
  $$('[data-rail]').forEach(r => G.from(r, { x: 80, opacity: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: r, start: 'top 88%', once: true } }));
  /* big section numbers drift */
}

/* ---------------------------------------------------------------- boot */
RA.boot = function () {
  bindConfig(); smooth(); nav(); modalWire(); dock(); cmdk(); bot(); cursor(); magnetic(); uiSounds(); counters();
  const L = Promise.all([loader(), curtain()]);
  const bg3d = () => { try { if (RA.BG) RA.BG.init(); } catch (e) { console.warn('[RA] 3D background off:', e); } };
  const want3d = !RA.RM && !(navigator.connection && navigator.connection.saveData) && document.getElementById('bg3d');
  if (want3d) L.then(() => {
    const go = () => { if (window.THREE) return bg3d(); const sc = document.createElement('script'); sc.src = window.RA_THREE || 'assets/vendor/three.min.js'; sc.async = true; sc.onload = bg3d; document.head.appendChild(sc); };
    const idle = window.requestIdleCallback || (f => setTimeout(f, 200));
    if (document.readyState === 'complete') idle(go, { timeout: 1200 }); else addEventListener('load', () => idle(go, { timeout: 1200 }), { once: true });
  }); else document.documentElement.classList.add('no3d');
  Q.forEach(fn => { try { fn(); } catch (e) { console.error(e); } });
  autoTilt(); RA.tilt(); RA.rails(); finish(); motion(); L.then(() => RA.reveal());
  if (window.ScrollTrigger) {
    const r = () => ScrollTrigger.refresh();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(r);
    addEventListener('load', r, { once: true });
  }
};
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', RA.boot); else RA.boot();
})();

/* =========================================================================
   RA.BG — interactive 3D particle field (three.js r128)
   One cloud of points that morphs between physics forms as you scroll:
   an atom, an interference field, magnet field lines, a lens bringing
   rays to a focus, orbits, a prism, a spring, E = mc², a decay curve.
   Points part around the cursor; colours follow the theme.
   ========================================================================= */
(function () {
'use strict';
const RA = window.RA = window.RA || {};
const BG = RA.BG = { ready: false };
let THREE, renderer, scene, camera, group, geo, mat, N = 0, cur = 'cloud', canvas;
let aA, aB, rA, rB, seed, mixT = 1, mixFrom = 0, mixStart = 0, mixDur = 1600;
const pos = { x: 0, y: 0, s: 1, rx: 0, ry: 0, a: 1 }, tgt = { x: 0, y: 0, s: 1, rx: 0, ry: 0, a: 1 };
let spin = 0, spinV = 0, autoSpin = 0, ptr = { x: 0, y: 0, tx: 0, ty: 0 }, scr = null, mouse3 = null, mouseOn = 0, mouseOnT = 0, pulse = 0;
const cache = {};
const MOB = () => innerWidth < 760;

const PAL = {
  dark: [[0.82, 0.86, 0.93], [0.36, 0.66, 1.00], [0.16, 0.86, 1.00], [0.95, 0.97, 1.00]],
  light: [[0.15, 0.30, 0.55], [0.10, 0.32, 0.72], [0.70, 0.30, 0.10], [0.12, 0.16, 0.28]]
};

/* ------------------------------------------------------------ shape kit */
function kit(n) {
  const P = new Float32Array(n * 3), R = new Float32Array(n); let i = 0;
  const g = () => (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;
  const K = {
    P, R, get i() { return i; }, left() { return n - i; },
    push(x, y, z, r) { if (i >= n) return; P[i * 3] = x; P[i * 3 + 1] = y; P[i * 3 + 2] = z; R[i] = r; i++; },
    line(x1, y1, x2, y2, c, th, r, zj) { for (let k = 0; k < c; k++) { const t = Math.random(); K.push(x1 + (x2 - x1) * t + g() * th, y1 + (y2 - y1) * t + g() * th, g() * (zj == null ? th * 2 : zj), r); } },
    line3(a, b, c, th, r) { for (let k = 0; k < c; k++) { const t = Math.random(); K.push(a[0] + (b[0] - a[0]) * t + g() * th, a[1] + (b[1] - a[1]) * t + g() * th, a[2] + (b[2] - a[2]) * t + g() * th, r); } },
    dots(x1, y1, x2, y2, c, gap, r) { for (let k = 0; k < c; k++) { let t = Math.random(); t = Math.round(t / gap) * gap; K.push(x1 + (x2 - x1) * t + g() * 0.012, y1 + (y2 - y1) * t + g() * 0.012, g() * 0.03, r); } },
    circle(cx, cy, cz, rad, c, th, r, tilt) { for (let k = 0; k < c; k++) { const a = Math.random() * Math.PI * 2, rr = rad + g() * th; const y = Math.sin(a) * rr, z = 0; K.push(cx + Math.cos(a) * rr, cy + y * Math.cos(tilt || 0), cz + y * Math.sin(tilt || 0) + g() * th, r); } },
    ball(cx, cy, cz, rad, c, r) { for (let k = 0; k < c; k++) { const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2, s = Math.sqrt(1 - u * u), rr = rad * Math.cbrt(Math.random()); K.push(cx + s * Math.cos(a) * rr, cy + u * rr, cz + s * Math.sin(a) * rr, r); } },
    dust(c, rad, r) { for (let k = 0; k < c; k++) { const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2, s = Math.sqrt(1 - u * u), rr = rad * (0.45 + 0.55 * Math.random()); K.push(s * Math.cos(a) * rr * 1.5, u * rr * 0.8, s * Math.sin(a) * rr - 2, r == null ? 3 : r); } },
    text(str, cx, cy, w, c, r, font) {
      const pts = sampleText(str, font || 'italic 600 220px Cormorant, "Cormorant Garamond", Georgia, serif');
      if (!pts.length) return;
      const sc = w / pts.w;
      for (let k = 0; k < c; k++) { const p = pts[(Math.random() * pts.length) | 0]; K.push(cx + (p[0] - pts.w / 2) * sc + g() * 0.01, cy - (p[1] - pts.h / 2) * sc + g() * 0.01, g() * 0.06, r); }
    },
    rot(x, y, z) { // rotate everything pushed so far
      const cx = Math.cos(x), sx = Math.sin(x), cy = Math.cos(y), sy = Math.sin(y), cz = Math.cos(z || 0), sz = Math.sin(z || 0);
      for (let k = 0; k < i; k++) {
        let px = P[k * 3], py = P[k * 3 + 1], pz = P[k * 3 + 2], t;
        t = py * cx - pz * sx; pz = py * sx + pz * cx; py = t;
        t = px * cy + pz * sy; pz = -px * sy + pz * cy; px = t;
        t = px * cz - py * sz; py = px * sz + py * cz; px = t;
        P[k * 3] = px; P[k * 3 + 1] = py; P[k * 3 + 2] = pz;
      }
    },
    fill(rad) { K.dust(n - i, rad || 7); return K; }
  };
  return K;
}
const textCache = {};
function sampleText(str, font) {
  const key = str + '|' + font; if (textCache[key]) return textCache[key];
  const c = document.createElement('canvas'), x = c.getContext('2d');
  x.font = font; const m = x.measureText(str); const w = Math.ceil(m.width) + 40, h = 300;
  c.width = w; c.height = h; x.font = font; x.textBaseline = 'middle'; x.fillStyle = '#fff'; x.fillText(str, 20, h / 2);
  const d = x.getImageData(0, 0, w, h).data, pts = []; const st = 3;
  let minY = h, maxY = 0;
  for (let yy = 0; yy < h; yy += st) for (let xx = 0; xx < w; xx += st) if (d[(yy * w + xx) * 4 + 3] > 140) { pts.push([xx, yy]); if (yy < minY) minY = yy; if (yy > maxY) maxY = yy; }
  pts.w = w; pts.h = (minY + maxY); // centre on the ink, not the box
  textCache[key] = pts; return pts;
}

const SHAPES = {
  cloud(n) { const K = kit(n); K.dust(n, 7.5, 3); for (let k = 0; k < n; k++) K.R[k] = Math.random() < 0.6 ? 0 : (Math.random() < 0.7 ? 1 : 3); return K; },
  atom(n) {
    const K = kit(n), f = v => Math.round(n * v);
    K.ball(0, 0, 0, 0.55, f(0.1), 2);
    for (let k = 0; k < f(0.04); k++) { const a = Math.random() * 6.283, b = Math.acos(2 * Math.random() - 1); K.push(Math.sin(b) * Math.cos(a) * 0.62, Math.cos(b) * 0.62, Math.sin(b) * Math.sin(a) * 0.62, 3); }
    [[0, 0], [1.05, 0.0], [-1.05, 0.0]].forEach(([rz], j) => {
      const tilt = 1.25, c = f(0.16), R1 = 3.1, R2 = 1.15;
      for (let k = 0; k < c; k++) { const a = Math.random() * 6.283; let x = Math.cos(a) * R1, y = Math.sin(a) * R2, z = (Math.random() - 0.5) * 0.04;
        const t = y * Math.cos(tilt) - z * Math.sin(tilt); z = y * Math.sin(tilt) + z * Math.cos(tilt); y = t;
        const ang = j * 2.094; const xr = x * Math.cos(ang) - y * Math.sin(ang), yr = x * Math.sin(ang) + y * Math.cos(ang);
        K.push(xr, yr, z, 0); }
      const a0 = 0.8 + j * 2.1; let x = Math.cos(a0) * R1, y = Math.sin(a0) * R2, z = 0; const t = y * Math.cos(tilt); z = y * Math.sin(tilt); y = t;
      const ang = j * 2.094; K.ball(x * Math.cos(ang) - y * Math.sin(ang), x * Math.sin(ang) + y * Math.cos(ang), z, 0.17, f(0.025), 1);
    });
    K.rot(0.25, 0.4, 0); return K.fill(7);
  },
  wave(n) {
    const K = kit(n), f = v => Math.round(n * v), c = f(0.72);
    for (let k = 0; k < c; k++) { const x = (Math.random() * 2 - 1) * 6.2, z = (Math.random() * 2 - 1) * 3.4;
      const r1 = Math.hypot(x + 2.2, z), r2 = Math.hypot(x - 2.2, z);
      const y = 0.32 * (Math.sin(r1 * 2.2) + Math.sin(r2 * 2.2));
      K.push(x, y, z, Math.abs(y) > 0.48 ? 1 : (Math.random() < 0.08 ? 3 : 0)); }
    K.ball(-2.2, 0.3, 0, 0.12, f(0.01), 2); K.ball(2.2, 0.3, 0, 0.12, f(0.01), 2);
    K.rot(-0.62, 0.18, 0); for (let k = 0; k < K.i; k++) K.P[k * 3 + 1] -= 0.5;
    return K.fill(8);
  },
  field(n) {
    const K = kit(n), f = v => Math.round(n * v);
    for (let k = 0; k < f(0.12); k++) { const x = (Math.random() * 2 - 1) * 1.4, y = (Math.random() * 2 - 1) * 0.32, z = (Math.random() * 2 - 1) * 0.32; K.push(x, y, z, x > 0 ? 2 : 1); }
    const ks = [0.9, 1.5, 2.3, 3.4, 5.0], planes = 6, per = f(0.6) / (ks.length * planes);
    for (let p = 0; p < planes; p++) { const phi = p * Math.PI / planes;
      ks.forEach(kk => { for (let j = 0; j < per; j++) { const th = 0.12 + Math.random() * (Math.PI - 0.24), r = kk * Math.sin(th) * Math.sin(th);
        const x = r * Math.cos(th) * 1.25, rr = r * Math.sin(th); K.push(x, rr * Math.cos(phi), rr * Math.sin(phi), kk > 3 ? 3 : 0); } }); }
    K.rot(0.2, 0.5, 0.0); return K.fill(7);
  },
  lens(n) {
    const K = kit(n), f = v => Math.round(n * v), H = 2.4;
    for (let k = 0; k < f(0.16); k++) { const y = (Math.random() * 2 - 1) * H, w = 0.42 * (1 - (y / H) * (y / H)); const s = Math.random() < 0.5 ? -1 : 1; K.push(s * w + (Math.random() - 0.5) * 0.02, y, (Math.random() - 0.5) * 0.5, 3); }
    K.line(-6, 0, 6, 0, f(0.05), 0.006, 3, 0.01);
    const F = 2.6;
    [-1.8, -1.2, -0.6, 0.6, 1.2, 1.8].forEach((y, j) => { K.line(-6, y, 0, y, f(0.05), 0.01, 0, 0.02); K.line(0, y, F + (F - 0) * 0.9, -y * 0.9, f(0.05), 0.01, 1, 0.02); });
    K.ball(F, 0, 0, 0.14, f(0.02), 2); K.ball(-F, 0, 0, 0.08, f(0.008), 2);
    K.rot(0.1, -0.42, 0); return K.fill(7);
  },
  orbit(n) {
    const K = kit(n), f = v => Math.round(n * v);
    K.ball(0, 0, 0, 0.7, f(0.12), 2);
    [1.6, 2.5, 3.5, 4.6].forEach((R, j) => { K.circle(0, 0, 0, R, f(0.11), 0.012, 0, Math.PI / 2); const a = j * 1.7 + 0.6; K.ball(Math.cos(a) * R, 0, Math.sin(a) * R, 0.12 + j * 0.04, f(0.018), 1); });
    K.rot(0.42, 0, 0.18); return K.fill(7);
  },
  prism(n) {
    const K = kit(n), f = v => Math.round(n * v), A = [0, 1.9], B = [-1.8, -1.3], C = [1.8, -1.3];
    K.line(A[0], A[1], B[0], B[1], f(0.07), 0.012, 3, 0.3); K.line(A[0], A[1], C[0], C[1], f(0.07), 0.012, 3, 0.3); K.line(B[0], B[1], C[0], C[1], f(0.07), 0.012, 3, 0.3);
    K.line(-6.2, -0.2, -0.95, 0.3, f(0.09), 0.012, 0, 0.02);
    K.line(-0.95, 0.3, 1.05, 0.0, f(0.04), 0.03, 0, 0.04);
    for (let j = 0; j < 7; j++) { const ey = -0.6 - j * 0.32; K.line(1.05, 0.0, 6.0, ey, f(0.045), 0.02, j < 2 ? 2 : (j < 5 ? 1 : 0), 0.04); }
    K.rot(0.06, -0.3, 0); return K.fill(7);
  },
  spring(n) {
    const K = kit(n), f = v => Math.round(n * v), c = f(0.6), turns = 9, L = 6.4, R = 0.85;
    for (let k = 0; k < c; k++) { const t = Math.random(), a = t * turns * 6.283; K.push(-L / 2 + t * L, Math.cos(a) * R, Math.sin(a) * R, Math.random() < 0.1 ? 1 : 0); }
    K.line(-L / 2 - 0.8, -1.4, -L / 2 - 0.8, 1.4, f(0.04), 0.03, 3, 0.4);
    K.ball(L / 2 + 0.75, 0, 0, 0.6, f(0.08), 2);
    K.rot(0.2, -0.5, 0.95); return K.fill(7);
  },
  eq(n) { const K = kit(n), f = v => Math.round(n * v); K.text('E = mc²', 0, 0.1, 7.6, f(0.74), 0); for (let k = 0; k < K.i; k++) { const x = K.P[k * 3]; K.R[k] = x < -2.0 ? 1 : (x > 1.4 ? 2 : 0); } K.line(-4, -1.55, 4, -1.55, f(0.03), 0.01, 0, 0.02); return K.fill(7); },
  bars(n) {
    const K = kit(n), f = v => Math.round(n * v), c = f(0.6);
    for (let k = 0; k < c; k++) { const x = (Math.random() * 2 - 1) * 4.2, y = Math.exp(-((x + 4.2) / 2.2)) * 3.6 - 1.8; K.push(x, y + (Math.random() - 0.5) * 0.03, (Math.random() - 0.5) * 0.08, 1); }
    K.line(-4.4, -2.0, 4.4, -2.0, f(0.05), 0.01, 3, 0.05); K.line(-4.4, -2.0, -4.4, 2.2, f(0.05), 0.01, 3, 0.05);
    for (let j = 1; j <= 4; j++) { const x = -4.2 + j * 2.2 * 0.693, y = 3.6 / Math.pow(2, j) - 1.8; K.dots(x, -2.0, x, y, f(0.012), 0.08, 2); }
    K.rot(0.18, -0.4, 0); return K.fill(7);
  },
  sphere(n) {
    const K = kit(n), f = v => Math.round(n * v), c = f(0.7), R = 3.0, ga = Math.PI * (3 - Math.sqrt(5));
    for (let k = 0; k < c; k++) { const y = 1 - (k / (c - 1)) * 2, r = Math.sqrt(1 - y * y), t = ga * k; const lat = Math.abs(Math.round(y * 6) / 6 - y) < 0.012; K.push(Math.cos(t) * r * R, y * R, Math.sin(t) * r * R, lat ? 0 : (Math.random() < 0.12 ? 1 : 3)); }
    for (let k = 0; k < f(0.06); k++) { const a = Math.random() * Math.PI * 2; K.push(Math.cos(a) * 3.9, (Math.random() - 0.5) * 0.04, Math.sin(a) * 3.9, 0); }
    K.rot(0.35, 0, 0.3); return K.fill(7);
  },
  grid(n) {
    const K = kit(n), f = v => Math.round(n * v), cols = 9, rows = 7;
    for (let c = 0; c <= cols; c++) { const x = -4 + c * (8 / cols); K.line(x, -2.8, x, 2.8, f(0.36 / (cols + 1)), 0.008, c === 1 ? 2 : 1, 0.02); }
    for (let r = 0; r <= rows; r++) { const y = -2.8 + r * (5.6 / rows); K.line(-4, y, 4, y, f(0.36 / (rows + 1)), 0.008, r === rows ? 0 : 1, 0.02); }
    for (let k = 0; k < f(0.12); k++) { const x = -4 + Math.random() * 8, y = 1.6 * Math.sin(x * 1.1); K.push(x, y + (Math.random() - 0.5) * 0.05, 0.05, 2); }
    K.rot(-0.6, 0.35, 0.05); return K.fill(7);
  }
};
function getShape(k) {
  if (!cache[k]) { const K = (SHAPES[k] || SHAPES.cloud)(N); cache[k] = { P: K.P, R: K.R }; }
  return cache[k];
}

/* ------------------------------------------------------------ shaders */
const VS = `
attribute vec3 aA; attribute vec3 aB; attribute float aRA; attribute float aRB; attribute float aSeed;
uniform float uT, uMix, uSize, uPR, uMR, uPulse, uScatter, uAlpha, uMOn;
uniform vec3 uMouse; uniform vec3 uC0; uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;
varying vec3 vCol; varying float vA;
vec3 pal(float r){ return r < .5 ? uC0 : (r < 1.5 ? uC1 : (r < 2.5 ? uC2 : uC3)); }
float ease(float t){ return t < .5 ? 4.*t*t*t : 1. - pow(-2.*t + 2., 3.) / 2.; }
void main(){
  float m = ease(clamp(uMix * 1.45 - aSeed * .45, 0., 1.));
  vec3 p = mix(aA, aB, m);
  float tr = sin(m * 3.14159);
  p += vec3(sin(aSeed * 41. + uT * .9), cos(aSeed * 33. + uT * .7), sin(aSeed * 27. + uT * .8)) * tr * uScatter;
  p += vec3(sin(uT * .6 + aSeed * 6.28), cos(uT * .5 + aSeed * 5.1), sin(uT * .4 + aSeed * 3.7)) * .022;
  vec2 dm = p.xy - uMouse.xy; float dist = length(dm);
  float f = smoothstep(uMR, 0., dist) * uMOn;
  p.xy += normalize(dm + vec2(1e-4)) * f * .62; p.z += f * .9;
  p *= 1. + uPulse * (.12 + .08 * sin(aSeed * 20.));
  vec4 mv = modelViewMatrix * vec4(p, 1.);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uSize * (.5 + aSeed * .95) * (1. + f * 1.4) * uPR * (10. / -mv.z);
  vCol = mix(pal(aRA), pal(aRB), m) + f * .22;
  float tw = .8 + .2 * sin(uT * 1.6 + aSeed * 31.);
  float dustA = (mix(aRA, aRB, m) > 2.5) ? .55 : 1.;
  vA = uAlpha * tw * dustA;
}`;
const FS = `
varying vec3 vCol; varying float vA;
void main(){ vec2 c = gl_PointCoord - .5; float r = length(c); if (r > .5) discard; float a = pow(smoothstep(.5, 0., r), 1.25); gl_FragColor = vec4(vCol, a * vA); }`;

/* ------------------------------------------------------------ setup */
BG.init = function () {
  canvas = document.getElementById('bg3d');
  THREE = window.THREE;
  if (!canvas || !THREE) { document.documentElement.classList.add('no3d'); return; }
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'low-power' });
  } catch (e) { document.documentElement.classList.add('no3d'); return; }
  const mob = MOB();
  N = mob ? 3200 : (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4 ? 5000 : 8000);
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, mob ? 1.25 : 1.35));
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 100); camera.position.z = 10;
  group = new THREE.Group(); scene.add(group);
  geo = new THREE.BufferGeometry();
  const start = getShape('cloud');
  aA = new Float32Array(start.P); aB = new Float32Array(start.P); rA = new Float32Array(start.R); rB = new Float32Array(start.R);
  seed = new Float32Array(N); for (let i = 0; i < N; i++) seed[i] = Math.random();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
  geo.setAttribute('aA', new THREE.BufferAttribute(aA, 3)); geo.setAttribute('aB', new THREE.BufferAttribute(aB, 3));
  geo.setAttribute('aRA', new THREE.BufferAttribute(rA, 1)); geo.setAttribute('aRB', new THREE.BufferAttribute(rB, 1));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 50);
  mat = new THREE.ShaderMaterial({
    vertexShader: VS, fragmentShader: FS, transparent: true, depthWrite: false, depthTest: false,
    uniforms: {
      uT: { value: 0 }, uMix: { value: 1 }, uSize: { value: mob ? 3.0 : 3.0 }, uPR: { value: renderer.getPixelRatio() }, uMR: { value: 1.25 },
      uPulse: { value: 0 }, uScatter: { value: 0.9 }, uAlpha: { value: 0.9 }, uMOn: { value: 0 },
      uMouse: { value: new THREE.Vector3(99, 99, 0) },
      uC0: { value: new THREE.Vector3() }, uC1: { value: new THREE.Vector3() }, uC2: { value: new THREE.Vector3() }, uC3: { value: new THREE.Vector3() }
    }
  });
  const pts = new THREE.Points(geo, mat); pts.frustumCulled = false; group.add(pts);
  BG.theme(document.documentElement.dataset.theme || 'dark');
  resize(); addEventListener('resize', resize);
  addEventListener('pointermove', e => { ptr.tx = e.clientX / innerWidth * 2 - 1; ptr.ty = e.clientY / innerHeight * 2 - 1; mouseOnT = e.pointerType === 'mouse' ? 1 : 0.6; scr = [e.clientX, e.clientY]; }, { passive: true });
  document.addEventListener('mouseleave', () => { mouseOnT = 0; });
  addEventListener('touchend', () => { mouseOnT = 0; }, { passive: true });
  let lastY = scrollY; addEventListener('scroll', () => { spinV += (scrollY - lastY) * 0.00018; lastY = scrollY; }, { passive: true });
  BG.ready = true;
  watchSections();
  loop();
  requestAnimationFrame(() => document.documentElement.classList.add('bg-on'));
};
const ray = { v: null, dir: null };
function setMouse(cx, cy) {
  if (!camera) return;
  const v = new THREE.Vector3(cx / innerWidth * 2 - 1, -(cy / innerHeight) * 2 + 1, 0.5).unproject(camera);
  const dir = v.sub(camera.position).normalize(), t = -camera.position.z / dir.z;
  const w = camera.position.clone().add(dir.multiplyScalar(t));
  group.updateMatrixWorld(); mouse3 = group.worldToLocal(w);
}
function resize() {
  if (!renderer) return;
  renderer.setSize(innerWidth, innerHeight, false); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  if (mat) mat.uniforms.uPR.value = renderer.getPixelRatio();
  if (BG._last) place(BG._last.opt);
}
BG.theme = function (t) {
  if (!mat) return;
  const P = PAL[t === 'light' ? 'light' : 'dark'];
  ['uC0', 'uC1', 'uC2', 'uC3'].forEach((u, i) => mat.uniforms[u].value.set(P[i][0], P[i][1], P[i][2]));
  mat.blending = t === 'light' ? THREE.NormalBlending : THREE.AdditiveBlending;
  mat.uniforms.uSize.value = 3.0 * (t === 'light' ? 0.9 : 1);
  BG._alphaBase = t === 'light' ? 0.7 : 1.0;
  mat.needsUpdate = true;
};

/* ------------------------------------------------------------ morph */
function place(o) {
  o = o || {};
  const halfH = Math.tan(camera.fov * Math.PI / 360) * camera.position.z, halfW = halfH * camera.aspect, mob = MOB();
  const fit = Math.min(1, halfW / 4.6);
  tgt.x = (mob ? (o.mx || 0) : (o.x || 0)) * halfW;
  { const hw = 3.4 * (o.s || 1) * (mob ? (o.ms || 0.72) : fit), room = halfW - hw * 0.92; if (room > 0 && Math.abs(tgt.x) > room) tgt.x = Math.sign(tgt.x) * room; }
  tgt.y = (mob ? (o.my != null ? o.my : (o.y || 0)) : (o.y || 0)) * halfH;
  tgt.s = (o.s || 1) * (mob ? (o.ms || 0.72) : fit);
  tgt.rx = o.rx || 0; tgt.ry = o.ry || 0; tgt.a = (o.a == null ? 1 : o.a) * (mob ? (o.ma == null ? .4 : o.ma) : 1); if (mob) tgt.a = Math.min(tgt.a, .22);
  autoSpin = o.spin || 0;
}
BG.morph = function (key, opt) {
  if (MOB() && !(opt && opt._hero) && key !== 'cloud') { key = 'cloud'; opt = { a: .55 }; }
  if (!BG.ready) { BG._pending = [key, opt]; return; }
  BG._last = { key, opt }; place(opt);
  if (key === cur) return;
  const now = performance.now(), m = mat.uniforms.uMix.value;
  // freeze the current in-between state into A
  for (let i = 0; i < N; i++) {
    const mm = easeJS(RA.clamp(m * 1.45 - seed[i] * 0.45, 0, 1));
    aA[i * 3] += (aB[i * 3] - aA[i * 3]) * mm; aA[i * 3 + 1] += (aB[i * 3 + 1] - aA[i * 3 + 1]) * mm; aA[i * 3 + 2] += (aB[i * 3 + 2] - aA[i * 3 + 2]) * mm;
    rA[i] = mm > 0.5 ? rB[i] : rA[i];
  }
  const s = getShape(key); aB.set(s.P); rB.set(s.R);
  ['aA', 'aB', 'aRA', 'aRB'].forEach(a => geo.attributes[a].needsUpdate = true);
  mat.uniforms.uMix.value = 0; mixStart = now; mixDur = RA.RM ? 1 : (opt && opt.dur) || 1700; cur = key;
};
function easeJS(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
BG.pulse = function () { pulse = 1; };
BG.current = () => cur;

/* sections with data-shape morph the cloud when they reach the middle of the screen */
function watchSections() {
  const els = RA.$$('[data-shape]'); if (!els.length) return;
  const opt = el => { const o = {}; ['x', 'y', 's', 'mx', 'my', 'ms', 'a', 'ma', 'spin', 'rx', 'ry'].forEach(k => { const v = el.getAttribute('data-shape-' + k); if (v != null) o[k] = parseFloat(v); }); return o; };
  const go = el => { const o = opt(el); if (el === els[0]) o._hero = 1; BG.morph(el.dataset.shape, o); };
  const fontsOk = document.fonts && document.fonts.ready ? Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1400))]) : Promise.resolve();
  fontsOk.then(() => {
    if (!('IntersectionObserver' in window)) { go(els[0]); return; }
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) go(en.target); }), { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    els.forEach(e => io.observe(e));
    setTimeout(() => { if (!BG._last) go(els[0]); }, 200);
  });
}

/* ------------------------------------------------------------ loop */
let t0 = performance.now(), frames = 0, slow = 0, last = t0;
function loop() {
  requestAnimationFrame(loop);
  if (document.hidden) return;
  const now = performance.now(), raw = (now - last) / 1000, dt = Math.min(0.05, raw); last = now;
  const u = mat.uniforms; u.uT.value = (now - t0) / 1000;
  if (u.uMix.value < 1) u.uMix.value = Math.min(1, (now - mixStart) / mixDur);
  // adaptive quality
  if (frames < 120) { frames++; if (dt > 0.03) slow++; if (frames === 120 && slow > 50) { geo.setDrawRange(0, Math.floor(N * 0.55)); u.uSize.value *= 1.15; } }
  const k = RA.RM ? 1 : 1 - Math.pow(0.002, Math.min(0.5, raw));
  pos.x += (tgt.x - pos.x) * k; pos.y += (tgt.y - pos.y) * k; pos.s += (tgt.s - pos.s) * k; pos.a += (tgt.a - pos.a) * k;
  pos.rx += (tgt.rx - pos.rx) * k; pos.ry += (tgt.ry - pos.ry) * k;
  ptr.x += (ptr.tx - ptr.x) * k * 0.6; ptr.y += (ptr.ty - ptr.y) * k * 0.6;
  spinV *= Math.pow(0.04, dt); spin += spinV + autoSpin * dt;
  group.position.set(pos.x, pos.y, 0); group.scale.setScalar(pos.s);
  group.rotation.set(pos.rx + ptr.y * 0.12, pos.ry + ptr.x * 0.18 + spin, 0);
  mouseOn += (mouseOnT - mouseOn) * k; u.uMOn.value = mouseOn;
  if (scr && mouseOn > 0.01) { setMouse(scr[0], scr[1]); if (mouse3) u.uMouse.value.copy(mouse3); }
  pulse *= Math.pow(0.02, dt); u.uPulse.value = pulse;
  u.uAlpha.value = (BG._alphaBase || 0.9) * pos.a;
  renderer.render(scene, camera);
}
})();

