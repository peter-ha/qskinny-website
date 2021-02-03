---
title: QskBoundedRangeInput
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from QskBoundedInput

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskBoundedRangeInput](/docs/classes/classQskBoundedRangeInput/#function-qskboundedrangeinput)**(QQuickItem * parent =nullptr) |
| | **[QskBoundedRangeInput](/docs/classes/classQskBoundedRangeInput/#function-qskboundedrangeinput)**(const QskIntervalF & range, QQuickItem * parent =nullptr) |
| | **[~QskBoundedRangeInput](/docs/classes/classQskBoundedRangeInput/#function-~qskboundedrangeinput)**() override |
| void | **[setRange](/docs/classes/classQskBoundedRangeInput/#function-setrange)**(qreal lowerValue, qreal upperValue) |
| void | **[resetRange](/docs/classes/classQskBoundedRangeInput/#function-resetrange)**() |
| QskIntervalF | **[range](/docs/classes/classQskBoundedRangeInput/#function-range)**() const |
| qreal | **[lowerValue](/docs/classes/classQskBoundedRangeInput/#function-lowervalue)**() const |
| qreal | **[upperValue](/docs/classes/classQskBoundedRangeInput/#function-uppervalue)**() const |
| qreal | **[lowerValueAsRatio](/docs/classes/classQskBoundedRangeInput/#function-lowervalueasratio)**() const |
| qreal | **[upperValueAsRatio](/docs/classes/classQskBoundedRangeInput/#function-uppervalueasratio)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual QskIntervalF | **[fixupRange](/docs/classes/classQskBoundedRangeInput/#function-fixuprange)**(const QskIntervalF & range) const |
| void | **[alignInput](/docs/classes/classQskBoundedRangeInput/#function-aligninput)**() override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[rangeChanged](/docs/classes/classQskBoundedRangeInput/#signal-rangechanged)**(const QskIntervalF & ) |
| void | **[lowerValueChanged](/docs/classes/classQskBoundedRangeInput/#signal-lowervaluechanged)**(qreal ) |
| void | **[upperValueChanged](/docs/classes/classQskBoundedRangeInput/#signal-uppervaluechanged)**(qreal ) |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setRange](/docs/classes/classQskBoundedRangeInput/#slot-setrange)**(const QskIntervalF & range) |
| void | **[setLowerValue](/docs/classes/classQskBoundedRangeInput/#slot-setlowervalue)**(qreal value) |
| void | **[setUpperValue](/docs/classes/classQskBoundedRangeInput/#slot-setuppervalue)**(qreal value) |
| void | **[setLowerValueAsRatio](/docs/classes/classQskBoundedRangeInput/#slot-setlowervalueasratio)**(qreal ratio) |
| void | **[setUpperValueAsRatio](/docs/classes/classQskBoundedRangeInput/#slot-setuppervalueasratio)**(qreal ratio) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| qreal | **[lowerValue](/docs/classes/classQskBoundedRangeInput/#property-lowervalue)**  |
| qreal | **[upperValue](/docs/classes/classQskBoundedRangeInput/#property-uppervalue)**  |
| QskIntervalF | **[range](/docs/classes/classQskBoundedRangeInput/#property-range)**  |

## Public Functions Documentation

### function QskBoundedRangeInput

```cpp
QskBoundedRangeInput(
    QQuickItem * parent =nullptr
)
```


### function QskBoundedRangeInput

```cpp
QskBoundedRangeInput(
    const QskIntervalF & range,
    QQuickItem * parent =nullptr
)
```


### function ~QskBoundedRangeInput

```cpp
~QskBoundedRangeInput() override
```


### function setRange

```cpp
void setRange(
    qreal lowerValue,
    qreal upperValue
)
```


### function resetRange

```cpp
void resetRange()
```


### function range

```cpp
QskIntervalF range() const
```


### function lowerValue

```cpp
qreal lowerValue() const
```


### function upperValue

```cpp
qreal upperValue() const
```


### function lowerValueAsRatio

```cpp
qreal lowerValueAsRatio() const
```


### function upperValueAsRatio

```cpp
qreal upperValueAsRatio() const
```


## Protected Functions Documentation

### function fixupRange

```cpp
virtual QskIntervalF fixupRange(
    const QskIntervalF & range
) const
```


### function alignInput

```cpp
void alignInput() override
```


## Public Signals Documentation

### signal rangeChanged

```cpp
void rangeChanged(
    const QskIntervalF & 
)
```


### signal lowerValueChanged

```cpp
void lowerValueChanged(
    qreal 
)
```


### signal upperValueChanged

```cpp
void upperValueChanged(
    qreal 
)
```


## Public Slots Documentation

### slot setRange

```cpp
void setRange(
    const QskIntervalF & range
)
```


### slot setLowerValue

```cpp
void setLowerValue(
    qreal value
)
```


### slot setUpperValue

```cpp
void setUpperValue(
    qreal value
)
```


### slot setLowerValueAsRatio

```cpp
void setLowerValueAsRatio(
    qreal ratio
)
```


### slot setUpperValueAsRatio

```cpp
void setUpperValueAsRatio(
    qreal ratio
)
```


## Public Property Documentation

### property lowerValue

```cpp
qreal lowerValue;
```


### property upperValue

```cpp
qreal upperValue;
```


### property range

```cpp
QskIntervalF range;
```


-------------------------------

Updated on  3 February 2021 at 15:05:44 CET