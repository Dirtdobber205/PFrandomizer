function randomMeleeGen() {
	var meleeWeapons = [
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
	];

	// This var's only purpose is to include the Crowbar as a default weapon. I suck at JS ok?
	var meleeDefault = [
		"Knife",
		"Crowbar",
	];

	var meleeActual = meleeWeapons[Math.floor(Math.random() * meleeWeapons.length)];

	//	Too many else if statements AAAAAAAAAAAAAAAAAA
	//	if (meleeActual !== "Knife" || meleeActual !== "Crowbar") {
	//		meleeActualFinal = meleeActual;
	//	} else {
	//		meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	//	};

	if (meleeActual === "Cleaver") {
		if (document.getElementById("cleaver").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeActual === "Ice Pick") {
		if (document.getElementById("icePick").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeActual === "Jade Key") {
		if (document.getElementById("jKey").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeActual === "Karambit") {
		if (document.getElementById("karambit").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeActual === "Machete") {
		if (document.getElementById("machete").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeActual === "Mek'Leth") {
		if (document.getElementById("mekleth").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeActual === "Tomahawk") {
		if (document.getElementById("tomahawk").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeActual === "Tactical Spatula") {
		if (document.getElementById("tacticalSpatula").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeActual === "Chosen One") {
		if (document.getElementById("chosenOne").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeActual === "Hattori") {
		if (document.getElementById("hattori").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeActual === "Nordic War Axe") {
		if (document.getElementById("nordicWarAxe").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeActual === "Longsword") {
		if (document.getElementById("longsword").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeActual === "Brass Knuckle") {
		if (document.getElementById("brassKnuckle").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeActual === "Frying Pan") {
		if (document.getElementById("fryingPan").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeActual === "ASP Baton") {
		if (document.getElementById("aspBaton").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeActual === "Stick Grenade") {
		if (document.getElementById("stickGrenade").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeActual === "Trench Mace") {
		if (document.getElementById("trenchMace").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeActual === "Nightstick") {
		if (document.getElementById("nightstick").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeActual === "Baseball Bat") {
		if (document.getElementById("baseballBat").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeActual === "Sledge Hammer") {
		if (document.getElementById("sledgeHammer").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else if (meleeActual === "Crane") {
		if (document.getElementById("crane").checked == true) {
			meleeActualFinal = meleeActual;
		} else {
			meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
		}
	} else {
		meleeActualFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	}
	document.getElementById("num3").textContent = meleeActualFinal;

	console.log(meleeActualFinal);
	return meleeActualFinal;
}

function randomPrimaryGen() {
	var primaryWeapons = [
		"000AK12",
		"000MP5K",
		"000Colt LMG",
		"000Intervention",
		"000M4A1",
		"001KSG-12",
		"003MK11",
		"006UMP45",
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
		"035AKU12",
		"037RPK12",
		"038Dragunov SVU",
		"039AUG A2",
		"040MP5",
		"041AWS",
		"042Groza-1",
		"043L86 LSW",
		"044AK12BR",
		"045FAMAS",
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
		"082L115A3",
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
		"107MP-40",
		"107FAL 50.00",
		"112AA12",
		"120SPAS-12",
		"123M231",
		"125KAC SRR",
		"150Hecate II",
		"170M107",
		"195Steyr Scout",
		//"XXXJury",
		//"XXXM1921",
	];

	// ATTACHMENTS
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
		//"Lyman Sight", // For M1921[TESTplace]
	];

	var primaryAttachmentsBarrel = [
		"Supressor",
		"R2 Suppressor",
		"ARS Supressor",
		"PBS-4 Suppressor",
		"Flash Hider",
		"Muzzle Brake",
		"Compensator",
		"Default",
	];

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
		"Ballistics Tracker", // KSG-12 might still not have BT? Should check to confirm.
		"Canted Iron Sights",
		"Canted Delta Sights",
		"Flashlight",
		//"Hollow Point",
		//"Armor Piercing",
		"Default"
	];


	var userRank = document.getElementById("userRankInput").value;
	var weaponIsAvailable = false;

	while (weaponIsAvailable == false) {

		var primaryActual = primaryWeapons[Math.floor(Math.random() * primaryWeapons.length)];

		var primaryWeaponWithoutRank = primaryActual.slice(3, 999);

		var primaryWeaponRank = primaryActual.slice(0, 3);

		var finalPrimaryWeaponRank = parseInt(primaryWeaponRank, 10);

		if (userRank >= finalPrimaryWeaponRank) {
			weaponIsAvailable = true;

			// TODO: Add PSO-1 Scope to various.
			if (primaryActual === "105Dragunov SVDS") {
				var svds = primaryAttachmentsSight.concat("PSO-1M2 Scope");
				var primarySightActual = svds[Math.floor(Math.random() * svds.length)];
			} else if (primaryActual === "016SCAR-L" || primaryActual === "030SCAR-H" || primaryActual === "032SCAR PDW" || primaryActual === "041AWS" || primaryActual === "072SCAR HAMR" || primaryActual === "082L115A3" || primaryActual === "084TRG-42") {
				var pmii = primaryAttachmentsSight.concat("PM-II");
				var primarySightActual = pmii[Math.floor(Math.random() * pmii.length)];
			} else if (primaryActual === "120SPAS-12") {
				var spas = primaryAttachmentsSight.concat("Extended Stock");
				var primarySightActual = spas[Math.floor(Math.random() * spas.length)];
			} else if (primaryActual === "013SKS" || primaryActual === "015AS VAL" || primaryActual === "038Dragunov SVU" || primaryActual === "046VSS Vintorez" || primaryActual === "069SR-3M" || primaryActual === "091Mosin Nagant") {
				var pso = primaryAttachmentsSight.concat("PSO-1 Scope");
				if (primaryActual === "091Mosin Nagant") {
					var mosin = pso.concat("PU-1 Scope");
					var primarySightActual = mosin[Math.floor(Math.random() * mosin.length)];
				} else {
					var primarySightActual = pso[Math.floor(Math.random() * pso.length)];
				}
			} else if (primaryActual === "0931858 Carbine") {
				var halfFull = primaryAttachmentsSight.concat("Half Ring Sight", "Full Ring Sight");
				var primarySightActual = halfFull[Math.floor(Math.random() * halfFull.length)];
			} else if (primaryActual === "195Steyr Scout") {
				var steyr = primaryAttachmentsSight.concat("Leupold M8 6x Scope");
				var primarySightActual = steyr[Math.floor(Math.random() * steyr.length)];
			} else {
				var primarySightActual = primaryAttachmentsSight[Math.floor(Math.random() * primaryAttachmentsSight.length)];
			}

			// TODO: Restrict weapons where they only have the Flash Hider, Compensator, or Muzzle Brake.

			if (primaryActual === "015AS VAL" || primaryActual === "041AWS" || primaryActual === "046VSS Vintorez" || primaryActual === "060MP5SD" || primaryActual === "062Honey Badger" || primaryActual === "079Groza-4" || primaryActual === "086MC51SD" || primaryActual === "125KAC SRR") {
				var primaryBarrelActual = "N/A";
			} else if (primaryActual === "000MP5K" || primaryActual === "006UMP45" || primaryActual === "009MP7" || primaryActual === "023MAC10" || primaryActual === "024P90" || primaryActual === "040MP5" || primaryActual === "049Colt SMG 635" || primaryActual === "053L2A3" || primaryActual === "066MP10" || primaryActual === "071M3A1" || primaryActual === "074MP5/10" || primaryActual === "080AUG A3 Para" || primaryActual === "100Kriss Vector" || primaryActual === "107MP-40") {
				var osprey = primaryAttachmentsBarrel.concat("Osprey Suppressor");
				if (primaryActual === "023MAC10") {
					var sionics = osprey.concat("Sionics Suppressor");
					var primaryBarrelActual = sionics[Math.floor(Math.random() * sionics.length)];
				} else {
					var primaryBarrelActual = osprey[Math.floor(Math.random() * osprey.length)];
				}
			} else if (primaryActual === "092PPSH-41" || primaryActual === "0931858 Carbine" || primaryActual === "081Stevens DB") {
				var primaryNoSuppressor = ["Compensator", "Muzzle Brake", "Flash Hider", "Default"];
				var primaryBarrelActual = primaryNoSuppressor[Math.floor(Math.random() * primaryNoSuppressor.length)];
			} else {
				var primaryBarrelActual = primaryAttachmentsBarrel[Math.floor(Math.random() * primaryAttachmentsBarrel.length)];
			}

			var primaryUnderBarrelActual = primaryAttachmentsUnderBarrel[Math.floor(Math.random() * primaryAttachmentsUnderBarrel.length)];

			if (primaryActual === "001KSG-12" || primaryActual === "011Remington 870" || primaryActual === "024DBV12" || primaryActual === "056KS-23M" || primaryActual === "063Saiga-12" || primaryActual === "081Stevens DB" || primaryActual === "112AA12" || primaryActual === "120SPAS-12") {
				var shotgunExtra = primaryAttachmentsExtra.concat("Flechette", "Birdshot", "Slugs");
				if (primaryActual === "112AA12") {
					var aa12 = shotgunExtra.concat("20rd Drum");
					var primaryExtraActual = aa12[Math.floor(Math.random() * aa12.length)];
				} else {
					var primaryExtraActual = shotgunExtra[Math.floor(Math.random() * shotgunExtra.length)];
				}
			} else if (primaryActual === "015AS VAL" || primaryActual === "069SR-3M") {
				var extMag = primaryAttachmentsExtra.concat("Extended Magazine");
				var primaryExtraActual = extMag[Math.floor(Math.random() * extMag.length)];
			} else {
				var primaryExtraActual = primaryAttachmentsExtra[Math.floor(Math.random() * primaryAttachmentsExtra.length)];
			}

			var primaryFinal = primaryWeaponWithoutRank;

			var primaryFinalAttachments = "[ " + primarySightActual + ", " + primaryBarrelActual + ", " + primaryUnderBarrelActual + ", " + primaryExtraActual + " ]";

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
	}
}

function randomSecondaryGen() {
	var secondaryWeapons = [
		"000M9",
		"000Glock 17",
		"004MP412 REX",
		"008M1911",
		"017Glock 18",
		"018Deagle 44",
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
		"117Obrez",
		//"XXXJudge",
		//"XXXExecutioner",
	];

	var secondaryAttachmentsSight = [
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

	var secondaryAttachmentsBarrel = [
		"Supressor",
		"R2 Suppressor",
		"ARS Supressor",
		"PBS-4 Suppressor",
		"Flash Hider",
		"Muzzle Brake",
		"Compensator",
		"Default",
	];

	var secondaryAttachmentsExtra = [
		"Laser",
		"Green Laser",
		"Flashlight",
		// "Hollow Point",
		// "Armor Piercing",
		"Ballistics Tracker",
		"Default",
	];

	var secondaryActual = "lmao";
	var userRank = document.getElementById("userRankInput").value;
	var weaponIsAvailable = false;

	while (weaponIsAvailable == false) {
		secondaryActual = secondaryWeapons[Math.floor(Math.random() * secondaryWeapons.length)];

		var secondaryWeaponWithoutRank = secondaryActual.slice(3, 999);
		var secondaryWeaponRank = secondaryActual.slice(0, 3);
		var finalSecondaryWeaponRank = parseInt(secondaryWeaponRank, 10);

		if (userRank >= finalSecondaryWeaponRank) {
			weaponIsAvailable = true;

			if (secondaryActual === "036Serbu Shotgun" || secondaryActual === "075SFG-50" || secondaryActual === "090Sawed Off" || secondaryActual === "117Obrez") {
				var otherSecSight = secondaryAttachmentsSight.splice(23, 2);
				if (secondaryActual === "117Obrez") {
					var obrez = otherSecSight.concat("PU-1 Scope");
					var secondarySightActual = obrez[Math.floor(Math.random() * obrez.length)];
				} else {
					var secondarySightActual = otherSecSight[Math.floor(Math.random() * otherSecSight.length)];
				}
			} else {
				var secondarySightActual = secondaryAttachmentsSight[Math.floor(Math.random() * secondaryAttachmentsSight.length)];
			}

			if (secondaryActual === "004MP412 REX" || secondaryActual === "018Deagle 44" || secondaryActual === "029Mateba 6" || secondaryActual === "0581858 New Army" || secondaryActual === "083Redhawk 44" || secondaryActual === "090Sawed Off") {
				var secNoSuppress = ["Flash Hider", "Compensator", "Muzzle Brake", "Default"];
				var secondaryBarrelActual = secNoSuppress[Math.floor(Math.random() * secNoSuppress.length)];
			} else {
				var secondaryBarrelActual = secondaryAttachmentsBarrel[Math.floor(Math.random() * secondaryAttachmentsBarrel.length)];
			}

			if (secondaryActual === "000Glock 17" || secondaryActual === "017Glock 18") {
				var glock = secondaryAttachmentsExtra.concat("Glock Stock", "33rd Magazine");
				var secondaryExtraActual = glock[Math.floor(Math.random() * glock.length)];
			} else if (secondaryActual === "036Serbu Shotgun" || secondaryActual === "090Sawed Off" || secondaryActual === "095Saiga-12U") {
				var secShotExtra = secondaryAttachmentsExtra.concat("Flechette", "Birdshot", "Slugs");
				if (secondaryActual === "090Sawed Off") {
					var boomStock = secShotExtra.concat("Boom Stock");
					var secondaryExtraActual = boomStock[Math.floor(Math.random() * boomStock.length)];
				} else {
					var secondaryExtraActual = secShotExtra[Math.floor(Math.random() * secShotExtra.length)];
				}
			} else {
				var secondaryExtraActual = secondaryAttachmentsExtra[Math.floor(Math.random() * secondaryAttachmentsExtra.length)];
			}

			var secondaryFinal = secondaryWeaponWithoutRank;
			var secondaryFinalAttachments = "[ " + secondarySightActual + ", " + secondaryBarrelActual + ", " + secondaryExtraActual + " ]";

			document.getElementById("num2").textContent = secondaryFinal;
			document.getElementById("num2a").textContent = secondaryFinalAttachments;
			console.log(secondaryFinal);
			break;
		} else if (userRank < 0) {
			document.getElementById("num2").textContent = "RANK ERROR";
			document.getElementById("num2a").textContent = "DO NOT PUT NEGATIVE NUMBERS IN RANK";
			break;
		} else {
			continue;
		}
	}
}
function randomLoadout() {
	randomPrimaryGen();
	randomSecondaryGen();
	randomMeleeGen();
}
