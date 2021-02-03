---
title: QskAnimatorEvent
layout: docs

---




Inherits from QskEvent

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[State](/docs/classes/classQskAnimatorEvent/#enum-state)** { Started, Terminated} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskAnimatorEvent](/docs/classes/classQskAnimatorEvent/#function-qskanimatorevent)**([QskAspect](/docs/classes/classQskAspect/) aspect, State state) |
| [QskAspect](/docs/classes/classQskAspect/) | **[aspect](/docs/classes/classQskAnimatorEvent/#function-aspect)**() const |
| State | **[state](/docs/classes/classQskAnimatorEvent/#function-state)**() const |
| QskAnimatorEvent * | **[clone](/docs/classes/classQskAnimatorEvent/#function-clone)**() const override |

## Public Types Documentation

### enum State

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Started | |   |
| Terminated | |   |




## Public Functions Documentation

### function QskAnimatorEvent

```cpp
QskAnimatorEvent(
    QskAspect aspect,
    State state
)
```


### function aspect

```cpp
inline QskAspect aspect() const
```


### function state

```cpp
inline State state() const
```


### function clone

```cpp
QskAnimatorEvent * clone() const override
```


-------------------------------

Updated on  3 February 2021 at 15:05:42 CET