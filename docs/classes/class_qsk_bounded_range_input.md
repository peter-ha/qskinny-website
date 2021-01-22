---
title: QskBoundedRangeInput
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from QskBoundedInput

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setRange](/docs/classes/class_qsk_bounded_range_input/#slot-setrange)**(const QskIntervalF & range) |
| void | **[setLowerValue](/docs/classes/class_qsk_bounded_range_input/#slot-setlowervalue)**(qreal value) |
| void | **[setUpperValue](/docs/classes/class_qsk_bounded_range_input/#slot-setuppervalue)**(qreal value) |
| void | **[setLowerValueAsRatio](/docs/classes/class_qsk_bounded_range_input/#slot-setlowervalueasratio)**(qreal ratio) |
| void | **[setUpperValueAsRatio](/docs/classes/class_qsk_bounded_range_input/#slot-setuppervalueasratio)**(qreal ratio) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[rangeChanged](/docs/classes/class_qsk_bounded_range_input/#signal-rangechanged)**(const QskIntervalF & ) |
| void | **[lowerValueChanged](/docs/classes/class_qsk_bounded_range_input/#signal-lowervaluechanged)**(qreal ) |
| void | **[upperValueChanged](/docs/classes/class_qsk_bounded_range_input/#signal-uppervaluechanged)**(qreal ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskBoundedRangeInput](/docs/classes/class_qsk_bounded_range_input/#function-qskboundedrangeinput)**(QQuickItem * parent =nullptr) |
| | **[QskBoundedRangeInput](/docs/classes/class_qsk_bounded_range_input/#function-qskboundedrangeinput)**(const QskIntervalF & range, QQuickItem * parent =nullptr) |
| | **[~QskBoundedRangeInput](/docs/classes/class_qsk_bounded_range_input/#function-~qskboundedrangeinput)**() override |
| void | **[setRange](/docs/classes/class_qsk_bounded_range_input/#function-setrange)**(qreal lowerValue, qreal upperValue) |
| void | **[resetRange](/docs/classes/class_qsk_bounded_range_input/#function-resetrange)**() |
| QskIntervalF | **[range](/docs/classes/class_qsk_bounded_range_input/#function-range)**() const |
| qreal | **[lowerValue](/docs/classes/class_qsk_bounded_range_input/#function-lowervalue)**() const |
| qreal | **[upperValue](/docs/classes/class_qsk_bounded_range_input/#function-uppervalue)**() const |
| qreal | **[lowerValueAsRatio](/docs/classes/class_qsk_bounded_range_input/#function-lowervalueasratio)**() const |
| qreal | **[upperValueAsRatio](/docs/classes/class_qsk_bounded_range_input/#function-uppervalueasratio)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual QskIntervalF | **[fixupRange](/docs/classes/class_qsk_bounded_range_input/#function-fixuprange)**(const QskIntervalF & range) const |
| void | **[alignInput](/docs/classes/class_qsk_bounded_range_input/#function-aligninput)**() override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| qreal | **[lowerValue](/docs/classes/class_qsk_bounded_range_input/#property-lowervalue)**  |
| qreal | **[upperValue](/docs/classes/class_qsk_bounded_range_input/#property-uppervalue)**  |
| QskIntervalF | **[range](/docs/classes/class_qsk_bounded_range_input/#property-range)**  |

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

Updated on 22 January 2021 at 17:05:49 CET