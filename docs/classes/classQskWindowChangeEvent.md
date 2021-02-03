---
title: QskWindowChangeEvent
layout: docs

---




Inherits from QskEvent

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskWindowChangeEvent](/docs/classes/classQskWindowChangeEvent/#function-qskwindowchangeevent)**(QQuickWindow * oldWindow, QQuickWindow * window) |
| QQuickWindow * | **[window](/docs/classes/classQskWindowChangeEvent/#function-window)**() const |
| QQuickWindow * | **[oldWindow](/docs/classes/classQskWindowChangeEvent/#function-oldwindow)**() const |
| QskWindowChangeEvent * | **[clone](/docs/classes/classQskWindowChangeEvent/#function-clone)**() const override |

## Public Functions Documentation

### function QskWindowChangeEvent

```cpp
QskWindowChangeEvent(
    QQuickWindow * oldWindow,
    QQuickWindow * window
)
```


### function window

```cpp
inline QQuickWindow * window() const
```


### function oldWindow

```cpp
inline QQuickWindow * oldWindow() const
```


### function clone

```cpp
QskWindowChangeEvent * clone() const override
```


-------------------------------

Updated on  3 February 2021 at 15:05:39 CET