---
title: QskEvent
layout: docs

---


**Module:** **[Framework](/docs/modules/group___framework/)**



Inherits from QEvent

Inherited by [QskAnimatorEvent](/docs/classes/class_qsk_animator_event/), [QskGeometryChangeEvent](/docs/classes/class_qsk_geometry_change_event/), [QskGestureEvent](/docs/classes/class_qsk_gesture_event/), [QskPopupEvent](/docs/classes/class_qsk_popup_event/), [QskWindowChangeEvent](/docs/classes/class_qsk_window_change_event/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Type](/docs/classes/class_qsk_event/#enum-type)** { NoEvent = 53800, GeometryChange, WindowChange, PopupAdded, PopupRemoved, Gesture, Animator, MaxEvent = NoEvent + 50} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskEvent](/docs/classes/class_qsk_event/#function-qskevent)**(QskEvent::Type type) |

## Public Types Documentation

### enum Type

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NoEvent | 53800|   |
| GeometryChange | |   |
| WindowChange | |   |
| PopupAdded | |   |
| PopupRemoved | |   |
| Gesture | |   |
| Animator | |   |
| MaxEvent | NoEvent + 50|   |




## Public Functions Documentation

### function QskEvent

```cpp
QskEvent(
    QskEvent::Type type
)
```


-------------------------------

Updated on 23 January 2021 at 09:50:35 CET