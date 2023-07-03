console.clear();

// TODO: Add Some Responsiveness

const WORDS = [
	"ability",
	"able",
	"about",
	"above",
	"accept",
	"according",
	"account",
	"across",
	"act",
	"action",
	"activity",
	"actually",
	"add",
	"address",
	"administration",
	"admit",
	"adult",
	"affect",
	"after",
	"again",
	"against",
	"age",
	"agency",
	"agent",
	"ago",
	"agree",
	"agreement",
	"ahead",
	"air",
	"all",
	"allow",
	"almost",
	"alone",
	"along",
	"already",
	"also",
	"although",
	"always",
	"American",
	"among",
	"amount",
	"analysis",
	"and",
	"animal",
	"another",
	"answer",
	"any",
	"anyone",
	"anything",
	"appear",
	"apply",
	"approach",
	"area",
	"argue",
	"arm",
	"around",
	"arrive",
	"art",
	"article",
	"artist",
	"ask",
	"assume",
	"attack",
	"attention",
	"attorney",
	"audience",
	"author",
	"authority",
	"available",
	"avoid",
	"away",
	"baby",
	"back",
	"bad",
	"bag",
	"ball",
	"bank",
	"bar",
	"base",
	"beat",
	"beautiful",
	"because",
	"become",
	"bed",
	"before",
	"begin",
	"behavior",
	"behind",
	"believe",
	"benefit",
	"best",
	"better",
	"between",
	"beyond",
	"big",
	"bill",
	"billion",
	"bit",
	"black",
	"blood",
	"blue",
	"board",
	"body",
	"book",
	"born",
	"both",
	"box",
	"boy",
	"break",
	"bring",
	"brother",
	"budget",
	"build",
	"building",
	"business",
	"but",
	"buy",
	"call",
	"camera",
	"campaign",
	"can",
	"cancer",
	"candidate",
	"capital",
	"car",
	"card",
	"care",
	"career",
	"carry",
	"case",
	"catch",
	"cause",
	"cell",
	"center",
	"central",
	"century",
	"certain",
	"certainly",
	"chair",
	"challenge",
	"chance",
	"change",
	"character",
	"charge",
	"check",
	"child",
	"choice",
	"choose",
	"church",
	"citizen",
	"city",
	"civil",
	"claim",
	"class",
	"clear",
	"clearly",
	"close",
	"coach",
	"cold",
	"collection",
	"college",
	"color",
	"come",
	"commercial",
	"common",
	"community",
	"company",
	"compare",
	"computer",
	"concern",
	"condition",
	"conference",
	"Congress",
	"consider",
	"consumer",
	"contain",
	"continue",
	"control",
	"cost",
	"could",
	"country",
	"couple",
	"course",
	"court",
	"cover",
	"create",
	"crime",
	"cultural",
	"culture",
	"cup",
	"current",
	"customer",
	"cut",
	"dark",
	"data",
	"daughter",
	"day",
	"dead",
	"deal",
	"death",
	"debate",
	"decade",
	"decide",
	"decision",
	"deep",
	"defense",
	"degree",
	"Democrat",
	"democratic",
	"describe",
	"design",
	"despite",
	"detail",
	"determine",
	"develop",
	"development",
	"die",
	"difference",
	"different",
	"difficult",
	"dinner",
	"direction",
	"director",
	"discover",
	"discuss",
	"discussion",
	"disease",
	"doctor",
	"dog",
	"door",
	"down",
	"draw",
	"dream",
	"drive",
	"drop",
	"drug",
	"during",
	"each",
	"early",
	"east",
	"easy",
	"eat",
	"economic",
	"economy",
	"edge",
	"education",
	"effect",
	"effort",
	"eight",
	"either",
	"election",
	"else",
	"employee",
	"end",
	"energy",
	"enjoy",
	"enough",
	"enter",
	"entire",
	"environment",
	"environmental",
	"especially",
	"establish",
	"even",
	"evening",
	"event",
	"ever",
	"every",
	"everybody",
	"everyone",
	"everything",
	"evidence",
	"exactly",
	"example",
	"executive",
	"exist",
	"expect",
	"experience",
	"expert",
	"explain",
	"eye",
	"face",
	"fact",
	"factor",
	"fail",
	"fall",
	"family",
	"far",
	"fast",
	"father",
	"fear",
	"federal",
	"feel",
	"feeling",
	"few",
	"field",
	"fight",
	"figure",
	"fill",
	"film",
	"final",
	"finally",
	"financial",
	"find",
	"fine",
	"finger",
	"finish",
	"fire",
	"firm",
	"first",
	"fish",
	"five",
	"floor",
	"fly",
	"focus",
	"follow",
	"food",
	"foot",
	"for",
	"force",
	"foreign",
	"forget",
	"form",
	"former",
	"forward",
	"four",
	"free",
	"friend",
	"from",
	"front",
	"full",
	"fund",
	"future",
	"game",
	"garden",
	"gas",
	"general",
	"generation",
	"get",
	"girl",
	"give",
	"glass",
	"goal",
	"good",
	"government",
	"great",
	"green",
	"ground",
	"group",
	"grow",
	"growth",
	"guess",
	"gun",
	"guy",
	"hair",
	"half",
	"hand",
	"hang",
	"happen",
	"happy",
	"hard",
	"have",
	"head",
	"health",
	"hear",
	"heart",
	"heat",
	"heavy",
	"help",
	"her",
	"here",
	"herself",
	"high",
	"him",
	"himself",
	"his",
	"history",
	"hit",
	"hold",
	"home",
	"hope",
	"hospital",
	"hot",
	"hotel",
	"hour",
	"house",
	"how",
	"however",
	"huge",
	"human",
	"hundred",
	"husband",
	"idea",
	"identify",
	"image",
	"imagine",
	"impact",
	"important",
	"improve",
	"include",
	"including",
	"increase",
	"indeed",
	"indicate",
	"individual",
	"industry",
	"information",
	"inside",
	"instead",
	"institution",
	"interest",
	"interesting",
	"international",
	"interview",
	"into",
	"investment",
	"involve",
	"issue",
	"item",
	"its",
	"itself",
	"job",
	"join",
	"just",
	"keep",
	"key",
	"kid",
	"kill",
	"kind",
	"kitchen",
	"know",
	"knowledge",
	"land",
	"language",
	"large",
	"last",
	"late",
	"later",
	"laugh",
	"law",
	"lawyer",
	"lay",
	"lead",
	"leader",
	"learn",
	"least",
	"leave",
	"left",
	"leg",
	"legal",
	"less",
	"let",
	"letter",
	"level",
	"lie",
	"life",
	"light",
	"like",
	"likely",
	"line",
	"list",
	"listen",
	"little",
	"live",
	"local",
	"long",
	"look",
	"lose",
	"loss",
	"lot",
	"love",
	"low",
	"machine",
	"magazine",
	"main",
	"maintain",
	"major",
	"majority",
	"make",
	"man",
	"manage",
	"management",
	"manager",
	"many",
	"market",
	"marriage",
	"material",
	"matter",
	"may",
	"maybe",
	"mean",
	"measure",
	"media",
	"medical",
	"meet",
	"meeting",
	"member",
	"memory",
	"mention",
	"message",
	"method",
	"middle",
	"might",
	"military",
	"million",
	"mind",
	"minute",
	"miss",
	"mission",
	"model",
	"modern",
	"moment",
	"money",
	"month",
	"more",
	"morning",
	"most",
	"mother",
	"mouth",
	"move",
	"movement",
	"movie",
	"much",
	"music",
	"must",
	"myself",
	"name",
	"nation",
	"national",
	"natural",
	"nature",
	"near",
	"nearly",
	"necessary",
	"need",
	"network",
	"never",
	"new",
	"news",
	"newspaper",
	"next",
	"nice",
	"night",
	"none",
	"nor",
	"north",
	"not",
	"note",
	"nothing",
	"notice",
	"now",
	"number",
	"occur",
	"off",
	"offer",
	"office",
	"officer",
	"official",
	"often",
	"oil",
	"old",
	"once",
	"one",
	"only",
	"onto",
	"open",
	"operation",
	"opportunity",
	"option",
	"order",
	"organization",
	"other",
	"others",
	"our",
	"out",
	"outside",
	"over",
	"own",
	"owner",
	"page",
	"pain",
	"painting",
	"paper",
	"parent",
	"part",
	"participant",
	"particular",
	"particularly",
	"partner",
	"party",
	"pass",
	"past",
	"patient",
	"pattern",
	"pay",
	"peace",
	"people",
	"per",
	"perform",
	"performance",
	"perhaps",
	"period",
	"person",
	"personal",
	"phone",
	"physical",
	"pick",
	"picture",
	"piece",
	"place",
	"plan",
	"plant",
	"play",
	"player",
	"point",
	"police",
	"policy",
	"political",
	"politics",
	"poor",
	"popular",
	"population",
	"position",
	"positive",
	"possible",
	"power",
	"practice",
	"prepare",
	"present",
	"president",
	"pressure",
	"pretty",
	"prevent",
	"price",
	"private",
	"probably",
	"problem",
	"process",
	"produce",
	"product",
	"production",
	"professional",
	"professor",
	"program",
	"project",
	"property",
	"protect",
	"prove",
	"provide",
	"public",
	"pull",
	"purpose",
	"push",
	"put",
	"quality",
	"question",
	"quickly",
	"quite",
	"race",
	"radio",
	"raise",
	"range",
	"rate",
	"rather",
	"reach",
	"read",
	"ready",
	"real",
	"reality",
	"realize",
	"really",
	"reason",
	"receive",
	"recent",
	"recently",
	"recognize",
	"record",
	"red",
	"reduce",
	"reflect",
	"region",
	"relate",
	"relationship",
	"religious",
	"remain",
	"remember",
	"remove",
	"report",
	"represent",
	"Republican",
	"require",
	"research",
	"resource",
	"respond",
	"response",
	"responsibility",
	"rest",
	"result",
	"return",
	"reveal",
	"rich",
	"right",
	"rise",
	"risk",
	"road",
	"rock",
	"role",
	"room",
	"rule",
	"run",
	"safe",
	"same",
	"save",
	"say",
	"scene",
	"school",
	"science",
	"scientist",
	"score",
	"sea",
	"season",
	"seat",
	"second",
	"section",
	"security",
	"see",
	"seek",
	"seem",
	"sell",
	"send",
	"senior",
	"sense",
	"series",
	"serious",
	"serve",
	"service",
	"set",
	"seven",
	"several",
	"sex",
	"sexual",
	"shake",
	"share",
	"she",
	"shoot",
	"short",
	"shot",
	"should",
	"shoulder",
	"show",
	"side",
	"sign",
	"significant",
	"similar",
	"simple",
	"simply",
	"since",
	"sing",
	"single",
	"sister",
	"sit",
	"site",
	"situation",
	"six",
	"size",
	"skill",
	"skin",
	"small",
	"smile",
	"social",
	"society",
	"soldier",
	"some",
	"somebody",
	"someone",
	"something",
	"sometimes",
	"son",
	"song",
	"soon",
	"sort",
	"sound",
	"source",
	"south",
	"southern",
	"space",
	"speak",
	"special",
	"specific",
	"speech",
	"spend",
	"sport",
	"spring",
	"staff",
	"stage",
	"stand",
	"standard",
	"star",
	"start",
	"state",
	"statement",
	"station",
	"stay",
	"step",
	"still",
	"stock",
	"stop",
	"store",
	"story",
	"strategy",
	"street",
	"strong",
	"structure",
	"student",
	"study",
	"stuff",
	"style",
	"subject",
	"success",
	"successful",
	"such",
	"suddenly",
	"suffer",
	"suggest",
	"summer",
	"support",
	"sure",
	"surface",
	"system",
	"table",
	"take",
	"talk",
	"task",
	"tax",
	"teach",
	"teacher",
	"team",
	"technology",
	"television",
	"tell",
	"ten",
	"tend",
	"term",
	"test",
	"than",
	"thank",
	"that",
	"the",
	"their",
	"them",
	"themselves",
	"then",
	"theory",
	"there",
	"these",
	"they",
	"thing",
	"think",
	"third",
	"this",
	"those",
	"though",
	"thought",
	"thousand",
	"threat",
	"three",
	"through",
	"throughout",
	"throw",
	"thus",
	"time",
	"today",
	"together",
	"tonight",
	"too",
	"top",
	"total",
	"tough",
	"toward",
	"town",
	"trade",
	"traditional",
	"training",
	"travel",
	"treat",
	"treatment",
	"tree",
	"trial",
	"trip",
	"trouble",
	"true",
	"truth",
	"try",
	"turn",
	"two",
	"type",
	"under",
	"understand",
	"unit",
	"until",
	"upon",
	"use",
	"usually",
	"value",
	"various",
	"very",
	"victim",
	"view",
	"violence",
	"visit",
	"voice",
	"vote",
	"wait",
	"walk",
	"wall",
	"want",
	"war",
	"watch",
	"water",
	"way",
	"weapon",
	"wear",
	"week",
	"weight",
	"well",
	"west",
	"western",
	"what",
	"whatever",
	"when",
	"where",
	"whether",
	"which",
	"while",
	"white",
	"who",
	"whole",
	"whom",
	"whose",
	"why",
	"wide",
	"wife",
	"will",
	"win",
	"wind",
	"window",
	"wish",
	"with",
	"within",
	"without",
	"woman",
	"wonder",
	"word",
	"work",
	"worker",
	"world",
	"worry",
	"would",
	"write",
	"writer",
	"wrong",
	"yard",
	"yeah",
	"year",
	"yes",
	"yet",
	"you",
	"young",
	"your",
	"yourself"];


const DIRECTIONS = {
	VERTICAL_POSITIVE: "v+",
	VERTICAL_NEGATIVE: "v-",
	HORIZONTAL_POSITIVE: "h+",
	HORIZONTAL_NEGATIVE: "h-",
	DIAGONAL_NE: "dne",
	DIAGONAL_NW: "dnw",
	DIAGONAL_SE: "dse",
	DIAGONAL_SW: "dsw",
	INITIAL: "i"
};


const getWords = amount => {
	const result = {};

	for (let i = 0; i < amount; i++) {
		const word = WORDS[Math.floor(Math.random() * WORDS.length)];
		result[word] = false;
	}

	return result;
};

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const highlightStyles = {
	[DIRECTIONS.VERTICAL_POSITIVE]: current => {
		return {
			top: `${32 * current.start.y}px`,
			left: `${32 * current.start.x}px`,
			height: `${32 * (Math.abs(current.start.y - current.end.y) + 1)}px`,
			transformOrigin: "center center"
		};

	},
	[DIRECTIONS.VERTICAL_NEGATIVE]: current => {
		return {
			top: `${32 * current.end.y}px`,
			left: `${32 * current.end.x}px`,
			height: `${32 * Math.abs(current.start.y - current.end.y + 1)}px`,
			transformOrigin: "center center"
		};

	},
	[DIRECTIONS.HORIZONTAL_POSITIVE]: current => {
		return {
			top: `${32 * current.start.y}px`,
			left: `${32 * current.start.x}px`,
			width: `${32 * (Math.abs(current.start.x - current.end.x) + 1)}px`,
			transformOrigin: "center center"
		};

	},
	[DIRECTIONS.HORIZONTAL_NEGATIVE]: current => {
		return {
			top: `${32 * current.end.y}px`,
			left: `${32 * current.end.x}px`,
			width: `${32 * Math.abs(current.start.x - current.end.x + 1)}px`,
			transformOrigin: "center center"
		};

	},
	[DIRECTIONS.DIAGONAL_SE]: current => {
		const distance = Math.abs(current.end.y - current.start.y) + 1;
		return {
			top: `${32 * current.start.y - 7}px`,
			left: `${32 * current.start.x + 15}px`,
			width: `${32 * distance + 13.5 * (distance - 1)}px`,
			transformOrigin: "top left",
			transform: "rotate(45deg)"
		};

	},
	[DIRECTIONS.DIAGONAL_SW]: current => {
		const distance = Math.abs(current.end.y - current.start.y) + 1;
		return {
			top: `${32 * current.start.y - 7}px`,
			left: `${32 * current.start.x - (30 * distance + 15.5 * (distance - 2))}px`,
			width: `${32 * distance + 13.5 * (distance - 1)}px`,
			transformOrigin: "top right",
			transform: "rotate(-45deg)"
		};

	},
	[DIRECTIONS.DIAGONAL_NE]: current => {
		const distance = Math.abs(current.end.y - current.start.y) + 1;

		return {
			top: `${32 * current.start.y - (35.5 * distance - 3.5 * (distance - 2))}px`,
			left: `${32 * current.start.x + (24 * distance + 8.125 * (distance - 2))}px`,
			width: `${32 * distance + 13.5 * (distance - 1)}px`,
			transformOrigin: "bottom left",
			transform: "rotate(135deg)"
		};

	},
	[DIRECTIONS.DIAGONAL_NW]: current => {
		const distance = Math.abs(current.end.y - current.start.y) + 1;
		return {
			top: `${32 * current.start.y - (35.5 * distance - 3.45 * (distance - 2))}px`,
			left: `${32 * current.start.x - (46.5 * distance + 30.925 * (distance - 2))
				}px`,
			width: `${32 * distance + 13.5 * (distance - 1)}px`,
			transformOrigin: "bottom right",
			transform: "rotate(-135deg)"
		};

	},
	[DIRECTIONS.INITIAL]: current => {
		return {
			top: `${32 * current.start.y}px`,
			left: `${32 * current.start.x}px`,
			transformOrigin: "center center"
		};

	}
};


const random = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
};
const _placeWord = (word, grid, width, height) => {
	word = random(0, 2) == 0 ? word : word.split("").reverse().join("");

	let placed = false;
	let x, y, direction, works;

	while (placed == false) {
		direction = random(0, 3);

		switch (direction) {
			case 0:
				x = random(0, width - word.length);
				y = random(0, height);

				works = true;

				for (let i = 0; i < word.length; i++) {
					if (grid[y][i + x] !== 0 && grid[y][i + x] !== word.charAt(i)) {
						works = false;
					}
				}

				if (works == true) {
					return [word, direction, x, y];
				}
				break;

			case 1:
				x = random(0, width);
				y = random(0, height - word.length);

				works = true;

				for (let i = 0; i < word.length; i++) {
					if (grid[y + i][x] !== 0 && grid[y + i][x] !== word.charAt(i)) {
						works = false;
					}
				}

				if (works == true) {
					return [word, direction, x, y];
				}
				break;
			case 2:
				x = random(0, width - word.length);
				y = random(0, height - word.length);

				works = true;

				for (let i = 0; i < word.length; i++) {
					if (grid[i + y][i + x] !== 0 && grid[i + y][i + x] !== word.charAt(i)) {
						works = false;
					}
				}

				if (works == true) {
					return [word, direction, x, y];
				}
				break;
		}

	}
};
const _generateBaseGrid = (width, height) => {
	const grid = [];

	for (let y = 0; y < height; y++) {
		const row = [];
		for (let x = 0; x < width; x++) {
			row.push(0);
		}
		grid.push(row);
	}

	return grid;
};
const generate = (words, width, height) => {
	const letters = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z"];


	let grid = _generateBaseGrid(width, height);
	words = words.sort((a, b) => {
		return b.length - a.length;
	});

	for (let i = 0; i < words.length; i++) {
		const [word, direction, x, y] = _placeWord(words[i], grid, width, height);

		switch (direction) {
			case 0:
				for (let i = 0; i < word.length; i++) {
					grid[y][i + x] = word.charAt(i);
				}
				break;
			case 1:
				for (let i = 0; i < word.length; i++) {
					grid[y + i][x] = word.charAt(i);
				}
				break;
			case 2:
				for (let i = 0; i < word.length; i++) {
					grid[y + i][x + i] = word.charAt(i);
				}
				break;
		}

	}

	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			if (grid[y][x] === 0) {
				grid[y][x] = letters[random(0, letters.length)];
			}
		}
	}

	return grid;
};

const determineDirection = state => {
	if (state.start.y == state.end.y) {
		return state.start.x < state.end.x ?
			DIRECTIONS.HORIZONTAL_POSITIVE :
			DIRECTIONS.HORIZONTAL_NEGATIVE;
	}

	if (state.start.x == state.end.x) {
		return state.start.y < state.end.y ?
			DIRECTIONS.VERTICAL_POSITIVE :
			DIRECTIONS.VERTICAL_NEGATIVE;
	}

	const xDifference = state.end.x - state.start.x;
	const xSign = xDifference >= 0;
	const yDifference = state.end.y - state.start.y;
	const ySign = yDifference >= 0;

	if (Math.abs(xDifference) == Math.abs(yDifference)) {
		if (xSign == true && ySign == true) {
			return DIRECTIONS.DIAGONAL_SE;
		}
		if (xSign == true && ySign == false) {
			return DIRECTIONS.DIAGONAL_NE;
		}
		if (xSign == false && ySign == true) {
			return DIRECTIONS.DIAGONAL_SW;
		}
		if (xSign == false && ySign == false) {
			return DIRECTIONS.DIAGONAL_NW;
		}
	}

	return DIRECTIONS.INITIAL;
};
const determineSelection = (state, letters) => {
	const direction = determineDirection(state);

	let result = [];

	if (direction == DIRECTIONS.HORIZONTAL_POSITIVE) {
		for (let x = state.start.x; x <= state.end.x; x++) {
			result.push(letters[state.start.y][x]);
		}
	}

	if (direction == DIRECTIONS.HORIZONTAL_NEGATIVE) {
		for (let x = state.start.x; x >= state.end.x; x--) {
			result.push(letters[state.start.y][x]);
		}
	}

	if (direction == DIRECTIONS.VERTICAL_POSITIVE) {
		for (let y = state.start.y; y <= state.end.y; y++) {
			result.push(letters[y][state.start.x]);
		}
	}

	if (direction == DIRECTIONS.VERTICAL_NEGATIVE) {
		for (let y = state.start.y; y >= state.end.y; y--) {
			result.push(letters[y][state.start.x]);
		}
	}

	if (direction == DIRECTIONS.DIAGONAL_NE) {
		let { x, y } = state.start;
		let difference = Math.abs(state.end.x - state.start.x);

		for (let i = 0; i <= difference; i++) {
			result.push(letters[y][x]);
			x++;
			y--;
		}
	}

	if (direction == DIRECTIONS.DIAGONAL_NW) {
		let { x, y } = state.start;
		let difference = Math.abs(state.end.x - state.start.x);

		for (let i = 0; i <= difference; i++) {
			result.push(letters[y][x]);
			x--;
			y--;
		}
	}

	if (direction == DIRECTIONS.DIAGONAL_SE) {
		let { x, y } = state.start;
		let difference = Math.abs(state.end.x - state.start.x);

		for (let i = 0; i <= difference; i++) {
			result.push(letters[y][x]);
			x++;
			y++;
		}
	}

	if (direction == DIRECTIONS.DIAGONAL_SW) {
		let { x, y } = state.start;
		let difference = Math.abs(state.end.x - state.start.x);

		for (let i = 0; i <= difference; i++) {
			result.push(letters[y][x]);
			x--;
			y++;
		}
	}

	return result.join("");
};

const Word = ({ word, found = false }) => {
	return /*#__PURE__*/(
		React.createElement("div", { className: found == false ? "word" : "word word--found" }, /*#__PURE__*/
			React.createElement("p", { className: "word__value" }, word)));


};
const WordsList = ({ words }) => {
	return /*#__PURE__*/(
		React.createElement("div", { className: "words-list" },
			Object.keys(words).map(word => {
				return /*#__PURE__*/React.createElement(Word, { word: word, found: words[word] });
			})));


};
const Highlight = ({ position = null, active = true }) => {
	const direction = determineDirection(position);
	const style = highlightStyles[direction](position);

	return /*#__PURE__*/(
		React.createElement("div", {
			className:
				active == true ?
					"word-search__highlight" :
					"word-search__highlight word-search__highlight--placed",

			style: style
		}));


};
const Letter = ({ value }) => {
	return /*#__PURE__*/(
		React.createElement("a", { href: "#", className: "word-search__letter" },
			value));


};
const Grid = ({ grid, width, height, onSelectionMade, highlights, setHighlights }) => {
	const [gridBounds, setGridBounds] = React.useState({ top: 0, left: 0 });
	const gridRef = React.useRef();


	const [pressed, setPressed] = React.useState(false);
	const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
	const [mouseGridPosition, setMouseGridPosition] = React.useState({
		x: 0,
		y: 0
	});


	const [currentHighlight, setCurrentHighlight] = React.useState(null);
	const [currentSelection, setCurrentSelection] = React.useState("");
	const [currentDirection, setCurrentDirection] = React.useState(
		DIRECTIONS.INITIAL);


	const onViewportUpdate = () => {
		const { top, left } = gridRef.current.getBoundingClientRect();
		setGridBounds({ top, left });
	};

	React.useEffect(() => {
		window.addEventListener("resize", onViewportUpdate);
		document.addEventListener("scroll", onViewportUpdate);

		onViewportUpdate();

		return () => {
			window.removeEventListener("resize", onViewportUpdate);
			document.removeEventListener("scroll", onViewportUpdate);
		};
	}, []);

	const determineMousePosition = event => {
		const x = event.clientX - gridBounds.left;
		const y = event.clientY - gridBounds.top;

		setMousePosition({ x, y });

		setMouseGridPosition({
			x: clamp(Math.floor(x / 32), 0, width - 1),
			y: clamp(Math.floor(y / 32), 0, height - 1)
		});


		return {
			x: clamp(Math.floor(x / 32), 0, width - 1),
			y: clamp(Math.floor(y / 32), 0, height - 1)
		};

	};

	const onMouseDown = event => {
		setPressed(true);

		const gridPosition = determineMousePosition(event);

		setCurrentHighlight({
			start: gridPosition,
			end: gridPosition
		});


		setCurrentSelection(grid[gridPosition.y][gridPosition.x]);
	};

	const onMouseUp = event => {
		setPressed(false);

		const result = onSelectionMade(currentSelection);

		if (result == true) {
			setHighlights([...highlights, currentHighlight]);
		}

		setCurrentHighlight(null);
	};

	const onMouseMove = event => {
		if (pressed == true) {
			const gridPosition = determineMousePosition(event);

			const newHighlight = Object.assign(
				currentHighlight, { end: gridPosition });


			setCurrentDirection(determineDirection(newHighlight));
			setCurrentHighlight(newHighlight);
			setCurrentSelection(determineSelection(newHighlight, grid));
		}
	};

	return /*#__PURE__*/(
		React.createElement(React.Fragment, null, /*#__PURE__*/
			React.createElement("div", { className: "word-search__grid" }, /*#__PURE__*/
				React.createElement("div", {
					ref: gridRef,
					onMouseUp: onMouseUp,
					onMouseDown: onMouseDown,
					onMouseMove: onMouseMove,
					className: "word-search__letters"
				},

					grid.map((row, y) => {
						return row.map((column, x) => {
							return /*#__PURE__*/React.createElement(Letter, { value: column, x: x, y: y });
						});
					})), /*#__PURE__*/

				React.createElement("div", { className: "word-search__highlights" },
					highlights.map(highlight => {
						return /*#__PURE__*/React.createElement(Highlight, { position: highlight, active: false });
					}),
					currentHighlight != null ? /*#__PURE__*/
						React.createElement(Highlight, { position: currentHighlight, active: true }) :

						""))));





};

const EndScreen = ({ onRestart }) => {
	return /*#__PURE__*/(
		React.createElement("div", { className: "end" }, /*#__PURE__*/
			React.createElement("div", { className: "end__content" }, /*#__PURE__*/
				React.createElement("h1", null, "Congrats, Want to go again?"), /*#__PURE__*/
				React.createElement("button", { className: "end__button", onClick: onRestart }, "Play Again?"))));





};

const App = () => {
	const width = 15;
	const height = 15;

	const [ended, setEnded] = React.useState(false);
	const [words, setWords] = React.useState(getWords(15));
	const [grid, setGrid] = React.useState([]);
	const [highlights, setHighlights] = React.useState([]);

	const onRestart = () => {
		const newWords = getWords(15);

		setWords(newWords);
		setGrid(generate(Object.keys(newWords), width, height));
		setHighlights([]);
		setEnded(false);
	};

	const isEnd = state => {
		return Object.values(state).includes(false) == false;
	};

	const onEnd = () => {
		setEnded(true);
	};

	const onSelectionMade = selection => {
		const backwardsSelection = selection.split("").reverse().join("");

		if (Object.keys(words).includes(selection)) {

			const newState = {
				...words,
				[selection]: true
			};


			if (isEnd(newState) == true) {
				onEnd();
			} else {
				setWords(newState);
			}

			return true;
		} else if (Object.keys(words).includes(backwardsSelection)) {

			const newState = {
				...words,
				[backwardsSelection]: true
			};


			if (isEnd(newState) == true) {
				onEnd();
			} else {
				setWords(newState);
			}

			return true;
		}

		return false;
	};

	React.useEffect(() => {
		setGrid(generate(Object.keys(words), width, height));
	}, []);

	return /*#__PURE__*/(
		React.createElement("div", { className: "word-search" },
			ended == true ? /*#__PURE__*/React.createElement(EndScreen, { onRestart: onRestart }) : "", /*#__PURE__*/
			React.createElement(Grid, {
				grid: grid,
				width: width,
				height: height,
				highlights: highlights,
				setHighlights: setHighlights,
				onSelectionMade: onSelectionMade
			}), /*#__PURE__*/

			React.createElement(WordsList, { words: words })));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));