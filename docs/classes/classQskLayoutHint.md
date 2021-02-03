---
title: QskLayoutHint
layout: docs

---


**Module:** **[Layouts](/docs/modules/group__Layouts/)**



## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr | **[QskLayoutHint](/docs/classes/classQskLayoutHint/#function-qsklayouthint)**() =default |
| constexpr | **[QskLayoutHint](/docs/classes/classQskLayoutHint/#function-qsklayouthint)**(qreal minimum, qreal preferred, qreal maximum) |
| void | **[normalize](/docs/classes/classQskLayoutHint/#function-normalize)**() |
| QskLayoutHint | **[normalized](/docs/classes/classQskLayoutHint/#function-normalized)**() const |
| constexpr bool | **[isDefault](/docs/classes/classQskLayoutHint/#function-isdefault)**() const |
| qreal | **[size](/docs/classes/classQskLayoutHint/#function-size)**(int which) const |
| void | **[setSize](/docs/classes/classQskLayoutHint/#function-setsize)**(int which, qreal size) |
| constexpr bool | **[operator==](/docs/classes/classQskLayoutHint/#function-operator==)**(const QskLayoutHint & other) const |
| constexpr bool | **[operator!=](/docs/classes/classQskLayoutHint/#function-operator!=)**(const QskLayoutHint & other) const |
| void | **[setMinimum](/docs/classes/classQskLayoutHint/#function-setminimum)**(qreal value) |
| constexpr qreal | **[minimum](/docs/classes/classQskLayoutHint/#function-minimum)**() const |
| void | **[setPreferred](/docs/classes/classQskLayoutHint/#function-setpreferred)**(qreal value) |
| constexpr qreal | **[preferred](/docs/classes/classQskLayoutHint/#function-preferred)**() const |
| void | **[setMaximum](/docs/classes/classQskLayoutHint/#function-setmaximum)**(qreal value) |
| constexpr qreal | **[maximum](/docs/classes/classQskLayoutHint/#function-maximum)**() const |
| void | **[setSizes](/docs/classes/classQskLayoutHint/#function-setsizes)**(qreal minimum, qreal preferred, qreal maximum) |
| void | **[expandTo](/docs/classes/classQskLayoutHint/#function-expandto)**(const QskLayoutHint & other) |
| void | **[expandMinimum](/docs/classes/classQskLayoutHint/#function-expandminimum)**(qreal value) |
| void | **[expandPreferred](/docs/classes/classQskLayoutHint/#function-expandpreferred)**(qreal value) |
| void | **[expandMaximum](/docs/classes/classQskLayoutHint/#function-expandmaximum)**(qreal value) |
| qreal | **[combined](/docs/classes/classQskLayoutHint/#function-combined)**(int which, qreal value1, qreal value2) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| qreal | **[minimum](/docs/classes/classQskLayoutHint/#property-minimum)**  |
| qreal | **[preferred](/docs/classes/classQskLayoutHint/#property-preferred)**  |
| qreal | **[maximum](/docs/classes/classQskLayoutHint/#property-maximum)**  |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr qreal | **[unlimited](/docs/classes/classQskLayoutHint/#variable-unlimited)**  |

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
inline constexpr qreal minimum() const
```


### function setPreferred

```cpp
inline void setPreferred(
    qreal value
)
```


### function preferred

```cpp
inline constexpr qreal preferred() const
```


### function setMaximum

```cpp
inline void setMaximum(
    qreal value
)
```


### function maximum

```cpp
inline constexpr qreal maximum() const
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

Updated on  3 February 2021 at 15:05:43 CET