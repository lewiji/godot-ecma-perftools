# Godot ECMAScript Performance Tools

Since the Godot ECMAscript module doesn't yet support profiling, this is a simple Godot project autoload script + TS decorator to enable quick profiling of any JS/TS function. It uses the native Godot OS module's microsecond timer to precisely measure timing in the JS thread.

## Install

* Add Performance.tsx and PerformanceDecorators.tsx to your Godot ECMAScript TypeScript project
* Compile project with `tsc`
* Add Performance.jsx as an Autoload Singleton in your Godot project settings, or attach as a script to a Node in your scene.

## Usage

* In the class file of the function you want to profile:
    * import { measure } from "../plugins/PerformanceDecorators";
    * Add @measure decorator to functions you want to time
    * Run project in Godot

The project will print timing information when that function is called to the Godot output.

