---
title: QskBoundedInput
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from QskBoundedControl

Inherited by [QskBoundedRangeInput](/docs/classes/class_qsk_bounded_range_input/), [QskBoundedValueInput](/docs/classes/class_qsk_bounded_value_input/)

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setStepSize](/docs/classes/class_qsk_bounded_input/#slot-setstepsize)**(qreal stepSize) |
| void | **[setPageSize](/docs/classes/class_qsk_bounded_input/#slot-setpagesize)**(int pageSize) |
| void | **[stepUp](/docs/classes/class_qsk_bounded_input/#slot-stepup)**() |
| void | **[stepDown](/docs/classes/class_qsk_bounded_input/#slot-stepdown)**() |
| void | **[pageUp](/docs/classes/class_qsk_bounded_input/#slot-pageup)**() |
| void | **[pageDown](/docs/classes/class_qsk_bounded_input/#slot-pagedown)**() |
| virtual void | **[increment](/docs/classes/class_qsk_bounded_input/#slot-increment)**(qreal offset) =0 |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[stepSizeChanged](/docs/classes/class_qsk_bounded_input/#signal-stepsizechanged)**(qreal ) |
| void | **[pageSizeChanged](/docs/classes/class_qsk_bounded_input/#signal-pagesizechanged)**(qreal ) |
| void | **[snapChanged](/docs/classes/class_qsk_bounded_input/#signal-snapchanged)**(bool ) |
| void | **[readOnlyChanged](/docs/classes/class_qsk_bounded_input/#signal-readonlychanged)**(bool ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskBoundedInput](/docs/classes/class_qsk_bounded_input/#function-qskboundedinput)**(QQuickItem * parent =nullptr) |
| | **[~QskBoundedInput](/docs/classes/class_qsk_bounded_input/#function-~qskboundedinput)**() override |
| qreal | **[stepSize](/docs/classes/class_qsk_bounded_input/#function-stepsize)**() const |
| int | **[pageSize](/docs/classes/class_qsk_bounded_input/#function-pagesize)**() const |
| void | **[setSnap](/docs/classes/class_qsk_bounded_input/#function-setsnap)**(bool snap) |
| bool | **[snap](/docs/classes/class_qsk_bounded_input/#function-snap)**() const |
| void | **[setReadOnly](/docs/classes/class_qsk_bounded_input/#function-setreadonly)**(bool readOnly) |
| bool | **[isReadOnly](/docs/classes/class_qsk_bounded_input/#function-isreadonly)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[keyPressEvent](/docs/classes/class_qsk_bounded_input/#function-keypressevent)**(QKeyEvent * event) override |
| void | **[wheelEvent](/docs/classes/class_qsk_bounded_input/#function-wheelevent)**(QWheelEvent * event) override |
| void | **[componentComplete](/docs/classes/class_qsk_bounded_input/#function-componentcomplete)**() override |
| virtual void | **[alignInput](/docs/classes/class_qsk_bounded_input/#function-aligninput)**() |
| qreal | **[alignedValue](/docs/classes/class_qsk_bounded_input/#function-alignedvalue)**(qreal value) const |
| QskIntervalF | **[alignedInterval](/docs/classes/class_qsk_bounded_input/#function-alignedinterval)**(const QskIntervalF & interval) const |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| qreal | **[stepSize](/docs/classes/class_qsk_bounded_input/#property-stepsize)**  |
| int | **[pageSize](/docs/classes/class_qsk_bounded_input/#property-pagesize)**  |
| bool | **[snap](/docs/classes/class_qsk_bounded_input/#property-snap)**  |
| bool | **[readOnly](/docs/classes/class_qsk_bounded_input/#property-readonly)**  |

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

Updated on 23 January 2021 at 09:50:34 CET