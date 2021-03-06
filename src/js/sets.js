let sets = [
	{
		title: 'Talk German 1 [Disc 1]',
		folder: 'talk-german-1-disc-1',
		colour: '#c41718',
		playlist: [
			{ trackNumber:'1•01', name:'Introduction', audioFile:'1-01 Introduction.mp3', },
			{ subheading:'Unit 1' },
			{ trackNumber:'1•02', name:'P8 A1 Key Phrases: Saying Hello: Guten Tag', audioFile:'1-02 Unit 1 P8 A1 Key Phrases_ Saying Hello_ Guten Tag.mp3', },
			{ trackNumber:'1•03', name:'P8 A2 & 3: Saying Hello', audioFile:'1-03 Unit 1 P8 A2 & 3_ Saying Hello.mp3', },
			{ trackNumber:'1•04', name:'P8 A4 Key Phrases: Wie Geht Es Ihnen?', audioFile:'1-04 Unit 1 P8 A4 Key Phrases_ Wie Geht Es Ihnen_.mp3', },
			{ trackNumber:'1•05', name:'P8 A5: Saying Hello', audioFile:'1-05 Unit 1 P8 A5_ Saying Hello.mp3', },
			{ trackNumber:'1•06', name:'P9 A6: Key Phrases: Saying Goodbye: Auf Wiedersehen', audioFile:'1-06 Unit 1 P9 A6_ Key Phrases_ Saying Goodbye_ Auf Wiedersehen.mp3', },
			{ trackNumber:'1•07', name:'P9 A7: Saying Goodbye', audioFile:'1-07 Unit 1 P9 A7_ Saying Goodbye.mp3', },
			{ trackNumber:'1•08', name:'P9 A8: Saying Goodbye', audioFile:'1-08 Unit 1 P9 A8_ Saying Goodbye.mp3', },
			{ trackNumber:'1•09', name:'P10 A1: Key Phrases: Introducing Yourself: Ich Heiße...', audioFile:'1-09 Unit 1 P10 A1_ Key Phrases_ Introducing Yourself_ Ich Heiße....mp3', },
			{ trackNumber:'1•10', name:'P10 A2: Introducing Yourself', audioFile:'1-10 Unit 1 P10 A2_ Introducing Yourself.mp3', },
			{ trackNumber:'1•11', name:'P10 A3: Introducing Yourself', audioFile:'1-11 Unit 1 P10 A3_ Introducing Yourself.mp3', },
			{ trackNumber:'1•12', name:'P11 A5: Socialising: Es Freut Mich', audioFile:'1-12 Unit 1 P11 A5_ Socialising_ Es Freut Mich.mp3', },
			{ trackNumber:'1•13', name:'P11 A6: Socialising', audioFile:'1-13 Unit 1 P11 A6_ Socialising.mp3', },
			{ trackNumber:'1•14', name:'P11 A7: Socialising: Typical German Names', audioFile:'1-14 Unit 1 P11 A7_ Socialising_ Typical German Names.mp3', },
			{ trackNumber:'1•15', name:'P11 A8: Socialising: Listen For The Names', audioFile:'1-15 Unit 1 P11 A8_ Socialising_ Listen For The Names.mp3', },
			{ trackNumber:'1•16', name:'P13 A1: Now You\'re Talking!: Greetings', audioFile:'1-16 Unit 1 P13 A1_ Now You\'re Talking!_ Greetings.mp3', },
			{ trackNumber:'1•17', name:'P13 A2: Now You\'re Talking!: Introduce Yourself', audioFile:'1-17 Unit 1 P13 A2_ Now You\'re Talking!_ Introduce Yourself.mp3', },
			{ trackNumber:'1•18', name:'P13 A3: Now You\'re Talking!: Ask His Name', audioFile:'1-18 Unit 1 P13 A3_ Now You\'re Talking!_ Ask His Name.mp3', },
			{ trackNumber:'1•19', name:'P13 A4: Now You\'re Talking!: Say Goodbye', audioFile:'1-19 Unit 1 P13 A4_ Now You\'re Talking!_ Say Goodbye.mp3', },
			{ trackNumber:'1•20', name:'P13 A5: Now You\'re Talking!: Say Goodbye And Goodnight', audioFile:'1-20 Unit 1 P13 A5_ Now You\'re Talking!_ Say Goodbye And Goodnight.mp3', },
			{ subheading:'Unit 2' },
			{ trackNumber:'1•21', name:'P16 A1: Key Phrases: Saying Where You\'re From: Woher Kommen Sie?', audioFile:'1-21 Unit 2 P16 A1_ Key Phrases_ Saying Where You\'re From_ Woher Kommen Sie_.mp3', },
			{ trackNumber:'1•22', name:'P16 A2: Saying Where You\'re From', audioFile:'1-22 Unit 2 P16 A2_ Saying Where You\'re From.mp3', },
			{ trackNumber:'1•23', name:'P16 A3 & 4: Saying Where You\'re From', audioFile:'1-23 Unit 2 P16 A3 & 4_ Saying Where You\'re From.mp3', },
			{ trackNumber:'1•24', name:'P17 A5: Key Phrases: Saying Where You\'re Home Town Is', audioFile:'1-24 Unit 2 P17 A5_ Key Phrases_ Saying Where You\'re Home Town Is.mp3', },
			{ trackNumber:'1•25', name:'P17 A6: Saying Where You\'re Home Town Is', audioFile:'1-25 Unit 2 P17 A6_ Saying Where You\'re Home Town Is.mp3', },
			{ trackNumber:'1•26', name:'P17 A7: Saying Where You\'re Home Town Is', audioFile:'1-26 Unit 2 P17 A7_ Saying Where You\'re Home Town Is.mp3', },
			{ trackNumber:'1•27', name:'P18 A1: Key Phrases: Saying What You Do: Was Sind Sie?', audioFile:'1-27 Unit 2 P18 A1_ Key Phrases_ Saying What You Do_ Was Sind Sie_.mp3', },
			{ trackNumber:'1•28', name:'P18 A3: Saying What You Do', audioFile:'1-28 Unit 2 P18 A3_ Saying What You Do.mp3', },
			{ trackNumber:'1•29', name:'P19 A1: Numbers 0-10', audioFile:'1-29 Unit 2 P19 A1_ Numbers 0-10.mp3', },
			{ trackNumber:'1•30', name:'P19 A2: Numbers 0-10', audioFile:'1-30 Unit 2 P19 A2_ Numbers 0-10.mp3', },
			{ trackNumber:'1•31', name:'P19 A3: Numbers 0-10: Was Ist Ihre Telefonnummer?', audioFile:'1-31 Unit 2 P19 A3_ Numbers 0-10_ Was Ist Ihre Telefonnummer_.mp3', },
			{ trackNumber:'1•32', name:'P19 A4: Numbers 0-10', audioFile:'1-32 Unit 2 P19 A4_ Numbers 0-10.mp3', },
			{ trackNumber:'1•33', name:'P21 A1: Now You\'re Talking!', audioFile:'1-33 Unit 2 P21 A1_ Now You\'re Talking!.mp3', },
			{ trackNumber:'1•34', name:'P21 A2: Now You\'re Talking!', audioFile:'1-34 Unit 2 P21 A2_ Now You\'re Talking!.mp3', },
			{ trackNumber:'1•35', name:'P21 A3: Now You\'re Talking!', audioFile:'1-35 Unit 2 P21 A3_ Now You\'re Talking!.mp3', },
			{ subheading:'Unit 3' },
			{ trackNumber:'1•36', name:'P24 A1: Key Phrases: Ordering A Drink In A Bar', audioFile:'1-36 Unit 3 P24 A1_ Key Phrases_ Ordering A Drink In A Bar.mp3', },
			{ trackNumber:'1•37', name:'P24 A2: Ordering A Drink In A Bar', audioFile:'1-37 Unit 3 P24 A2_ Ordering A Drink In A Bar.mp3', },
			{ trackNumber:'1•38', name:'P24 A3: Ordering A Drink In A Bar', audioFile:'1-38 Unit 3 P24 A3_ Ordering A Drink In A Bar.mp3', },
			{ trackNumber:'1•39', name:'P25 A4: Key Phrases: Ordering A Drink In A Café', audioFile:'1-39 Unit 3 P25 A4_ Key Phrases_ Ordering A Drink In A Café.mp3', },
			{ trackNumber:'1•40', name:'P25 A5: Ordering A Drink In A Café', audioFile:'1-40 Unit 3 P25 A5_ Ordering A Drink In A Café.mp3', },
			{ trackNumber:'1•41', name:'P26 A1: Key Phrases: Offering Someone A Drink', audioFile:'1-41 Unit 3 P26 A1_ Key Phrases_ Offering Someone A Drink.mp3', },
			{ trackNumber:'1•42', name:'P26 A2: Offering Someone A Drink', audioFile:'1-42 Unit 3 P26 A2_ Offering Someone A Drink.mp3', },
			{ trackNumber:'1•43', name:'P27 A4: Key Phrases: Accepting Or Refusing A Drink', audioFile:'1-43 Unit 3 P27 A4_ Key Phrases_ Accepting Or Refusing A Drink.mp3', },
			{ trackNumber:'1•44', name:'P27 A5 & 6: Accepting Or Refusing A Drink', audioFile:'1-44 Unit 3 P27 A5 & 6_ Accepting Or Refusing A Drink.mp3', },
			{ trackNumber:'1•45', name:'P29 A1: Now You\'re Talking!', audioFile:'1-45 Unit 3 P29 A1_ Now You\'re Talking!.mp3', },
			{ trackNumber:'1•46', name:'P29 A2: Now You\'re Talking!', audioFile:'1-46 Unit 3 P29 A2_ Now You\'re Talking!.mp3', },
			{ trackNumber:'1•47', name:'P29 A3: Now You\'re Talking!', audioFile:'1-47 Unit 3 P29 A3_ Now You\'re Talking!.mp3', },
			{ subheading:'Unit 4' },
			{ trackNumber:'1•48', name:'P32 A1: Key Phrases: Introducing Someone', audioFile:'1-48 Unit 4 P32 A1_ Key Phrases_ Introducing Someone.mp3', },
			{ trackNumber:'1•49', name:'P32 A2: Introducing Someone', audioFile:'1-49 Unit 4 P32 A2_ Introducing Someone.mp3', },
			{ trackNumber:'1•50', name:'P33 A1: Key Phrases: Talking About Family', audioFile:'1-50 Unit 4 P33 A1_ Key Phrases_ Talking About Family.mp3', },
			{ trackNumber:'1•51', name:'P33 A2: Talking About Family', audioFile:'1-51 Unit 4 P33 A2_ Talking About Family.mp3', },
			{ trackNumber:'1•52', name:'P33 A3: Key Phrases: Talking About Family: Children', audioFile:'1-52 Unit 4 P33 A3_ Key Phrases_ Talking About Family_ Children.mp3', },
			{ trackNumber:'1•53', name:'P33 A4: Talking About Family', audioFile:'1-53 Unit 4 P33 A4_ Talking About Family.mp3', },
			{ trackNumber:'1•54', name:'P34 A1: Key Phrases: Asking And Giving Someone\'s Age', audioFile:'1-54 Unit 4 P34 A1_ Key Phrases_ Asking And Giving Someone\'s Age.mp3', },
			{ trackNumber:'1•55', name:'P34 A2: Numbers 11-19', audioFile:'1-55 Unit 4 P34 A2_ Numbers 11-19.mp3', },
			{ trackNumber:'1•56', name:'P34 A3: Asking And Giving Someone\'s Age', audioFile:'1-56 Unit 4 P34 A3_ Asking And Giving Someone\'s Age.mp3', },
			{ trackNumber:'1•57', name:'P35 A1: Numbers 20-25', audioFile:'1-57 Unit 4 P35 A1_ Numbers 20-25.mp3', },
			{ trackNumber:'1•58', name:'P35 A2: Numbers 26-29', audioFile:'1-58 Unit 4 P35 A2_ Numbers 26-29.mp3', },
			{ trackNumber:'1•59', name:'P35 A3: Numbers 30, 40, 50, 60, 70, 80, 90, 100', audioFile:'1-59 Unit 4 P35 A3_ Numbers 30, 40, 50, 60, 70, 80, 90, 100.mp3', },
			{ trackNumber:'1•60', name:'P35 A5: Numbers Up To 100', audioFile:'1-60 Unit 4 P35 A5_ Numbers Up To 100.mp3', },
			{ trackNumber:'1•61', name:'P37 A1: Now You\'re Talking!', audioFile:'1-61 Unit 4 P37 A1_ Now You\'re Talking!.mp3', },
			{ trackNumber:'1•62', name:'P37 A2: Now You\'re Talking!', audioFile:'1-62 Unit 4 P37 A2_ Now You\'re Talking!.mp3', },
			{ trackNumber:'1•63', name:'P37 A3: Now You\'re Talking!', audioFile:'1-63 Unit 4 P37 A3_ Now You\'re Talking!.mp3', },
			{ subheading:'Kontrollpunkt 1' },
			{ trackNumber:'1•64', name:'P39 A2', audioFile:'1-64 Kontrollpunkt 1 P39 A2.mp3', },
			{ trackNumber:'1•65', name:'P39 A3', audioFile:'1-65 Kontrollpunkt 1 P39 A3.mp3', },
			{ trackNumber:'1•66', name:'P39 A4', audioFile:'1-66 Kontrollpunkt 1 P39 A4.mp3', },
			{ trackNumber:'1•67', name:'P40 A5', audioFile:'1-67 Kontrollpunkt 1 P40 A5.mp3', },
			{ trackNumber:'1•68', name:'P40 A7', audioFile:'1-68 Kontrollpunkt 1 P40 A7.mp3', },
			{ subheading:'Unit 5' },
			{ trackNumber:'1•69', name:'P44 A1: Key Phrases: Enquiring About Places In Town', audioFile:'1-69 Unit 5 P44 A1_ Key Phrases_ Enquiring About Places In Town.mp3', },
			{ trackNumber:'1•70', name:'P44 A2: Enquiring About Places In Town', audioFile:'1-70 Unit 5 P44 A2_ Enquiring About Places In Town.mp3', },
			{ trackNumber:'1•71', name:'P44 A3: Enquiring About Places In Town', audioFile:'1-71 Unit 5 P44 A3_ Enquiring About Places In Town.mp3', },
			{ trackNumber:'1•72', name:'P45 A4: Key Phrases: Understanding Directions', audioFile:'1-72 Unit 5 P45 A4_ Key Phrases_ Understanding Directions.mp3', },
			{ trackNumber:'1•73', name:'P45 A5: Understanding Directions', audioFile:'1-73 Unit 5 P45 A5_ Understanding Directions.mp3', },
			{ trackNumber:'1•74', name:'P46 A1: Key Phrases: Following Simple Directions', audioFile:'1-74 Unit 5 P46 A1_ Key Phrases_ Following Simple Directions.mp3', },
			{ trackNumber:'1•75', name:'P46 A2: Following Simple Directions', audioFile:'1-75 Unit 5 P46 A2_ Following Simple Directions.mp3', },
			{ trackNumber:'1•76', name:'P47 A1: Key Phrases: Asking For Help With Understanding', audioFile:'1-76 Unit 5 P47 A1_ Key Phrases_ Asking For Help With Understanding.mp3', },
			{ trackNumber:'1•77', name:'P47 A2: Asking For Help With Understanding', audioFile:'1-77 Unit 5 P47 A2_ Asking For Help With Understanding.mp3', },
			{ trackNumber:'1•78', name:'P49 A1: Now You\'re Talking!', audioFile:'1-78 Unit 5 P49 A1_ Now You\'re Talking!.mp3', },
			{ trackNumber:'1•79', name:'P49 A2: Now You\'re Talking!', audioFile:'1-79 Unit 5 P49 A2_ Now You\'re Talking!.mp3', },
			{ trackNumber:'1•80', name:'P49 A3: Now You\'re Talking!', audioFile:'1-80 Unit 5 P49 A3_ Now You\'re Talking!.mp3', },
			{ trackNumber:'1•81', name:'P49 A4: Now You\'re Talking!', audioFile:'1-81 Unit 5 P49 A4_ Now You\'re Talking!.mp3', },
		]
	},
	{
		title: 'Talk German 1 [Disc 2]',
		folder: 'talk-german-1-disc-2',
		colour: '#c41718',
		playlist: [
			{ subheading:'Unit 6' },
			{ trackNumber:'2•01', name:'P52 A1: Key Phrases: Asking For What You Want', audioFile:'2-01 Unit 6 P52 A1_ Key Phrases_ Asking For What You Want.mp3', },
			{ trackNumber:'2•02', name:'P52 A2: Asking For What You Want', audioFile:'2-02 Unit 6 P52 A2_ Asking For What You Want.mp3', },
			{ trackNumber:'2•03', name:'P52 A3: Asking For What You Want', audioFile:'2-03 Unit 6 P52 A3_ Asking For What You Want.mp3', },
			{ trackNumber:'2•04', name:'P53 A4: Key Phrases: Understanding The Assistant', audioFile:'2-04 Unit 6 P53 A4_ Key Phrases_ Understanding The Assistant.mp3', },
			{ trackNumber:'2•05', name:'P53 A5 & 6: Understanding The Assistant', audioFile:'2-05 Unit 6 P53 A5 & 6_ Understanding The Assistant.mp3', },
			{ trackNumber:'2•06', name:'P54 A1: Key Phrases: Buying The Quantity You Want', audioFile:'2-06 Unit 6 P54 A1_ Key Phrases_ Buying The Quantity You Want.mp3', },
			{ trackNumber:'2•07', name:'P54 A2: Buying The Quantity You Want: Dieter\'s Shopping List', audioFile:'2-07 Unit 6 P54 A2_ Buying The Quantity You Want_ Dieter\'s Shopping List.mp3', },
			{ trackNumber:'2•08', name:'P54 A3: Buying The Quantity You Want', audioFile:'2-08 Unit 6 P54 A3_ Buying The Quantity You Want.mp3', },
			{ trackNumber:'2•09', name:'P54 A4: Buying The Quantity You Want: Gerlinde\'s Shopping List', audioFile:'2-09 Unit 6 P54 A4_ Buying The Quantity You Want_ Gerlinde\'s Shopping List.mp3', },
			{ trackNumber:'2•10', name:'P55 A1: Key Phrases: Dealing With Money', audioFile:'2-10 Unit 6 P55 A1_ Key Phrases_ Dealing With Money.mp3', },
			{ trackNumber:'2•11', name:'P55 A2: Dealing With Money', audioFile:'2-11 Unit 6 P55 A2_ Dealing With Money.mp3', },
			{ trackNumber:'2•12', name:'P57 A1: Now You\'re Talking!: Auf Dem Markt', audioFile:'2-12 Unit 6 P57 A1_ Now You\'re Talking!_ Auf Dem Markt.mp3', },
			{ trackNumber:'2•13', name:'P57 A2: Now You\'re Talking!: Im Lebensmittelgeschäft', audioFile:'2-13 Unit 6 P57 A2_ Now You\'re Talking!_ Im Lebensmittelgeschäft.mp3', },
			{ trackNumber:'2•14', name:'P57 A3: Now You\'re Talking!: Changing Money At The Bank', audioFile:'2-14 Unit 6 P57 A3_ Now You\'re Talking!_ Changing Money At The Bank.mp3', },
			{ subheading:'Unit 7' },
			{ trackNumber:'2•15', name:'P60 A1: Key Phrases: Finding The Right Department: Wo Finde Ich...', audioFile:'2-15 Unit 7 P60 A1_ Key Phrases_ Finding The Right Department_ Wo Finde Ich....mp3', },
			{ trackNumber:'2•16', name:'P60 A3: Finding The Right Department', audioFile:'2-16 Unit 7 P60 A3_ Finding The Right Department.mp3', },
			{ trackNumber:'2•17', name:'P61 A4: Key Phrases: … In A Department Store', audioFile:'2-17 Unit 7 P61 A4_ Key Phrases_ … In A Department Store.mp3', },
			{ trackNumber:'2•18', name:'P61 A5: … In A Department Store', audioFile:'2-18 Unit 7 P61 A5_ … In A Department Store.mp3', },
			{ trackNumber:'2•19', name:'P61 A6: … In A Department Store', audioFile:'2-19 Unit 7 P61 A6_ … In A Department Store.mp3', },
			{ trackNumber:'2•20', name:'P62 A1: Key Phrases: Getting Just What You Want: Ich Suche...', audioFile:'2-20 Unit 7 P62 A1_ Key Phrases_ Getting Just What You Want_ Ich Suche....mp3', },
			{ trackNumber:'2•21', name:'P62 A2: Getting Just What You Want: Aber', audioFile:'2-21 Unit 7 P62 A2_ Getting Just What You Want_ Aber.mp3', },
			{ trackNumber:'2•22', name:'P62 A3: Getting Just What You Want', audioFile:'2-22 Unit 7 P62 A3_ Getting Just What You Want.mp3', },
			{ trackNumber:'2•23', name:'P63 A1: Key Phrases: Understanding Opening Times', audioFile:'2-23 Unit 7 P63 A1_ Key Phrases_ Understanding Opening Times.mp3', },
			{ trackNumber:'2•24', name:'P63 A3: Understanding Opening Times', audioFile:'2-24 Unit 7 P63 A3_ Understanding Opening Times.mp3', },
			{ trackNumber:'2•25', name:'P65 A1: Now You\'re Talking!', audioFile:'2-25 Unit 7 P65 A1_ Now You\'re Talking!.mp3', },
			{ trackNumber:'2•26', name:'P65 A2: Now You\'re Talking!', audioFile:'2-26 Unit 7 P65 A2_ Now You\'re Talking!.mp3', },
			{ trackNumber:'2•27', name:'P65 A3: Now You\'re Talking!', audioFile:'2-27 Unit 7 P65 A3_ Now You\'re Talking!.mp3', },
			{ subheading:'Kontrollpunkt 2' },
			{ trackNumber:'2•28', name:'P68 A4', audioFile:'2-28 Kontrollpunkt 2 P68 A4.mp3', },
			{ trackNumber:'2•29', name:'P68 A5', audioFile:'2-29 Kontrollpunkt 2 P68 A5.mp3', },
			{ trackNumber:'2•30', name:'P68 A6', audioFile:'2-30 Kontrollpunkt 2 P68 A6.mp3', },
			{ subheading:'Unit 8' },
			{ trackNumber:'2•31', name:'P72 A1: Key Phrases: Checking In At Hotel Reception', audioFile:'2-31 Unit 8 P72 A1_ Key Phrases_ Checking In At Hotel Reception.mp3', },
			{ trackNumber:'2•32', name:'P72 A2: Checking In At Hotel Reception', audioFile:'2-32 Unit 8 P72 A2_ Checking In At Hotel Reception.mp3', },
			{ trackNumber:'2•33', name:'P72 A3: Checking In At Hotel Reception', audioFile:'2-33 Unit 8 P72 A3_ Checking In At Hotel Reception.mp3', },
			{ trackNumber:'2•34', name:'P73 A1: Key Phrases: Asking For A Hotel Room', audioFile:'2-34 Unit 8 P73 A1_ Key Phrases_ Asking For A Hotel Room.mp3', },
			{ trackNumber:'2•35', name:'P73 A2: Asking For A Hotel Room', audioFile:'2-35 Unit 8 P73 A2_ Asking For A Hotel Room.mp3', },
			{ trackNumber:'2•36', name:'P73 A3: German Alphabet A-Z Ä Ö Ü', audioFile:'2-36 Unit 8 P73 A3_ German Alphabet A-Z Ä Ö Ü.mp3', },
			{ trackNumber:'2•37', name:'P73 A4: Asking For A Hotel Room', audioFile:'2-37 Unit 8 P73 A4_ Asking For A Hotel Room.mp3', },
			{ trackNumber:'2•38', name:'P74 A1: Key Phrases: Booking Ahead', audioFile:'2-38 Unit 8 P74 A1_ Key Phrases_ Booking Ahead.mp3', },
			{ trackNumber:'2•39', name:'P74 A2: Booking Ahead', audioFile:'2-39 Unit 8 P74 A2_ Booking Ahead.mp3', },
			{ trackNumber:'2•40', name:'P75 A1: Key Phrases: Enquiring About Facilities', audioFile:'2-40 Unit 8 P75 A1_ Key Phrases_ Enquiring About Facilities.mp3', },
			{ trackNumber:'2•41', name:'P75 A2 & 3: Enquiring About Facilities', audioFile:'2-41 Unit 8 P75 A2 & 3_ Enquiring About Facilities.mp3', },
			{ trackNumber:'2•42', name:'P75 A4: Enquiring About Facilities', audioFile:'2-42 Unit 8 P75 A4_ Enquiring About Facilities.mp3', },
			{ trackNumber:'2•43', name:'P77 A1: Now You\'re Talking!', audioFile:'2-43 Unit 8 P77 A1_ Now You\'re Talking!.mp3', },
			{ trackNumber:'2•44', name:'P77 A2: Now You\'re Talking!', audioFile:'2-44 Unit 8 P77 A2_ Now You\'re Talking!.mp3', },
			{ trackNumber:'2•45', name:'P77 A3: Now You\'re Talking!', audioFile:'2-45 Unit 8 P77 A3_ Now You\'re Talking!.mp3', },
			{ subheading:'Unit 9' },
			{ trackNumber:'2•46', name:'P80 A1: Key Phrases: Asking About Public Transport', audioFile:'2-46 Unit 9 P80 A1_ Key Phrases_ Asking About Public Transport.mp3', },
			{ trackNumber:'2•47', name:'P80 A2: Asking About Public Transport', audioFile:'2-47 Unit 9 P80 A2_ Asking About Public Transport.mp3', },
			{ trackNumber:'2•48', name:'P80 A3: Asking About Public Transport', audioFile:'2-48 Unit 9 P80 A3_ Asking About Public Transport.mp3', },
			{ trackNumber:'2•49', name:'P81 A4: Key Phrases: Arrival And Departure Times', audioFile:'2-49 Unit 9 P81 A4_ Key Phrases_ Arrival And Departure Times.mp3', },
			{ trackNumber:'2•50', name:'P81 A5: Arrival And Departure Times', audioFile:'2-50 Unit 9 P81 A5_ Arrival And Departure Times.mp3', },
			{ trackNumber:'2•51', name:'P81 A6: Arrival And Departure Times', audioFile:'2-51 Unit 9 P81 A6_ Arrival And Departure Times.mp3', },
			{ trackNumber:'2•52', name:'P82 A1: Key Phrases: Buying Tickets', audioFile:'2-52 Unit 9 P82 A1_ Key Phrases_ Buying Tickets.mp3', },
			{ trackNumber:'2•53', name:'P82 A2: Buying Tickets', audioFile:'2-53 Unit 9 P82 A2_ Buying Tickets.mp3', },
			{ trackNumber:'2•54', name:'P83 A4: Key Phrases: Checking Travel Details', audioFile:'2-54 Unit 9 P83 A4_ Key Phrases_ Checking Travel Details.mp3', },
			{ trackNumber:'2•55', name:'P83 A5: Checking Travel Details', audioFile:'2-55 Unit 9 P83 A5_ Checking Travel Details.mp3', },
			{ trackNumber:'2•56', name:'P85 A1: Now You\'re Talking!', audioFile:'2-56 Unit 9 P85 A1_ Now You\'re Talking!.mp3', },
			{ trackNumber:'2•57', name:'P85 A2: Now You\'re Talking!', audioFile:'2-57 Unit 9 P85 A2_ Now You\'re Talking!.mp3', },
			{ trackNumber:'2•58', name:'P85 A3: Now You\'re Talking!', audioFile:'2-58 Unit 9 P85 A3_ Now You\'re Talking!.mp3', },
			{ subheading:'Unit 10' },
			{ trackNumber:'2•59', name:'P88 A1: Key Phrases: Reading The Menu', audioFile:'2-59 Unit 10 P88 A1_ Key Phrases_ Reading The Menu.mp3', },
			{ trackNumber:'2•60', name:'P88 A2: Reading The Menu', audioFile:'2-60 Unit 10 P88 A2_ Reading The Menu.mp3', },
			{ trackNumber:'2•61', name:'P89 A1: Key Phrases: Ordering A Meal', audioFile:'2-61 Unit 10 P89 A1_ Key Phrases_ Ordering A Meal.mp3', },
			{ trackNumber:'2•62', name:'P89 A2: Ordering A Meal: Also', audioFile:'2-62 Unit 10 P89 A2_ Ordering A Meal_ Also.mp3', },
			{ trackNumber:'2•63', name:'P89 A3: Ordering A Meal', audioFile:'2-63 Unit 10 P89 A3_ Ordering A Meal.mp3', },
			{ trackNumber:'2•64', name:'P89 A4: Ordering A Meal', audioFile:'2-64 Unit 10 P89 A4_ Ordering A Meal.mp3', },
			{ trackNumber:'2•65', name:'P90 A1: Key Phrases: Choosing Cakes And Desserts', audioFile:'2-65 Unit 10 P90 A1_ Key Phrases_ Choosing Cakes And Desserts.mp3', },
			{ trackNumber:'2•66', name:'P90 A2: Choosing Cakes And Desserts', audioFile:'2-66 Unit 10 P90 A2_ Choosing Cakes And Desserts.mp3', },
			{ trackNumber:'2•67', name:'P90 A3: Choosing Cakes And Desserts', audioFile:'2-67 Unit 10 P90 A3_ Choosing Cakes And Desserts.mp3', },
			{ trackNumber:'2•68', name:'P91 A1: Key Phrases: Finishing The Meal', audioFile:'2-68 Unit 10 P91 A1_ Key Phrases_ Finishing The Meal.mp3', },
			{ trackNumber:'2•69', name:'P91 A2: Finishing The Meal', audioFile:'2-69 Unit 10 P91 A2_ Finishing The Meal.mp3', },
			{ trackNumber:'2•70', name:'P91 A3: Finishing The Meal', audioFile:'2-70 Unit 10 P91 A3_ Finishing The Meal.mp3', },
			{ trackNumber:'2•71', name:'P93 A1: Now You\'re Talking!: Arriving In A Restaurant', audioFile:'2-71 Unit 10 P93 A1_ Now You\'re Talking!_ Arriving In A Restaurant.mp3', },
			{ trackNumber:'2•72', name:'P93 A2: Now You\'re Talking!: Ask What They Recommend', audioFile:'2-72 Unit 10 P93 A2_ Now You\'re Talking!_ Ask What They Recommend.mp3', },
			{ trackNumber:'2•73', name:'P93 A3: Now You\'re Talking!: Understanding The Waitress', audioFile:'2-73 Unit 10 P93 A3_ Now You\'re Talking!_ Understanding The Waitress.mp3', },
			{ trackNumber:'2•74', name:'P93 A4: Now You\'re Talking!: Now You\'ve Finished Your Meal', audioFile:'2-74 Unit 10 P93 A4_ Now You\'re Talking!_ Now You\'ve Finished Your Meal.mp3', },
			{ subheading:'Kontrollpunkt 3' },
			{ trackNumber:'2•75', name:'P95 A2', audioFile:'2-75 Kontrollpunkt 3 P95 A2.mp3', },
			{ trackNumber:'2•76', name:'P96 A5', audioFile:'2-76 Kontrollpunkt 3 P96 A5.mp3', },
			{ trackNumber:'2•77', name:'P97 A6', audioFile:'2-77 Kontrollpunkt 3 P97 A6.mp3', },
			{ trackNumber:'2•78', name:'P97 A7', audioFile:'2-78 Kontrollpunkt 3 P97 A7.mp3', },
		]
	},
	{
		title: 'Studio 21: A1 Intensivtraining',
		folder: 'studio-21-a1-intensivtraining',
		colour: '#f58b0f',
		playlist: [
			{ name:'Track 01', audioFile:'01.mp3', },
			{ name:'Track 02', audioFile:'02.mp3', },
			{ name:'Track 03', audioFile:'03.mp3', },
			{ name:'Track 04', audioFile:'04.mp3', },
			{ name:'Track 05', audioFile:'05.mp3', },
			{ name:'Track 06', audioFile:'06.mp3', },
			{ name:'Track 07', audioFile:'07.mp3', },
			{ name:'Track 08', audioFile:'08.mp3', },
			{ name:'Track 09', audioFile:'09.mp3', },
			{ name:'Track 10', audioFile:'10.mp3', },
			{ name:'Track 11', audioFile:'11.mp3', },
			{ name:'Track 12', audioFile:'12.mp3', },
			{ name:'Track 13', audioFile:'13.mp3', },
			{ name:'Track 14', audioFile:'14.mp3', },
			{ name:'Track 15', audioFile:'15.mp3', },
			{ name:'Track 16', audioFile:'16.mp3', },
			{ name:'Track 17', audioFile:'17.mp3', },
			{ name:'Track 18', audioFile:'18.mp3', },
			{ name:'Track 19', audioFile:'19.mp3', },
			{ name:'Track 20', audioFile:'20.mp3', },
			{ name:'Track 21', audioFile:'21.mp3', },
			{ name:'Track 22', audioFile:'22.mp3', },
			{ name:'Track 23', audioFile:'23.mp3', },
			{ name:'Track 24', audioFile:'24.mp3', },
			{ name:'Track 25', audioFile:'25.mp3', },
			{ name:'Track 26', audioFile:'26.mp3', },
			{ name:'Track 27', audioFile:'27.mp3', },
			{ name:'Track 28', audioFile:'28.mp3', },
			{ name:'Track 29', audioFile:'29.mp3', },
			{ name:'Track 30', audioFile:'30.mp3', },
			{ name:'Track 31', audioFile:'31.mp3', },
			{ name:'Track 32', audioFile:'32.mp3', },
			{ name:'Track 33', audioFile:'33.mp3', },
			{ name:'Track 34', audioFile:'34.mp3', },
			{ name:'Track 35', audioFile:'35.mp3', },
			{ name:'Track 36', audioFile:'36.mp3', },
			{ name:'Track 37', audioFile:'37.mp3', },
			{ name:'Track 38', audioFile:'38.mp3', },
			{ name:'Track 39', audioFile:'39.mp3', },
		]
	},
];