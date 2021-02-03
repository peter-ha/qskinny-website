---
title: QskBoundedInput
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from QskBoundedControl

Inherited by [QskBoundedRangeInput](/docs/classes/classQskBoundedRangeInput/), [QskBoundedValueInput](/docs/classes/classQskBoundedValueInput/)

## Public States

|                | Name           |
| -------------- | -------------- |
| const QskAspect::State | **[ReadOnly](/docs/classes/classQskBoundedInput/#state-readonly)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskBoundedInput](/docs/classes/classQskBoundedInput/#function-qskboundedinput)**(QQuickItem * parent =nullptr) |
| | **[~QskBoundedInput](/docs/classes/classQskBoundedInput/#function-~qskboundedinput)**() override |
| qreal | **[stepSize](/docs/classes/classQskBoundedInput/#function-stepsize)**() const |
| int | **[pageSize](/docs/classes/classQskBoundedInput/#function-pagesize)**() const |
| void | **[setSnap](/docs/classes/classQskBoundedInput/#function-setsnap)**(bool snap) |
| bool | **[snap](/docs/classes/classQskBoundedInput/#function-snap)**() const |
| void | **[setReadOnly](/docs/classes/classQskBoundedInput/#function-setreadonly)**(bool readOnly) |
| bool | **[isReadOnly](/docs/classes/classQskBoundedInput/#function-isreadonly)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[keyPressEvent](/docs/classes/classQskBoundedInput/#function-keypressevent)**(QKeyEvent * event) override |
| void | **[wheelEvent](/docs/classes/classQskBoundedInput/#function-wheelevent)**(QWheelEvent * event) override |
| void | **[componentComplete](/docs/classes/classQskBoundedInput/#function-componentcomplete)**() override |
| virtual void | **[alignInput](/docs/classes/classQskBoundedInput/#function-aligninput)**() |
| qreal | **[alignedValue](/docs/classes/classQskBoundedInput/#function-alignedvalue)**(qreal value) const |
| QskIntervalF | **[alignedInterval](/docs/classes/classQskBoundedInput/#function-alignedinterval)**(const QskIntervalF & interval) const |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[stepSizeChanged](/docs/classes/classQskBoundedInput/#signal-stepsizechanged)**(qreal ) |
| void | **[pageSizeChanged](/docs/classes/classQskBoundedInput/#signal-pagesizechanged)**(qreal ) |
| void | **[snapChanged](/docs/classes/classQskBoundedInput/#signal-snapchanged)**(bool ) |
| void | **[readOnlyChanged](/docs/classes/classQskBoundedInput/#signal-readonlychanged)**(bool ) |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setStepSize](/docs/classes/classQskBoundedInput/#slot-setstepsize)**(qreal stepSize) |
| void | **[setPageSize](/docs/classes/classQskBoundedInput/#slot-setpagesize)**(int pageSize) |
| void | **[stepUp](/docs/classes/classQskBoundedInput/#slot-stepup)**() |
| void | **[stepDown](/docs/classes/classQskBoundedInput/#slot-stepdown)**() |
| void | **[pageUp](/docs/classes/classQskBoundedInput/#slot-pageup)**() |
| void | **[pageDown](/docs/classes/classQskBoundedInput/#slot-pagedown)**() |
| virtual void | **[increment](/docs/classes/classQskBoundedInput/#slot-increment)**(qreal offset) =0 |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| qreal | **[stepSize](/docs/classes/classQskBoundedInput/#property-stepsize)**  |
| int | **[pageSize](/docs/classes/classQskBoundedInput/#property-pagesize)**  |
| bool | **[snap](/docs/classes/classQskBoundedInput/#property-snap)**  |
| bool | **[readOnly](/docs/classes/classQskBoundedInput/#property-readonly)**  |

## Public States Documentation

### state ReadOnly




## Public Functions Documentation

### function QskBoundedInput

```cpp
QskBoundedInput(
    QQuickItem * parent =nullptr
)
```


### function ~QskBoundedInput

```cpp
~QskBoundedInput() override
```


### function stepSize

```cpp
qreal stepSize() const
```


### function pageSize

```cpp
int pageSize() const
```


### function setSnap

```cpp
void setSnap(
    bool snap
)
```


### function snap

```cpp
bool snap() const
```


### function setReadOnly

```cpp
void setReadOnly(
    bool readOnly
)
```


### function isReadOnly

```cpp
bool isReadOnly() const
```


## Protected Functions Documentation

### function keyPressEvent

```cpp
void keyPressEvent(
    QKeyEvent * event
) override
```


### function wheelEvent

```cpp
void wheelEvent(
    QWheelEvent * event
) override
```


### function componentComplete

```cpp
void componentComplete() override
```


### function alignInput

```cpp
virtual void alignInput()
```


### function alignedValue

```cpp
qreal alignedValue(
    qreal value
) const
```


### function alignedInterval

```cpp
QskIntervalF alignedInterval(
    const QskIntervalF & interval
) const
```


## Public Signals Documentation

### signal stepSizeChanged

```cpp
void stepSizeChanged(
    qreal 
)
```


### signal pageSizeChanged

```cpp
void pageSizeChanged(
    qreal 
)
```


### signal snapChanged

```cpp
void snapChanged(
    bool 
)
```


### signal readOnlyChanged

```cpp
void readOnlyChanged(
    bool 
)
```


## Public Slots Documentation

### slot setStepSize

```cpp
void setStepSize(
    qreal stepSize
)
```


### slot setPageSize

```cpp
void setPageSize(
    int pageSize
)
```


### slot stepUp

```cpp
void stepUp()
```


### slot stepDown

```cpp
void stepDown()
```


### slot pageUp

```cpp
void pageUp()
```


### slot pageDown

```cpp
void pageDown()
```


### slot increment

```cpp
virtual void increment(
    qreal offset
) =0
```


## Public Property Documentation

### property stepSize

```cpp
qreal stepSize;
```


### property pageSize

```cpp
int pageSize;
```


### property snap

```cpp
bool snap;
```


### property readOnly

```cpp
bool readOnly;
```


-------------------------------

Updated on  3 February 2021 at 15:05:44 CET