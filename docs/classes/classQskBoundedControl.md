---
title: QskBoundedControl
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from [QskControl](/docs/classes/classQskControl/), [QskQuickItem](/docs/classes/classQskQuickItem/), QskSkinnable

Inherited by [QskBoundedInput](/docs/classes/classQskBoundedInput/), [QskProgressBar](/docs/classes/classQskProgressBar/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[~QskBoundedControl](/docs/classes/classQskBoundedControl/#function-~qskboundedcontrol)**() override |
| qreal | **[minimum](/docs/classes/classQskBoundedControl/#function-minimum)**() const |
| qreal | **[maximum](/docs/classes/classQskBoundedControl/#function-maximum)**() const |
| qreal | **[boundaryLength](/docs/classes/classQskBoundedControl/#function-boundarylength)**() const |
| void | **[setBoundaries](/docs/classes/classQskBoundedControl/#function-setboundaries)**(qreal min, qreal max) |
| QskIntervalF | **[boundaries](/docs/classes/classQskBoundedControl/#function-boundaries)**() const |
| qreal | **[boundedValue](/docs/classes/classQskBoundedControl/#function-boundedvalue)**(qreal value) const |
| qreal | **[valueAsRatio](/docs/classes/classQskBoundedControl/#function-valueasratio)**(qreal value) const |
| qreal | **[valueFromRatio](/docs/classes/classQskBoundedControl/#function-valuefromratio)**(qreal ratio) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskBoundedControl](/docs/classes/classQskBoundedControl/#function-qskboundedcontrol)**(QQuickItem * parent =nullptr) |
| | **[QskBoundedControl](/docs/classes/classQskBoundedControl/#function-qskboundedcontrol)**(qreal min, qreal max, QQuickItem * parent =nullptr) |
| void | **[componentComplete](/docs/classes/classQskBoundedControl/#function-componentcomplete)**() override |
| void | **[adjustBoundaries](/docs/classes/classQskBoundedControl/#function-adjustboundaries)**(bool increasing) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[minimumChanged](/docs/classes/classQskBoundedControl/#signal-minimumchanged)**(qreal ) |
| void | **[maximumChanged](/docs/classes/classQskBoundedControl/#signal-maximumchanged)**(qreal ) |
| void | **[boundariesChanged](/docs/classes/classQskBoundedControl/#signal-boundarieschanged)**(const QskIntervalF & ) |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setMinimum](/docs/classes/classQskBoundedControl/#slot-setminimum)**(qreal minimum) |
| void | **[setMaximum](/docs/classes/classQskBoundedControl/#slot-setmaximum)**(qreal maximum) |
| void | **[setBoundaries](/docs/classes/classQskBoundedControl/#slot-setboundaries)**(const QskIntervalF & boundaries) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| qreal | **[minimum](/docs/classes/classQskBoundedControl/#property-minimum)**  |
| qreal | **[maximum](/docs/classes/classQskBoundedControl/#property-maximum)**  |
| QskIntervalF | **[boundaries](/docs/classes/classQskBoundedControl/#property-boundaries)**  |

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

Updated on  3 February 2021 at 15:05:44 CET