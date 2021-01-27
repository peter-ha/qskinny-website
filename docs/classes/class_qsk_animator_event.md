---
title: QskAnimatorEvent
layout: docs

---




Inherits from QskEvent

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[State](/docs/classes/class_qsk_animator_event/#enum-state)** { Started, Terminated} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskAnimatorEvent](/docs/classes/class_qsk_animator_event/#function-qskanimatorevent)**(QskAspect aspect, State state) |
| QskAspect | **[aspect](/docs/classes/class_qsk_animator_event/#function-aspect)**() const |
| State | **[state](/docs/classes/class_qsk_animator_event/#function-state)**() const |
| QskAnimatorEvent * | **[clone](/docs/classes/class_qsk_animator_event/#function-clone)**() const override |

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

Updated on 26 January 2021 at 09:44:53 CET