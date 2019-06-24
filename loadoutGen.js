function randomMeleeGen() {

	var meleeWeaponClasses = [
		"oneHandBlade",
		"twoHandBlade",
		"oneHandBlunt",
		"twoHandBlunt",
	];

	var oneHandBlade = [
		"Cleaver",
		"Ice Pick",
		"Jade Key",
		"Karambit",
		"Knife",
		"Machete",
		"Mek'leth",
		"Tomahawk",
		"Tactical Spatula",
	];

	var twoHandBlade = [
		"Chosen One",
		"Hattori",
		"Nordic War Axe",
		"Longsword",
		//"Zero Cutter", // Not actually including; this is just here for le lols.
	];

	var oneHandBlunt = [
		"Brass Knuckle",
		"Frying Pan",
		"ASP Baton",
		"Crowbar", // Crowbar is also a default. Maybe think about having this able to be pulled without manual selection?
		"Stick Grenade",
		"Trench Mace",
		"Nightstick",
	];

	var twoHandBlunt = [
		"Baseball Bat",
		"Sledge Hammer",
	];

	var meleeClassGen = meleeWeaponClasses[Math.floor(Math.random() * meleeWeaponClasses.length)];

	if (meleeClassGen == "twoHandBlunt") {
		var meleeActual = twoHandBlunt[Math.floor(Math.random() * twoHandBlunt.length)];
	} else if (meleeClassGen == "oneHandBlunt") {
		var meleeActual = oneHandBlunt[Math.floor(Math.random() * oneHandBlunt.length)];
	} else if (meleeClassGen == "twoHandBlade") {
		var meleeActual = twoHandBlade[Math.floor(Math.random() * twoHandBlade.length)];
	} else if (meleeClassGen == "oneHandBlade") {
		var meleeActual = oneHandBlade[Math.floor(Math.random() * oneHandBlade.length)];
	};

	if (meleeActual == "Baseball Bat") {
		if (document.getElementById("baseballBat").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = "Knife";
		}
	} else if (meleeActual == "Sledge Hammer") {
		if (document.getElementById("sledgeHammer").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = "Knife";
		}
	} else if (meleeActual == "ASP Baton") {
		if (document.getElementById("aspBaton").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = "Knife";
		}
	} else if (meleeActual == "Crowbar") {
		if (document.getElementById("crowbar").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = "Knife";
		}
	} else if (meleeActual == "Stick Grenade") {
		if (document.getElementById("stickGrenade").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = "Knife";
		}
	} else if (meleeActual == "Trench Mace") {
		if (document.getElementById("trenchMace").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = "Knife";
		}
	} else if (meleeActual == "Chosen One") {
		if (document.getElementById("chosenOne").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = "Knife";
		}
	} else if (meleeActual == "Hattori") {
		if (document.getElementById("hattori").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = "Knife";
		}
	} else if (meleeActual == "Nordic War Axe") {
		if (document.getElementById("nordicWarAxe").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = "Knife";
		}
	} else if (meleeActual == "Cleaver") {
		if (document.getElementById("cleaver").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = "Knife";
		}
	} else if (meleeActual == "Ice Pick") {
		if (document.getElementById("icePick").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = "Knife";
		}
	} else if (meleeActual == "Jade Key") {
		if (document.getElementById("jKey").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = "Knife";
		}
	} else if (meleeActual == "Karambit") {
		if (document.getElementById("karambit").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = "Knife";
		}
	} else if (meleeActual == "Machete") {
		if (document.getElementById("machete").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = "Knife";
		}
	} else if (meleeActual == "Mek'leth") {
		if (document.getElementById("mekleth").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = "Knife";
		}
	} else if (meleeActual == "Tactical Spatula") {
		if (document.getElementById("tacticalSpatula").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = "Knife";
		}
	} else if (meleeActual == "Longsword") {
		if (document.getElementById("longsword").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = "Knife";
		}
	} else if (meleeActual == "Tomahawk") {
		if (document.getElementById("tomahawk").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = "Knife";
		}
	} else if (meleeActual == "Frying Pan") {
		if (document.getElementById("fryingPan").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = "Knife";
		}
	} else if (meleeActual == "Brass Knuckle") {
		if (document.getElementById("brassKnuckle").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = "Knife";
		}
	} else if (meleeActual == "Nightstick") {
		if (document.getElementById("nightstick").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = "Knife";
		}
	} else {
		meleeActualFinal = "Knife";
	};

	document.getElementById("num3").textContent = meleeActualFinal;
	console.log(meleeActualFinal);
	return meleeActualFinal;
}

function randomPrimaryGen() {
	var primaryWeaponClasses = [
		"assaultRifles",
		"battleRifles",
		"shotguns",
		"pdws",
		"lmgs",
		"dmrs",
		"carbines",
		"sniperRifles",
		"integrallySuppressed", // This value is a hack so primary weapons that are not supposed to have barrel attachments will behave as such.
	];

	/*
	var primary = [
		"000AK12",
		"010AN-94",
		"015AS VAL",
		"016SCAR-L",
		"020AUG A1",
		"022M16A4",
		"025G36",
		"031M16A3",
		"039AUG A2",
		"045FAMAS",
		"047AK47",
		"052AUG A3",
		"055L85A2",
		"064HK416",
		"074AK74",
		"094AKM",
		"103AK103",
		"123M231",
		"021Beowulf ECR",
		"030SCAR-H",
		"044AK12BR",
		"059G3",
		"076AG-3",
		"096Henry 45-70",
		"107FAL 50.00",
		"001KSG-12",
		"011Remington 870",
		"024DBV12",
		"056KS-23M",
		"063Saiga-12",
		"081Stevens DB",
		"112AA12",
		"120SPAS-12",
		"000MP5K",
		"006UMP45",
		"009MP7",
		"023MAC10",
		"024P90",
		"040MP5",
		"049Colt SMG 635",
		"053L2A3",
		"060MP5SD",
		"066MP10",
		"071M3A1",
		"074MP5/10",
		"080AUG A3 Para",
		"092PPSh-41",
		"098FAL Para Shorty",
		"100KRISS Vector",
		"107MP-40",
		"000Colt LMG",
		"019M60",
		"027AUG HBAR",
		"033MG36",
		"037RPK12",
		"043L86 LSW",
		"054RPK",
		"067HK21",
		"072SCAR HAMR",
		"088RPK74",
		"101MG3KWS",
		"003MK11",
		"013SKS",
		"046VSS Vintorez",
		"059MSG90",
		"070Beowulf TCR",
		"078SA58 SPR",
		"085SCAR SSR",
		"000M4A1",
		"007G36C",
		"014M4",
		"028L22",
		"032SCAR PDW",
		"035AKU12",
		"042Groza-1",
		"051AK12C",
		"062Honey Badger",
		"069SR-3M",
		"079Groza-4",
		"086MC51SD",
		"089FAL 50.63 Para",
		"0931858 Carbine",
		"105AK105",
		//XXXR Squared,
		"000Intervention",
		"038Dragunov SVU",
		"105Dragunov SVDS",
		"012Remington 700",
		"041AWS",
		"065BFG 50",
		"082L115A3",
		"091Mosin Nagant",
		"150Hecate II",
		//"XXXM107",
		"195Steyr Scout",
		"015AS VAL",
		"041AWS",
		"046VSS Vintorez",
		"060MP5SD",
		"062Honey Badger",
		"079Groza-4",
		"086MC51SD",
	]
	*/

	var assaultRifles = [
		// NEED TO FIX - ASSAULT RIFLES
		// 1. AS VAL: Make sure function always returns null for barrel, Add Extended Magazine to Other, Add PSO-1 Scope to Optics.
		// 2. SCAR-L: Add PM-II to Optics (Fuck you Mar.)
		"000AK12",
		"010AN-94",
		//"015AS VAL",
		"016SCAR-L",
		"020AUG A1",
		"022M16A4",
		"025G36",
		"031M16A3",
		"039AUG A2",
		"045FAMAS",
		"047AK47",
		"052AUG A3",
		"055L85A2",
		"064HK416",
		"074AK74",
		"094AKM",
		"103AK103",
		"123M231",
	];

	var battleRifles = [
		// NEED TO FIX - BATTLE RIFLES
		// 1. SCAR-H: Add PM-II to Optics.
		"021Beowulf ECR",
		"030SCAR-H",
		"044AK12BR",
		"059G3",
		"076AG-3",
		"096Henry 45-70",
		"107FAL 50.00",
	];

	var shotguns = [
		// NEED TO FIX - SHOTGUNS
		// 1. SPAS-12: Add Extended Stock to Optics.
		// 2. AA-12: Add 20RD Drum to Extra.
		// 3. ALL: Add shotgun ammo types and remove Armor Piercing and Hollow Point in Extra.
		"001KSG-12",
		"011Remington 870",
		"024DBV12",
		"056KS-23M",
		"063Saiga-12",
		"081Stevens DB",
		"112AA12",
		"120SPAS-12",
	];

	var pdws = [
		// NEED TO FIX - PDWs
		// 1. MAC10: Add Sionics Suppressor to Barrel.
		// 2. MP5SD: Function needs to return null for Barrel.
		// 3. P90: Add Green Laser to Underbarrel.
		// 4. PPSh-41: Remove all suppressors from Barrel.
		// 5. ALL: Add Osprey Suppressor to Barrel. (Except PPSh-41 and *possibly* FAL Para Shorty?)
		"000MP5K",
		"006UMP45",
		"009MP7",
		"023MAC10",
		"024P90",
		"040MP5",
		"049Colt SMG 635",
		"053L2A3",
		//"060MP5SD",
		"066MP10",
		"071M3A1",
		"074MP5/10",
		"080AUG A3 Para",
		"092PPSh-41",
		"098FAL Para Shorty",
		"100KRISS Vector",
		"107MP-40",
	];

	var lmgs = [
		// NEED TO FIX - LMGs
		// 1. SCAR HAMR: Add PM-II to Optics.
		"000Colt LMG",
		"019M60",
		"027AUG HBAR",
		"033MG36",
		"037RPK12",
		"043L86 LSW",
		"054RPK",
		"067HK21",
		"072SCAR HAMR",
		"088RPK74",
		"101MG3KWS",
	];

	var dmrs = [
		// NEED TO FIX - DMRs
		// 1. SKS: Add PSO-1 Scope to Optics.
		// 2. VSS Vintorez: Add PSO-1 Scope to Optics. Make function return null for Barrel.
		// 3. SCAR SSR: Add PM-II to Optics.
		"003MK11",
		"013SKS",
		//"046VSS Vintorez",
		"059MSG90",
		"070Beowulf TCR",
		"078SA58 SPR",
		"085SCAR SSR",
	];

	var carbines = [
		// NEED TO FIX - CARBINES
		// 1. SCAR PDW: Add PM-II to Optics.
		// 2. Honey Badger: Make function return null for barrel.
		// 3. SR-3M:Add PSO-1 Scope to Optics. Add Extended Magazine to Extra.
		"000M4A1",
		"007G36C",
		"014M4",
		"028L22",
		"032SCAR PDW",
		"035AKU12",
		"042Groza-1",
		"051AK12C",
		//"062Honey Badger",
		"069SR-3M",
		//"079Groza-4",
		//"086MC51SD",
		"089FAL 50.63 Para",
		"0931858 Carbine",
		"105AK105",
		//XXXR Squared,
	];

	var sniperRifles = [
		"000Intervention",
		"038Dragunov SVU",
		"105Dragunov SVDS",
		"012Remington 700",
		//"041AWS",
		"065BFG 50",
		"082L115A3",
		"091Mosin Nagant",
		"150Hecate II",
		//"XXXM107",
		"195Steyr Scout",
	];

	var integrallySuppressed = [ // This var is a hack to ensure barrel attachments won't return.
		"015AS VAL",
		"041AWS",
		"046VSS Vintorez",
		"060MP5SD",
		"062Honey Badger",
		"079Groza-4",
		"086MC51SD",
	];

	var primaryAttachmentsSight = [
		"Default",
		"Z-Point",
		"EOTech XPS2",
		"MARS",
		"EOTech 552",
		"PK-A",
		"PKA-S",
		"Reflex Sight",
		"Kobra Sight",
		"Coyote Sight",
		"C79",
		"Comp Aimpoint",
		"M145",
		"ACOG Scope",
		"VCOG 6X Scope",
		"TA01 ACOG",
		"OKP-7",
		"DDHB Reflex",
		"Mini Sight",
		"TA33 ACOG",
		"Delta Sight",
		"TA11 ACOG",
		"Barska Electro",
		"Pilad-3",
		//"PM-II",
		//"PSO-1 Scope",
		//"PSO-1M2 Scope",
		//"PU-1 Scope",
		//"Leupold M8 6x",
		//"Extended Stock [SPAS-12]",
	];

	var primaryAttachmentsBarrel = [
		"Supressor",
		"R2 Suppressor",
		"ARS Supressor",
		"PBS-4 Suppressor",
		"Flash Hider",
		"Muzzle Brake",
		"Compensator",
		//"Osprey Suppressor",
		//"Sionics Suppressor [MAC-10]",
		"Default",
	];

	var integrallySuppressedBarrel = "N/A";

	var primaryAttachmentsUnderBarrel = [
		"Vertical Grip",
		"Angled Grip",
		"Folding Grip",
		"Stubby Grip",
		//"Green Laser",
		"Flashlight",
		"Laser",
		"Default",
	];

	var primaryAttachmentsExtra = [
		"Green Laser",
		"Laser",
		"Ballistics Tracker",
		"Canted Iron Sights",
		"Canted Delta Sights",
		"Flashlight",
		//"Hollow Point",
		//"Armor Piercing",
		//"Flechette",
		//"Birdshot",
		//"Slugs",
		//"Extended Magazine",
		//"20rd Drum [AA-12]",
		"Default",
	];

	var userRank = document.getElementById("userRankInput").value;
	var weaponIsAvailable = false;

	while (weaponIsAvailable == false) {
		var primaryClassGen = primaryWeaponClasses[Math.floor(Math.random() * primaryWeaponClasses.length)];

		if (primaryClassGen == "assaultRifles") {
			var primaryActual = assaultRifles[Math.floor(Math.random() * assaultRifles.length)];
		} else if (primaryClassGen == "battleRifles") {
			var primaryActual = battleRifles[Math.floor(Math.random() * battleRifles.length)];
		} else if (primaryClassGen == "shotguns") {
			var primaryActual = shotguns[Math.floor(Math.random() * shotguns.length)];
		} else if (primaryClassGen == "pdws") {
			var primaryActual = pdws[Math.floor(Math.random() * pdws.length)];
		} else if (primaryClassGen == "lmgs") {
			var primaryActual = lmgs[Math.floor(Math.random() * lmgs.length)];
		} else if (primaryClassGen == "dmrs") {
			var primaryActual = dmrs[Math.floor(Math.random() * dmrs.length)];
		} else if (primaryClassGen == "carbines") {
			var primaryActual = carbines[Math.floor(Math.random() * carbines.length)];
		} else if (primaryClassGen == "sniperRifles") {
			var primaryActual = sniperRifles[Math.floor(Math.random() * sniperRifles.length)];
		} else if (primaryClassGen == "integrallySuppressed") {
			var primaryActual = integrallySuppressed[Math.floor(Math.random() * integrallySuppressed.length)];
			//var primaryBarrelActual = null;
		};

		var primaryWeaponWithoutRank = primaryActual.slice(3, 999);
		var primaryWeaponRank = primaryActual.slice(0, 3);
		var finalPrimaryWeaponRank = parseInt(primaryWeaponRank, 10);

		if (userRank >= finalPrimaryWeaponRank) {
			weaponIsAvailable == true;

			var primarySightActual = primaryAttachmentsSight[Math.floor(Math.random() * primaryAttachmentsSight.length)];
			if (primaryActual == ["AS VAL", "AWS", "VSS Vintorez", "MP5SD", "Honey Badger", "Groza-4", "MC51SD"]) {
				var primaryBarrelActual = integrallySuppressedBarrel;
			} else {
				var primaryBarrelActual = primaryAttachmentsBarrel[Math.floor(Math.random() * primaryAttachmentsBarrel.length)];
			};
			var primaryUnderBarrelActual = primaryAttachmentsUnderBarrel[Math.floor(Math.random() * primaryAttachmentsUnderBarrel.length)];
			var primaryExtraActual = primaryAttachmentsExtra[Math.floor(Math.random() * primaryAttachmentsExtra.length)];

			var primaryFinal = primaryWeaponWithoutRank;
			var primaryFinalAttachments = "(" + primarySightActual + ", " + primaryBarrelActual + ", " + primaryUnderBarrelActual + ", " + primaryExtraActual + ")";
			document.getElementById("num1").textContent = primaryFinal;
			document.getElementById("num1a").textContent = primaryFinalAttachments;
			console.log(primaryFinal);
			break;
		} else if (userRank < 0) {
			document.getElementById("num1").textContent = "RANK ERROR";
			document.getElementById("num1a").textContent = "DO NOT PUT NEGATIVE NUMBERS IN RANK";
			break;
		} else {
			continue;
		}
	};
};