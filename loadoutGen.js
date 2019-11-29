function randomMeleeGen() {
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

	// This var's only purpose is to include the Crowbar as a default weapon.
	const meleeDefault = [
		"Knife",
		"Crowbar",
		"You choose!", // Let's give the user some freedom if they get lucky...
	];

	var meleeAct = melee[Math.floor(Math.random() * melee.length)];

	if (meleeAct === "Cleaver") {
		if (document.getElementById("cleaver").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Ice Pick") {
		if (document.getElementById("ice").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Jade Key") {
		if (document.getElementById("jKey").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Karambit") {
		if (document.getElementById("karambit").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Machete") {
		if (document.getElementById("machete").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Mek'Leth") {
		if (document.getElementById("mekleth").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Tomahawk") {
		if (document.getElementById("tomahawk").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Tactical Spatula") {
		if (document.getElementById("spatula").checked == true)
			meleeFinal = meleeAct;
		else meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Chosen One") {
		if (document.getElementById("chosen").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Hattori") {
		if (document.getElementById("hattori").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Nordic War Axe") {
		if (document.getElementById("nordic").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Longsword") {
		if (document.getElementById("long").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Brass Knuckle") {
		if (document.getElementById("brass").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Frying Pan") {
		if (document.getElementById("pan").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "ASP Baton") {
		if (document.getElementById("baton").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Stick Grenade") {
		if (document.getElementById("stick").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Trench Mace") {
		if (document.getElementById("trench").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Nightstick") {
		if (document.getElementById("night").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Baseball Bat") {
		if (document.getElementById("baseball").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Sledge Hammer") {
		if (document.getElementById("sledge").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Crane") {
		if (document.getElementById("crane").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Jason") {
		if (document.getElementById("jason").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Reaper") {
		if (document.getElementById("reaper").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Cricket Bat") {
		if (document.getElementById("cricket").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else if (meleeAct === "Hunting Knife") {
		if (document.getElementById("hunting").checked == true)
			meleeFinal = meleeAct;
		else
			meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	} else {
		meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	}

	document.getElementById("num3").textContent = meleeFinal;

	console.log("Melee: " + meleeFinal);

	return meleeFinal;
}

function randomPrimaryGen() {
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
		"112AA-12",
		"113Jury",
		"120SPAS-12",
		"121Tommy Gun",
		"123M231",
		"125KAC SRR",
		"150Hecate II",
		"170M107",
		"195Steyr Scout",
		"200WA2000",
		"211G11K2",
		// "xxxUzi",
		"000You choose!", // Give the user a break with this one.
	];

	// ATTACHMENTS
	var primarySight = [
		"You choose!",
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
		//"Animu Sight", // Please mother fucking kill me.
	];

	var primaryBarrel = [
		"You choose!",
		"Supressor",
		"R2 Suppressor",
		"ARS Supressor",
		"PBS-4 Suppressor",
		"PBS-1 Suppressor",
		"Flash Hider",
		"Muzzle Brake",
		"Compensator",
		"Default",
	];

	var primaryUnder = [
		"You choose!",
		"Vertical Grip",
		"Angled Grip",
		"Folding Grip",
		"Stubby Grip",
		"Flashlight",
		"Laser",
		"Default",
	];

	var primaryExtra = [
		"You choose!",
		"Green Laser",
		"Laser",
		"Ballistics Tracker",
		"Canted Iron Sights",
		"Canted Delta Sight",
		"Flashlight",
		"Default",
	];


	const userRank = document.getElementById("userRankInput").value;
	var weaponIsAvailable = false;

	while (weaponIsAvailable == false) {
		let primaryAct = primary[Math.floor(Math.random() * primary.length)];
		let primaryNoRank = primaryAct.slice(3);
		let primaryRank = primaryAct.slice(0, 3);
		var finalPrimaryRank = parseInt(primaryRank, 10);

		if (userRank >= finalPrimaryRank) {
			weaponIsAvailable = true;

			var primarySightAct;

			// TODO: Think about condensing all the switch statements into just one?
			switch (primaryNoRank) {
				case "Dragunov SVDS":
					primarySight = primarySight.concat("PSO-1M2 Scope");
					break;

				case "SCAR-L":
				case "SCAR-H":
				case "SCAR PDW":
				case "AWS":
				case "SCAR-HAMR":
				case "AWM":
				case "TRG-42":
					primarySight = primarySight.concat("PM-II");
					break;

				case "SPAS-12":
					primarySight = primarySight.concat("Extended Stock");
					break;

				case "SKS":
				case "AS VAL":
				case "Dragunov SVU":
				case "VSS Vintorez":
				case "SR-3M":
					primarySight = primarySight.concat("PSO-1 Scope");
					break;

				case "Mosin Nagant":
					primarySight = primarySight.concat("PSO-1 Scope", "PU-1 Scope");
					break;

				case "1858 Carbine":
					primarySight = primarySight.concat("Half Ring Sight", "Full Ring Sight");
					break;

				case "Steyr Scout":
					primarySight = primarySight.concat("Leupold M8 6x");
					break;

				case "Tommy Gun":
					primarySight = primarySight.concat("Lyman Sight");
					break;

				case "G36":
				case "MG36":
				case "G36C":
				case "G36K":
				case "SL-8":
					primarySight = primarySight.concat("Hensoldt 3x Sight");
					break;
			}
			
			primarySightAct = primarySight[Math.floor(Math.random() * primarySight.length)];

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
					primaryBarrel = primaryBarrel.concat("Osprey Suppressor");
					break;

				case "MAC10":
					primaryBarrel = primaryBarrel.concat("Osprey Suppressor", "Sionics Suppressor");
					break;

				case "PPSH-41":
				case "1858 Carbine":
				case "Stevens DB":
				case "Jury":
					primaryBarrel = [ "Compensator", "Muzzle Brake", "Flash Hider", "Default", "You choose!" ];
					break;
			}

			if (primaryNoRank === "AS VAL" || primaryNoRank === "AWS" || primaryNoRank === "VSS Vintorez" || primaryNoRank === "MP5SD" || primaryNoRank === "Honey Badger" || primaryNoRank === "Groza-4" || primaryNoRank === "MC51SD" || primaryNoRank === "KAC SRR") {
				primaryBarrelAct = "N/A";
			} else {
				primaryBarrelAct = primaryBarrel[Math.floor(Math.random() * primaryBarrel.length)];
			}
			
			switch (primaryNoRank) {
				case "L22":
				case "P90":
					primaryUnder = primaryUnder.concat("Green Laser");
					break;

				case "Groza-1":
					primaryUnder = ["Laser", "Green Laser", "Flashlight", "Default", "You choose!",];
					break;
			}
			
			primaryUnderAct = primaryUnder[Math.floor(Math.random() * primaryUnder.length)];

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
					primaryExtra = primaryExtra.concat("Flechette", "Birdshot", "Slugs");
					switch (primaryNoRank) {
						case "AA-12":
							primaryExtra = primaryExtra.concat("20rd Drum");
							break;
					}
					break;

				case "AS VAL":
				case "SR-3M":
					primaryExtra = primaryExtra.concat("Extended Magazine", "Armor Piercing", "Hollow Point");
					break;

				case "Tommy Gun":
					primaryExtra = primaryExtra.concat("30rd Mag", "50rd Drum", "Armor Piercing", "Hollow Point");
					break;

				default:
					primaryExtra = primaryExtra.concat("Hollow Point", "Armor Piercing");
			}

			primaryExtraAct = primaryExtra[Math.floor(Math.random() * primaryExtra.length)];


			var primaryFinalAttachments = "[ " + primarySightAct + ", " + primaryBarrelAct + ", " + primaryUnderAct + ", " + primaryExtraAct + " ]";

			document.getElementById("num1").textContent = primaryNoRank;
			document.getElementById("num1a").textContent = primaryFinalAttachments;

			console.log("Primary: " + primaryNoRank);

			if (primaryNoRank == undefined || primarySightAct == undefined || primaryBarrelAct == undefined || primaryExtraAct == undefined) {
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
	}
}

function randomSecondaryGen() {
	var secondary = [
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
		"075SFG-50",
		"083Redhawk 44",
		"090Sawed Off",
		"095Saiga-12U",
		"106MP1911",
		"113Judge",
		"117Obrez",
		"137Executioner",
		//"xxxMicro Uzi",
		"000You choose!",
	];

	var secondarySight = [
		"You choose!",
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

	var secondaryBarrel = [
		"You choose!",
		"Supressor",
		"R2 Suppressor",
		"ARS Supressor",
		"PBS-4 Suppressor",
		"Flash Hider",
		"Muzzle Brake",
		"Compensator",
		"Default",
	];

	var secondaryExtra = [
		"You choose!",
		"Laser",
		"Green Laser",
		"Flashlight",
		"Default",
		"Ballistics Tracker",
	];

	const userRank = document.getElementById("userRankInput").value;
	var weaponIsAvailable = false;

	while (weaponIsAvailable == false) {
		let secondaryAct = secondary[Math.floor(Math.random() * secondary.length)];

		var secondaryNoRank = secondaryAct.slice(3, 999);

		let secondaryRank = secondaryAct.slice(0, 3);
		let finalSecondaryRank = parseInt(secondaryRank, 10);

		if (userRank >= finalSecondaryRank) {
			weaponIsAvailable = true;

			switch (secondaryNoRank) {
				// Remove the Half and Full ring sights.
				case "Serbu Shotgun":
				case "SFG 50":
				case "Sawed Off":
				case "Saiga-12U":
				case "Obrez":
					secondarySight.length = 25;
					switch (secondaryNoRank) {
						case "Obrez":
							secondarySight = secondarySight.concat("PU-1 Scope", "PSO-1 Scope");
							break;
					}
					break;

				case "Desert Eagle L5":
					secondarySight = secondarySight.concat("Leupold M8-2x");
					break;
			}

			secondarySightAct = secondarySight[Math.floor(Math.random() * secondarySight.length)];

			switch (secondaryNoRank) {
				case "MP412 REX":
				case "Desert Eagle L5":
				case "Mateba 6":
				case "1858 New Army":
				case "Redhawk 44":
				case "Sawed Off":
				case "Judge":
				case "Executioner":
					secondaryBarrel = [ "Flash Hider", "Compensator", "Muzzle Brake", "Default", "You choose!" ];
					switch (secondaryNoRank) {
						case "Desert Eagle L5":
							secondaryBarrel = secondaryBarrel.concat("Extended Barrel");
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
					secondaryBarrel = secondaryBarrel.concat("Osprey Suppressor");
					break;
			}

			secondaryBarrelAct = secondaryBarrel[Math.floor(Math.random() * secondaryBarrel.length)];

			switch (secondaryNoRank) {
				case "Serbu Shotgun":
				case "Saiga-12U":
				case "Sawed Off":
				case "SFG-50":
				case "Obrez":
					secondaryExtra = secondaryExtra.concat("Canted Iron Sights", "Canted Delta Sight");
					switch (secondaryNoRank) {
						case "Serbu Shotgun":
						case "Saiga-12U":
						case "Sawed Off":
							secondaryExtra = secondaryExtra.concat("Flechette", "Birdshot", "Slugs");
							switch (secondaryNoRank) {
								case "Sawed Off":
									secondaryExtra = secondaryExtra.concat("Boom Stock");
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
							secondaryExtra.length = 5;
							break;
					}
					secondaryExtra = secondaryExtra.concat("Hollow Point", "Armor Piercing");
					switch (secondaryNoRank) {
						case "Zip 22":
							secondaryExtra = secondaryExtra.concat("Pro Mag");
							break;

						case "M93R":
							secondaryExtra = secondaryExtra.concat("Raffica Stock");
							break;

						case "Glock 17":
						case "Glock 18":
							secondaryExtra = secondaryExtra.concat("Glock Stock", "33rd Magazine");
							break;
					}
			}

			secondaryExtraAct = secondaryExtra[Math.floor(Math.random() * secondaryExtra.length)];

			let secondaryFinal = secondaryNoRank;
			var secondaryFinalAttachments = "[ " + secondarySightAct + ", " + secondaryBarrelAct + ", " + secondaryExtraAct + " ]";

			document.getElementById("num2").textContent = secondaryFinal;
			document.getElementById("num2a").textContent = secondaryFinalAttachments;
			console.log("Secondary: " + secondaryFinal);
			if (secondaryFinal == undefined || secondarySightAct == undefined || secondaryBarrelAct == undefined || secondaryExtraAct == undefined) {
				document.getElementById("num4").textContent = "Something went wrong.\nCheck console, noob.";
				throw new TypeError("Check Math.random assignments.");
			}
		} else if (userRank < 0) {
			document.getElementById("num2").textContent = "RANK ERROR";
			document.getElementById("num2a").textContent = "DO NOT PUT NEGATIVE NUMBERS IN RANK";
			break;
		} else {
			continue;
		}
	}
}

/*function randomGrenadeGen() {
	// This function will be enabled when other grenades eventually get added.
	// For now, this will be commented...
	const grenade = [
		"xxxFrag",
		"xxxV40 Mini",
		"xxxRGD-5",
		"xxxM14 Smoke",
	];

	const userRank = document.getElementById("userRankInput").value;
	var weaponIsAvailable = false;

	while (weaponIsAvailable == false) {
		let grenadeAct = grenade[Math.floor(Math.random() * grenade.length)];

		var grenadeNoRank = grenadeAct.slice(3, 999);

		let grenadeRank = grenadeAct.slice(0, 3);
		let finalGrenadeRank = parseInt(grenadeRank, 10);

		if (userRank >= finalGrenadeRank) {
			weaponIsAvailable = true;

			document.getElementById("num4").textContent = grenadeFinal;
}
*/

function randomLoadout() {
	randomPrimaryGen();
	randomSecondaryGen();
	randomMeleeGen();
	//randomGrenadeGen();
}
