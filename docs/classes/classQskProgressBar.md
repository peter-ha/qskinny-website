---
title: QskProgressBar
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from QskBoundedControl

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Groove](/docs/classes/classQskProgressBar/#subcontrol-groove)**  |
| const QskAspect::Subcontrol | **[Bar](/docs/classes/classQskProgressBar/#subcontrol-bar)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskProgressBar](/docs/classes/classQskProgressBar/#function-qskprogressbar)**(Qt::Orientation orientation, QQuickItem * parent =nullptr) |
| | **[QskProgressBar](/docs/classes/classQskProgressBar/#function-qskprogressbar)**(Qt::Orientation orientation, qreal min, qreal max, QQuickItem * parent =nullptr) |
| | **[QskProgressBar](/docs/classes/classQskProgressBar/#function-qskprogressbar)**(const QskIntervalF & boundaries, QQuickItem * parent =nullptr) |
| | **[QskProgressBar](/docs/classes/classQskProgressBar/#function-qskprogressbar)**(qreal min, qreal max, QQuickItem * parent =nullptr) |
| | **[QskProgressBar](/docs/classes/classQskProgressBar/#function-qskprogressbar)**(QQuickItem * parent =nullptr) |
| | **[~QskProgressBar](/docs/classes/classQskProgressBar/#function-~qskprogressbar)**() override |
| Qt::Orientation | **[orientation](/docs/classes/classQskProgressBar/#function-orientation)**() const |
| void | **[setOrientation](/docs/classes/classQskProgressBar/#function-setorientation)**(Qt::Orientation orientation) |
| bool | **[isIndeterminate](/docs/classes/classQskProgressBar/#function-isindeterminate)**() const |
| void | **[setIndeterminate](/docs/classes/classQskProgressBar/#function-setindeterminate)**(bool on =true) |
| QskAspect::Placement | **[effectivePlacement](/docs/classes/classQskProgressBar/#function-effectiveplacement)**() const override |
| void | **[setBarGradient](/docs/classes/classQskProgressBar/#function-setbargradient)**(const QskGradient & gradient) |
| void | **[resetBarGradient](/docs/classes/classQskProgressBar/#function-resetbargradient)**() |
| QskGradient | **[barGradient](/docs/classes/classQskProgressBar/#function-bargradient)**() const |
| void | **[setExtent](/docs/classes/classQskProgressBar/#function-setextent)**(qreal extent) |
| void | **[resetExtent](/docs/classes/classQskProgressBar/#function-resetextent)**() |
| qreal | **[extent](/docs/classes/classQskProgressBar/#function-extent)**() const |
| void | **[resetOrigin](/docs/classes/classQskProgressBar/#function-resetorigin)**() |
| qreal | **[origin](/docs/classes/classQskProgressBar/#function-origin)**() const |
| qreal | **[value](/docs/classes/classQskProgressBar/#function-value)**() const |
| qreal | **[valueAsRatio](/docs/classes/classQskProgressBar/#function-valueasratio)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[componentComplete](/docs/classes/classQskProgressBar/#function-componentcomplete)**() override |
| void | **[itemChange](/docs/classes/classQskProgressBar/#function-itemchange)**(ItemChange , const ItemChangeData & ) override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[orientationChanged](/docs/classes/classQskProgressBar/#signal-orientationchanged)**(Qt::Orientation ) |
| void | **[extentChanged](/docs/classes/classQskProgressBar/#signal-extentchanged)**(qreal ) |
| void | **[indeterminateChanged](/docs/classes/classQskProgressBar/#signal-indeterminatechanged)**(bool ) |
| void | **[valueChanged](/docs/classes/classQskProgressBar/#signal-valuechanged)**(qreal ) |
| void | **[originChanged](/docs/classes/classQskProgressBar/#signal-originchanged)**(qreal ) |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setValue](/docs/classes/classQskProgressBar/#slot-setvalue)**(qreal value) |
| void | **[setValueAsRatio](/docs/classes/classQskProgressBar/#slot-setvalueasratio)**(qreal ratio) |
| void | **[setOrigin](/docs/classes/classQskProgressBar/#slot-setorigin)**(qreal origin) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| Qt::Orientation | **[orientation](/docs/classes/classQskProgressBar/#property-orientation)**  |
| qreal | **[extent](/docs/classes/classQskProgressBar/#property-extent)**  |
| bool | **[indeterminate](/docs/classes/classQskProgressBar/#property-indeterminate)**  |
| qreal | **[origin](/docs/classes/classQskProgressBar/#property-origin)**  |
| qreal | **[value](/docs/classes/classQskProgressBar/#property-value)**  |
| qreal | **[valueAsRatio](/docs/classes/classQskProgressBar/#property-valueasratio)**  |

## Public Subcontrols Documentation

### subcontrol Groove




### subcontrol Bar




## Public Functions Documentation

### function QskProgressBar

```cpp
QskProgressBar(
    Qt::Orientation orientation,
    QQuickItem * parent =nullptr
)
```


### function QskProgressBar

```cpp
QskProgressBar(
    Qt::Orientation orientation,
    qreal min,
    qreal max,
    QQuickItem * parent =nullptr
)
```


### function QskProgressBar

```cpp
QskProgressBar(
    const QskIntervalF & boundaries,
    QQuickItem * parent =nullptr
)
```


### function QskProgressBar

```cpp
QskProgressBar(
    qreal min,
    qreal max,
    QQuickItem * parent =nullptr
)
```


### function QskProgressBar

```cpp
QskProgressBar(
    QQuickItem * parent =nullptr
)
```


### function ~QskProgressBar

```cpp
~QskProgressBar() override
```


### function orientation

```cpp
Qt::Orientation orientation() const
```


### function setOrientation

```cpp
void setOrientation(
    Qt::Orientation orientation
)
```


### function isIndeterminate

```cpp
bool isIndeterminate() const
```


### function setIndeterminate

```cpp
void setIndeterminate(
    bool on =true
)
```


### function effectivePlacement

```cpp
QskAspect::Placement effectivePlacement() const override
```


### function setBarGradient

```cpp
void setBarGradient(
    const QskGradient & gradient
)
```


### function resetBarGradient

```cpp
void resetBarGradient()
```


### function barGradient

```cpp
QskGradient barGradient() const
```


### function setExtent

```cpp
void setExtent(
    qreal extent
)
```


### function resetExtent

```cpp
void resetExtent()
```


### function extent

```cpp
qreal extent() const
```


### function resetOrigin

```cpp
void resetOrigin()
```


### function origin

```cpp
qreal origin() const
```


### function value

```cpp
qreal value() const
```


### function valueAsRatio

```cpp
qreal valueAsRatio() const
```


## Protected Functions Documentation

### function componentComplete

```cpp
void componentComplete() override
```


### function itemChange

```cpp
void itemChange(
    ItemChange ,
    const ItemChangeData & 
) override
```


## Public Signals Documentation

### signal orientationChanged

```cpp
void orientationChanged(
    Qt::Orientation 
)
```


### signal extentChanged

```cpp
void extentChanged(
    qreal 
)
```


### signal indeterminateChanged

```cpp
void indeterminateChanged(
    bool 
)
```


### signal valueChanged

```cpp
void valueChanged(
    qreal 
)
```


### signal originChanged

```cpp
void originChanged(
    qreal 
)
```


## Public Slots Documentation

### slot setValue

```cpp
void setValue(
    qreal value
)
```


### slot setValueAsRatio

```cpp
void setValueAsRatio(
    qreal ratio
)
```


### slot setOrigin

```cpp
void setOrigin(
    qreal origin
)
```


## Public Property Documentation

### property orientation

```cpp
Qt::Orientation orientation;
```


### property extent

```cpp
qreal extent;
```


### property indeterminate

```cpp
bool indeterminate;
```


### property origin

```cpp
qreal origin;
```


### property value

```cpp
qreal value;
```


### property valueAsRatio

```cpp
qreal valueAsRatio;
```


-------------------------------

Updated on  3 February 2021 at 15:05:44 CET