---
title: QskProgressBar
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from QskBoundedControl

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setValue](/docs/classes/class_qsk_progress_bar/#slot-setvalue)**(qreal value) |
| void | **[setValueAsRatio](/docs/classes/class_qsk_progress_bar/#slot-setvalueasratio)**(qreal ratio) |
| void | **[setOrigin](/docs/classes/class_qsk_progress_bar/#slot-setorigin)**(qreal origin) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[orientationChanged](/docs/classes/class_qsk_progress_bar/#signal-orientationchanged)**(Qt::Orientation ) |
| void | **[extentChanged](/docs/classes/class_qsk_progress_bar/#signal-extentchanged)**(qreal ) |
| void | **[indeterminateChanged](/docs/classes/class_qsk_progress_bar/#signal-indeterminatechanged)**(bool ) |
| void | **[valueChanged](/docs/classes/class_qsk_progress_bar/#signal-valuechanged)**(qreal ) |
| void | **[originChanged](/docs/classes/class_qsk_progress_bar/#signal-originchanged)**(qreal ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskProgressBar](/docs/classes/class_qsk_progress_bar/#function-qskprogressbar)**(Qt::Orientation orientation, QQuickItem * parent =nullptr) |
| | **[QskProgressBar](/docs/classes/class_qsk_progress_bar/#function-qskprogressbar)**(Qt::Orientation orientation, qreal min, qreal max, QQuickItem * parent =nullptr) |
| | **[QskProgressBar](/docs/classes/class_qsk_progress_bar/#function-qskprogressbar)**(const QskIntervalF & boundaries, QQuickItem * parent =nullptr) |
| | **[QskProgressBar](/docs/classes/class_qsk_progress_bar/#function-qskprogressbar)**(qreal min, qreal max, QQuickItem * parent =nullptr) |
| | **[QskProgressBar](/docs/classes/class_qsk_progress_bar/#function-qskprogressbar)**(QQuickItem * parent =nullptr) |
| | **[~QskProgressBar](/docs/classes/class_qsk_progress_bar/#function-~qskprogressbar)**() override |
| Qt::Orientation | **[orientation](/docs/classes/class_qsk_progress_bar/#function-orientation)**() const |
| void | **[setOrientation](/docs/classes/class_qsk_progress_bar/#function-setorientation)**(Qt::Orientation orientation) |
| bool | **[isIndeterminate](/docs/classes/class_qsk_progress_bar/#function-isindeterminate)**() const |
| void | **[setIndeterminate](/docs/classes/class_qsk_progress_bar/#function-setindeterminate)**(bool on =true) |
| QskAspect::Placement | **[effectivePlacement](/docs/classes/class_qsk_progress_bar/#function-effectiveplacement)**() const override |
| void | **[setBarGradient](/docs/classes/class_qsk_progress_bar/#function-setbargradient)**(const QskGradient & gradient) |
| void | **[resetBarGradient](/docs/classes/class_qsk_progress_bar/#function-resetbargradient)**() |
| QskGradient | **[barGradient](/docs/classes/class_qsk_progress_bar/#function-bargradient)**() const |
| void | **[setExtent](/docs/classes/class_qsk_progress_bar/#function-setextent)**(qreal extent) |
| void | **[resetExtent](/docs/classes/class_qsk_progress_bar/#function-resetextent)**() |
| qreal | **[extent](/docs/classes/class_qsk_progress_bar/#function-extent)**() const |
| void | **[resetOrigin](/docs/classes/class_qsk_progress_bar/#function-resetorigin)**() |
| qreal | **[origin](/docs/classes/class_qsk_progress_bar/#function-origin)**() const |
| qreal | **[value](/docs/classes/class_qsk_progress_bar/#function-value)**() const |
| qreal | **[valueAsRatio](/docs/classes/class_qsk_progress_bar/#function-valueasratio)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[componentComplete](/docs/classes/class_qsk_progress_bar/#function-componentcomplete)**() override |
| void | **[itemChange](/docs/classes/class_qsk_progress_bar/#function-itemchange)**(ItemChange , const ItemChangeData & ) override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| Qt::Orientation | **[orientation](/docs/classes/class_qsk_progress_bar/#property-orientation)**  |
| qreal | **[extent](/docs/classes/class_qsk_progress_bar/#property-extent)**  |
| bool | **[indeterminate](/docs/classes/class_qsk_progress_bar/#property-indeterminate)**  |
| qreal | **[origin](/docs/classes/class_qsk_progress_bar/#property-origin)**  |
| qreal | **[value](/docs/classes/class_qsk_progress_bar/#property-value)**  |
| qreal | **[valueAsRatio](/docs/classes/class_qsk_progress_bar/#property-valueasratio)**  |

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

Updated on 23 January 2021 at 09:50:35 CET