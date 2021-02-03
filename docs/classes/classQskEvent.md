---
title: QskEvent
layout: docs

---


**Module:** **[Framework](/docs/modules/group__Framework/)**



Inherits from QEvent

Inherited by [QskAnimatorEvent](/docs/classes/classQskAnimatorEvent/), [QskGeometryChangeEvent](/docs/classes/classQskGeometryChangeEvent/), [QskGestureEvent](/docs/classes/classQskGestureEvent/), [QskPopupEvent](/docs/classes/classQskPopupEvent/), [QskWindowChangeEvent](/docs/classes/classQskWindowChangeEvent/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Type](/docs/classes/classQskEvent/#enum-type)** { NoEvent = 53800, GeometryChange, WindowChange, PopupAdded, PopupRemoved, Gesture, Animator, MaxEvent = NoEvent + 50} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskEvent](/docs/classes/classQskEvent/#function-qskevent)**(QskEvent::Type type) |

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

Updated on  3 February 2021 at 15:05:45 CET