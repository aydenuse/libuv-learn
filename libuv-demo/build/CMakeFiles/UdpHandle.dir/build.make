# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.10

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /mnt/d/Ayden/practice/algorithm-practice/libuv-demo

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/build

# Include any dependencies generated for this target.
include CMakeFiles/UdpHandle.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/UdpHandle.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/UdpHandle.dir/flags.make

CMakeFiles/UdpHandle.dir/src/udpserver.c.o: CMakeFiles/UdpHandle.dir/flags.make
CMakeFiles/UdpHandle.dir/src/udpserver.c.o: ../src/udpserver.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/mnt/d/Ayden/practice/algorithm-practice/libuv-demo/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building C object CMakeFiles/UdpHandle.dir/src/udpserver.c.o"
	/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/UdpHandle.dir/src/udpserver.c.o   -c /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/src/udpserver.c

CMakeFiles/UdpHandle.dir/src/udpserver.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/UdpHandle.dir/src/udpserver.c.i"
	/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/src/udpserver.c > CMakeFiles/UdpHandle.dir/src/udpserver.c.i

CMakeFiles/UdpHandle.dir/src/udpserver.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/UdpHandle.dir/src/udpserver.c.s"
	/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/src/udpserver.c -o CMakeFiles/UdpHandle.dir/src/udpserver.c.s

CMakeFiles/UdpHandle.dir/src/udpserver.c.o.requires:

.PHONY : CMakeFiles/UdpHandle.dir/src/udpserver.c.o.requires

CMakeFiles/UdpHandle.dir/src/udpserver.c.o.provides: CMakeFiles/UdpHandle.dir/src/udpserver.c.o.requires
	$(MAKE) -f CMakeFiles/UdpHandle.dir/build.make CMakeFiles/UdpHandle.dir/src/udpserver.c.o.provides.build
.PHONY : CMakeFiles/UdpHandle.dir/src/udpserver.c.o.provides

CMakeFiles/UdpHandle.dir/src/udpserver.c.o.provides.build: CMakeFiles/UdpHandle.dir/src/udpserver.c.o


# Object files for target UdpHandle
UdpHandle_OBJECTS = \
"CMakeFiles/UdpHandle.dir/src/udpserver.c.o"

# External object files for target UdpHandle
UdpHandle_EXTERNAL_OBJECTS =

UdpHandle: CMakeFiles/UdpHandle.dir/src/udpserver.c.o
UdpHandle: CMakeFiles/UdpHandle.dir/build.make
UdpHandle: CMakeFiles/UdpHandle.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/mnt/d/Ayden/practice/algorithm-practice/libuv-demo/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking C executable UdpHandle"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/UdpHandle.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/UdpHandle.dir/build: UdpHandle

.PHONY : CMakeFiles/UdpHandle.dir/build

CMakeFiles/UdpHandle.dir/requires: CMakeFiles/UdpHandle.dir/src/udpserver.c.o.requires

.PHONY : CMakeFiles/UdpHandle.dir/requires

CMakeFiles/UdpHandle.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/UdpHandle.dir/cmake_clean.cmake
.PHONY : CMakeFiles/UdpHandle.dir/clean

CMakeFiles/UdpHandle.dir/depend:
	cd /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /mnt/d/Ayden/practice/algorithm-practice/libuv-demo /mnt/d/Ayden/practice/algorithm-practice/libuv-demo /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/build /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/build /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/build/CMakeFiles/UdpHandle.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/UdpHandle.dir/depend

