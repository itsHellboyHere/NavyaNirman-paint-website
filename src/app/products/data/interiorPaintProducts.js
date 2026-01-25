export const interiorProducts = [
    {
        slug: "premium-matt",
        name: "Premium Matt",
        category: "Interior Paint",
        type: "Premium Matt Interior Paint",

        highlights: [
            "Rich Matt Finish",
            "Excellent Burnish Resistance",
            "Washable",
            "Breathable"
        ],

        description: `
Premium Matt is a premium interior paint with a rich matt finish.
Its inherent deep matt effect and carefully selected pigments provide
unsurpassed colour depth and brilliance even in difficult lighting conditions.

Premium Matt effectively hides surface defects, delivering an even and
consistent finish even at sharp viewing angles. It is extremely resistant
to burnishing and mechanical abrasion, making it suitable for demanding
high-traffic interior spaces.

Being highly breathable, it resists peel-off and blistering.
Designed for excellent dirt release, it is easily washable and highly
scrub resistant. Available in a wide range of colours.
    `.trim(),

        keyFeatures: [
            "Rich Matt Finish",
            "Low Odour, Low VOC",
            "Breathable",
            "Excellent Burnish Resistance",
            "Anti-Fungal",
            "Bright Colours",
            "Washable",
            "Wide Range of Colours"
        ],

        specifications: [
            { label: "Density", value: "1.20 – 1.50 g/cm³" },
            { label: "Gloss at 85°", value: "< 2" },
            { label: "Flash Point", value: "N/A" }
        ],

        application: `
Premium Matt must be applied in principle as a two
coat system diluted with water up to 30 percent. In case
of patchy or inhomogeneous surfaces a third coat may
be required. 

A minium gap of 4 hours must be observed between subsequent coats. Cover all
surfaces which are not to be painted. 

Please ensure that at no point is Premium Matt diluted beyond 30
percent as this may severely affect the end film
properties.
    `.trim(),

        coverage:
            "Approximately 7 m²/litre (75 sq.ft./litre) for two coats",

        coverageNote:
            `Consumption guideline is quoted for smooth surfaces
with normal absorbency. Actual consumption may
vary based on surface characteristics and is the
responsibility of the applicator.`.trim(),

        packing: ["1L", "4L", "20L"],

        image: "/interior/premium-matt.webp"
    },

    {
        slug: "marvella-luxury",
        name: "Marvella",
        category: "Interior Paint",
        type: "Luxury Interior Paint",

        highlights: [
            "Pleasant Soft Sheen",
            "Excellent Stain Resistance",
            "Highly Washable",
            "Seamless Finish"
        ],

        description: `
Marvella is a luxury interior paint with a pleasant sheen that results in a soft glow on your walls. The paint has a soft
hand feel with a smooth lustrous finish.

Enhanced with ceramics, it is a highly washable paint with excellent stain 
release properties with even the toughest of stains. 

The innovative binder technology eliminates patchiness during 
application and provides an odourless experience for the occupier of the space.
It is available in an extremely wide range of colours.
    `.trim(),

        keyFeatures: [
            "Pleasant Soft Sheen",
            "Low Odour, Low VOC",
            "Seamless Finish",
            "Excellent Stain Resistance",
            "Anti-Fungal",
            "Bright Colours",
            "Highly Washable",
            "Wide Variety of Colours"
        ],

        specifications: [
            { label: "Density", value: "1.20 – 1.50 g/cm³" },
            { label: "Gloss at 85°", value: "8 – 12" },
            { label: "Flash Point", value: "N/A" }
        ],

        application: `
Marvella is applied as a two-coat system diluted with water
between 20–30 percent. A minimum interval of 4 hours must
be maintained between subsequent coats.

Cover all surfaces which are not to be painted. Please ensure
that at no point is Marvella diluted beyond 30 percent
as this may severely affect the end fil properties.
    `.trim(),

        coverage:
            "Approximately 7.5 m²/litre (80 sq.ft./litre) for two coats",

        coverageNote:
      `Consumption guideline is quoted for smooth surfaces
with normal absorbency. Actual consumption may
vary based on surface characteristics and is the
responsibility of the applicator.`.trim(),
        packing: ["1L", "4L", "20L"],

        image: "/interior/marvella.webp"
    },

    {
        slug: "premium-wall-primer",
        name: "Premium Wall Primer",
        category: "Primer",
        type: "Water Based Acrylic Wall Primer",

        highlights: [
            "Excellent Opacity",
            "Excellent Bonding",
            "Easily Sandable",
            "Interior & Exterior Use"
        ],

        description: `
Zydex Premium Wall Primer is an acrylic water based wall primer 
with excellent bonding and hiding characteristics. 

It has excellent sandability and provides a smooth base for over- painting. It is suitable for exterior and interior
applications.
    `.trim(),

        keyFeatures: [
            "Excellent Opacity",
            "Excellent Bonding",
            "Easily Sandable",
            "Smooth Finish",
            "Suitable for Interior and Exterior Use"
        ],

        specifications: [
            { label: "Appearance", value: "White Viscous Liquid" },
            { label: "Chemical Nature", value: "Acrylic" },
            { label: "Dilution Ratio", value: "1 : 0.8 to 1.2" },
            { label: "VOC", value: "< 50 g/litre" }
        ],

        application: `
Dilution : Dilute 1 ltr of Zydex Premium Wall Primer
with 0.8 to 1.2 ltrs potable water.

Application : Brush, roll or spray 1 coat of Zydex
Premium Wall Prier on prepared vertical walls.
Allow it to dry for 6-8 hours.
    `.trim(),

        coverage:
            "Interior walls: 140–160 sq.ft.(13–15m²)/litre · Exterior walls: 100–120 sq.ft(9–11m²)./litre",

        coverageNote:
            "Actual coverage may vary depending on surface texture and application method.",

        packing: ["1L", "4L", "10L", "20L"],

        image: "/interior/wall-primer.webp"
    }
];