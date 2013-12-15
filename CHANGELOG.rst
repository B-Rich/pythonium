0.6.0
	- TBD

0.5.0
	- Web Console available online @ http://hypermove.net/pythonium-web-console/
	- Fix runtests.py: avoid envoy, made it work on Windows (Peter Ljunglöf)
	- Clean up main function (Peter Ljunglöf)
	- Fixed namespaced method definitions. Previously defining a method FOO would override any previous definition of function FOO.
	- Rework from ... import ... and import ...
	- Renamed ``JS`` function to ``jscode``
	- ``new`` function as a new syntax ``new(Date)(1, 2, 3)`` cf. https://github.com/pythonium/pythonium/commit/a423709102338b084d669075b0ffa439beb0abfa
	- added ``jstype`` function which returns a javascript objects equivalent to Python object (missing implementation for list and dict)
	- ``print`` was defined in ``lib/builtins.py`` and must be used to log Python objects. ``console.log(fuuuu)`` must be used to log JavaScript objects.
	- rework ``dict`` so that it works more like CPython one.
	- fixed a bug where if two functions were nested and the nested function was a generator both functions were dubbed generators
	- replaced JS by jscode
	- added a minimal Tree.js example (Dirk Krause)
	- added assert
	- fixed nested loops
	- added del without slice support
	- fixed mro (multiple inheritance)
	- fixed repr
	- fixed lambda will full signature support
	- fixed thruth
	- added “SPAM if EGG else FOOBAR”
	- added a minimal HACKING file
	- added travis
	- added: bool as a func, callable, enumerate, getattr
	- rework map and range
	- added a lot of tests
