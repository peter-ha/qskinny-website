---
title: Scene graph
layout: docs

---




The most significant benefit of the Qt Quick graphics stack is its backend - a layer on top of hardware APIs (notably OpenGL). Instead of a simple immediate-mode drawing API like QPainter, the [implementation](http://doc.qt.io/qt-5/qtquick-visualcanvas-scenegraph.html) utilizes a [scene graph](https://en.wikipedia.org/wiki/Scene_graph) to minimize state changes between rendered frames.

While a minimal C++ scene graph API is exported by Qt, it is not the primary way to build user interfaces with Qt Quick. As such, QSkinny leverages its own code and private classes in Qt to provide additional support not found in Qt Quick:



* Text node creation
* Direct creation of QPainter-drawn textures
* Frames and borders with raised or sunken effects
* Vertex list generation for all types of gradients
The set of Qsk classes around the scene graph nodes is currently a lose collection of code sequences needed for implementing the Qsk Controls. Once these classes have become more stable the code fragments will be rearranged into a proper class design. 

-------------------------------

Updated on 22 January 2021 at 17:05:51 CET
