var app = new Vue({
	el: '#app',
	data: {
		windowHeight: '100vh',
		playInfo: {
			selectedSet: 0,
			selectedTrack: 0,
		},
		setSelect: false,
		sets,
	},
	computed: {
		currentSet() {
			return this.sets[this.playInfo.selectedSet];
		},
		currentSetFolder() {
			return "sets/" + this.currentSet.folder + "/";
		},
		currentTrack() {
			return this.currentSetFolder + this.currentSet.playlist[this.playInfo.selectedTrack].audioFile;
		},
		currentImg() {
			return this.currentSetFolder + "cover.png";
		},
	},
	methods: {
		getWindowHeight(event) {
			this.windowHeight = window.innerHeight + 'px';
		},
		selectSet(setNumber) {
			this.setSelect = false;
			this.playInfo.selectedSet = setNumber;
			this.playInfo.selectedTrack = this.currentSet.playlist[0].audioFile ? 0 : 1;
			this.$refs.player.load();
			this.storeData();
		},
		selectTrack(trackNumber) {
			this.playInfo.selectedTrack = trackNumber;
			this.$refs.player.load();
			this.$refs.player.play();
			this.storeData();
		},
		toggleSetSelect() {
			if(this.setSelect) {
				this.setSelect = false;
				setTimeout(() => {
					var element = document.querySelector(".currently-playing:not(:first-child)");
					if(element) element.scrollIntoView();
				}, 10);
			} else {
				this.setSelect = true;
			}
		},
		pad(number) {
			number = number.toString();
			return number.padStart(2, '0');
		},
		checkCurrentlyPlaying(trackNumber) {
			return trackNumber == this.playInfo.selectedTrack;
		},
		storeData() {
			var saveData = JSON.stringify(this.playInfo);
			localStorage.setItem('jamie_german', saveData);
		},
		getData() {
			var loadData = JSON.parse(localStorage.getItem('jamie_german'));
			if(loadData) this.playInfo = loadData;

			setTimeout(() => {
				var element = document.querySelector(".currently-playing:not(:first-child)");
				if(element) element.scrollIntoView();
			}, 10);

		},
		removeData() {
			localStorage.removeItem('jamie_german');
		},
	},
	mounted() {
		this.$nextTick(function() {
			window.addEventListener('resize', this.getWindowHeight);
			this.getWindowHeight();
			this.getData();
		});
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.getWindowHeight);
	}
});
