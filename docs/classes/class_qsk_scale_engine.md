---
title: QskScaleEngine
layout: docs

---


**Module:** **[Core](/docs/modules/group___core/)**



## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Attribute](/docs/classes/class_qsk_scale_engine/#enum-attribute)** { Inverted = 1 << 0, Floating = 1 << 1} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskScaleEngine](/docs/classes/class_qsk_scale_engine/#function-qskscaleengine)**() |
| | **[~QskScaleEngine](/docs/classes/class_qsk_scale_engine/#function-~qskscaleengine)**() |
| void | **[setAttribute](/docs/classes/class_qsk_scale_engine/#function-setattribute)**(Attribute attribute, bool on =true) |
| bool | **[testAttribute](/docs/classes/class_qsk_scale_engine/#function-testattribute)**(Attribute attribute) const |
| void | **[setAttributes](/docs/classes/class_qsk_scale_engine/#function-setattributes)**(Attributes attributes) |
| Attributes | **[attributes](/docs/classes/class_qsk_scale_engine/#function-attributes)**() const |
| QskScaleTickmarks | **[divideScale](/docs/classes/class_qsk_scale_engine/#function-dividescale)**(qreal x1, qreal x2, int maxMajorSteps, int maxMinorSteps, qreal stepSize =0.0) const |
| void | **[autoScale](/docs/classes/class_qsk_scale_engine/#function-autoscale)**(int maxNumSteps, qreal & x1, qreal & x2, qreal & stepSize) const |

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

Updated on 22 January 2021 at 17:05:50 CET