---
title: QskBoundedControl
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from [QskControl](/docs/classes/class_qsk_control/), [QskQuickItem](/docs/classes/class_qsk_quick_item/), [QskSkinnable](/docs/classes/class_qsk_skinnable/), QQuickItem

Inherited by [QskBoundedInput](/docs/classes/class_qsk_bounded_input/), [QskProgressBar](/docs/classes/class_qsk_progress_bar/)

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setMinimum](/docs/classes/class_qsk_bounded_control/#slot-setminimum)**(qreal minimum) |
| void | **[setMaximum](/docs/classes/class_qsk_bounded_control/#slot-setmaximum)**(qreal maximum) |
| void | **[setBoundaries](/docs/classes/class_qsk_bounded_control/#slot-setboundaries)**(const QskIntervalF & boundaries) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[minimumChanged](/docs/classes/class_qsk_bounded_control/#signal-minimumchanged)**(qreal ) |
| void | **[maximumChanged](/docs/classes/class_qsk_bounded_control/#signal-maximumchanged)**(qreal ) |
| void | **[boundariesChanged](/docs/classes/class_qsk_bounded_control/#signal-boundarieschanged)**(const QskIntervalF & ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[~QskBoundedControl](/docs/classes/class_qsk_bounded_control/#function-~qskboundedcontrol)**() override |
| qreal | **[minimum](/docs/classes/class_qsk_bounded_control/#function-minimum)**() const |
| qreal | **[maximum](/docs/classes/class_qsk_bounded_control/#function-maximum)**() const |
| qreal | **[boundaryLength](/docs/classes/class_qsk_bounded_control/#function-boundarylength)**() const |
| void | **[setBoundaries](/docs/classes/class_qsk_bounded_control/#function-setboundaries)**(qreal min, qreal max) |
| QskIntervalF | **[boundaries](/docs/classes/class_qsk_bounded_control/#function-boundaries)**() const |
| qreal | **[boundedValue](/docs/classes/class_qsk_bounded_control/#function-boundedvalue)**(qreal value) const |
| qreal | **[valueAsRatio](/docs/classes/class_qsk_bounded_control/#function-valueasratio)**(qreal value) const |
| qreal | **[valueFromRatio](/docs/classes/class_qsk_bounded_control/#function-valuefromratio)**(qreal ratio) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskBoundedControl](/docs/classes/class_qsk_bounded_control/#function-qskboundedcontrol)**(QQuickItem * parent =nullptr) |
| | **[QskBoundedControl](/docs/classes/class_qsk_bounded_control/#function-qskboundedcontrol)**(qreal min, qreal max, QQuickItem * parent =nullptr) |
| void | **[componentComplete](/docs/classes/class_qsk_bounded_control/#function-componentcomplete)**() override |
| void | **[adjustBoundaries](/docs/classes/class_qsk_bounded_control/#function-adjustboundaries)**(bool increasing) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| qreal | **[minimum](/docs/classes/class_qsk_bounded_control/#property-minimum)**  |
| qreal | **[maximum](/docs/classes/class_qsk_bounded_control/#property-maximum)**  |
| QskIntervalF | **[boundaries](/docs/classes/class_qsk_bounded_control/#property-boundaries)**  |

## Public Slots Documentation

### slot setMinimum

```cpp
void setMinimum(
    qreal minimum
)
```


### slot setMaximum

```cpp
void setMaximum(
    qreal maximum
)
```


### slot setBoundaries

```cpp
void setBoundaries(
    const QskIntervalF & boundaries
)
```


## Public Signals Documentation

### signal minimumChanged

```cpp
void minimumChanged(
    qreal 
)
```


### signal maximumChanged

```cpp
void maximumChanged(
    qreal 
)
```


### signal boundariesChanged

```cpp
void boundariesChanged(
    const QskIntervalF & 
)
```


## Public Functions Documentation

### function ~QskBoundedControl

```cpp
~QskBoundedControl() override
```


### function minimum

```cpp
qreal minimum() const
```


### function maximum

```cpp
qreal maximum() const
```


### function boundaryLength

```cpp
qreal boundaryLength() const
```


### function setBoundaries

```cpp
void setBoundaries(
    qreal min,
    qreal max
)
```


### function boundaries

```cpp
QskIntervalF boundaries() const
```


### function boundedValue

```cpp
qreal boundedValue(
    qreal value
) const
```


### function valueAsRatio

```cpp
qreal valueAsRatio(
    qreal value
) const
```


### function valueFromRatio

```cpp
qreal valueFromRatio(
    qreal ratio
) const
```


## Protected Functions Documentation

### function QskBoundedControl

```cpp
QskBoundedControl(
    QQuickItem * parent =nullptr
)
```


### function QskBoundedControl

```cpp
QskBoundedControl(
    qreal min,
    qreal max,
    QQuickItem * parent =nullptr
)
```


### function componentComplete

```cpp
void componentComplete() override
```


### function adjustBoundaries

```cpp
void adjustBoundaries(
    bool increasing
)
```


## Public Property Documentation

### property minimum

```cpp
qreal minimum;
```


### property maximum

```cpp
qreal maximum;
```


### property boundaries

```cpp
QskIntervalF boundaries;
```


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET