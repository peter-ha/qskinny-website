---
title: QskSlider
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from QskBoundedValueInput

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Panel](/docs/classes/classQskSlider/#subcontrol-panel)**  |
| const QskAspect::Subcontrol | **[Groove](/docs/classes/classQskSlider/#subcontrol-groove)**  |
| const QskAspect::Subcontrol | **[Fill](/docs/classes/classQskSlider/#subcontrol-fill)**  |
| const QskAspect::Subcontrol | **[Scale](/docs/classes/classQskSlider/#subcontrol-scale)**  |
| const QskAspect::Subcontrol | **[Handle](/docs/classes/classQskSlider/#subcontrol-handle)**  |

## Public States

|                | Name           |
| -------------- | -------------- |
| const QskAspect::State | **[Pressed](/docs/classes/classQskSlider/#state-pressed)**  |
| const QskAspect::State | **[Minimum](/docs/classes/classQskSlider/#state-minimum)**  |
| const QskAspect::State | **[Maximum](/docs/classes/classQskSlider/#state-maximum)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSlider](/docs/classes/classQskSlider/#function-qskslider)**(QQuickItem * parent =nullptr) |
| | **[QskSlider](/docs/classes/classQskSlider/#function-qskslider)**(Qt::Orientation orientation, QQuickItem * parent =nullptr) |
| | **[~QskSlider](/docs/classes/classQskSlider/#function-~qskslider)**() override |
| bool | **[isPressed](/docs/classes/classQskSlider/#function-ispressed)**() const |
| void | **[setOrientation](/docs/classes/classQskSlider/#function-setorientation)**(Qt::Orientation orientation) |
| Qt::Orientation | **[orientation](/docs/classes/classQskSlider/#function-orientation)**() const |
| void | **[setTracking](/docs/classes/classQskSlider/#function-settracking)**(bool on) |
| bool | **[isTracking](/docs/classes/classQskSlider/#function-istracking)**() const |
| qreal | **[handlePosition](/docs/classes/classQskSlider/#function-handleposition)**() const |
| QskAspect::Placement | **[effectivePlacement](/docs/classes/classQskSlider/#function-effectiveplacement)**() const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[mousePressEvent](/docs/classes/classQskSlider/#function-mousepressevent)**(QMouseEvent * e) override |
| void | **[mouseMoveEvent](/docs/classes/classQskSlider/#function-mousemoveevent)**(QMouseEvent * e) override |
| void | **[mouseReleaseEvent](/docs/classes/classQskSlider/#function-mousereleaseevent)**(QMouseEvent * e) override |
| QSizeF | **[handleSize](/docs/classes/classQskSlider/#function-handlesize)**() const |
| QRectF | **[handleRect](/docs/classes/classQskSlider/#function-handlerect)**() const |
| void | **[aboutToShow](/docs/classes/classQskSlider/#function-abouttoshow)**() override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[pressedChanged](/docs/classes/classQskSlider/#signal-pressedchanged)**(bool ) |
| void | **[orientationChanged](/docs/classes/classQskSlider/#signal-orientationchanged)**(Qt::Orientation ) |
| void | **[trackingChanged](/docs/classes/classQskSlider/#signal-trackingchanged)**(bool ) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[isPressed](/docs/classes/classQskSlider/#property-ispressed)**  |
| Qt::Orientation | **[orientation](/docs/classes/classQskSlider/#property-orientation)**  |
| bool | **[tracking](/docs/classes/classQskSlider/#property-tracking)**  |
| qreal | **[handlePosition](/docs/classes/classQskSlider/#property-handleposition)**  |

## Public Subcontrols Documentation

### subcontrol Panel




### subcontrol Groove




### subcontrol Fill




### subcontrol Scale




### subcontrol Handle




## Public States Documentation

### state Pressed




### state Minimum




### state Maximum




## Public Functions Documentation

### function QskSlider

```cpp
explicit QskSlider(
    QQuickItem * parent =nullptr
)
```


### function QskSlider

```cpp
explicit QskSlider(
    Qt::Orientation orientation,
    QQuickItem * parent =nullptr
)
```


### function ~QskSlider

```cpp
~QskSlider() override
```


### function isPressed

```cpp
bool isPressed() const
```


### function setOrientation

```cpp
void setOrientation(
    Qt::Orientation orientation
)
```


### function orientation

```cpp
Qt::Orientation orientation() const
```


### function setTracking

```cpp
void setTracking(
    bool on
)
```


### function isTracking

```cpp
bool isTracking() const
```


### function handlePosition

```cpp
qreal handlePosition() const
```


### function effectivePlacement

```cpp
QskAspect::Placement effectivePlacement() const override
```


## Protected Functions Documentation

### function mousePressEvent

```cpp
void mousePressEvent(
    QMouseEvent * e
) override
```


### function mouseMoveEvent

```cpp
void mouseMoveEvent(
    QMouseEvent * e
) override
```


### function mouseReleaseEvent

```cpp
void mouseReleaseEvent(
    QMouseEvent * e
) override
```


### function handleSize

```cpp
QSizeF handleSize() const
```


### function handleRect

```cpp
QRectF handleRect() const
```


### function aboutToShow

```cpp
void aboutToShow() override
```


## Public Signals Documentation

### signal pressedChanged

```cpp
void pressedChanged(
    bool 
)
```


### signal orientationChanged

```cpp
void orientationChanged(
    Qt::Orientation 
)
```


### signal trackingChanged

```cpp
void trackingChanged(
    bool 
)
```


## Public Property Documentation

### property isPressed

```cpp
bool isPressed;
```


### property orientation

```cpp
Qt::Orientation orientation;
```


### property tracking

```cpp
bool tracking;
```


### property handlePosition

```cpp
qreal handlePosition;
```


-------------------------------

Updated on  3 February 2021 at 15:05:44 CET