# Awesome Tools

**Android Studio** :

It is Integrated development Enviroment (IDE) and Used for Android App Development.

    How to use ?

    It is a GUI based tool,so simply run and use it.

 For more info [read](https://developer.android.com/studio/intro/ "read").

**Burp Suite** :

Burp community version includes few essential manual tools from the Burp platform,
however some of the
features are available only in paid version.

    How to use it?

	It is one of the good GUI based tool for pentesters to use for pentesting.
	It is simple to run and use:).
For more info [read](https://portswigger.net/burp/).

**Bytecode Viewer** :

Free open source user friendly and advance java Reverse engineering suite
with six diffrent java decompilers two byte code editors,a java compiler,plugins,
jars and many more

    How to use ?

    drag and drop the file(APK,class,jar,dex,zip) and explore it.

for more info [read](https://bytecodeviewer.com/)

**Frida** :

It is a toolkit which allows run time hooking into application for developers,
reverse-engineers and security researchers.

    How to use ?

    adb push frida-server /data/local/tmp
	adb shell "chmod+x /data/local/tmp/frida-server"
	adb shell "/data/local/tmp/frida-server &"

**JADX-GUI** :

JADX has Command line and GUI tools for produce Java source code from Android
Dex and JADX-GUI is UI based.

	How to use ?

	It is gui based tool and support(APK,zip etc.)file formats to analyse in 
	java source code.
For more info [read](https://github.com/skylot/jadx)

**JD-GUI** :

It is a standalone graphical utility it helps in displays
Java sources from CLASS files.

	How to use ?

	It is GUI tool and just need to open class file to read it in java source code.
For more info [read](https://github.com/java-decompiler/jd-gui)

**Logcat - Pidcat** :

It shows log entries for processes from a specific application package.

	How to use ?

	Run it and it will show you options to use :) 
For more info [read](https://github.com/JakeWharton/pidcat)

**MobSF** :

Mobile Security Framework (MobSF) is an automated, all-in-one mobile application
(Android/iOS/Windows)
pen-testing framework capable of performing static, dynamic and malware analysis

	How to use ?

	Run it docker app of MobSF and it i ask you for the password of lab.
	once password is entered ,go and browse 127.0.0.1:8000 you will see MobSF interface.
	Drag and drop to analyse apk.
For more info [read](https://github.com/MobSF/Mobile-Security-Framework-MobSF)

**SUPER-Analyzer** :

It is a command-line application that can be used in Windows, MacOS X and Linux,
that analyzes .apk
files in search for vulnerabilities.

	How to use ?

	Run it and give the absolute path of Apk
For more info [read](https://superanalyzer.rocks/)

**Wireshark** :

Wireshark is a free and open-source packet analyzer. It is used for network
troubleshooting, analysis,
software and communications protocol development, and education.

	How to use ?

	It has UI interface and easy to use.
For more info [read](https://www.wireshark.org/)

**Smali & baksmali** :

Smali/baksmali is an assembler/disassembler for the dex format used by dalvik,
Android's Java VM implementation.

	How to use ?

	java -jar smali-x.x.x.jar

**Radare2** :

Radare is a portable reversing framework that can Disassemble/assemble
many different architectures.

	How to use ?

	Use r2 to run it.
For more info [read](https://rada.re/r/)

**Mara Framework** :

MARA is a Mobile Application Reverse engineering and Analysis Framework.
It is a toolkit that puts together
commonly used mobile application reverse engineering and analysis tools.

	How to use ?

	Goto mara folder and run ./mara.sh it will show the supported options with mara-framework.
For more info [read](https://github.com/xtiankisutsa/MARA_Framework)

**SIGN** :

	How to use ?.
	java -jar sign.jar

**tcpdump** :

It is a powerful command-line packet analyzer; and libpcap for network traffic capture.

	How to use ?

	tcpdump --help and it wil show the available options for this command line tool.

**Objection** :

Objection is a runtime mobile exploration toolkit, powered by Frida It was built
with the aim of helping
assess mobile applications and their security posture without the need for a
jailbroken or rooted mobile device.

	How to use?

	Run objection --help and it will show all the available info/options for frida.
For more info [read](https://github.com/sensepost/objection)

**Drozer** :

It is a security pentesting framework.Drozer allows pentesters to search for
security vulnerabilities in apps and devices by assuming the role of an app
and interacting with the Dalvik VM.

	How to use ?

	Run drozer command and also install the drozer client(adb install agent.apk) 
	in Mobile device. 
	port forword using : adb forword tcp:31415 tcp:31415
	launch Drozer console using : drozer console connect
For more info [read](https://github.com/mwrlabs/drozer)

**Ghidra** :

A software reverse engineering (SRE) suite of tools developed by NSA's Research
Directorate and this reverse engineering tool helps to dig up the source code
of a proprietary program which further gives you the ability
to detect virus threats or potential bugs

	How to use ?

	got to Ghidra folder and run ./ghidraRun. It will open the GUI interface
	and you can use it.
For more info [read](https://ghidra-sre.org/)

**Cydia Impactor** :

You can use this tool to install IPA files on iOS and APK files on Android.
It also can help you exploit the series of Android "Master Key"	vulnerabilities.

	How to use ?

	Run Cydia and connect your IOS device to computer ,wait until it gets detected.
	Drag IPA to cydia impactor window and install.
	It will prompt for Apple ID and password and IPA file will be instlled 
	successfully.
For more info [read](http://www.cydiaimpactor.com/)

**Filezilla** :

It is used for transferring files over the Network.

	How to use ?

	Filezilla is GUI based so it is pretty easy to use :) just simply run !!!

**Putty** :

it is an SSH and telnet client..

	How to use it ?

	It has Ui interface,Simply run and use it.
For more info [read](https://www.putty.org/)

**Hopper Disassembler** :

Hopper Disassembler, the reverse engineering tool that lets you disassemble,
decompile and debug your applications.

	How to use it?

	Hopper Disassembler is UI based tool so simply run and use it.
For more info [read](https://www.hopperapp.com/)

**Metasploit** :

It is a penetration testing framework that enables pentesters to find,
exploit, and validate vulnerabilities.

	How to use ?

	To start metasploit use command "msfconsole"
For more info [read](https://www.offensive-security.com/metasploit-unleashed/requirements/)

**Sqlmap** :

sqlmap is an open source penetration testing tool that automates the process
of detecting and exploiting SQL injection flaws

	How to use ?

	just run sqlmap -h and it will show available options to use with it.
For more info [read](https://github.com/sqlmapproject/sqlmap)
		
**Nmap** :

Nmap Free Security Scanner, Port Scanner, & Network Exploration Tool.

	How to use ?
	
	nmap --help will show all the available options to use.
