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

	let meleeAct = melee[Math.floor(Math.random() * melee.length)];

	var meleeFinal;

	if (meleeAct === "Cleaver") {
		if (document.getElementById("cleaver").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Ice Pick") {
		if (document.getElementById("ice").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Jade Key") {
		if (document.getElementById("jKey").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Karambit") {
		if (document.getElementById("karambit").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Machete") {
		if (document.getElementById("machete").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Mek'Leth") {
		if (document.getElementById("mekleth").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Tomahawk") {
		if (document.getElementById("tomahawk").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Tactical Spatula") {
		if (document.getElementById("spatula").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Chosen One") {
		if (document.getElementById("chosen").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Hattori") {
		if (document.getElementById("hattori").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Nordic War Axe") {
		if (document.getElementById("nordic").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Longsword") {
		if (document.getElementById("long").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Brass Knuckle") {
		if (document.getElementById("brass").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Frying Pan") {
		if (document.getElementById("pan").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "ASP Baton") {
		if (document.getElementById("baton").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Stick Grenade") {
		if (document.getElementById("stick").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Trench Mace") {
		if (document.getElementById("trench").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Nightstick") {
		if (document.getElementById("night").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Baseball Bat") {
		if (document.getElementById("baseball").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Sledge Hammer") {
		if (document.getElementById("sledge").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Crane") {
		if (document.getElementById("crane").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Jason") {
		if (document.getElementById("jason").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Reaper") {
		if (document.getElementById("reaper").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Cricket Bat") {
		if (document.getElementById("cricket").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeAct === "Hunting Knife") {
		if (document.getElementById("hunting").checked == true) {
			meleeFinal = meleeAct;
		} else {
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else {
		meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	}

	document.getElementById("num3").textContent = meleeFinal;

	console.log("Melee: " + meleeFinal);

	return meleeFinal;
}


function primaryGen() {
	/**
	 * Represents a primary weapon and all its attachments.
	 * 
	 * @constructor
	 * @param {string} gun - The explicit weapon to be used.
	 * @param {string} optic - A sight, scope, or iron sights.
	 * @param {string} barrel - A muzzle device or suppressor.
	 * @param {string} under - A grip or laser under the barrel.
	 * @param {string} extra - A laser, ammo type, or aiming aid.
	 */
	function Primary(gun, optic, barrel, under, extra) {
		this.gun   = gun;
		this.optic = optic;
		this.barrel= barrel;
		this.under = under;
		this.extra = extra;

		this.allAttachments = this.optic + ", " + this.barrel + ", " + this.under + ", " + this.extra;
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


	const userRank = document.getElementById("userRankInput").value;
	let available = false;

	do {
		let primaryAct = primary[Math.floor(Math.random() * primary.length)];
		let primaryNoRank = primaryAct.slice(3);
		let primaryRank = primaryAct.slice(0, 3);
		let finalPrimaryRank = parseInt(primaryRank, 10);

		if (userRank >= finalPrimaryRank) {
			available = true;

			// TODO: Think about condensing all the switch statements into just one?
			switch (primaryNoRank) {
				case "Dragunov SVDS":
					optic = optic.concat("PSO-1M2 Scope");
					break;

				case "SCAR-L":
				case "SCAR-H":
				case "SCAR PDW":
				case "AWS":
				case "SCAR-HAMR":
				case "AWM":
				case "TRG-42":
					optic = optic.concat("PM-II");
					break;

				case "SPAS-12":
					optic = optic.concat("Extended Stock");
					break;

				case "SKS":
				case "AS VAL":
				case "Dragunov SVU":
				case "VSS Vintorez":
				case "SR-3M":
					optic = optic.concat("PSO-1 Scope");
					break;

				case "Mosin Nagant":
					optic = optic.concat("PSO-1 Scope", "PU-1 Scope");
					break;

				case "1858 Carbine":
					optic = optic.concat("Half Ring Sight", "Full Ring Sight");
					break;

				case "Steyr Scout":
					optic = optic.concat("Leupold M8 6x");
					break;

				case "Tommy Gun":
					optic = optic.concat("Lyman Sight");
					break;

				case "G36":
				case "MG36":
				case "G36C":
				case "G36K":
				case "SL-8":
					optic = optic.concat("Hensoldt 3x Sight");
					break;
			}
			
			let opticAct = optic[Math.floor(Math.random() * optic.length)];

			switch (primaryNoRank) {
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
					barrel = barrel.concat("Osprey Suppressor");
					break;

				case "MAC10":
					barrel = barrel.concat("Osprey Suppressor", "Sionics Suppressor");
					break;

				case "TAR-21":
					barrel = barrel.concat("CTAR Barrel");
					break;

				case "PPSH-41":
				case "1858 Carbine":
				case "Stevens DB":
				case "Jury":
					barrel.length = 4;
					break;
			}

			let barrelAct = barrel[Math.floor(Math.random() * barrel.length)];

			if (primaryNoRank === "AS VAL" || primaryNoRank === "AWS" || primaryNoRank === "VSS Vintorez" || primaryNoRank === "MP5SD" || primaryNoRank === "Honey Badger" || primaryNoRank === "Groza-4" || primaryNoRank === "MC51SD" || primaryNoRank === "KAC SRR") {
				barrelAct = "N/A";
			} else if (primaryNoRank === "TAR-21" && barrelAct === "CTAR Barrel") {
				primaryNoRank = "CTAR-21";
			}
			
			switch (primaryNoRank) {
				case "L22":
				case "P90":
					under = under.concat("Green Laser");
					break;
				case "Groza-1":
					under.length = 3;
					under = under.concat("Green Laser");
					break;
			}
			
			let underAct = under[Math.floor(Math.random() * under.length)];

			switch (primaryNoRank) {
				/**
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
					switch (primaryNoRank) {
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
					extra = extra.concat("Flechette", "Birdshot", "Slugs");
					switch (primaryNoRank) {
						case "AA-12":
							extra = extra.concat("20rd Drum");
							break;
					}
					break;

				case "AS VAL":
				case "SR-3M":
					extra = extra.concat("Extended Magazine", "Armor Piercing", "Hollow Point");
					break;

				case "Tommy Gun":
					extra = extra.concat("30rd Mag", "50rd Drum", "Armor Piercing", "Hollow Point");
					break;
					
				case "Uzi":
					extra = extra.concat("Extended Stock", "Hollow Point", "Armor Piercing");
					break;

				default:
					extra = extra.concat("Hollow Point", "Armor Piercing");
			}

			let extraAct = extra[Math.floor(Math.random() * extra.length)];

			let loadout = new Primary(primaryNoRank, opticAct, barrelAct, underAct, extraAct);

			document.getElementById("num1").textContent = loadout.gun;
			document.getElementById("num1a").textContent= loadout.allAttachments;

			console.log("Primary: " + loadout.gun);
			console.log("Primary atts: " + loadout.allAttachments);

			if (loadout.gun == undefined || loadout.optic == undefined || loadout.barrel == undefined || loadout.under == undefined || loadout.extra == undefined) {
				document.getElementById("num4").textContent = "Something went wrong.\nCheck console, noob.";
				throw new TypeError("Check Math.random assignments.");
			}
		} else if (userRank < 0) {
			document.getElementById("num1").textContent = "RANK ERROR";
			document.getElementById("num1a").textContent= "RANK CANNOT BE A NEGATIVE NUMBER";
			throw new TypeError("Loadout could not be generated due to negative rank.");
		} else {
			continue;
		}
	} while (!available);
}

function secondaryGen() {
	/**
	 * Represents a secondary and its attachments
	 * 
	 * @constructor
	 * @param {string} gun 
	 * @param {string} optic 
	 * @param {string} barrel 
	 * @param {string} extra 
	 */
	function Secondary(gun, optic, barrel, extra) {
		this.gun   = gun;
		this.optic = optic;
		this.barrel= barrel;
		this.extra = extra;

		this.allAttachments = this.optic + ", " + this.barrel + ", " + this.extra;
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

	const userRank = document.getElementById("userRankInput").value;
	let available = false;

	do {
		let secondaryAct = secondary[Math.floor(Math.random() * secondary.length)];

		let secondaryNoRank = secondaryAct.slice(3);

		let secondaryRank = secondaryAct.slice(0, 3);
		let finalSecondaryRank = parseInt(secondaryRank, 10);

		if (userRank >= finalSecondaryRank) {
			available = true;

			switch (secondaryNoRank) {
				// Remove the Half and Full ring sights.
				case "Serbu Shotgun":
				case "SFG 50":
				case "Sawed Off":
				case "Saiga-12U":
				case "Obrez":
					optic.length = 24;

					switch (secondaryNoRank) {
						case "Obrez":
							optic = optic.concat("PU-1 Scope", "PSO-1 Scope");
							break;
					}
					break;

				case "Desert Eagle L5":
				case "Desert Eagle XIX":
					optic = optic.concat("Leupold M8-2x");
					break;
			}

			let opticAct = optic[Math.floor(Math.random() * optic.length)];

			switch (secondaryNoRank) {
				case "MP412 REX":
				case "Desert Eagle L5":
				case "Mateba 6":
				case "1858 New Army":
				case "Redhawk 44":
				case "Sawed Off":
				case "Judge":
				case "Executioner":
					barrel.length = 4;

					switch (secondaryNoRank) {
						case "Desert Eagle L5":
						case "Desert Eagle XIX":
							barrel = barrel.concat("Extended Barrel");
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
					barrel = barrel.concat("Osprey Suppressor");
					break;
			}

			let barrelAct = barrel[Math.floor(Math.random() * barrel.length)];

			switch (secondaryNoRank) {
				case "Serbu Shotgun":
				case "Saiga-12U":
				case "Sawed Off":
				case "SFG-50":
				case "Obrez":
					extra = extra.concat("Canted Iron Sights", "Canted Delta Sight");
					switch (secondaryNoRank) {
						case "Serbu Shotgun":
						case "Saiga-12U":
						case "Sawed Off":
							extra = extra.concat("Flechette", "Birdshot", "Slugs");
							switch (secondaryNoRank) {
								case "Sawed Off":
									extra = extra.concat("Boom Stock");
									break;
							}
							break;
					}
					break;

				case "Judge":
					break;

				default:
					switch (secondaryNoRank) {
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
							extra.length = 4;
							break;
					}
					extra = extra.concat("Hollow Point", "Armor Piercing");
					switch (secondaryNoRank) {
						case "Zip 22":
							extra = extra.concat("Pro Mag");
							break;

						case "M93R":
							extra = extra.concat("Raffica Stock");
							break;

						case "Glock 17":
						case "Glock 18":
							extra = extra.concat("Glock Stock", "33rd Magazine");
							break;

						case "Micro Uzi":
							extra = extra.concat("Extended Stock");
							break;
					}
			}

			let extraAct = extra[Math.floor(Math.random() * extra.length)];

			let loadout = new Secondary(secondaryNoRank, opticAct, barrelAct, extraAct);

			document.getElementById("num2").textContent = loadout.gun;
			document.getElementById("num2a").textContent= loadout.allAttachments;

			console.log("Secondary: " + loadout.gun);
			console.log("Secondary atts: " + loadout.allAttachments);

			if (loadout.gun == undefined || loadout.optic == undefined || loadout.barrel == undefined || loadout.extra == undefined) {
				document.getElementById("num4").textContent = "Something went wrong.\nCheck console, noob.";
				throw new TypeError("Check Math.random assignments.");
			}
		} else if (userRank < 0) {
			document.getElementById("num2").textContent = "RANK ERROR";
			document.getElementById("num2a").textContent= "DO NOT PUT NEGATIVE NUMBERS IN RANK";
			break;
		} else {
			continue;
		}
	} while (!available);
}

function randomLoadout() {
	primaryGen();
	secondaryGen();
	meleeGen();
}
