---
title: QskScaleTickmarks
layout: docs

---


**Module:** **[Core](/docs/modules/group__Core/)**



## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[TickType](/docs/classes/classQskScaleTickmarks/#enum-ticktype)** { MinorTick, MediumTick, MajorTick} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskScaleTickmarks](/docs/classes/classQskScaleTickmarks/#function-qskscaletickmarks)**() |
| | **[~QskScaleTickmarks](/docs/classes/classQskScaleTickmarks/#function-~qskscaletickmarks)**() |
| bool | **[operator==](/docs/classes/classQskScaleTickmarks/#function-operator==)**(const QskScaleTickmarks & other) const |
| bool | **[operator!=](/docs/classes/classQskScaleTickmarks/#function-operator!=)**(const QskScaleTickmarks & other) const |
| int | **[tickCount](/docs/classes/classQskScaleTickmarks/#function-tickcount)**() const |
| int | **[tickCount](/docs/classes/classQskScaleTickmarks/#function-tickcount)**(TickType type) const |
| QVector< qreal > | **[ticks](/docs/classes/classQskScaleTickmarks/#function-ticks)**(TickType type) const |
| void | **[setTicks](/docs/classes/classQskScaleTickmarks/#function-setticks)**(TickType type, const QVector< qreal > & ticks) |
| void | **[setMinorTicks](/docs/classes/classQskScaleTickmarks/#function-setminorticks)**(const QVector< qreal > & ticks) |
| QVector< qreal > | **[minorTicks](/docs/classes/classQskScaleTickmarks/#function-minorticks)**() const |
| void | **[setMediumTicks](/docs/classes/classQskScaleTickmarks/#function-setmediumticks)**(const QVector< qreal > & ticks) |
| QVector< qreal > | **[mediumTicks](/docs/classes/classQskScaleTickmarks/#function-mediumticks)**() const |
| void | **[setMajorTicks](/docs/classes/classQskScaleTickmarks/#function-setmajorticks)**(const QVector< qreal > & ticks) |
| QVector< qreal > | **[majorTicks](/docs/classes/classQskScaleTickmarks/#function-majorticks)**() const |
| void | **[invert](/docs/classes/classQskScaleTickmarks/#function-invert)**() |
| void | **[reset](/docs/classes/classQskScaleTickmarks/#function-reset)**() |
| uint | **[hash](/docs/classes/classQskScaleTickmarks/#function-hash)**(uint seed =0) const |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QVector< qreal > | **[majorTicks](/docs/classes/classQskScaleTickmarks/#property-majorticks)**  |
| QVector< qreal > | **[mediumTicks](/docs/classes/classQskScaleTickmarks/#property-mediumticks)**  |
| QVector< qreal > | **[minorTicks](/docs/classes/classQskScaleTickmarks/#property-minorticks)**  |

## Public Types Documentation

### enum TickType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MinorTick | |   |
| MediumTick | |   |
| MajorTick | |   |




## Public Functions Documentation

### function QskScaleTickmarks

```cpp
QskScaleTickmarks()
```


### function ~QskScaleTickmarks

```cpp
~QskScaleTickmarks()
```


### function operator==

```cpp
bool operator==(
    const QskScaleTickmarks & other
) const
```


### function operator!=

```cpp
inline bool operator!=(
    const QskScaleTickmarks & other
) const
```


### function tickCount

```cpp
int tickCount() const
```


### function tickCount

```cpp
int tickCount(
    TickType type
) const
```


### function ticks

```cpp
QVector< qreal > ticks(
    TickType type
) const
```


### function setTicks

```cpp
void setTicks(
    TickType type,
    const QVector< qreal > & ticks
)
```


### function setMinorTicks

```cpp
inline void setMinorTicks(
    const QVector< qreal > & ticks
)
```


### function minorTicks

```cpp
inline QVector< qreal > minorTicks() const
```


### function setMediumTicks

```cpp
inline void setMediumTicks(
    const QVector< qreal > & ticks
)
```


### function mediumTicks

```cpp
inline QVector< qreal > mediumTicks() const
```


### function setMajorTicks

```cpp
inline void setMajorTicks(
    const QVector< qreal > & ticks
)
```


### function majorTicks

```cpp
inline QVector< qreal > majorTicks() const
```


### function invert

```cpp
void invert()
```


### function reset

```cpp
void reset()
```


### function hash

```cpp
uint hash(
    uint seed =0
) const
```


## Public Property Documentation

### property majorTicks

```cpp
QVector< qreal > majorTicks;
```


### property mediumTicks

```cpp
QVector< qreal > mediumTicks;
```


### property minorTicks

```cpp
QVector< qreal > minorTicks;
```


-------------------------------

Updated on  3 February 2021 at 15:05:46 CET