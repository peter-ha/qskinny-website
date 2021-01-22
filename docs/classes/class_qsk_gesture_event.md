---
title: QskGestureEvent
layout: docs

---




Inherits from QskEvent

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGestureEvent](/docs/classes/class_qsk_gesture_event/#function-qskgestureevent)**(std::shared_ptr< const QskGesture > gesture) |
| std::shared_ptr< const QskGesture > | **[gesture](/docs/classes/class_qsk_gesture_event/#function-gesture)**() const |
| QskGestureEvent * | **[clone](/docs/classes/class_qsk_gesture_event/#function-clone)**() const override |

## Public Functions Documentation

### function QskGestureEvent

```cpp
QskGestureEvent(
    std::shared_ptr< const QskGesture > gesture
)
```


### function gesture

```cpp
inline std::shared_ptr< const QskGesture > gesture() const
```


### function clone

```cpp
QskGestureEvent * clone() const override
```


-------------------------------

Updated on 22 January 2021 at 17:05:48 CET