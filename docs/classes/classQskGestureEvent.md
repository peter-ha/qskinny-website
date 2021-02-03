---
title: QskGestureEvent
layout: docs

---




Inherits from QskEvent

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGestureEvent](/docs/classes/classQskGestureEvent/#function-qskgestureevent)**(std::shared_ptr< const QskGesture > gesture) |
| std::shared_ptr< const QskGesture > | **[gesture](/docs/classes/classQskGestureEvent/#function-gesture)**() const |
| QskGestureEvent * | **[clone](/docs/classes/classQskGestureEvent/#function-clone)**() const override |

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

Updated on  3 February 2021 at 15:05:41 CET