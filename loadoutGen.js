function randomMeleeGen() {
	let melee = [
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
	let meleeDefault = [
		"Knife",
		"Crowbar",
	];

	let meleeAct = melee[Math.floor(Math.random() * melee.length)];

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
	} else {
		meleeFinal = meleeDefault[Math.floor(Math.random() * meleeDefault.length)];
	}
	document.getElementById("num3").textContent = meleeFinal;

	console.log(meleeFinal);
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
		"121Tommy Gun",
		"123M231",
		"125KAC SRR",
		"150Hecate II",
		"170M107",
		"195Steyr Scout",
		//"XXXJury",
	];

	// ATTACHMENTS
	let primarySight = [
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

	let primaryBarrel = [
		"Supressor",
		"R2 Suppressor",
		"ARS Supressor",
		"PBS-4 Suppressor",
		"Flash Hider",
		"Muzzle Brake",
		"Compensator",
		"Default",
	];

	let primaryUnder = [
		"Vertical Grip",
		"Angled Grip",
		"Folding Grip",
		"Stubby Grip",
		"Flashlight",
		"Laser",
		"Default",
	];

	let primaryExtra = [
		"Green Laser",
		"Laser",
		"Ballistics Tracker",
		"Canted Iron Sights",
		"Canted Delta Sights",
		"Flashlight",
		//"Hollow Point",
		//"Armor Piercing",
		"Default"
	];


	const userRank = document.getElementById("userRankInput").value;
	let weaponIsAvailable = false;

	while (weaponIsAvailable == false) {
		let primaryAct = primary[Math.floor(Math.random() * primary.length)];
		let primaryNoRank = primaryAct.slice(3, 999);
		let primaryRank = primaryAct.slice(0, 3);
		const finalPrimaryRank = parseInt(primaryRank, 10);

		if (userRank >= finalPrimaryRank) {
			weaponIsAvailable = true;

			if (primaryAct === "105Dragunov SVDS") {
				const svds = primarySight.concat("PSO-1M2 Scope");
				primarySightAct = svds[Math.floor(Math.random() * svds.length)];
			} else if (primaryAct === "016SCAR-L" || primaryAct === "030SCAR-H" || primaryAct === "032SCAR PDW" || primaryAct === "041AWS" || primaryAct === "072SCAR HAMR" || primaryAct === "082L115A3" || primaryAct === "084TRG-42") {
				const pmii = primarySight.concat("PM-II");
				primarySightAct = pmii[Math.floor(Math.random() * pmii.length)];
			} else if (primaryAct === "120SPAS-12") {
				const spas = primarySight.concat("Extended Stock");
				primarySightAct = spas[Math.floor(Math.random() * spas.length)];
			} else if (primaryAct === "013SKS" || primaryAct === "015AS VAL" || primaryAct === "038Dragunov SVU" || primaryAct === "046VSS Vintorez" || primaryAct === "069SR-3M" || primaryAct === "091Mosin Nagant") {
				const pso = primarySight.concat("PSO-1 Scope");
				if (primaryAct === "091Mosin Nagant") {
					const mosin = pso.concat("PU-1 Scope");
					primarySightAct = mosin[Math.floor(Math.random() * mosin.length)];
				} else {
					primarySightAct = pso[Math.floor(Math.random() * pso.length)];
				}
			} else if (primaryAct === "0931858 Carbine") {
				const halfFull = primarySight.concat("Half Ring Sight", "Full Ring Sight");
				primarySightAct = halfFull[Math.floor(Math.random() * halfFull.length)];
			} else if (primaryAct === "195Steyr Scout") {
				const steyr = primarySight.concat("Leupold M8 6x");
				primarySightAct = steyr[Math.floor(Math.random() * steyr.length)];
			} else if (primaryAct === "121Tommy Gun") {
				const lyman = primarySight.concat("Lyman Sight");
				primarySightAct = lyman[Math.floor(Math.random * lyman.length)];
			} else {
				primarySightAct = primarySight[Math.floor(Math.random() * primarySight.length)];
			}

			if (primaryAct === "015AS VAL" || primaryAct === "041AWS" || primaryAct === "046VSS Vintorez" || primaryAct === "060MP5SD" || primaryAct === "062Honey Badger" || primaryAct === "079Groza-4" || primaryAct === "086MC51SD" || primaryAct === "125KAC SRR") {
				primaryBarrelAct = "N/A";
			} else if (primaryAct === "000MP5K" || primaryAct === "006UMP45" || primaryAct === "009MP7" || primaryAct === "023MAC10" || primaryAct === "024P90" || primaryAct === "040MP5" || primaryAct === "049Colt SMG 635" || primaryAct === "053L2A3" || primaryAct === "066MP10" || primaryAct === "071M3A1" || primaryAct === "074MP5/10" || primaryAct === "080AUG A3 Para" || primaryAct === "100Kriss Vector" || primaryAct === "107MP-40" || primaryAct === "121Tommy Gun") {
				const osprey = primaryBarrel.concat("Osprey Suppressor");
				if (primaryAct === "023MAC10") {
					const sionics = osprey.concat("Sionics Suppressor");
					primaryBarrelAct = sionics[Math.floor(Math.random() * sionics.length)];
				} else {
					primaryBarrelAct = osprey[Math.floor(Math.random() * osprey.length)];
				}
			} else if (primaryAct === "092PPSH-41" || primaryAct === "0931858 Carbine" || primaryAct === "081Stevens DB") {
				const primaryNoSuppressor = [
					"Compensator",
					"Muzzle Brake",
					"Flash Hider",
					"Default"
				];
				primaryBarrelAct = primaryNoSuppressor[Math.floor(Math.random() * primaryNoSuppressor.length)];
			} else {
				primaryBarrelAct = primaryBarrel[Math.floor(Math.random() * primaryBarrel.length)];
			}

			if (primaryAct === "028L22" || primaryAct === "042Groza-1" || primaryAct === "024P90") {
				if (primaryAct === "028L22" || primaryAct === "024P90") {
					let greenUnder = primaryUnder.concat("Green Laser");
					primaryUnderAct = greenUnder[Math.floor(Math.random() * greenUnder.length)];
				} else if (primaryAct === "042Groza-1") {
					let greenUnder = [
						"Laser",
						"Green Laser",
						"Flashlight",
						"Default"
					];
					primaryUnderAct = greenUnder[Math.floor(Math.random() * greenUnder.length)];
				}
			} else {
				primaryUnderAct = primaryUnder[Math.floor(Math.random() * primaryUnder.length)];
			}

			if (primaryAct === "001KSG-12" || primaryAct === "011Remington 870" || primaryAct === "024DBV12" || primaryAct === "056KS-23M" || primaryAct === "063Saiga-12" || primaryAct === "081Stevens DB" || primaryAct === "112AA12" || primaryAct === "120SPAS-12") {
				const shotgunExtra = primaryExtra.concat("Flechette", "Birdshot", "Slugs");
				if (primaryAct === "112AA12") {
					const aa12 = shotgunExtra.concat("20rd Drum");
					primaryExtraAct = aa12[Math.floor(Math.random() * aa12.length)];
				} else {
					primaryExtraAct = shotgunExtra[Math.floor(Math.random() * shotgunExtra.length)];
				}
			} else if (primaryAct === "015AS VAL" || primaryAct === "069SR-3M") {
				const extMag = primaryExtra.concat("Extended Magazine");
				primaryExtraAct = extMag[Math.floor(Math.random() * extMag.length)];
			} else if (primaryAct === "121Tommy Gun") {
				const tommy = primaryExtra.concat("30rd Mag", "50rd Drum");
				primaryExtraAct = tommy[Math.floor(Math.random() * tommy.length)];
			} else {
				primaryExtraAct = primaryExtra[Math.floor(Math.random() * primaryExtra.length)];
			}

			const primaryFinal = primaryNoRank;
			const primaryFinalAttachments = "[ " + primarySightAct + ", " + primaryBarrelAct + ", " + primaryUnderAct + ", " + primaryExtraAct + " ]";

			document.getElementById("num1").textContent = primaryNoRank;
			document.getElementById("num1a").textContent = primaryFinalAttachments;
			if (primaryNoRank === "BFG 50" && primaryExtraAct === "Ballistics Tracker") {
				document.getElementById("num4").textContent = "I feel so bad that you have to use this...";
			} else if (primaryNoRank === "MP10" && primaryExtraAct === "Flashlight" && primaryUnderAct === "Flashlight") {
				document.getElementById("num4").textContent = "MP10 already has one, so why not two more!";
			} else if (primaryNoRank === "AK47" || primaryNoRank === "Mosin Nagant") {
				document.getElementById("num4").textContent = "сука блять Win this for the motherland!";
			} else {
				document.getElementById("num4").textContent = "Good luck!";
			}
			console.log("Primary: " + primaryFinal);
			if (primaryFinal == undefined || primarySightAct == undefined || primaryBarrelAct == undefined || primaryExtraAct == undefined) {
				document.getElementById("num4").textContent = "Something went wrong.\nCheck console, noob.";
				throw new TypeError("Check Math.random assignments.");
			}
		} else if (userRank < 0) {
			document.getElementById("num1").textContent = "RANK ERROR";
			document.getElementById("num1a").textContent = "RANK CANNOT BE A NEGATIVE NUMBER";
			throw new TypeError("Loadout could not be generated due to negative rank.");
		} else {
			continue;
		}
	}
}

function randomSecondaryGen() {
	const secondary = [
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

	let secondarySight = [
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

	let secondaryBarrel = [
		"Supressor",
		"R2 Suppressor",
		"ARS Supressor",
		"PBS-4 Suppressor",
		"Flash Hider",
		"Muzzle Brake",
		"Compensator",
		"Default",
	];

	let secondaryExtra = [
		"Laser",
		"Green Laser",
		"Flashlight",
		// "Hollow Point",
		// "Armor Piercing",
		"Ballistics Tracker",
		"Default",
	];

	const userRank = document.getElementById("userRankInput").value;
	let weaponIsAvailable = false;

	while (weaponIsAvailable == false) {
		let secondaryAct = secondary[Math.floor(Math.random() * secondary.length)];

		const secondaryNoRank = secondaryAct.slice(3, 999);
		let secondaryRank = secondaryAct.slice(0, 3);
		let finalSecondaryRank = parseInt(secondaryRank, 10);

		if (userRank >= finalSecondaryRank) {
			weaponIsAvailable = true;

			if (secondaryNoRank === "Obrez") {
				let obrez = otherSecSight.concat("PU-1 Scope");
				secondarySightAct = obrez[Math.floor(Math.random() * obrez.length)];
			} else {
				secondarySightAct = secondarySight[Math.floor(Math.random() * secondarySight.length)];
			}
			secondarySightAct = secondarySight[Math.floor(Math.random() * secondarySight.length)];

			if (secondaryNoRank === "MP412 REX" || secondaryNoRank === "Deagle 44" || secondaryNoRank === "Mateba 6" || secondaryNoRank === "1858 New Army" || secondaryNoRank === "Redhawk 44" || secondaryNoRank === "Sawed Off") {
				let secNoSuppress = [
					"Flash Hider",
					"Compensator",
					"Muzzle Brake",
					"Default"
				];
				secondaryBarrelAct = secNoSuppress[Math.floor(Math.random() * secNoSuppress.length)];
			} else {
				secondaryBarrelAct = secondaryBarrel[Math.floor(Math.random() * secondaryBarrel.length)];
			}

			if (secondaryNoRank === "Glock 17" || secondaryNoRank === "Glock 18") {
				const glock = secondaryExtra.concat("Glock Stock", "33rd Magazine");
				secondaryExtraAct = glock[Math.floor(Math.random() * glock.length)];
			} else if (secondaryNoRank === "Serbu Shotgun" || secondaryNoRank === "Sawed Off" || secondaryNoRank === "Saiga-12U") {
				let secShotExtra = secondaryExtra.concat("Flechette", "Birdshot", "Slugs");
				if (secondaryNoRank === "Sawed Off") {
					const boomStock = secShotExtra.concat("Boom Stock");
					secondaryExtraAct = boomStock[Math.floor(Math.random() * boomStock.length)];
				} else {
					secondaryExtraAct = secShotExtra[Math.floor(Math.random() * secShotExtra.length)];
				}
			} else if (secondaryNoRank === "Zip 22") {
				const zip = secondaryExtra.concat("Pro Mag");
				secondaryExtraAct = zip[Math.floor(Math.random() * zip.length)];
			} else {
				secondaryExtraAct = secondaryExtra[Math.floor(Math.random() * secondaryExtra.length)];
			}

			let secondaryFinal = secondaryNoRank;
			const secondaryFinalAttachments = "[ " + secondarySightAct + ", " + secondaryBarrelAct + ", " + secondaryExtraAct + " ]";

			document.getElementById("num2").textContent = secondaryFinal;
			document.getElementById("num2a").textContent = secondaryFinalAttachments;
			console.log(secondaryFinal);
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
function randomLoadout() {
	randomPrimaryGen();
	randomSecondaryGen();
	randomMeleeGen();
}
