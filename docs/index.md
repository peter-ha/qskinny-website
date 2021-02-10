---
title: Introduction
layout: docs

---




The (Q)Skinny library contains a set of lightweight Qt Quick Controls. It is implemented to be 100% usable in C++, but can be used from C++ and/or QML application code. Being "skinny", the framework is intended to be both lightweight and skinnable.

The framework separates concerns between the API and logic of the controls themselves, the styling of these controls, and the delegated rendering of the controls to the screen.

```cpp
    void predictionReset();
    void predictionRequested( const QString& text );
```

digraph skinny {
  table [ shape=record, label="{
    QSkinny: key functionality and classes |
    {
        { Controls | <Controls>API, logic and layout of UI } |
        { Rendering | <Rendering>Delegation of rendering commands } |
        { Styling | <Styling>Visual configuration }
    }
  }"];

  QskControl [ URL="\ref QskControl"]
  QskLayout [ URL="\ref QskLayout"]
  QskSkinlet [ URL="\ref QskSkinlet"]
  QskGraphic [ URL="\ref QskGraphic"]
  QskSkin [ URL="\ref QskSkin"]
  QskSkinnable [ URL="\ref QskSkinnable"]

  table:Controls:s -> QskControl
  table:Controls:s -> QskLayout

  table:Rendering:s -> QskSkinlet
  table:Rendering:s -> QskGraphic

  table:Styling:s -> QskSkin
  table:Styling:s -> QskSkinnable
}


Besides establishing a more complete C++ API for Qt Quick application development, the QSkinny project offers:



* Special attention to resource requirements (i.e. memory consumption and start-up performance), with a number of [optimizations](/docs/pages/qskoptimizations/#page-qskoptimizations) enabled by default
* A [layout system](/docs/pages/qsklayouts/#page-qsklayouts) comparable to the one available for Qt Widgets
* A way to [skin](/docs/pages/qskskinning/#page-qskskinning) (theme/style) applications entirely from C++, including built-in support for CSS-like inheritance and animated transitions
* Better support for [vector image formats](/docs/pages/qskvectorgraphics/#page-qskvectorgraphics) to aid in scalable UI creation
Doing the implementation in C++ allows to make use of the [scene graph](/docs/pages/qsknodes/#page-qsknodes) classes. Building controls from scene graph nodes allows for a lighter implementation than found with stacking "heavier" objects like QObject or QQuickItem.

The current selection of implemented controls is driven by the needs of specific projects and therefore may feel a bit random. Conceptually, though, any type of control fits into QSkinny, as long as it is usable from C++ (as opposed to only QML).


# License

QSkinny is distributed under the terms of the QSkinny license.


# Platforms

QSkinny 0.0.1 might be source code compatible in all environments where you find Qt >= 5.6. Due to its use of private Qt headers, it might be necessary to recompile QSkinny for different Qt versions. 

-------------------------------

Updated on 10 February 2021 at 09:41:53 CET
