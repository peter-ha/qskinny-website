---
title: QskFlickAnimator
layout: docs

---


**Module:** **[Animation](/docs/modules/group___animation/)**



Inherits from QskAnimator

Inherited by QSK_QT_PRIVATE_END::FlickAnimator

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskFlickAnimator](/docs/classes/class_qsk_flick_animator/#function-qskflickanimator)**() |
| | **[~QskFlickAnimator](/docs/classes/class_qsk_flick_animator/#function-~qskflickanimator)**() override |
| void | **[setAngle](/docs/classes/class_qsk_flick_animator/#function-setangle)**(qreal degrees) |
| qreal | **[angle](/docs/classes/class_qsk_flick_animator/#function-angle)**() const |
| void | **[setVelocity](/docs/classes/class_qsk_flick_animator/#function-setvelocity)**(qreal velocity) |
| qreal | **[velocity](/docs/classes/class_qsk_flick_animator/#function-velocity)**() const |
| qreal | **[animatedVelocity](/docs/classes/class_qsk_flick_animator/#function-animatedvelocity)**() const |
| void | **[flick](/docs/classes/class_qsk_flick_animator/#function-flick)**(qreal degrees, qreal velocity) |
| void | **[accelerate](/docs/classes/class_qsk_flick_animator/#function-accelerate)**(qreal degrees, qreal velocity) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setup](/docs/classes/class_qsk_flick_animator/#function-setup)**() override |
| void | **[advance](/docs/classes/class_qsk_flick_animator/#function-advance)**(qreal value) override |
| void | **[done](/docs/classes/class_qsk_flick_animator/#function-done)**() override |
| virtual void | **[translate](/docs/classes/class_qsk_flick_animator/#function-translate)**(qreal dx, qreal dy) =0 |

## Public Functions Documentation

### function QskFlickAnimator

```cpp
QskFlickAnimator()
```


### function ~QskFlickAnimator

```cpp
~QskFlickAnimator() override
```


### function setAngle

```cpp
void setAngle(
    qreal degrees
)
```


### function angle

```cpp
inline qreal angle() const
```


### function setVelocity

```cpp
void setVelocity(
    qreal velocity
)
```


### function velocity

```cpp
inline qreal velocity() const
```


### function animatedVelocity

```cpp
inline qreal animatedVelocity() const
```


### function flick

```cpp
void flick(
    qreal degrees,
    qreal velocity
)
```


### function accelerate

```cpp
void accelerate(
    qreal degrees,
    qreal velocity
)
```


## Protected Functions Documentation

### function setup

```cpp
void setup() override
```


### function advance

```cpp
void advance(
    qreal value
) override
```


### function done

```cpp
void done() override
```


### function translate

```cpp
virtual void translate(
    qreal dx,
    qreal dy
) =0
```


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET