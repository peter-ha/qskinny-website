---
title: QskGesture
layout: docs

---


**Module:** **[Framework](/docs/modules/group___framework/)**



Inherited by [QskPanGesture](/docs/classes/class_qsk_pan_gesture/), [QskSwipeGesture](/docs/classes/class_qsk_swipe_gesture/), [QskTapAndHoldGesture](/docs/classes/class_qsk_tap_and_hold_gesture/), [QskTapGesture](/docs/classes/class_qsk_tap_gesture/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Type](/docs/classes/class_qsk_gesture/#enum-type)** { NoType = -1, Tap, TapAndHold, Pan, Swipe, CustomType = 16} |
| enum| **[State](/docs/classes/class_qsk_gesture/#enum-state)** { NoGesture, Started, Updated, Finished, Canceled} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~QskGesture](/docs/classes/class_qsk_gesture/#function-~qskgesture)**() |
| Type | **[type](/docs/classes/class_qsk_gesture/#function-type)**() const |
| void | **[setState](/docs/classes/class_qsk_gesture/#function-setstate)**(State state) |
| State | **[state](/docs/classes/class_qsk_gesture/#function-state)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGesture](/docs/classes/class_qsk_gesture/#function-qskgesture)**(Type type) |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| const Type | **[m_type](/docs/classes/class_qsk_gesture/#variable-m_type)**  |
| State | **[m_state](/docs/classes/class_qsk_gesture/#variable-m_state)**  |

## Public Types Documentation

### enum Type

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NoType | -1|   |
| Tap | |   |
| TapAndHold | |   |
| Pan | |   |
| Swipe | |   |
| CustomType | 16|   |




### enum State

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NoGesture | |   |
| Started | |   |
| Updated | |   |
| Finished | |   |
| Canceled | |   |




## Public Functions Documentation

### function ~QskGesture

```cpp
virtual ~QskGesture()
```


### function type

```cpp
inline Type type() const
```


### function setState

```cpp
void setState(
    State state
)
```


### function state

```cpp
inline State state() const
```


## Protected Functions Documentation

### function QskGesture

```cpp
QskGesture(
    Type type
)
```


## Protected Attributes Documentation

### variable m_type

```cpp
const Type m_type;
```


### variable m_state

```cpp
State m_state;
```


-------------------------------

Updated on 22 January 2021 at 17:05:50 CET