function PickWeather(id) {
  //Temperatur
  //veryHot: > 26
  //hot: 21-25
  //bitHot: 15-20
  //neutral: 10-14
  //cold: 0-9
  //veryCold: < 0

  const weather = {
    clearsky_day: {
      imgId: "01d",
      wine: {
        veryHot: "rose",
        hot: "rose",
        bitHot: "rose",
        neutral: "rose",
        cold: "rose",
        veryCold: "rose",
      },
      desc: {
        veryHot: "Damn, det er så hot.. Det bliver ikke bedre. Frem med liggestolen, på med solcremen og stay hydrated - i rosé selvfølgelig.",
        hot: "Sikke et sommervejr. Tag på stranden og få noget sol på mavsen.",
        bitHot: "Ikke dårligt. Hva med en picnic i det fri med nogle gode venner? pak kurven, husk rosé'en og kom afsted",
        neutral: "Smuk dag, lidt kølig. Hvad med noget rosé",
        cold: "Ikke en sky at se på himlen, og rosé'en skal nok holde sig kold",
        veryCold: "Vejret er smukt men pisse koldt. Tag din yndlingsfrakke på, gå en tur og forkæl dig selv med et godt glas.",
      },
    },

    clearsky_night: {
      imgId: "01n",
      wine: {
        veryHot: "rose",
        hot: "rose",
        bitHot: "rose",
        neutral: "rose",
        cold: "rose",
        veryCold: "rose",
      },
      desc: {
        veryHot: "Damn, det er så hot.. Det bliver ikke bedre. Tropenat, rosé selvfølgelig.",
        hot: "Sikke en sommernat. Natten er ung. Tag på rosé-bar!",
        bitHot: "Ikke dårligt. Måske en tur i byen? Pak rosé'en og kom afsted",
        neutral: "Det er skyfrit. Måske du kan se månen? Drik et ekstra glas hvis du kan.",
        cold: "Det er mørkt og koldt. Skål til månen i rosé!",
        veryCold: "Det er mørkt og koldt. Skål til månen i rosé!",
      },
    },

    fair_day: {
      imgId: "02d",
      wine: {
        veryHot: "rose",
        hot: "rose",
        bitHot: "rose",
        neutral: "rose",
        cold: "rose",
        veryCold: "rose",
      },
      desc: {
        veryHot: "Damn, det er så hot.. Det bliver ikke bedre. Frem med liggestolen, på med solcremen og stay hydrated - i rosé selvfølgelig.",
        hot: "Sikke et sommervejr. Tag på stranden og få noget sol på mavsen.",
        bitHot: "Ikke dårligt. Hva med en picnic i det fri med nogle gode venner? pak kurven, husk rosé'en og kom afsted",
        neutral: "Smuk dag, lidt kølig. Hvad med noget rosé",
        cold: "Ikke en sky at se på himlen, og rosé'en skal nok holde sig kold",
        veryCold: "Vejret er smukt men pisse koldt. Tag din yndlingsfrakke på, gå en tur og forkæl dig selv med et godt glas.",
      },
    },

    fair_night: {
      imgId: "02n",
      wine: {
        veryHot: "rose",
        hot: "rose",
        bitHot: "rose",
        neutral: "rose",
        cold: "rose",
        veryCold: "rose",
      },
      desc: {
        veryHot: "Wow en nat.. Det bliver ikke bedre. Tropenat, rosé selvfølgelig.",
        hot: "Sikke en sommernat. Natten er ung. Tag på rosé-bar!",
        bitHot: "Ikke dårligt. Måske en tur i byen? Pak rosé'en og kom afsted",
        neutral: "Det er skyfrit. Måske du kan se månen? Drik et ekstra glas hvis du kan.",
        cold: "Det er mørkt og koldt. Skål til månen i rosé!",
        veryCold: "Det er mørkt og koldt. Skål til månen i rosé!",
      },
    },

    partlycloudy_day: {
      imgId: "03d",
      wine: {
        veryHot: "rose",
        hot: "rose",
        bitHot: "rose",
        neutral: "rose",
        cold: "rose",
        veryCold: "red",
      },
      desc: {
        veryHot: "Wow det er hot. Husk solcremen selvom vejret er skyet - og rosé'en.",
        hot: "Find en god plads i skygge fra skyerne. Lækkert vejr til et lille glas rosé.",
        bitHot: "Ikke varmt, ikke koldt og lidt for mange skyer.. Det er rosé-vejr og sådan er det.",
        neutral: "Rimelig kedeligt vejr. Hyg dig med lidt rosé, så skal skyerne nok forsvinde.",
        cold: "Det er ikke så meget positivt at sige om vejret. Det er det til gengæld om rosé.",
        veryCold: "Åben en rød, og drøm dig væk til sydens sol.",
      },
    },

    partlycloudy_night: {
      imgId: "03n",
      wine: {
        veryHot: "rose",
        hot: "rose",
        bitHot: "rose",
        neutral: "rose",
        cold: "rose",
        veryCold: "red",
      },
      desc: {
        veryHot: "Wow det er hot. En tur i byen? Et lille glas rosé?",
        hot: "Natten er varm. En tur i byen? Et lille glas rosé?",
        bitHot: "Ikke varmt, ikke koldt og lidt for mange skyer.. Det er rosé-vejr og sådan er det.",
        neutral: "Rimelig kedeligt vejr. Hyg dig med lidt rosé.",
        cold: "Det er ikke så meget positivt at sige om vejret. Det er det til gengæld om rosé.",
        veryCold: "Måske du sidder på en varm bar? Bestil et glas rød og drøm dig væk til sydens sol.",
      },
    },

    lightrainshowers_day: {
      imgId: "40d",
      wine: {
        veryHot: "rose",
        hot: "rose",
        bitHot: "rose",
        neutral: "rose",
        cold: "hvid",
        veryCold: "red",
      },
      desc: {
        veryHot: "Wow det er hot, men det drypper lidt fra himlen. Lad der dryppe rosé i glasset.",
        hot: "Vejret er varmt, men det drypper lidt fra himlen. Lad der dryppe rosé i glasset.",
        bitHot: "Vejret er fint, men det drypper lidt fra himlen. Lad der dryppe rosé i glasset.",
        neutral: "Rimelig kedeligt vejr. Hyg dig med lidt rosé, så skal skyerne nok forsvinde.",
        cold: "Vejret er koldt og vådt. Det samme er hvidvin",
        veryCold: "Skal vi ikke bare åbne en rød, drømme om sydens sol og komme videre?",
      },
    },

    lightrainshowers_night: {
      imgId: "40n",
      wine: {
        veryHot: "rose",
        hot: "rose",
        bitHot: "rose",
        neutral: "rose",
        cold: "hvid",
        veryCold: "red",
      },
      desc: {
        veryHot: "Wow det er hot, men det drypper lidt fra himlen. Lad der dryppe rosé i glasset.",
        hot: "Vejret er varmt, og natten er våd. Lad der dryppe rosé i glasset.",
        bitHot: "Vejret er fint, men det drypper lidt fra himlen. Lad der dryppe rosé i glasset.",
        neutral: "Rimelig kedeligt vejr. Hyg dig med lidt rosé.",
        cold: "Vejret er koldt og vådt. Det samme er hvidvin",
        veryCold: "Skal vi ikke bare åbne en rød, drømme om sydens sol og komme videre?",
      },
    },

    rainshowers_day: {
      imgId: "05d",
      wine: {
        veryHot: "rose",
        hot: "rose",
        bitHot: "rose",
        neutral: "rose",
        cold: "hvid",
        veryCold: "red",
      },
      desc: {
        veryHot: "Wow det er hot, men hold glasset i læ fra regnen. Fortyndet rosé er ikke nice!",
        hot: "Vejret er varmt, men hold glasset i læ fra regnen. Fortyndet rosé er ikke nice!",
        bitHot: "Det drypper fra himlen. Lad der dryppe rosé i glasset.",
        neutral: "Rimelig kedeligt vejr. Hyg dig med lidt rosé, så skal regnen nok forsvinde.",
        cold: "Vejret er koldt og vådt. Det samme er hvidvin",
        veryCold: "Skal vi ikke bare åbne en rød, drømme om sydens sol og komme videre?",
      },
    },

    rainshowers_night: {
      imgId: "05n",
      wine: {
        veryHot: "rose",
        hot: "rose",
        bitHot: "rose",
        neutral: "rose",
        cold: "hvid",
        veryCold: "red",
      },
      desc: {
        veryHot: "Natten er hot og våd, men hold glasset i læ fra regnen. Fortyndet rosé er ikke nice!",
        hot: "Vejret er varmt, men hold glasset i læ fra regnen. Fortyndet rosé er ikke nice!",
        bitHot: "Det drypper fra himlen. Lad der dryppe rosé i glasset.",
        neutral: "Rimelig kedeligt vejr. Hyg dig med lidt rosé, så skal regnen nok forsvinde.",
        cold: "Vejret er koldt og vådt. Det samme er hvidvin",
        veryCold: "Skal vi ikke bare åbne en rød, drømme om sydens sol og komme videre?",
      },
    },

    heavyrainshowers_day: {
      imgId: "41d",
      wine: {
        veryHot: "rose",
        hot: "rose",
        bitHot: "rose",
        neutral: "rose",
        cold: "hvid",
        veryCold: "red",
      },
      desc: {
        veryHot: "Wow det er hot, men hold glasset i læ fra regnen. Fortyndet rosé er ikke nice!",
        hot: "Vejret er varmt, men hold glasset i læ fra regnen. Fortyndet rosé er ikke nice!",
        bitHot: "Det drypper fra himlen. Lad der dryppe rosé i glasset.",
        neutral: "Rimelig kedeligt vejr. Hyg dig med lidt rosé, så skal regnen nok forsvinde.",
        cold: "Vejret er koldt og vådt. Det samme er hvidvin.",
        veryCold: "Skal vi ikke bare åbne en rød, drømme om sydens sol og komme videre?",
      },
    },

    heavyrainshowers_night: {
      imgId: "41n",
      wine: {
        veryHot: "rose",
        hot: "rose",
        bitHot: "rose",
        neutral: "rose",
        cold: "hvid",
        veryCold: "red",
      },
      desc: {
        veryHot: "Mega varmt, mega vådt. Hop i læ på en bar, og køb en flaske rosé!",
        hot: "Vejret er varmt, men hold glasset i læ fra regnen. Fortyndet rosé er ikke nice!",
        bitHot: "Det drypper fra himlen. Lad der dryppe rosé i glasset.",
        neutral: "Rimelig kedeligt vejr. Hyg dig med lidt rosé, så skal regnen nok forsvinde.",
        cold: "Vejret er koldt og vådt. Det samme er hvidvin.",
        veryCold: "Skal vi ikke bare åbne en rød, drømme om sydens sol og komme videre?",
      },
    },

    lightrainshowersandthunder_day: {
      imgId: "24d",
      wine: {
        veryHot: "champagne",
        hot: "champagne",
        bitHot: "champagne",
        neutral: "champagne",
        cold: "champagne",
        veryCold: "champagne",
      },
      desc: {
        veryHot: "Du danske sommer.. Strandturen er måske ødelagt, men det er dagen ikke. Det er tid til at poppe en pagne.",
        hot: "Du danske sommer.. Strandturen er måske ødelagt, men det er dagen ikke. Det er tid til at poppe en pagne.",
        bitHot: "Lad ikke en tordenbyge ødelægge din dag. Pop en pagne, vejret klarer måske op.",
        neutral: "Rimelig kedeligt vejr. Bliv hjemme og forkæl dig selv med lidt pagne. Du fortjener det.",
        cold: "Rimelig kedeligt vejr. Bliv hjemme og forkæl dig selv med lidt pagne. Du fortjener det.",
        veryCold: "Vejret er dødkedeligt. Bliv hjemme og forkæl dig selv med lidt pagne. Du fortjener det.",
      },
    },

    lightrainshowersandthunder_night: {
      imgId: "24n",
      wine: {
        veryHot: "champagne",
        hot: "champagne",
        bitHot: "champagne",
        neutral: "champagne",
        cold: "champagne",
        veryCold: "champagne",
      },
      desc: {
        veryHot: "Du danske sommer.. Tag ud, eller hold en fest. Det er tid til at poppe en pagne.",
        hot: "Du danske sommer.. Tag ud, eller hold en fest. Det er tid til at poppe en pagne.",
        bitHot: "Lad ikke en tordenbyge ødelægge din nat. Pop en pagne, vejret klarer måske op.",
        neutral: "Rimelig kedeligt vejr. Bliv hjemme, hold en fest og forkæl dig selv med lidt pagne. Du fortjener det.",
        cold: "Rimelig kedeligt vejr. Bliv hjemme, hold en fest og forkæl dig selv med lidt pagne. Du fortjener det.",
        veryCold: "Vejret er dødkedeligt. Bliv hjemme og forkæl dig selv med lidt pagne. Du fortjener det.",
      },
    },

    rainshowersandthunder_day: {
      imgId: "06d",
      wine: {
        veryHot: "champagne",
        hot: "champagne",
        bitHot: "champagne",
        neutral: "champagne",
        cold: "champagne",
        veryCold: "champagne",
      },
      desc: {
        veryHot: "Du danske sommer.. Strandturen er måske ødelagt, men det er dagen ikke. Det er tid til at poppe en pagne.",
        hot: "Du danske sommer.. Strandturen er måske ødelagt, men det er dagen ikke. Det er tid til at poppe en pagne.",
        bitHot: "Lad ikke en tordenbyge ødelægge din dag. Pop en pagne, vejret klarer måske op.",
        neutral: "Rimelig kedeligt vejr. Bliv hjemme og forkæl dig selv med lidt pagne. Du fortjener det.",
        cold: "Rimelig kedeligt vejr. Bliv hjemme og forkæl dig selv med lidt pagne. Du fortjener det.",
        veryCold: "Vejret er dødkedeligt. Bliv hjemme og forkæl dig selv med lidt pagne. Du fortjener det.",
      },
    },

    rainshowersandthunder_night: {
      imgId: "06n",
      wine: {
        veryHot: "champagne",
        hot: "champagne",
        bitHot: "champagne",
        neutral: "champagne",
        cold: "champagne",
        veryCold: "champagne",
      },
      desc: {
        veryHot: "Du danske sommer.. Tag ud, eller hold en fest. Det er tid til at poppe en pagne.",
        hot: "Du danske sommer.. Tag ud, eller hold en fest. Det er tid til at poppe en pagne.",
        bitHot: "Lad ikke en tordenbyge ødelægge din dag. Pop en pagne, vejret klarer måske op.",
        neutral: "Rimelig kedeligt vejr. Bliv hjemme og forkæl dig selv med lidt pagne. Du fortjener det.",
        cold: "Rimelig kedeligt vejr. Bliv hjemme og forkæl dig selv med lidt pagne. Du fortjener det.",
        veryCold: "Vejret er dødkedeligt. Bliv hjemme og forkæl dig selv med lidt pagne. Du fortjener det.",
      },
    },

    heavyrainshowersandthunder_day: {
      imgId: "25d",
      wine: {
        veryHot: "champagne",
        hot: "champagne",
        bitHot: "champagne",
        neutral: "champagne",
        cold: "champagne",
        veryCold: "champagne",
      },
      desc: {
        veryHot: "Du danske sommer.. Strandturen er måske ødelagt, men det er dagen ikke. Det er tid til at poppe en pagne.",
        hot: "Du danske sommer.. Strandturen er måske ødelagt, men det er dagen ikke. Det er tid til at poppe en pagne.",
        bitHot: "Lad ikke en tordenbyge ødelægge din dag. Pop en pagne, vejret klarer måske op.",
        neutral: "Rimelig kedeligt vejr. Bliv hjemme og forkæl dig selv med lidt pagne. Du fortjener det.",
        cold: "Rimelig kedeligt vejr. Bliv hjemme og forkæl dig selv med lidt pagne. Du fortjener det.",
        veryCold: "Vejret er dødkedeligt. Bliv hjemme og forkæl dig selv med lidt pagne. Du fortjener det.",
      },
    },

    lightsleetshowers_day: {
      imgId: "42d",
      wine: {
        veryHot: "champagne",
        hot: "champagne",
        bitHot: "champagne",
        neutral: "champagne",
        cold: "champagne",
        veryCold: "champagne",
      },
      desc: {
        veryHot: "I regn og slud, er pagne gud'... Skål!",
        hot: "I regn og slud, er pagne gud'... Skål!",
        bitHot: "I regn og slud, er pagne gud'... Skål!",
        neutral: "'I regn og slud, er pagne gud'... Skål!",
        cold: "I regn og slud, er pagne gud'... Skål!",
        veryCold: "I regn og slud, er pagne gud'... Skål!",
      },
    },

    sleetshowers_day: {
      imgId: "07d",
      wine: {
        veryHot: "champagne",
        hot: "champagne",
        bitHot: "champagne",
        neutral: "champagne",
        cold: "champagne",
        veryCold: "champagne",
      },
      desc: {
        veryHot: "I regn og slud, er pagne gud'... Skål!",
        hot: "I regn og slud, er pagne gud'... Skål!",
        bitHot: "I regn og slud, er pagne gud'... Skål!",
        neutral: "'I regn og slud, er pagne gud'... Skål!",
        cold: "I regn og slud, er pagne gud'... Skål!",
        veryCold: "I regn og slud, er pagne gud'... Skål!",
      },
    },

    heavysleetshowers_day: {
      imgId: "43d",
      wine: {
        veryHot: "champagne",
        hot: "champagne",
        bitHot: "champagne",
        neutral: "champagne",
        cold: "champagne",
        veryCold: "champagne",
      },
      desc: {
        veryHot: "I regn og slud, er pagne gud'... Skål!",
        hot: "I regn og slud, er pagne gud'... Skål!",
        bitHot: "I regn og slud, er pagne gud'... Skål!",
        neutral: "'I regn og slud, er pagne gud'... Skål!",
        cold: "I regn og slud, er pagne gud'... Skål!",
        veryCold: "I regn og slud, er pagne gud'... Skål!",
      },
    },

    lightsleetshowersandthunder_day: {
      imgId: "26d",
      wine: {
        veryHot: "champagne",
        hot: "champagne",
        bitHot: "champagne",
        neutral: "champagne",
        cold: "champagne",
        veryCold: "champagne",
      },
      desc: {
        veryHot: "I regn og slud, er pagne gud'... Skål!",
        hot: "I regn og slud, er pagne gud'... Skål!",
        bitHot: "I regn og slud, er pagne gud'... Skål!",
        neutral: "'I regn og slud, er pagne gud'... Skål!",
        cold: "I regn og slud, er pagne gud'... Skål!",
        veryCold: "I regn og slud, er pagne gud'... Skål!",
      },
    },

    sleetshowersandthunder_day: {
      imgId: "20d",
      wine: {
        veryHot: "champagne",
        hot: "champagne",
        bitHot: "champagne",
        neutral: "champagne",
        cold: "champagne",
        veryCold: "champagne",
      },
      desc: {
        veryHot: "I regn og slud, er pagne gud'... Skål!",
        hot: "I regn og slud, er pagne gud'... Skål!",
        bitHot: "I regn og slud, er pagne gud'... Skål!",
        neutral: "'I regn og slud, er pagne gud'... Skål!",
        cold: "I regn og slud, er pagne gud'... Skål!",
        veryCold: "I regn og slud, er pagne gud'... Skål!",
      },
    },

    heavysleetshowersandthunder_day: {
      imgId: "27d",
      wine: {
        veryHot: "champagne",
        hot: "champagne",
        bitHot: "champagne",
        neutral: "champagne",
        cold: "champagne",
        veryCold: "champagne",
      },
      desc: {
        veryHot: "I regn og slud, er pagne gud'... Skål!",
        hot: "I regn og slud, er pagne gud'... Skål!",
        bitHot: "I regn og slud, er pagne gud'... Skål!",
        neutral: "'I regn og slud, er pagne gud'... Skål!",
        cold: "I regn og slud, er pagne gud'... Skål!",
        veryCold: "I regn og slud, er pagne gud'... Skål!",
      },
    },

    lightsnowshowers_day: {
      imgId: "44d",
      wine: {
        veryHot: "hvid",
        hot: "hvid",
        bitHot: "hvid",
        neutral: "hvid",
        cold: "hvid",
        veryCold: "hvid",
      },
      desc: {
        veryHot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        hot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        bitHot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        neutral: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        cold: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        veryCold: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
      },
    },

    snowshowers_day: {
      imgId: "08d",
      wine: {
        veryHot: "hvid",
        hot: "hvid",
        bitHot: "hvid",
        neutral: "hvid",
        cold: "hvid",
        veryCold: "hvid",
      },
      desc: {
        veryHot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        hot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        bitHot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        neutral: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        cold: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        veryCold: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
      },
    },

    heavysnowshowers_day: {
      imgId: "45d",
      wine: {
        veryHot: "red",
        hot: "red",
        bitHot: "red",
        neutral: "red",
        cold: "red",
        veryCold: "red",
      },
      desc: {
        veryHot: "En kraftig snebye kræver en kraftig rødvin. Mums.",
        hot: "En kraftig snebye kræver en kraftig rødvin. Mums.",
        bitHot: "En kraftig snebye kræver en kraftig rødvin. Mums.",
        neutral: "En kraftig snebye kræver en kraftig rødvin. Mums.",
        cold: "En kraftig snebye kræver en kraftig rødvin. Mums.",
        veryCold: "En kraftig snebye kræver en kraftig rødvin. Mums.",
      },
    },

    lightsnowshowersandthunder_day: {
      imgId: "28d",
      wine: {
        veryHot: "hvid",
        hot: "hvid",
        bitHot: "hvid",
        neutral: "hvid",
        cold: "hvid",
        veryCold: "hvid",
      },
      desc: {
        veryHot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        hot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        bitHot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        neutral: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        cold: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        veryCold: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
      },
    },

    snowshowersandthunder_day: {
      imgId: "21d",
      wine: {
        veryHot: "hvid",
        hot: "hvid",
        bitHot: "hvid",
        neutral: "hvid",
        cold: "hvid",
        veryCold: "hvid",
      },
      desc: {
        veryHot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        hot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        bitHot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        neutral: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        cold: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        veryCold: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
      },
    },

    heavysnowshowersandthunder_day: {
      imgId: "29d",
      wine: {
        veryHot: "red",
        hot: "red",
        bitHot: "red",
        neutral: "red",
        cold: "red",
        veryCold: "red",
      },
      desc: {
        veryHot: "En kraftig snebye kræver en kraftig rødvin. Mums.",
        hot: "En kraftig snebye kræver en kraftig rødvin. Mums.",
        bitHot: "En kraftig snebye kræver en kraftig rødvin. Mums.",
        neutral: "En kraftig snebye kræver en kraftig rødvin. Mums.",
        cold: "En kraftig snebye kræver en kraftig rødvin. Mums.",
        veryCold: "En kraftig snebye kræver en kraftig rødvin. Mums.",
      },
    },

    heavyrainshowersandthunder_night: { imgId: "25n" },
    lightsleetshowers_night: { imgId: "42n" },
    sleetshowers_night: { imgId: "07n" },
    heavysleetshowers_night: { imgId: "43n" },
    lightsleetshowersandthunder_night: { imgId: "26n" },
    sleetshowersandthunder_night: { imgId: "20n" },
    heavysleetshowersandthunder_night: { imgId: "27n" },
    lightsnowshowers_night: { imgId: "44n" },
    snowshowers_night: { imgId: "08n" },
    heavysnowshowers_night: { imgId: "45n" },
    lightsnowshowersandthunder_night: { imgId: "28n" },
    snowshowersandthunder_night: { imgId: "21n" },
    heavysnowshowersandthunder_night: { imgId: "29n" },

    clearsky_morning: { imgId: "01m" },
    fair_morning: { imgId: "02m" },
    partlycloudy_morning: { imgId: "03m" },
    lightrainshowers_morning: { imgId: "40m" },
    rainshowers_morning: { imgId: "05m" },
    heavyrainshowers_morning: { imgId: "41m" },
    lightrainshowersandthunder_morning: { imgId: "24m" },
    rainshowersandthunder_morning: { imgId: "06m" },
    heavyrainshowersandthunder_morning: { imgId: "25m" },
    lightsleetshowers_morning: { imgId: "42m" },
    sleetshowers_morning: { imgId: "07m" },
    heavysleetshowers_morning: { imgId: "43m" },
    lightsleetshowersandthunder_morning: { imgId: "26m" },
    sleetshowersandthunder_morning: { imgId: "20m" },
    heavysleetshowersandthunder_morning: { imgId: "27m" },
    lightsnowshowers_morning: { imgId: "44m" },
    snowshowers_morning: { imgId: "08m" },
    heavysnowshowers_morning: { imgId: "45m" },
    lightsnowshowersandthunder_morning: { imgId: "28m" },
    snowshowersandthunder_morning: { imgId: "21m" },
    heavysnowshowersandthunder_morning: { imgId: "29m" },

    cloudy: {
      imgId: "04",
      wine: {
        veryHot: "rose",
        hot: "rose",
        bitHot: "rose",
        neutral: "rose",
        cold: "hvid",
        veryCold: "red",
      },
      desc: {
        veryHot: "Pisse varmt, pisse overskyet.. Hvad helvede, det er rosé-vejr",
        hot: "Varmt og overskyet. Hva med en hyggelig gåtur og en hyggelig rosé?",
        bitHot: "Vejret er lunt og tørt - Det er din rosé heldigvis ikke, og skål for det.",
        neutral: "Vejret er kedeligt og DK-agtigt. Hvad med en rosé som ikke er?",
        cold: "Vejret er kedeligt og DK-agtigt. Hvad med en hvidvin som ikke er?",
        veryCold: "Vejret er pishamrende kold og pishamrende kedeligt. Åben en rød, og drøm dig væk til sydens sol. Du fortjener det!",
      },
    },
    lightrain: {
      imgId: "46",
      wine: {
        veryHot: "rose",
        hot: "rose",
        bitHot: "rose",
        neutral: "rose",
        cold: "hvid",
        veryCold: "red",
      },
      desc: {
        veryHot: "Det er drøn-varmt, men det drypper lidt.. Hvad helvede, det er rosé-vejr",
        hot: "Det varmt, men det drypper lidt.. Hvad helvede, det er rosé-vejr",
        bitHot: "Vejret er lunt og vådt. Åben en flaske rosé og nyd livet i tørvejr.",
        neutral: "Vejret er kedeligt og DK-agtigt. Hvad med en rosé, som ikke er?",
        cold: "Vejret er kedeligt og DK-agtigt. Hvad med en hvidvin, som ikke er?",
        veryCold:
          "Vejret er pishamrende kold og pishamrende kedeligt - og hvorfor sner det ikke?. Åben en rød, og drøm dig væk til sydens sol. Du fortjener det!",
      },
    },
    rain: {
      imgId: "09",
      wine: {
        veryHot: "rose",
        hot: "rose",
        bitHot: "rose",
        neutral: "rose",
        cold: "hvid",
        veryCold: "red",
      },
      desc: {
        veryHot: "Det er drøn-varmt, men det regner.. Åben en flaske rosé og nyd livet i tørvejr.",
        hot: "Det varmt, men det regner.. Åben en flaske rosé og nyd livet i tørvejr.",
        bitHot: "Vejret er lunt og vådt. Åben en flaske rosé og nyd livet i tørvejr.",
        neutral: "Vejret er kedeligt og DK-agtigt. Hvad med en rosé, som ikke er?",
        cold: "Vejret er kedeligt og DK-agtigt. Hvad med en hvidvin, som ikke er?",
        veryCold:
          "Vejret er pishamrende kold og pishamrende kedeligt - og hvorfor sner det ikke?. Åben en rød, og drøm dig væk til sydens sol. Du fortjener det!",
      },
    },
    heavyrain: {
      imgId: "10",
      wine: {
        veryHot: "champagne",
        hot: "champagne",
        bitHot: "champagne",
        neutral: "champagne",
        cold: "champagne",
        veryCold: "champagne",
      },
      desc: {
        veryHot: "Det er drøn-varmt, men glem alt om en tur til stranden.. Pop en pagne og nyd livet i tørvejr.",
        hot: "Det dejligt varmt, men det pisser ned.. Pop en pagne og nyd livet i tørvejr.",
        bitHot: "Vejret er lunt og driv vådt. Pop en pagne og nyd livet i tørvejr.",
        neutral: "I dag er en våd dag. Pop en pagne, måske to. I dag skal du ikke gå tørstig i seng.",
        cold: "Hvad er både koldt og vådt. Faktisk både vejret og den champagne du skal have om lidt.",
        veryCold: "Hvad er både is-koldt og vådt. Faktisk både vejret og den champagne du skal have om lidt.",
      },
    },
    lightrainandthunder: {
      imgId: "30",
      wine: {
        veryHot: "rose",
        hot: "rose",
        bitHot: "rose",
        neutral: "rose",
        cold: "hvid",
        veryCold: "red",
      },
      desc: {
        veryHot: "Det er drøn-varmt, men det drypper lidt.. Hvad helvede, det er rosé-vejr",
        hot: "Det varmt, men det drypper lidt.. Hvad helvede, det er rosé-vejr",
        bitHot: "Vejret er lunt og vådt. Åben en flaske rosé og nyd livet i tørvejr.",
        neutral: "Vejret er kedeligt og DK-agtigt. Hvad med en rosé, som ikke er?",
        cold: "Vejret er kedeligt og DK-agtigt. Hvad med en hvidvin, som ikke er?",
        veryCold:
          "Vejret er pishamrende kold og pishamrende kedeligt - og hvorfor sner det ikke?. Åben en rød, og drøm dig væk til sydens sol. Du fortjener det!",
      },
    },
    rainandthunder: {
      imgId: "22",
      wine: {
        veryHot: "rose",
        hot: "rose",
        bitHot: "rose",
        neutral: "rose",
        cold: "hvid",
        veryCold: "red",
      },
      desc: {
        veryHot: "Det er drøn-varmt, men det regner og tordner.. Åben en flaske rosé og nyd livet i tørvejr.",
        hot: "Det varmt, men det regner og tordner.. Åben en flaske rosé og nyd livet i tørvejr.",
        bitHot: "Vejret er lunt, vådt og buldrende. Åben en flaske rosé og nyd livet i tørvejr.",
        neutral: "Vejret er kedeligt og DK-agtigt. Hvad med en rosé, som ikke er?",
        cold: "Vejret er kedeligt og DK-agtigt. Hvad med en hvidvin, som ikke er?",
        veryCold:
          "Vejret er pishamrende kold og pishamrende kedeligt - og hvorfor sner det ikke?. Åben en rød, og drøm dig væk til sydens sol. Du fortjener det!",
      },
    },
    heavyrainandthunder: {
      imgId: "11",
      wine: {
        veryHot: "champagne",
        hot: "champagne",
        bitHot: "champagne",
        neutral: "champagne",
        cold: "champagne",
        veryCold: "champagne",
      },
      desc: {
        veryHot: "Det er drøn-varmt, men glem alt om en tur til stranden.. Pop en pagne og nyd livet i tørvejr.",
        hot: "Det dejligt varmt, men det pisser ned.. Pop en pagne og nyd livet i tørvejr.",
        bitHot: "Vejret er lunt og driv vådt. Pop en pagne og nyd livet i tørvejr.",
        neutral: "I dag er en våd dag. Pop en pagne, måske to. I dag skal du ikke gå tørstig i seng.",
        cold: "Hvad er både koldt og vådt. Faktisk både vejret og den champagne du skal have om lidt.",
        veryCold: "Hvad er både is-koldt og vådt. Faktisk både vejret og den champagne du skal have om lidt.",
      },
    },
    lightsleet: {
      imgId: "47",
      wine: {
        veryHot: "champagne",
        hot: "champagne",
        bitHot: "champagne",
        neutral: "champagne",
        cold: "champagne",
        veryCold: "champagne",
      },
      desc: {
        veryHot: "I regn og slud, er pagne gud'... Skål!",
        hot: "I regn og slud, er pagne gud'... Skål!",
        bitHot: "I regn og slud, er pagne gud'... Skål!",
        neutral: "'I regn og slud, er pagne gud'... Skål!",
        cold: "I regn og slud, er pagne gud'... Skål!",
        veryCold: "I regn og slud, er pagne gud'... Skål!",
      },
    },
    sleet: {
      imgId: "12",
      wine: {
        veryHot: "champagne",
        hot: "champagne",
        bitHot: "champagne",
        neutral: "champagne",
        cold: "champagne",
        veryCold: "champagne",
      },
      desc: {
        veryHot: "I regn og slud, er pagne gud'... Skål!",
        hot: "I regn og slud, er pagne gud'... Skål!",
        bitHot: "I regn og slud, er pagne gud'... Skål!",
        neutral: "'I regn og slud, er pagne gud'... Skål!",
        cold: "I regn og slud, er pagne gud'... Skål!",
        veryCold: "I regn og slud, er pagne gud'... Skål!",
      },
    },
    heavysleet: {
      imgId: "48",
      wine: {
        veryHot: "champagne",
        hot: "champagne",
        bitHot: "champagne",
        neutral: "champagne",
        cold: "champagne",
        veryCold: "champagne",
      },
      desc: {
        veryHot: "I regn og slud, er pagne gud'... Skål!",
        hot: "I regn og slud, er pagne gud'... Skål!",
        bitHot: "I regn og slud, er pagne gud'... Skål!",
        neutral: "'I regn og slud, er pagne gud'... Skål!",
        cold: "I regn og slud, er pagne gud'... Skål!",
        veryCold: "I regn og slud, er pagne gud'... Skål!",
      },
    },
    lightsleetandthunder: {
      imgId: "31",
      wine: {
        veryHot: "champagne",
        hot: "champagne",
        bitHot: "champagne",
        neutral: "champagne",
        cold: "champagne",
        veryCold: "champagne",
      },
      desc: {
        veryHot: "I regn og slud, er pagne gud'... Skål!",
        hot: "I regn og slud, er pagne gud'... Skål!",
        bitHot: "I regn og slud, er pagne gud'... Skål!",
        neutral: "'I regn og slud, er pagne gud'... Skål!",
        cold: "I regn og slud, er pagne gud'... Skål!",
        veryCold: "I regn og slud, er pagne gud'... Skål!",
      },
    },
    sleetandthunder: {
      imgId: "23",
      wine: {
        veryHot: "champagne",
        hot: "champagne",
        bitHot: "champagne",
        neutral: "champagne",
        cold: "champagne",
        veryCold: "champagne",
      },
      desc: {
        veryHot: "I regn og slud, er pagne gud'... Skål!",
        hot: "I regn og slud, er pagne gud'... Skål!",
        bitHot: "I regn og slud, er pagne gud'... Skål!",
        neutral: "'I regn og slud, er pagne gud'... Skål!",
        cold: "I regn og slud, er pagne gud'... Skål!",
        veryCold: "I regn og slud, er pagne gud'... Skål!",
      },
    },
    heavysleetandthunder: {
      imgId: "32",
      wine: {
        veryHot: "champagne",
        hot: "champagne",
        bitHot: "champagne",
        neutral: "champagne",
        cold: "champagne",
        veryCold: "champagne",
      },
      desc: {
        veryHot: "I regn og slud, er pagne gud'... Skål!",
        hot: "I regn og slud, er pagne gud'... Skål!",
        bitHot: "I regn og slud, er pagne gud'... Skål!",
        neutral: "'I regn og slud, er pagne gud'... Skål!",
        cold: "I regn og slud, er pagne gud'... Skål!",
        veryCold: "I regn og slud, er pagne gud'... Skål!",
      },
    },
    lightsnow: {
      imgId: "49",
      wine: {
        veryHot: "hvid",
        hot: "hvid",
        bitHot: "hvid",
        neutral: "hvid",
        cold: "hvid",
        veryCold: "hvid",
      },
      desc: {
        veryHot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        hot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        bitHot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        neutral: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        cold: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        veryCold: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
      },
    },
    snow: {
      imgId: "13",
      wine: {
        veryHot: "hvid",
        hot: "hvid",
        bitHot: "hvid",
        neutral: "hvid",
        cold: "hvid",
        veryCold: "hvid",
      },
      desc: {
        veryHot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        hot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        bitHot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        neutral: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        cold: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        veryCold: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
      },
    },
    heavysnow: {
      imgId: "50",
      wine: {
        veryHot: "red",
        hot: "red",
        bitHot: "red",
        neutral: "red",
        cold: "red",
        veryCold: "red",
      },
      desc: {
        veryHot: "En kraftig snebye kræver en kraftig rødvin. Mums.",
        hot: "En kraftig snebye kræver en kraftig rødvin. Mums.",
        bitHot: "En kraftig snebye kræver en kraftig rødvin. Mums.",
        neutral: "En kraftig snebye kræver en kraftig rødvin. Mums.",
        cold: "En kraftig snebye kræver en kraftig rødvin. Mums.",
        veryCold: "En kraftig snebye kræver en kraftig rødvin. Mums.",
      },
    },
    lightsnowandthuner: {
      imgId: "33",
      wine: {
        veryHot: "hvid",
        hot: "hvid",
        bitHot: "hvid",
        neutral: "hvid",
        cold: "hvid",
        veryCold: "hvid",
      },
      desc: {
        veryHot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        hot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        bitHot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        neutral: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        cold: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        veryCold: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
      },
    },
    snowandthunder: {
      imgId: "14",
      wine: {
        veryHot: "hvid",
        hot: "hvid",
        bitHot: "hvid",
        neutral: "hvid",
        cold: "hvid",
        veryCold: "hvid",
      },
      desc: {
        veryHot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        hot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        bitHot: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        neutral: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        cold: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
        veryCold: "En lille snebye kan være meget hyggelig. Det er hvidvin også.",
      },
    },
    heavysnowandthunder: {
      imgId: "34",
      wine: {
        veryHot: "red",
        hot: "red",
        bitHot: "red",
        neutral: "red",
        cold: "red",
        veryCold: "red",
      },
      desc: {
        veryHot: "En kraftig snebye kræver en kraftig rødvin. Mums.",
        hot: "En kraftig snebye kræver en kraftig rødvin. Mums.",
        bitHot: "En kraftig snebye kræver en kraftig rødvin. Mums.",
        neutral: "En kraftig snebye kræver en kraftig rødvin. Mums.",
        cold: "En kraftig snebye kræver en kraftig rødvin. Mums.",
        veryCold: "En kraftig snebye kræver en kraftig rødvin. Mums.",
      },
    },
    fog: {
      imgId: "15",
      wine: {
        veryHot: "hvid",
        hot: "hvid",
        bitHot: "red",
        neutral: "red",
        cold: "red",
        veryCold: "red",
      },
      desc: {
        veryHot: "Luften er hvid af tåge. Samme farve som dagens vin.",
        hot: "Luften er hvid af tåge. Samme farve som dagens vin.",
        bitHot: "En kraftig snebye kræver en kraftig rødvin. Mums.",
        neutral: "Tågen er tyk. Find en tyk rød, og hyg dig lidt med den.",
        cold: "Det er koldt og tågen er tyk. Find en tyk rød, og hyg dig lidt med den.",
        veryCold: "Det er koldt og tågen er tyk. Find en tyk rød, og hyg dig lidt med den.",
      },
    },
  };

  return weather[id];
}

export default PickWeather;