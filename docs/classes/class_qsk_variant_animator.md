---
title: QskVariantAnimator
layout: docs

---


**Module:** **[Animation](/docs/modules/group___animation/)**



Inherits from QskAnimator

Inherited by [QskHintAnimator](/docs/classes/class_qsk_hint_animator/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskVariantAnimator](/docs/classes/class_qsk_variant_animator/#function-qskvariantanimator)**() |
| | **[~QskVariantAnimator](/docs/classes/class_qsk_variant_animator/#function-~qskvariantanimator)**() override |
| void | **[setCurrentValue](/docs/classes/class_qsk_variant_animator/#function-setcurrentvalue)**(const QVariant & value) |
| QVariant | **[currentValue](/docs/classes/class_qsk_variant_animator/#function-currentvalue)**() const |
| void | **[setStartValue](/docs/classes/class_qsk_variant_animator/#function-setstartvalue)**(const QVariant & value) |
| QVariant | **[startValue](/docs/classes/class_qsk_variant_animator/#function-startvalue)**() const |
| void | **[setEndValue](/docs/classes/class_qsk_variant_animator/#function-setendvalue)**(const QVariant & value) |
| QVariant | **[endValue](/docs/classes/class_qsk_variant_animator/#function-endvalue)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setup](/docs/classes/class_qsk_variant_animator/#function-setup)**() override |
| void | **[advance](/docs/classes/class_qsk_variant_animator/#function-advance)**(qreal value) override |
| void | **[done](/docs/classes/class_qsk_variant_animator/#function-done)**() override |

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

Updated on 22 January 2021 at 17:05:49 CET