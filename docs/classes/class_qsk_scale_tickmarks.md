---
title: QskScaleTickmarks
layout: docs

---


**Module:** **[Core](/docs/modules/group___core/)**



## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[TickType](/docs/classes/class_qsk_scale_tickmarks/#enum-ticktype)** { MinorTick, MediumTick, MajorTick} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskScaleTickmarks](/docs/classes/class_qsk_scale_tickmarks/#function-qskscaletickmarks)**() |
| | **[~QskScaleTickmarks](/docs/classes/class_qsk_scale_tickmarks/#function-~qskscaletickmarks)**() |
| bool | **[operator==](/docs/classes/class_qsk_scale_tickmarks/#function-operator==)**(const QskScaleTickmarks & other) const |
| bool | **[operator!=](/docs/classes/class_qsk_scale_tickmarks/#function-operator!=)**(const QskScaleTickmarks & other) const |
| int | **[tickCount](/docs/classes/class_qsk_scale_tickmarks/#function-tickcount)**() const |
| int | **[tickCount](/docs/classes/class_qsk_scale_tickmarks/#function-tickcount)**(TickType type) const |
| QVector< qreal > | **[ticks](/docs/classes/class_qsk_scale_tickmarks/#function-ticks)**(TickType type) const |
| void | **[setTicks](/docs/classes/class_qsk_scale_tickmarks/#function-setticks)**(TickType type, const QVector< qreal > & ticks) |
| void | **[setMinorTicks](/docs/classes/class_qsk_scale_tickmarks/#function-setminorticks)**(const QVector< qreal > & ticks) |
| QVector< qreal > | **[minorTicks](/docs/classes/class_qsk_scale_tickmarks/#function-minorticks)**() const |
| void | **[setMediumTicks](/docs/classes/class_qsk_scale_tickmarks/#function-setmediumticks)**(const QVector< qreal > & ticks) |
| QVector< qreal > | **[mediumTicks](/docs/classes/class_qsk_scale_tickmarks/#function-mediumticks)**() const |
| void | **[setMajorTicks](/docs/classes/class_qsk_scale_tickmarks/#function-setmajorticks)**(const QVector< qreal > & ticks) |
| QVector< qreal > | **[majorTicks](/docs/classes/class_qsk_scale_tickmarks/#function-majorticks)**() const |
| void | **[invert](/docs/classes/class_qsk_scale_tickmarks/#function-invert)**() |
| void | **[reset](/docs/classes/class_qsk_scale_tickmarks/#function-reset)**() |
| uint | **[hash](/docs/classes/class_qsk_scale_tickmarks/#function-hash)**(uint seed =0) const |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QVector< qreal > | **[majorTicks](/docs/classes/class_qsk_scale_tickmarks/#property-majorticks)**  |
| QVector< qreal > | **[mediumTicks](/docs/classes/class_qsk_scale_tickmarks/#property-mediumticks)**  |
| QVector< qreal > | **[minorTicks](/docs/classes/class_qsk_scale_tickmarks/#property-minorticks)**  |

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
QVector< qreal > minorTicks() const
```


### function setMediumTicks

```cpp
inline void setMediumTicks(
    const QVector< qreal > & ticks
)
```


### function mediumTicks

```cpp
QVector< qreal > mediumTicks() const
```


### function setMajorTicks

```cpp
inline void setMajorTicks(
    const QVector< qreal > & ticks
)
```


### function majorTicks

```cpp
QVector< qreal > majorTicks() const
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

Updated on 26 January 2021 at 09:44:54 CET