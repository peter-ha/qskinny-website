---
title: QskFlickAnimator
layout: docs

---


**Module:** **[Animation](/docs/modules/group__Animation/)**



Inherits from QskAnimator

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskFlickAnimator](/docs/classes/classQskFlickAnimator/#function-qskflickanimator)**() |
| | **[~QskFlickAnimator](/docs/classes/classQskFlickAnimator/#function-~qskflickanimator)**() override |
| void | **[setAngle](/docs/classes/classQskFlickAnimator/#function-setangle)**(qreal degrees) |
| qreal | **[angle](/docs/classes/classQskFlickAnimator/#function-angle)**() const |
| void | **[setVelocity](/docs/classes/classQskFlickAnimator/#function-setvelocity)**(qreal velocity) |
| qreal | **[velocity](/docs/classes/classQskFlickAnimator/#function-velocity)**() const |
| qreal | **[animatedVelocity](/docs/classes/classQskFlickAnimator/#function-animatedvelocity)**() const |
| void | **[flick](/docs/classes/classQskFlickAnimator/#function-flick)**(qreal degrees, qreal velocity) |
| void | **[accelerate](/docs/classes/classQskFlickAnimator/#function-accelerate)**(qreal degrees, qreal velocity) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setup](/docs/classes/classQskFlickAnimator/#function-setup)**() override |
| void | **[advance](/docs/classes/classQskFlickAnimator/#function-advance)**(qreal value) override |
| void | **[done](/docs/classes/classQskFlickAnimator/#function-done)**() override |
| virtual void | **[translate](/docs/classes/classQskFlickAnimator/#function-translate)**(qreal dx, qreal dy) =0 |

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

Updated on  3 February 2021 at 15:05:45 CET