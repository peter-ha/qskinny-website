---
title: QskGesture
layout: docs

---


**Module:** **[Framework](/docs/modules/group__Framework/)**



Inherited by [QskPanGesture](/docs/classes/classQskPanGesture/), [QskSwipeGesture](/docs/classes/classQskSwipeGesture/), [QskTapAndHoldGesture](/docs/classes/classQskTapAndHoldGesture/), [QskTapGesture](/docs/classes/classQskTapGesture/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Type](/docs/classes/classQskGesture/#enum-type)** { NoType = -1, Tap, TapAndHold, Pan, Swipe, CustomType = 16} |
| enum| **[State](/docs/classes/classQskGesture/#enum-state)** { NoGesture, Started, Updated, Finished, Canceled} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~QskGesture](/docs/classes/classQskGesture/#function-~qskgesture)**() |
| Type | **[type](/docs/classes/classQskGesture/#function-type)**() const |
| void | **[setState](/docs/classes/classQskGesture/#function-setstate)**(State state) |
| State | **[state](/docs/classes/classQskGesture/#function-state)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGesture](/docs/classes/classQskGesture/#function-qskgesture)**(Type type) |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| const Type | **[m_type](/docs/classes/classQskGesture/#variable-m_type)**  |
| State | **[m_state](/docs/classes/classQskGesture/#variable-m_state)**  |

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

Updated on  3 February 2021 at 15:05:45 CET