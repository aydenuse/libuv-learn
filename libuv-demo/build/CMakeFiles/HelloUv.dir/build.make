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
include CMakeFiles/HelloUv.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/HelloUv.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/HelloUv.dir/flags.make

CMakeFiles/HelloUv.dir/src/hello_libuv.c.o: CMakeFiles/HelloUv.dir/flags.make
CMakeFiles/HelloUv.dir/src/hello_libuv.c.o: ../src/hello_libuv.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/mnt/d/Ayden/practice/algorithm-practice/libuv-demo/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building C object CMakeFiles/HelloUv.dir/src/hello_libuv.c.o"
	/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/HelloUv.dir/src/hello_libuv.c.o   -c /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/src/hello_libuv.c

CMakeFiles/HelloUv.dir/src/hello_libuv.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/HelloUv.dir/src/hello_libuv.c.i"
	/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/src/hello_libuv.c > CMakeFiles/HelloUv.dir/src/hello_libuv.c.i

CMakeFiles/HelloUv.dir/src/hello_libuv.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/HelloUv.dir/src/hello_libuv.c.s"
	/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/src/hello_libuv.c -o CMakeFiles/HelloUv.dir/src/hello_libuv.c.s

CMakeFiles/HelloUv.dir/src/hello_libuv.c.o.requires:

.PHONY : CMakeFiles/HelloUv.dir/src/hello_libuv.c.o.requires

CMakeFiles/HelloUv.dir/src/hello_libuv.c.o.provides: CMakeFiles/HelloUv.dir/src/hello_libuv.c.o.requires
	$(MAKE) -f CMakeFiles/HelloUv.dir/build.make CMakeFiles/HelloUv.dir/src/hello_libuv.c.o.provides.build
.PHONY : CMakeFiles/HelloUv.dir/src/hello_libuv.c.o.provides

CMakeFiles/HelloUv.dir/src/hello_libuv.c.o.provides.build: CMakeFiles/HelloUv.dir/src/hello_libuv.c.o


# Object files for target HelloUv
HelloUv_OBJECTS = \
"CMakeFiles/HelloUv.dir/src/hello_libuv.c.o"

# External object files for target HelloUv
HelloUv_EXTERNAL_OBJECTS =

HelloUv: CMakeFiles/HelloUv.dir/src/hello_libuv.c.o
HelloUv: CMakeFiles/HelloUv.dir/build.make
HelloUv: CMakeFiles/HelloUv.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/mnt/d/Ayden/practice/algorithm-practice/libuv-demo/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking C executable HelloUv"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/HelloUv.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/HelloUv.dir/build: HelloUv

.PHONY : CMakeFiles/HelloUv.dir/build

CMakeFiles/HelloUv.dir/requires: CMakeFiles/HelloUv.dir/src/hello_libuv.c.o.requires

.PHONY : CMakeFiles/HelloUv.dir/requires

CMakeFiles/HelloUv.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/HelloUv.dir/cmake_clean.cmake
.PHONY : CMakeFiles/HelloUv.dir/clean

CMakeFiles/HelloUv.dir/depend:
	cd /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /mnt/d/Ayden/practice/algorithm-practice/libuv-demo /mnt/d/Ayden/practice/algorithm-practice/libuv-demo /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/build /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/build /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/build/CMakeFiles/HelloUv.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/HelloUv.dir/depend

