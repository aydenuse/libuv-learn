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
include CMakeFiles/WorkerHandle.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/WorkerHandle.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/WorkerHandle.dir/flags.make

CMakeFiles/WorkerHandle.dir/src/pipe/worker.c.o: CMakeFiles/WorkerHandle.dir/flags.make
CMakeFiles/WorkerHandle.dir/src/pipe/worker.c.o: ../src/pipe/worker.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/mnt/d/Ayden/practice/algorithm-practice/libuv-demo/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building C object CMakeFiles/WorkerHandle.dir/src/pipe/worker.c.o"
	/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/WorkerHandle.dir/src/pipe/worker.c.o   -c /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/src/pipe/worker.c

CMakeFiles/WorkerHandle.dir/src/pipe/worker.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/WorkerHandle.dir/src/pipe/worker.c.i"
	/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/src/pipe/worker.c > CMakeFiles/WorkerHandle.dir/src/pipe/worker.c.i

CMakeFiles/WorkerHandle.dir/src/pipe/worker.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/WorkerHandle.dir/src/pipe/worker.c.s"
	/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/src/pipe/worker.c -o CMakeFiles/WorkerHandle.dir/src/pipe/worker.c.s

CMakeFiles/WorkerHandle.dir/src/pipe/worker.c.o.requires:

.PHONY : CMakeFiles/WorkerHandle.dir/src/pipe/worker.c.o.requires

CMakeFiles/WorkerHandle.dir/src/pipe/worker.c.o.provides: CMakeFiles/WorkerHandle.dir/src/pipe/worker.c.o.requires
	$(MAKE) -f CMakeFiles/WorkerHandle.dir/build.make CMakeFiles/WorkerHandle.dir/src/pipe/worker.c.o.provides.build
.PHONY : CMakeFiles/WorkerHandle.dir/src/pipe/worker.c.o.provides

CMakeFiles/WorkerHandle.dir/src/pipe/worker.c.o.provides.build: CMakeFiles/WorkerHandle.dir/src/pipe/worker.c.o


# Object files for target WorkerHandle
WorkerHandle_OBJECTS = \
"CMakeFiles/WorkerHandle.dir/src/pipe/worker.c.o"

# External object files for target WorkerHandle
WorkerHandle_EXTERNAL_OBJECTS =

WorkerHandle: CMakeFiles/WorkerHandle.dir/src/pipe/worker.c.o
WorkerHandle: CMakeFiles/WorkerHandle.dir/build.make
WorkerHandle: CMakeFiles/WorkerHandle.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/mnt/d/Ayden/practice/algorithm-practice/libuv-demo/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking C executable WorkerHandle"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/WorkerHandle.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/WorkerHandle.dir/build: WorkerHandle

.PHONY : CMakeFiles/WorkerHandle.dir/build

CMakeFiles/WorkerHandle.dir/requires: CMakeFiles/WorkerHandle.dir/src/pipe/worker.c.o.requires

.PHONY : CMakeFiles/WorkerHandle.dir/requires

CMakeFiles/WorkerHandle.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/WorkerHandle.dir/cmake_clean.cmake
.PHONY : CMakeFiles/WorkerHandle.dir/clean

CMakeFiles/WorkerHandle.dir/depend:
	cd /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /mnt/d/Ayden/practice/algorithm-practice/libuv-demo /mnt/d/Ayden/practice/algorithm-practice/libuv-demo /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/build /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/build /mnt/d/Ayden/practice/algorithm-practice/libuv-demo/build/CMakeFiles/WorkerHandle.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/WorkerHandle.dir/depend

