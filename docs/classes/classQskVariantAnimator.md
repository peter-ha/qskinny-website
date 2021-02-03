---
title: QskVariantAnimator
layout: docs

---


**Module:** **[Animation](/docs/modules/group__Animation/)**



Inherits from QskAnimator

Inherited by [QskHintAnimator](/docs/classes/classQskHintAnimator/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskVariantAnimator](/docs/classes/classQskVariantAnimator/#function-qskvariantanimator)**() |
| | **[~QskVariantAnimator](/docs/classes/classQskVariantAnimator/#function-~qskvariantanimator)**() override |
| void | **[setCurrentValue](/docs/classes/classQskVariantAnimator/#function-setcurrentvalue)**(const QVariant & value) |
| QVariant | **[currentValue](/docs/classes/classQskVariantAnimator/#function-currentvalue)**() const |
| void | **[setStartValue](/docs/classes/classQskVariantAnimator/#function-setstartvalue)**(const QVariant & value) |
| QVariant | **[startValue](/docs/classes/classQskVariantAnimator/#function-startvalue)**() const |
| void | **[setEndValue](/docs/classes/classQskVariantAnimator/#function-setendvalue)**(const QVariant & value) |
| QVariant | **[endValue](/docs/classes/classQskVariantAnimator/#function-endvalue)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setup](/docs/classes/classQskVariantAnimator/#function-setup)**() override |
| void | **[advance](/docs/classes/classQskVariantAnimator/#function-advance)**(qreal value) override |
| void | **[done](/docs/classes/classQskVariantAnimator/#function-done)**() override |

## Public Functions Documentation

### function QskVariantAnimator

```cpp
QskVariantAnimator()
```


### function ~QskVariantAnimator

```cpp
~QskVariantAnimator() override
```


### function setCurrentValue

```cpp
void setCurrentValue(
    const QVariant & value
)
```


### function currentValue

```cpp
inline QVariant currentValue() const
```


### function setStartValue

```cpp
void setStartValue(
    const QVariant & value
)
```


### function startValue

```cpp
inline QVariant startValue() const
```


### function setEndValue

```cpp
void setEndValue(
    const QVariant & value
)
```


### function endValue

```cpp
inline QVariant endValue() const
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


-------------------------------

Updated on  3 February 2021 at 15:05:45 CET