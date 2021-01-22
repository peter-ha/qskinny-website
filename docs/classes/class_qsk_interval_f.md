---
title: QskIntervalF
layout: docs

---


**Module:** **[Core](/docs/modules/group___core/)**



## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr | **[QskIntervalF](/docs/classes/class_qsk_interval_f/#function-qskintervalf)**() =default |
| constexpr | **[QskIntervalF](/docs/classes/class_qsk_interval_f/#function-qskintervalf)**(qreal lowerBound, qreal upperBound) |
| void | **[setInterval](/docs/classes/class_qsk_interval_f/#function-setinterval)**(qreal lowerBound, qreal upperBound) |
| constexpr bool | **[operator==](/docs/classes/class_qsk_interval_f/#function-operator==)**(const QskIntervalF & other) const |
| constexpr bool | **[operator!=](/docs/classes/class_qsk_interval_f/#function-operator!=)**(const QskIntervalF & other) const |
| constexpr qreal | **[lowerBound](/docs/classes/class_qsk_interval_f/#function-lowerbound)**() const |
| void | **[setLowerBound](/docs/classes/class_qsk_interval_f/#function-setlowerbound)**(qreal value) |
| constexpr qreal | **[upperBound](/docs/classes/class_qsk_interval_f/#function-upperbound)**() const |
| void | **[setUpperBound](/docs/classes/class_qsk_interval_f/#function-setupperbound)**(qreal value) |
| constexpr qreal | **[width](/docs/classes/class_qsk_interval_f/#function-width)**() const |
| void | **[setWidth](/docs/classes/class_qsk_interval_f/#function-setwidth)**(qreal width) |
| constexpr bool | **[contains](/docs/classes/class_qsk_interval_f/#function-contains)**(qreal value) const |
| constexpr bool | **[contains](/docs/classes/class_qsk_interval_f/#function-contains)**(const QskIntervalF & interval) const |
| bool | **[fuzzyContains](/docs/classes/class_qsk_interval_f/#function-fuzzycontains)**(qreal value) const |
| bool | **[fuzzyContains](/docs/classes/class_qsk_interval_f/#function-fuzzycontains)**(const QskIntervalF & interval) const |
| void | **[translate](/docs/classes/class_qsk_interval_f/#function-translate)**(qreal offset) |
| constexpr QskIntervalF | **[translated](/docs/classes/class_qsk_interval_f/#function-translated)**(qreal offset) const |
| bool | **[intersects](/docs/classes/class_qsk_interval_f/#function-intersects)**(const QskIntervalF & other) const |
| QskIntervalF | **[intersected](/docs/classes/class_qsk_interval_f/#function-intersected)**(const QskIntervalF & other) const |
| void | **[unite](/docs/classes/class_qsk_interval_f/#function-unite)**(const QskIntervalF & other) |
| QskIntervalF | **[united](/docs/classes/class_qsk_interval_f/#function-united)**(const QskIntervalF & other) const |
| void | **[extend](/docs/classes/class_qsk_interval_f/#function-extend)**(qreal value) |
| QskIntervalF | **[extended](/docs/classes/class_qsk_interval_f/#function-extended)**(qreal value) const |
| QskIntervalF | **[operator|](/docs/classes/class_qsk_interval_f/#function-operator|)**(const QskIntervalF & other) const |
| QskIntervalF | **[operator&](/docs/classes/class_qsk_interval_f/#function-operator&)**(const QskIntervalF & other) const |
| QskIntervalF & | **[operator|=](/docs/classes/class_qsk_interval_f/#function-operator|=)**(const QskIntervalF & other) |
| QskIntervalF & | **[operator&=](/docs/classes/class_qsk_interval_f/#function-operator&=)**(const QskIntervalF & other) |
| QskIntervalF | **[operator|](/docs/classes/class_qsk_interval_f/#function-operator|)**(qreal value) const |
| QskIntervalF & | **[operator|=](/docs/classes/class_qsk_interval_f/#function-operator|=)**(qreal value) |
| constexpr bool | **[isValid](/docs/classes/class_qsk_interval_f/#function-isvalid)**() const |
| constexpr bool | **[isNull](/docs/classes/class_qsk_interval_f/#function-isnull)**() const |
| void | **[invalidate](/docs/classes/class_qsk_interval_f/#function-invalidate)**() |
| QskIntervalF | **[interpolated](/docs/classes/class_qsk_interval_f/#function-interpolated)**(const QskIntervalF & to, qreal progress) const |
| constexpr QskIntervalF | **[normalized](/docs/classes/class_qsk_interval_f/#function-normalized)**(qreal value1, qreal value2) |
| QVariant | **[interpolate](/docs/classes/class_qsk_interval_f/#function-interpolate)**(const QskIntervalF & intv1, const QskIntervalF & intv2, qreal progress) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| qreal | **[lowerBound](/docs/classes/class_qsk_interval_f/#property-lowerbound)**  |
| qreal | **[upperBound](/docs/classes/class_qsk_interval_f/#property-upperbound)**  |
| qreal | **[width](/docs/classes/class_qsk_interval_f/#property-width)**  |

## Public Functions Documentation

### function QskIntervalF

```cpp
constexpr QskIntervalF() =default
```


### function QskIntervalF

```cpp
inline constexpr QskIntervalF(
    qreal lowerBound,
    qreal upperBound
)
```


### function setInterval

```cpp
inline void setInterval(
    qreal lowerBound,
    qreal upperBound
)
```


### function operator==

```cpp
inline constexpr bool operator==(
    const QskIntervalF & other
) const
```


### function operator!=

```cpp
inline constexpr bool operator!=(
    const QskIntervalF & other
) const
```


### function lowerBound

```cpp
constexpr qreal lowerBound() const
```


### function setLowerBound

```cpp
inline void setLowerBound(
    qreal value
)
```


### function upperBound

```cpp
constexpr qreal upperBound() const
```


### function setUpperBound

```cpp
inline void setUpperBound(
    qreal value
)
```


### function width

```cpp
constexpr qreal width() const
```


### function setWidth

```cpp
inline void setWidth(
    qreal width
)
```


### function contains

```cpp
inline constexpr bool contains(
    qreal value
) const
```


### function contains

```cpp
inline constexpr bool contains(
    const QskIntervalF & interval
) const
```


### function fuzzyContains

```cpp
bool fuzzyContains(
    qreal value
) const
```


### function fuzzyContains

```cpp
bool fuzzyContains(
    const QskIntervalF & interval
) const
```


### function translate

```cpp
inline void translate(
    qreal offset
)
```


### function translated

```cpp
inline constexpr QskIntervalF translated(
    qreal offset
) const
```


### function intersects

```cpp
bool intersects(
    const QskIntervalF & other
) const
```


### function intersected

```cpp
QskIntervalF intersected(
    const QskIntervalF & other
) const
```


### function unite

```cpp
void unite(
    const QskIntervalF & other
)
```


### function united

```cpp
QskIntervalF united(
    const QskIntervalF & other
) const
```


### function extend

```cpp
void extend(
    qreal value
)
```


### function extended

```cpp
QskIntervalF extended(
    qreal value
) const
```


### function operator|

```cpp
inline QskIntervalF operator|(
    const QskIntervalF & other
) const
```


### function operator&

```cpp
inline QskIntervalF operator&(
    const QskIntervalF & other
) const
```


### function operator|=

```cpp
inline QskIntervalF & operator|=(
    const QskIntervalF & other
)
```


### function operator&=

```cpp
inline QskIntervalF & operator&=(
    const QskIntervalF & other
)
```


### function operator|

```cpp
inline QskIntervalF operator|(
    qreal value
) const
```


### function operator|=

```cpp
inline QskIntervalF & operator|=(
    qreal value
)
```


### function isValid

```cpp
inline constexpr bool isValid() const
```


### function isNull

```cpp
inline constexpr bool isNull() const
```


### function invalidate

```cpp
inline void invalidate()
```


### function interpolated

```cpp
QskIntervalF interpolated(
    const QskIntervalF & to,
    qreal progress
) const
```


### function normalized

```cpp
static inline constexpr QskIntervalF normalized(
    qreal value1,
    qreal value2
)
```


### function interpolate

```cpp
static QVariant interpolate(
    const QskIntervalF & intv1,
    const QskIntervalF & intv2,
    qreal progress
)
```


## Public Property Documentation

### property lowerBound

```cpp
qreal lowerBound;
```


### property upperBound

```cpp
qreal upperBound;
```


### property width

```cpp
qreal width;
```


-------------------------------

Updated on 22 January 2021 at 17:05:50 CET