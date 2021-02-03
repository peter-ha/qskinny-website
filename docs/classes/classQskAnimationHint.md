---
title: QskAnimationHint
layout: docs

---


**Module:** **[Animation](/docs/modules/group__Animation/)**



## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[UpdateFlag](/docs/classes/classQskAnimationHint/#enum-updateflag)** { UpdateAuto = 0, UpdateNode = 1 << 0, UpdatePolish = 1 << 1, UpdateSizeHint = 1 << 2, UpdateAll = UpdateNode | UpdatePolish | UpdateSizeHint} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr | **[QskAnimationHint](/docs/classes/classQskAnimationHint/#function-qskanimationhint)**() |
| constexpr | **[QskAnimationHint](/docs/classes/classQskAnimationHint/#function-qskanimationhint)**(uint duration, QEasingCurve::Type type =QEasingCurve::Linear) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint | **[duration](/docs/classes/classQskAnimationHint/#variable-duration)**  |
| QEasingCurve::Type | **[type](/docs/classes/classQskAnimationHint/#variable-type)**  |
| UpdateFlags | **[updateFlags](/docs/classes/classQskAnimationHint/#variable-updateflags)**  |

## Public Types Documentation

### enum UpdateFlag

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| UpdateAuto | 0|   |
| UpdateNode | 1 << 0|   |
| UpdatePolish | 1 << 1|   |
| UpdateSizeHint | 1 << 2|   |
| UpdateAll | UpdateNode | UpdatePolish | UpdateSizeHint|   |




## Public Functions Documentation

### function QskAnimationHint

```cpp
inline constexpr QskAnimationHint()
```


### function QskAnimationHint

```cpp
inline constexpr QskAnimationHint(
    uint duration,
    QEasingCurve::Type type =QEasingCurve::Linear
)
```


## Public Attributes Documentation

### variable duration

```cpp
uint duration;
```


### variable type

```cpp
QEasingCurve::Type type;
```


### variable updateFlags

```cpp
UpdateFlags updateFlags;
```


-------------------------------

Updated on  3 February 2021 at 15:05:45 CET