NAME = IRC Cloud

.PHONY: build open

build:
	node build.js
	# cp "assets/mac-ffmpegsumo.so" "build/$(NAME)/osx64/$(NAME).app/Contents/Frameworks/nwjs Framework.framework/Libraries/ffmpegsumo.so"

release:
	# OSX
	#-rm -f "build/$(NAME).dmg"
	# appdmg assets/dmg.json "build/$(NAME).dmg"

	# WINDOWS
	# makensis ./assets/installer.nsi

open:	kill
	open "./build/$(NAME)/osx64/$(NAME).app"

kill:
	-osascript -e 'quit app "IRC Cloud"' || true
	-sleep .5
