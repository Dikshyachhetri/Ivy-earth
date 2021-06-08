const vegetables = [
    {
     name: "Tomato",
     genus_name : "Nightshaden",
     plant_type : "Bush",
     image: "/images/veg1.jpg",
     description: "The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America. The Nahuatl word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived.",
     height: "5 feet tall at most, 8 feet tall at most",
     width: "2 -3 feet wide",
     propagation : "Stem cutting, seed",
     foliage_color : "Black/darkbrown purple",
     feature:"Vary in shape from almost spherical to oval and elongate to pear-shapes.major dietary source of the antioxidant lycopene, which has been linked to many health benefits, including reduced risk of heart disease and cancer",
     care: "Water early morning so that plants have sufficient moisture to make it through a hot day.Side-dress plants, applying liquid seaweed or fish emulsion or an organic fertilizer every 2 weeks, starting when tomatoes are about 1 inch in diameter.Avoid fast-release fertilizers and avoid high-nitrogen fertilizers. As stated, too much nitrogen will result in lush foliage but few flowers and little or no fruit. ", 
     other_varieties: " Red Beefsteak Tomatoes, Cherry Tomatoes, Cocktail Tomatoes, Roma Tomatoes, Heirloom Tomatoes ", 
     companions: "Basil, Parsely, Garlic, Chives, Asparagus"
    }, 
   
    {
     name: "Bitter Gourd",
     genus_name : "Momordica",
     plant_type : "Momordica charantia ",
     image: "/images/veg2.png",
     description: "Bitter gourd (Momordica charantia) is an important vegetable crop and is grown for its immature tuberculate fruits which have a unique bitter taste. ",
     height:"more than 5m (16 feet) long",
     width: "1.5 to 2 feet",
     propagation : "Seed",
     foliage_color : " Gray/Silver",
     feature:"Low Maintenance, Container growing",
     care: " Bitter melons are a warm-season crop and are best suited for growing in tropical and subtropical heat and humidity.Trellised vines produce hanging fruit, which grows long and straight. Vines allowed to sprawl on the ground should be mulched with straw or plastic to keep fruit from resting on the soil. ",
     other_varieties: "White-Fruited Cultivars, Green-Fruited Cultivars, Tubercled Cultivars, Long -Fruited Cultivars, Spindle-Shaped Cultivars",
     companions: "Beans, corn, peas, pumpkins, and squash."
    },
 
    {
     name: "Potato",
     genus_name : "Nightshade",
     plant_type : "Solanum tuberosum",
     image: "/images/veg3.jpg",
     description: "The potato is a root vegetable native to the Americas, a starchy tuber of the plant Solanum tuberosum, and the plant itself is a perennial in the nightshade family, Solanaceae",
     height:"40 inches",
     width: "24 inches",
     propagation : "Stem cutting, cloning",
     foliage_color : "green",
     feature:"Potatoes are rich in vitamins, minerals and antioxidants, which make them very healthy. Studies have linked potatoes and their nutrients to a variety of impressive health benefits, including improved blood sugar control, reduced heart disease risk and higher immunity.",
     care: " Potatoes need to be consistently moist, so a daily dousing during summer’s heat is an absolute must. If Colorado potato beetles become problematic, cover the plants with floating row cover. ",
     other_varieties: "Russet, Red, White, Yellow, Purple, Fingerling, Petite", 
     companions: "Bush beans, celery, corn, garlic, marigolds, onions, peas "
    },
 
    {
     name: "Eggplant",
     genus_name :"Nightshade",
     plant_type : "Solanum melongena",
     image: "/images/veg4.jpg",
     description: "Eggplant, aubergine or brinjal is a plant species in the nightshade family Solanaceae. Solanum melongena is grown worldwide for its edible fruit. Most commonly purple, the spongy, absorbent fruit is used in several cuisines. Typically used as a vegetable in cooking, it is a berry by botanical definition ",
     height:"1 to 3 feet, 3 to 8 feet",
     width: "1 to 3 feet",
     propagation : "Stem cutting, seed",
     foliage_color : "Green",
     feature:"Eggplants are rich in fiber and antioxidants. A serving of eggplant can provide at least 5% of a person's daily requirement of fiber, copper, manganese, B-6, and thiamine. It also contains other vitamins and minerals.", 
     care: "Keep plants watered or they will be small and bitter. They need a nice, steady supply of moisture but not so much that the soil is soggy. Drip systems or a soaker hose are ideal. Eggplants are prone to falling over when loaded with fruit, so you may want to tie plants to stakes to keep them upright.",
     other_varieties: "Fairy Tale Eggplant, White Eggplant, Indian Eggplant, Little Green Eggplant, Thai Eggplant.",
     companions : "Tomatoes, peppers, potatoes "
    },
 
    {
     name: "Zucchini",
     genus_name : "Squash",
     plant_type : "Cucurbita pepo",
     image: "/images/veg5.jpg",
     description: "The zucchini, courgette or baby marrow is a summer squash, a herbaceous vine whose fruit are harvested when their immature seeds and epicarp are still soft and edible. It is closely related, but not identical, to the marrow; its fruit may be called marrow when mature.",
     height:"1 to 3 feet",
     width: "3 to 10 feet",
     propagation : "seed",
     foliage_color : "White/Green",
     feature:"Container gardening as well on small space.Zucchini have anticancer properties. The antioxidants in zucchini can help prevent cell mutations that lead to the development of cancer. The carotenes in zucchini might also help protect your skin from damage caused by the sun.",
     care: " Zucchini needs full sun (at least 6 to 8 hours) and consistently moist soil that is high in organic matter. Some zucchini varieties are vining types that require a trellis or a lot of room to sprawl. ",
     other_varieties: "Black Beauty, Dunja Zucchini, Gourmet Gold, Cocozella, Round Zucchini ",
     companions: " Beans, Borage, Dill, Garlic, Marigolds, Mint"
    },
 
    {
     name: "Cucumber",
     genus_name : "Cucumis",
     plant_type : "Cucumis sativus",
     image: "/images/veg6.jpg",
     description: "Cucumber is a widely-cultivated creeping vine plant in the Cucurbitaceae gourd family that bears cucumiform fruits, which are used as vegetables. There are three main varieties of cucumber—slicing, pickling, and burpless/seedless—within which several cultivars have been created. ",
     height:"1 to 3 feet, 3 to 8 feet",
     width: "1 to 2 feet",
     propagation : "seed",
     foliage_color : "creamy yellow to green",
     feature:"Grows fast, Cucumbers are good sources of phytonutrients (plant chemicals that have protective or disease preventive properties) such flavonoids, lignans and triterpenes, which have antioxidant, anti-inflammatory and anti-cancer benefits",
     care: " Cucumbers need warm, fertile soil with a pH of 6.0 to 6.8, although they will tolerate a bit more alkaline soil to 7.6. To improve the soil and help create the root environment needed for a big harvest, work several inches of aged compost-enriched in Ground Soil into the top few inches your existing garden soil. ",
     other_varieties: "Boston Pickling, Burpee Picker, Calypso, Diomede",
     companions: "Bush beans, celery, corn, garlic, marigolds, onions "
    },
 
    {
     name: "Broccoli",
     genus_name: "Cabbages",
     plant_type: "Brassica oleracea",
     image: "/images/veg7.jpg",
     description: "Broccoli is an edible green plant in the cabbage family whose large flowering head, stalk and small associated leaves are eaten as a vegetable. Broccoli is classified in the Italica cultivar group of the species Brassica oleracea",
     height:"18 to 24 inches",
     width: "18 to 30 inches",
     propagation : "Seed",
     foliage_color : "Green",
     feature:"Hand-harvested, can be eaten either raw or cooked, rich source of vitamin",
     care :"Broccoli grows best when exposed to an average daily temperature between 18 and 23 °C (64 and 73 °F).",
     other_varieties: "Chinese broccoli, Broccoli raab, Romanesco broccoli ",
     companions : "Beets, Celery, Chamomile, Potatoes, Rosemary"
    },
 
    {
     name: "Radish",
     genus_name : "Radishes",
     plant_type : "root vegetable",
     image: "/images/veg8.jpeg",
     description: "The radish is an edible root vegetable of the family Brassicaceae that was domesticated in Asia prior to Roman times. Radishes are grown and consumed throughout the world, being mostly eaten raw as a crunchy salad vegetable with a pungent flavor. ",
     height:"2 to 6 inches",
     width: "2 to 6 inches",
     propagation : "seed",
     foliage_color : "green",
     feature:"Radishes are rich in antioxidants and minerals like calcium and potassium. Together, these nutrients help lower high blood pressure and reduce your risks for heart disease. The radish is also a good source of natural nitrates that improve blood flow.",
     care: " Radish seeds can be planted in both the spring and the fall, but growing should be suspended in the height of summer, when temperatures are typically too hot. (Hot temperatures may cause radishes to bolt, making them essentially useless.) ",
     other_varieties: "Daikon, Korean radish, Raphanus caudatus, Gegeol radish ",
     companions: "Lettuce, spinach, Cucumber, Squashes, parsnips, Beans"
     },
 
    {
     name: "Mushroom",
     genus_name : "Agaricus bisporus",
     plant_type : "fungi",
     image: "/images/veg9.jpg",
     description: "A mushroom or toadstool is the fleshy, spore-bearing fruiting body of a fungus, typically produced above ground, on soil, or on its food source.  ",
     height:"10 to 12 inches",
     width: "41 to 71.5 mm",
     propagation : "Cloning",
     foliage_color : "No leaf",
     feature:"Mushrooms are a rich, low calorie source of fiber, protein, and antioxidants. They may also mitigate the risk of developing serious health conditions, such as Alzheimer's, heart disease, cancer, and diabetes. They're also great sources of: Selenium",
     care: " Mushrooms like dark, cool, and humid growing environments.Mushrooms grow from spores (not seeds) that are so tiny you can't see individual spores with the naked eye. Rather than soil, these spores rely on substances like sawdust, grain, straw, or wood chips for nourishment. ",
     other_varieties :"White Button Mushroom, Crimino Mushroom, Portabello Mushroom, Maitake Mushroom, Beech Mushroon ", 
     companions : "Elm Oyster, Morel, Oyster Mushrooms, Shiitake, Wine Cap"
    },
 
    {
     name: "Spinach",
     genus_name : "Spinacia",
     plant_type : "Vegetable",
     image: "/images/veg10.jpg",
     description: "Spinach is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthaceae, subfamily Chenopodioideae. Its leaves are a common edible vegetable consumed either fresh, or after storage using preservation techniques by canning, freezing, or dehydration. ",
     height:"1 to 3 feet",
     width: "6 to 12 inches",
     propagation : "Seed",
     foliage_color : "Green",
     feature:"Spinach is also an excellent source of vitamin K, vitamin A, vitamin C and folate as well as being a good source of manganese, magnesium, iron and vitamin B2. Vitamin K is important for maintaining bone health and it is difficult to find vegetables richer in vitamin K than spinach.",
     care: " Spinach does best when growing in moist, nitrogen-rich soil. Spinach plants form a deep taproot; for best growth, loosen the soil at least 1 foot deep before planting. Sow spinach seed as early as six weeks before the last frost or as soon as you can work the soil. ",
     other_varieties: " Auroch, Space, Carmel, Emperor,Gazelle, kookaburra", 
     companions: "Brassicas, eggplant, leeks, lettuce, peas, radish"
    }
    ]
 
 export default vegetables;
 
 