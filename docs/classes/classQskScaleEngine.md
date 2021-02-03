---
title: QskScaleEngine
layout: docs

---


**Module:** **[Core](/docs/modules/group__Core/)**



## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Attribute](/docs/classes/classQskScaleEngine/#enum-attribute)** { Inverted = 1 << 0, Floating = 1 << 1} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskScaleEngine](/docs/classes/classQskScaleEngine/#function-qskscaleengine)**() |
| | **[~QskScaleEngine](/docs/classes/classQskScaleEngine/#function-~qskscaleengine)**() |
| void | **[setAttribute](/docs/classes/classQskScaleEngine/#function-setattribute)**(Attribute attribute, bool on =true) |
| bool | **[testAttribute](/docs/classes/classQskScaleEngine/#function-testattribute)**(Attribute attribute) const |
| void | **[setAttributes](/docs/classes/classQskScaleEngine/#function-setattributes)**(Attributes attributes) |
| Attributes | **[attributes](/docs/classes/classQskScaleEngine/#function-attributes)**() const |
| QskScaleTickmarks | **[divideScale](/docs/classes/classQskScaleEngine/#function-dividescale)**(qreal x1, qreal x2, int maxMajorSteps, int maxMinorSteps, qreal stepSize =0.0) const |
| void | **[autoScale](/docs/classes/classQskScaleEngine/#function-autoscale)**(int maxNumSteps, qreal & x1, qreal & x2, qreal & stepSize) const |

## Public Types Documentation

### enum Attribute

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Inverted | 1 << 0|   |
| Floating | 1 << 1|   |




## Public Functions Documentation

### function QskScaleEngine

```cpp
QskScaleEngine()
```


### function ~QskScaleEngine

```cpp
~QskScaleEngine()
```


### function setAttribute

```cpp
void setAttribute(
    Attribute attribute,
    bool on =true
)
```


### function testAttribute

```cpp
bool testAttribute(
    Attribute attribute
) const
```


### function setAttributes

```cpp
void setAttributes(
    Attributes attributes
)
```


### function attributes

```cpp
Attributes attributes() const
```


### function divideScale

```cpp
QskScaleTickmarks divideScale(
    qreal x1,
    qreal x2,
    int maxMajorSteps,
    int maxMinorSteps,
    qreal stepSize =0.0
) const
```


### function autoScale

```cpp
void autoScale(
    int maxNumSteps,
    qreal & x1,
    qreal & x2,
    qreal & stepSize
) const
```


-------------------------------

Updated on  3 February 2021 at 15:05:46 CET