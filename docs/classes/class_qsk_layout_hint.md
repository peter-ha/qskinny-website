---
title: QskLayoutHint
layout: docs

---


**Module:** **[Layouts](/docs/modules/group___layouts/)**



## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr | **[QskLayoutHint](/docs/classes/class_qsk_layout_hint/#function-qsklayouthint)**() =default |
| constexpr | **[QskLayoutHint](/docs/classes/class_qsk_layout_hint/#function-qsklayouthint)**(qreal minimum, qreal preferred, qreal maximum) |
| void | **[normalize](/docs/classes/class_qsk_layout_hint/#function-normalize)**() |
| QskLayoutHint | **[normalized](/docs/classes/class_qsk_layout_hint/#function-normalized)**() const |
| constexpr bool | **[isDefault](/docs/classes/class_qsk_layout_hint/#function-isdefault)**() const |
| qreal | **[size](/docs/classes/class_qsk_layout_hint/#function-size)**(int which) const |
| void | **[setSize](/docs/classes/class_qsk_layout_hint/#function-setsize)**(int which, qreal size) |
| constexpr bool | **[operator==](/docs/classes/class_qsk_layout_hint/#function-operator==)**(const QskLayoutHint & other) const |
| constexpr bool | **[operator!=](/docs/classes/class_qsk_layout_hint/#function-operator!=)**(const QskLayoutHint & other) const |
| void | **[setMinimum](/docs/classes/class_qsk_layout_hint/#function-setminimum)**(qreal value) |
| constexpr qreal | **[minimum](/docs/classes/class_qsk_layout_hint/#function-minimum)**() const |
| void | **[setPreferred](/docs/classes/class_qsk_layout_hint/#function-setpreferred)**(qreal value) |
| constexpr qreal | **[preferred](/docs/classes/class_qsk_layout_hint/#function-preferred)**() const |
| void | **[setMaximum](/docs/classes/class_qsk_layout_hint/#function-setmaximum)**(qreal value) |
| constexpr qreal | **[maximum](/docs/classes/class_qsk_layout_hint/#function-maximum)**() const |
| void | **[setSizes](/docs/classes/class_qsk_layout_hint/#function-setsizes)**(qreal minimum, qreal preferred, qreal maximum) |
| void | **[expandTo](/docs/classes/class_qsk_layout_hint/#function-expandto)**(const QskLayoutHint & other) |
| void | **[expandMinimum](/docs/classes/class_qsk_layout_hint/#function-expandminimum)**(qreal value) |
| void | **[expandPreferred](/docs/classes/class_qsk_layout_hint/#function-expandpreferred)**(qreal value) |
| void | **[expandMaximum](/docs/classes/class_qsk_layout_hint/#function-expandmaximum)**(qreal value) |
| qreal | **[combined](/docs/classes/class_qsk_layout_hint/#function-combined)**(int which, qreal value1, qreal value2) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| qreal | **[minimum](/docs/classes/class_qsk_layout_hint/#property-minimum)**  |
| qreal | **[preferred](/docs/classes/class_qsk_layout_hint/#property-preferred)**  |
| qreal | **[maximum](/docs/classes/class_qsk_layout_hint/#property-maximum)**  |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr qreal | **[unlimited](/docs/classes/class_qsk_layout_hint/#variable-unlimited)**  |

## Public Functions Documentation

### function QskLayoutHint

```cpp
constexpr QskLayoutHint() =default
```


### function QskLayoutHint

```cpp
inline constexpr QskLayoutHint(
    qreal minimum,
    qreal preferred,
    qreal maximum
)
```


### function normalize

```cpp
void normalize()
```


### function normalized

```cpp
inline QskLayoutHint normalized() const
```


### function isDefault

```cpp
inline constexpr bool isDefault() const
```


### function size

```cpp
inline qreal size(
    int which
) const
```


### function setSize

```cpp
void setSize(
    int which,
    qreal size
)
```


### function operator==

```cpp
inline constexpr bool operator==(
    const QskLayoutHint & other
) const
```


### function operator!=

```cpp
inline constexpr bool operator!=(
    const QskLayoutHint & other
) const
```


### function setMinimum

```cpp
inline void setMinimum(
    qreal value
)
```


### function minimum

```cpp
constexpr qreal minimum() const
```


### function setPreferred

```cpp
inline void setPreferred(
    qreal value
)
```


### function preferred

```cpp
constexpr qreal preferred() const
```


### function setMaximum

```cpp
inline void setMaximum(
    qreal value
)
```


### function maximum

```cpp
constexpr qreal maximum() const
```


### function setSizes

```cpp
inline void setSizes(
    qreal minimum,
    qreal preferred,
    qreal maximum
)
```


### function expandTo

```cpp
void expandTo(
    const QskLayoutHint & other
)
```


### function expandMinimum

```cpp
inline void expandMinimum(
    qreal value
)
```


### function expandPreferred

```cpp
inline void expandPreferred(
    qreal value
)
```


### function expandMaximum

```cpp
inline void expandMaximum(
    qreal value
)
```


### function combined

```cpp
static qreal combined(
    int which,
    qreal value1,
    qreal value2
)
```


## Public Property Documentation

### property minimum

```cpp
qreal minimum;
```


### property preferred

```cpp
qreal preferred;
```


### property maximum

```cpp
qreal maximum;
```


## Public Attributes Documentation

### variable unlimited

```cpp
static constexpr qreal unlimited = std::numeric_limits< float >::max();
```


-------------------------------

Updated on 23 January 2021 at 09:50:34 CET