function meleeGen() {
	const melee = [
		"Cleaver",
		"Ice Pick",
		"Jade Key",
		"Karambit",
		"Machete",
		"Mek'Leth",
		"Tomahawk",
		"Tactical Spatula",
		"Chosen One",
		"Hattori",
		"Nordic War Axe",
		"Longsword",
		"Brass Knuckle",
		"Frying Pan",
		"ASP Baton",
		"Stick Grenade",
		"Trench Mace",
		"Nightstick",
		"Baseball Bat",
		"Sledge Hammer",
		"Crane",
		"Reaper",
		"Hunting Knife",
		"Jason",
		"Cricket Bat",
	];

	// This var's only purpose is to include the Crowbar as a default weapon. I suck at JS ok?
	const meleeDefault = [
		"Knife",
		"Crowbar",
	];

	let selection = melee[Math.floor(Math.random() * melee.length)];

	var meleeFinal;

	if (selection === "Cleaver") {
		if (document.getElementById("cleaver").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Ice Pick") {
		if (document.getElementById("ice").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Jade Key") {
		if (document.getElementById("jKey").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Karambit") {
		if (document.getElementById("karambit").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Machete") {
		if (document.getElementById("machete").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Mek'Leth") {
		if (document.getElementById("mekleth").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Tomahawk") {
		if (document.getElementById("tomahawk").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Tactical Spatula") {
		if (document.getElementById("spatula").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Chosen One") {
		if (document.getElementById("chosen").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Hattori") {
		if (document.getElementById("hattori").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Nordic War Axe") {
		if (document.getElementById("nordic").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Longsword") {
		if (document.getElementById("long").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Brass Knuckle") {
		if (document.getElementById("brass").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Frying Pan") {
		if (document.getElementById("pan").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "ASP Baton") {
		if (document.getElementById("baton").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Stick Grenade") {
		if (document.getElementById("stick").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Trench Mace") {
		if (document.getElementById("trench").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Nightstick") {
		if (document.getElementById("night").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Baseball Bat") {
		if (document.getElementById("baseball").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Sledge Hammer") {
		if (document.getElementById("sledge").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Crane") {
		if (document.getElementById("crane").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Jason") {
		if (document.getElementById("jason").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Reaper") {
		if (document.getElementById("reaper").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Cricket Bat") {
		if (document.getElementById("cricket").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (selection === "Hunting Knife") {
		if (document.getElementById("hunting").checked == true) {
			meleeFinal = selection;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else {
		meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	}

	console.log("Melee: " + meleeFinal);

	return meleeFinal;
}

/**
 * Generates a primary weapon with attachments for the user based on rank.
 * 
 * @param {number} userRank - A nonnegative number denoting the user's rank.
 * @returns {Primary} A Primary object which contains information about the gun and attachments generated.
 */
function primaryGen(userRank) {
	/**
	 * Represents a primary weapon and all its attachments.
	 * 
	 * @constructor
	 * @param {string} gun - The explicit weapon to be used.
	 * @param {string} optic - A sight, scope, or iron sights.
	 * @param {string} barrel - A muzzle device or suppressor.
	 * @param {string} under - A grip or laser under the barrel.
	 * @param {string} extra - A laser or aiming aid.
	 * @param {string} ammo - An ammo type.
	 */
	function Primary(gun, optic, barrel, under, extra, ammo) {
		this.gun   = gun;
		this.optic = optic;
		this.barrel= barrel;
		this.under = under;
		this.extra = extra;
		this.ammo  = ammo;

		this.allAttachments = this.optic + ", " + this.barrel + ", " + this.under + ", " + this.extra + ", " + this.ammo;
	}

	const primary = [
		"000AK12",
		"000MP5K",
		"000Colt LMG",
		"000Intervention",
		"000M4A1",
		"001KSG-12",
		"003MK11",
		"005UMP45",
		"006G36K",
		"007G36C",
		"009MP7",
		"010AN-94",
		"011Remington 870",
		"012Remington 700",
		"013SKS",
		"014M4",
		"015AS VAL",
		"016SCAR-L",
		"019M60",
		"020AUG A1",
		"021Beowulf ECR",
		"022M16A4",
		"023MAC10",
		"024P90",
		"024DBV12",
		"025G36",
		"027AUG HBAR",
		"028L22",
		"030SCAR-H",
		"031M16A3",
		"032SCAR PDW",
		"033MG36",
		"034SL-8",
		"035AKU12",
		"037RPK12",
		"038Dragunov SVU",
		"039AUG A2",
		"040MP5",
		"041AWS",
		"042Groza-1",
		"043L86 LSW",
		"044AK12BR",
		"045FAMAS G2",
		"046VSS Vintorez",
		"047AK47",
		"049Colt SMG 635",
		"051AK12C",
		"052AUG A3",
		"053L2A3",
		"054RPK",
		"055L85A2",
		"056KS-23M",
		"059G3",
		"059MSG90",
		"060MP5SD",
		"062Honey Badger",
		"063Saiga-12",
		"064HK416",
		"065BFG 50",
		"066MP10",
		"067HK21",
		"069SR-3M",
		"070Beowulf TCR",
		"071M3A1",
		"072SCAR HAMR",
		"074MP5/10",
		"074AK74",
		"076AG-3",
		"077Uzi",
		"078SA58 SPR",
		"079Groza-4",
		"080AUG A3 Para",
		"081Stevens DB",
		"082AWM",
		"084TRG-42",
		"085SCAR SSR",
		"086MC51SD",
		"088RPK74",
		"089FAL 50.63 Para",
		"091Mosin Nagant",
		"092PPSH-41",
		"0931858 Carbine",
		"094AKM",
		"096Henry 45-70",
		"098FAL Para Shorty",
		"100Kriss Vector",
		"101MG3KWS",
		"103AK103",
		"105Dragunov SVDS",
		"105AK105",
		"107MP40",
		"107FAL 50.00",
		"111TAR-21",
		"112AA-12",
		"113Jury",
		"115X95 SMG",
		"120SPAS-12",
		"121Tommy Gun",
		"123M231",
		"125KAC SRR",
		"130X95R",
		"150Hecate II",
		"170M107",
		"195Steyr Scout",
		"200WA2000",
		"211G11K2",
	];

	// ATTACHMENTS
	let optic = [
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
	];

	let barrel = [
		"Flash Hider",
		"Muzzle Brake",
		"Compensator",
		"Default",
		"Supressor",
		"R2 Suppressor",
		"ARS Supressor",
		"PBS-4 Suppressor",
		"PBS-1 Suppressor",
	];

	let under = [
		"Flashlight",
		"Laser",
		"Default",
		"Vertical Grip",
		"Angled Grip",
		"Folding Grip",
		"Stubby Grip",
	];

	let extra = [
		"Green Laser",
		"Laser",
		"Ballistics Tracker",
		"Canted Iron Sights",
		"Canted Delta Sight",
		"Flashlight",
		"Default",
	];

	let ammo = [];

	// Fill this up with a bunch of defaults so the user does not always get an ammo type.
	for (let i = 0; i <= 3; i++)
		ammo.push("Default");

	let available = false;

	do {
		let rawSelection = primary[Math.floor(Math.random() * primary.length)];
		let selection = rawSelection.slice(3);
		let requiredRank = parseInt(rawSelection.slice(0, 3), 10);

		if (userRank >= requiredRank) {
			available = true;

			// TODO: Think about condensing all the switch statements into just one?
			switch (selection) {
				case "Dragunov SVDS":
					optic.push("PSO-1M2 Scope");
					break;

				case "SCAR-L":
				case "SCAR-H":
				case "SCAR PDW":
				case "AWS":
				case "SCAR-HAMR":
				case "AWM":
				case "TRG-42":
					optic.push("PM-II");
					break;

				case "SPAS-12":
					optic.push("Extended Stock");
					break;

				case "SKS":
				case "AS VAL":
				case "Dragunov SVU":
				case "VSS Vintorez":
				case "SR-3M":
					optic.push("PSO-1 Scope");
					break;

				case "Mosin Nagant":
					optic.push("PSO-1 Scope", "PU-1 Scope");
					break;

				case "1858 Carbine":
					optic.push("Half Ring Sight", "Full Ring Sight");
					break;

				case "Steyr Scout":
					optic.push("Leupold M8 6x");
					break;

				case "Tommy Gun":
					optic.push("Lyman Sight");
					break;

				case "G36":
				case "MG36":
				case "G36C":
				case "G36K":
				case "SL-8":
					optic.push("Hensoldt 3x Sight");
					break;
			}
			
			let opticAct = optic[Math.floor(Math.random() * optic.length)];

			switch (selection) {
				case "MP5K":
				case "UMP45":
				case "MP7":
				case "P90":
				case "MP5":
				case "Colt SMG 635":
				case "L2A3":
				case "MP10":
				case "M3A1":
				case "MP5/10":
				case "AUG A3 Para":
				case "Kriss Vector":
				case "MP-40":
				case "Tommy Gun":
				case "Uzi":
					barrel.push("Osprey Suppressor");
					break;

				case "MAC10":
					barrel.push("Osprey Suppressor", "Sionics Suppressor");
					break;

				case "TAR-21":
					barrel.push("CTAR Barrel");
					break;

				case "PPSH-41":
				case "1858 Carbine":
				case "Stevens DB":
				case "Jury":
					barrel.length = 4;
					break;
			}

			let barrelAct = barrel[Math.floor(Math.random() * barrel.length)];

			if (selection === "AS VAL" ||
				selection === "AWS" ||
				selection === "VSS Vintorez" ||
				selection === "MP5SD" ||
				selection === "Honey Badger" ||
				selection === "Groza-4" ||
				selection === "MC51SD" ||
				selection === "KAC SRR") {
				barrelAct = "N/A";
			} else if (selection === "TAR-21" && barrelAct === "CTAR Barrel") {
				selection = "CTAR-21";
			}
			
			switch (selection) {
				case "L22":
				case "P90":
					under.push("Green Laser");
					break;
				case "Groza-1":
					under.length = 3;
					under.push("Green Laser");
					break;
			}
			
			let underAct = under[Math.floor(Math.random() * under.length)];

			switch (selection) {
				/*
				 * Really inefficient way of doing this but
				 * I need to separate those that can take AP
				 * and HP from those that cannot.
				 */
				case "KSG-12":
				case "Remington 870":
				case "DBV12":
				case "KS-23M":
				case "Saiga-12":
				case "Stevens DB":
				case "AA-12":
				case "SPAS-12":
				case "Intervention":
				case "Remington 700":
				case "AWS":
				case "Dragunov SVU":
				case "Dragunov SVDS":
				case "BFG 50":
				case "AWM":
				case "Mosin Nagant":
				case "TRG-42":
				case "M107":
				case "Hecate II":
				case "WA2000":
					switch (selection) {
						case "AA-12":
							break;
					}
					break;

				case "KSG-12":
				case "Remington 870":
				case "DBV12":
				case "KS-23M":
				case "Saiga-12":
				case "Stevens DB":
				case "AA-12":
				case "SPAS-12":
					ammo.push("Flechette", "Birdshot", "Slugs");
					switch (selection) {
						case "AA-12":
							extra.push("20rd Drum");
							break;
					}
					break;

				case "AS VAL":
				case "SR-3M":
					extra.push("Extended Magazine");
					ammo.push("Armor Piercing", "Hollow Point");
					break;

				case "Tommy Gun":
					extra.push("30rd Mag", "50rd Drum");
					ammo.push("Armor Piercing", "Hollow Point");
					break;
					
				case "Uzi":
					extra.push("Extended Stock");
					ammo.push("Armor Piercing", "Hollow Point");
					break;

				default:
					ammo.push("Armor Piercing", "Hollow Point");
			}

			let extraAct = extra[Math.floor(Math.random() * extra.length)];
			let ammoAct = ammo[Math.floor(Math.random() * ammo.length)];

			let loadout = new Primary(selection, opticAct, barrelAct, underAct, extraAct, ammoAct);

			console.log("Primary: " + loadout.gun);
			console.log("Primary atts: " + loadout.allAttachments);

			if (loadout.gun    == undefined ||
				loadout.optic  == undefined ||
				loadout.barrel == undefined ||
				loadout.under  == undefined ||
				loadout.extra  == undefined ||
				loadout.ammo   == undefined) {
				document.getElementById("info-msg").textContent = "Something went wrong.\nCheck console, noob.";
				return loadout;
			} else {
				return loadout;
			}
		}
	} while (!available);
}

/**
 * Randomly generates a secondary weapon based on rank.
 * 
 * @param {number} userRank - The rank of the user.
 * @return {Secondary} - Object containing the gun and attachments.
 */
function secondaryGen(userRank) {
	/**
	 * Represents a secondary and its attachments
	 * 
	 * @constructor
	 * @param {string} gun - The actual weapon to be used.
	 * @param {string} optic - A scope, red dot sight, or irons.
	 * @param {string} barrel - A suppressor or muzzle device.
	 * @param {string} extra - A laser, aiming aid, or other attachment exclusive to gun.
	 * @param {string} ammo - The type of ammo to be used.
	 */
	function Secondary(gun, optic, barrel, extra, ammo) {
		this.gun   = gun;
		this.optic = optic;
		this.barrel= barrel;
		this.extra = extra;
		this.ammo  = ammo;

		this.allAttachments = this.optic + ", " + this.barrel + ", " + this.extra + ", " + this.ammo;
	}

	const secondary = [
		"000M9",
		"000Glock 17",
		"004MP412 REX",
		"008M1911",
		"017Glock 18",
		"018Desert Eagle L5",
		"026M93R",
		"029Mateba 6",
		"034M45A1",
		"036Serbu Shotgun",
		"050TEC-9",
		"057Five Seven",
		"0581858 New Army",
		"061Zip 22",
		"068Micro Uzi",
		"075SFG-50",
		"083Redhawk 44",
		"090Sawed Off",
		"095Saiga-12U",
		"102Desert Eagle XIX",
		"106MP1911",
		"113Judge",
		"117Obrez",
		"137Executioner",
	];

	let optic = [
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
		"Half Ring Sight",
		"Full Ring Sight",
	];

	let barrel = [
		"Flash Hider",
		"Muzzle Brake",
		"Compensator",
		"Default", // Stop here for revolvers, deagles, applicable guns, etc.
		"Supressor",
		"R2 Suppressor",
		"ARS Supressor",
		"PBS-4 Suppressor",
		"PBS-1 Suppressor",
	];

	let extra = [
		"Laser",
		"Green Laser",
		"Flashlight",
		"Default",
		"Ballistics Tracker",
	];

	// This will be a blank array filled with a bunch of defaults
	// so the user isn't always granted an ammo type.
	let ammo = [];

	for (let i = 0; i <= 3; i++)
		ammo.push("Default");

	let available = false;

	do {
		let rawSelection = secondary[Math.floor(Math.random() * secondary.length)];

		let selection = rawSelection.slice(3);

		let requiredRank = parseInt(rawSelection.slice(0, 3), 10);

		if (userRank >= requiredRank) {
			available = true;

			switch (selection) {
				// Remove the Half and Full ring sights.
				case "Serbu Shotgun":
				case "SFG 50":
				case "Sawed Off":
				case "Saiga-12U":
				case "Obrez":
					optic.length = 24;

					switch (selection) {
						case "Obrez":
							optic.push("PU-1 Scope", "PSO-1 Scope");
							break;
					}
					break;

				case "Desert Eagle L5":
				case "Desert Eagle XIX":
					optic.push("Leupold M8-2x");
					break;
			}

			let opticAct = optic[Math.floor(Math.random() * optic.length)];

			switch (selection) {
				case "MP412 REX":
				case "Desert Eagle L5":
				case "Mateba 6":
				case "1858 New Army":
				case "Redhawk 44":
				case "Sawed Off":
				case "Judge":
				case "Executioner":
					barrel.length = 4;

					switch (selection) {
						case "Desert Eagle L5":
						case "Desert Eagle XIX":
							barrel.push("Extended Barrel");
							break;
					}
					break;

				case "M9":
				case "M93R":
				case "Zip 22":
				case "Glock 17":
				case "Glock 18":
				case "M1911":
				case "M45A1":
				case "MP1911":
				case "Five Seven":
				case "Micro Uzi":
					barrel.push("Osprey Suppressor");
					break;
			}

			let barrelAct = barrel[Math.floor(Math.random() * barrel.length)];

			switch (selection) {
				case "Serbu Shotgun":
				case "Saiga-12U":
				case "Sawed Off":
				case "SFG-50":
				case "Obrez":
					extra.push("Canted Iron Sights", "Canted Delta Sight");
					switch (selection) {
						case "Serbu Shotgun":
						case "Saiga-12U":
						case "Sawed Off":
							ammo.push("Flechette", "Birdshot", "Slugs");
							switch (selection) {
								case "Sawed Off":
									extra.push("Boom Stock");
									break;
							}
							break;
					}
					break;

				case "Judge":
					break;

				default:
					switch (selection) {
						case "M9":
						case "M93R":
						case "Glock 17":
						case "M1911":
						case "Deagle 44":
						case "M45A1":
						case "Five Seven":
						case "Glock 18":
						case "TEC-9":
						case "MP1911":
							// extra.length = 4;
							extra.pop();
							break;
					}
					ammo.push("Hollow Point", "Armor Piercing");
					switch (selection) {
						case "Zip 22":
							extra.push("Pro Mag");
							break;

						case "M93R":
							extra.push("Raffica Stock");
							break;

						case "Glock 17":
						case "Glock 18":
							extra.push("Glock Stock", "33rd Magazine");
							break;

						case "Micro Uzi":
							extra.push("Extended Stock");
							break;
					}
			}

			let extraAct= extra[Math.floor(Math.random()* extra.length)];
			let ammoAct = ammo[Math.floor(Math.random() * ammo.length)];

			let loadout = new Secondary(selection, opticAct, barrelAct, extraAct, ammoAct);

			console.log("Secondary: " + loadout.gun);
			console.log("Secondary atts: " + loadout.allAttachments);

			if (loadout.gun == undefined ||
				loadout.optic == undefined ||
				loadout.barrel == undefined ||
				loadout.extra == undefined ||
				loadout.ammo == undefined) {
				throw new TypeError("Check Math.random assignments.");
			} else {
				return loadout;
			}
		}
	} while (!available);
}

function randomLoadout() {
	document.getElementById("info-msg").textContent = " ";

	let userRank = document.getElementById("rankInput").value;

	if (userRank <= -1 || isNaN(userRank)) {
		document.getElementById("rankInput").value = 0;
		userRank = 0;
		document.getElementById("info-msg").textContent = "Rank cannot be negative. Value was set to 0.";
		// alert("Input must be a number and cannot be negative\nValue was set to 0.")
	}

	let generatedPri = primaryGen(userRank);
	let generatedSec = secondaryGen(userRank);
	let generatedMel = meleeGen();

	document.getElementById("priGun").textContent = generatedPri.gun;
	document.getElementById("priAtts").textContent= generatedPri.allAttachments;

	document.getElementById("secGun").textContent = generatedSec.gun;
	document.getElementById("secAtts").textContent= generatedSec.allAttachments;

	document.getElementById("mel").textContent = generatedMel;
}
