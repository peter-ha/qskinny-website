---
title: QskWindowChangeEvent
layout: docs

---




Inherits from QskEvent

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskWindowChangeEvent](/docs/classes/class_qsk_window_change_event/#function-qskwindowchangeevent)**(QQuickWindow * oldWindow, QQuickWindow * window) |
| QQuickWindow * | **[window](/docs/classes/class_qsk_window_change_event/#function-window)**() const |
| QQuickWindow * | **[oldWindow](/docs/classes/class_qsk_window_change_event/#function-oldwindow)**() const |
| QskWindowChangeEvent * | **[clone](/docs/classes/class_qsk_window_change_event/#function-clone)**() const override |

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

Updated on 23 January 2021 at 09:50:33 CET