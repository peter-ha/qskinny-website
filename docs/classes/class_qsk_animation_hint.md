---
title: QskAnimationHint
layout: docs

---


**Module:** **[Animation](/docs/modules/group___animation/)**



## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[UpdateFlag](/docs/classes/class_qsk_animation_hint/#enum-updateflag)** { UpdateAuto = 0, UpdateNode = 1 << 0, UpdatePolish = 1 << 1, UpdateSizeHint = 1 << 2, UpdateAll = UpdateNode | UpdatePolish | UpdateSizeHint} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr | **[QskAnimationHint](/docs/classes/class_qsk_animation_hint/#function-qskanimationhint)**() |
| constexpr | **[QskAnimationHint](/docs/classes/class_qsk_animation_hint/#function-qskanimationhint)**(uint duration, QEasingCurve::Type type =QEasingCurve::Linear) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint | **[duration](/docs/classes/class_qsk_animation_hint/#variable-duration)**  |
| QEasingCurve::Type | **[type](/docs/classes/class_qsk_animation_hint/#variable-type)**  |
| UpdateFlags | **[updateFlags](/docs/classes/class_qsk_animation_hint/#variable-updateflags)**  |

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

Updated on 23 January 2021 at 09:50:35 CET