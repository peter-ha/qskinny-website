---
title: QskSizePolicy
layout: docs

---


**Module:** **[Core](/docs/modules/group___core/)**



## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Flag](/docs/classes/class_qsk_size_policy/#enum-flag)** { GrowFlag = 1 << 0, ExpandFlag = 1 << 1, ShrinkFlag = 1 << 2, IgnoreFlag = 1 << 3, ConstrainedFlag = 1 << 4} |
| enum| **[Policy](/docs/classes/class_qsk_size_policy/#enum-policy)** { Fixed = 0, Minimum = GrowFlag, Maximum = ShrinkFlag, Preferred = GrowFlag | ShrinkFlag, MinimumExpanding = GrowFlag | ExpandFlag, Expanding = GrowFlag | ShrinkFlag | ExpandFlag, Ignored = ShrinkFlag | GrowFlag | IgnoreFlag, Constrained = ConstrainedFlag, ConstrainedMinimum = ConstrainedFlag | Minimum, ConstrainedMaximum = ConstrainedFlag | Maximum, ConstrainedPreferred = ConstrainedFlag | Preferred, ConstrainedMinimumExpanding = ConstrainedFlag | MinimumExpanding, ConstrainedExpanding = ConstrainedFlag | Expanding} |
| enum| **[ConstraintType](/docs/classes/class_qsk_size_policy/#enum-constrainttype)** { Unconstrained = 0, WidthForHeight = 1 << 0, HeightForWidth = 1 << 1} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr | **[QskSizePolicy](/docs/classes/class_qsk_size_policy/#function-qsksizepolicy)**() |
| constexpr | **[QskSizePolicy](/docs/classes/class_qsk_size_policy/#function-qsksizepolicy)**(Policy horizontalPolicy, Policy verticalPolicy) |
| constexpr bool | **[operator==](/docs/classes/class_qsk_size_policy/#function-operator==)**(const QskSizePolicy & other) const |
| constexpr bool | **[operator!=](/docs/classes/class_qsk_size_policy/#function-operator!=)**(const QskSizePolicy & other) const |
| void | **[setHorizontalPolicy](/docs/classes/class_qsk_size_policy/#function-sethorizontalpolicy)**(Policy policy) |
| constexpr Policy | **[horizontalPolicy](/docs/classes/class_qsk_size_policy/#function-horizontalpolicy)**() const |
| void | **[setVerticalPolicy](/docs/classes/class_qsk_size_policy/#function-setverticalpolicy)**(Policy policy) |
| constexpr Policy | **[verticalPolicy](/docs/classes/class_qsk_size_policy/#function-verticalpolicy)**() const |
| void | **[setPolicy](/docs/classes/class_qsk_size_policy/#function-setpolicy)**(Qt::Orientation orientation, Policy policy) |
| constexpr Policy | **[policy](/docs/classes/class_qsk_size_policy/#function-policy)**(Qt::Orientation orientation) const |
| ConstraintType | **[constraintType](/docs/classes/class_qsk_size_policy/#function-constrainttype)**() const |
| constexpr bool | **[isConstrained](/docs/classes/class_qsk_size_policy/#function-isconstrained)**(Qt::Orientation orientation) const |
| Qt::SizeHint | **[effectiveSizeHintType](/docs/classes/class_qsk_size_policy/#function-effectivesizehinttype)**(Qt::SizeHint which, Qt::Orientation orientation) const |
| constexpr QskSizePolicy | **[transposed](/docs/classes/class_qsk_size_policy/#function-transposed)**() const |
| void | **[transpose](/docs/classes/class_qsk_size_policy/#function-transpose)**() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| Policy | **[horizontalPolicy](/docs/classes/class_qsk_size_policy/#property-horizontalpolicy)**  |
| Policy | **[verticalPolicy](/docs/classes/class_qsk_size_policy/#property-verticalpolicy)**  |

## Public Types Documentation

### enum Flag

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| GrowFlag | 1 << 0|   |
| ExpandFlag | 1 << 1|   |
| ShrinkFlag | 1 << 2|   |
| IgnoreFlag | 1 << 3|   |
| ConstrainedFlag | 1 << 4|   |




### enum Policy

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Fixed | 0|   |
| Minimum | GrowFlag|   |
| Maximum | ShrinkFlag|   |
| Preferred | GrowFlag | ShrinkFlag|   |
| MinimumExpanding | GrowFlag | ExpandFlag|   |
| Expanding | GrowFlag | ShrinkFlag | ExpandFlag|   |
| Ignored | ShrinkFlag | GrowFlag | IgnoreFlag|   |
| Constrained | ConstrainedFlag|   |
| ConstrainedMinimum | ConstrainedFlag | Minimum|   |
| ConstrainedMaximum | ConstrainedFlag | Maximum|   |
| ConstrainedPreferred | ConstrainedFlag | Preferred|   |
| ConstrainedMinimumExpanding | ConstrainedFlag | MinimumExpanding|   |
| ConstrainedExpanding | ConstrainedFlag | Expanding|   |




### enum ConstraintType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unconstrained | 0|   |
| WidthForHeight | 1 << 0|   |
| HeightForWidth | 1 << 1|   |




## Public Functions Documentation

### function QskSizePolicy

```cpp
inline constexpr QskSizePolicy()
```


### function QskSizePolicy

```cpp
inline constexpr QskSizePolicy(
    Policy horizontalPolicy,
    Policy verticalPolicy
)
```


### function operator==

```cpp
inline constexpr bool operator==(
    const QskSizePolicy & other
) const
```


### function operator!=

```cpp
inline constexpr bool operator!=(
    const QskSizePolicy & other
) const
```


### function setHorizontalPolicy

```cpp
inline void setHorizontalPolicy(
    Policy policy
)
```


### function horizontalPolicy

```cpp
constexpr Policy horizontalPolicy() const
```


### function setVerticalPolicy

```cpp
inline void setVerticalPolicy(
    Policy policy
)
```


### function verticalPolicy

```cpp
constexpr Policy verticalPolicy() const
```


### function setPolicy

```cpp
inline void setPolicy(
    Qt::Orientation orientation,
    Policy policy
)
```


### function policy

```cpp
inline constexpr Policy policy(
    Qt::Orientation orientation
) const
```


### function constraintType

```cpp
ConstraintType constraintType() const
```


### function isConstrained

```cpp
inline constexpr bool isConstrained(
    Qt::Orientation orientation
) const
```


### function effectiveSizeHintType

```cpp
Qt::SizeHint effectiveSizeHintType(
    Qt::SizeHint which,
    Qt::Orientation orientation
) const
```


### function transposed

```cpp
inline constexpr QskSizePolicy transposed() const
```


### function transpose

```cpp
void transpose()
```


## Public Property Documentation

### property horizontalPolicy

```cpp
Policy horizontalPolicy;
```


### property verticalPolicy

```cpp
Policy verticalPolicy;
```


-------------------------------

Updated on 23 January 2021 at 09:50:35 CET