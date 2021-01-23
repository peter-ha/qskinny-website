---
title: QskSlider
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from QskBoundedValueInput

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[pressedChanged](/docs/classes/class_qsk_slider/#signal-pressedchanged)**(bool ) |
| void | **[orientationChanged](/docs/classes/class_qsk_slider/#signal-orientationchanged)**(Qt::Orientation ) |
| void | **[trackingChanged](/docs/classes/class_qsk_slider/#signal-trackingchanged)**(bool ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSlider](/docs/classes/class_qsk_slider/#function-qskslider)**(QQuickItem * parent =nullptr) |
| | **[QskSlider](/docs/classes/class_qsk_slider/#function-qskslider)**(Qt::Orientation orientation, QQuickItem * parent =nullptr) |
| | **[~QskSlider](/docs/classes/class_qsk_slider/#function-~qskslider)**() override |
| bool | **[isPressed](/docs/classes/class_qsk_slider/#function-ispressed)**() const |
| void | **[setOrientation](/docs/classes/class_qsk_slider/#function-setorientation)**(Qt::Orientation orientation) |
| Qt::Orientation | **[orientation](/docs/classes/class_qsk_slider/#function-orientation)**() const |
| void | **[setTracking](/docs/classes/class_qsk_slider/#function-settracking)**(bool on) |
| bool | **[isTracking](/docs/classes/class_qsk_slider/#function-istracking)**() const |
| qreal | **[handlePosition](/docs/classes/class_qsk_slider/#function-handleposition)**() const |
| QskAspect::Placement | **[effectivePlacement](/docs/classes/class_qsk_slider/#function-effectiveplacement)**() const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[mousePressEvent](/docs/classes/class_qsk_slider/#function-mousepressevent)**(QMouseEvent * e) override |
| void | **[mouseMoveEvent](/docs/classes/class_qsk_slider/#function-mousemoveevent)**(QMouseEvent * e) override |
| void | **[mouseReleaseEvent](/docs/classes/class_qsk_slider/#function-mousereleaseevent)**(QMouseEvent * e) override |
| QSizeF | **[handleSize](/docs/classes/class_qsk_slider/#function-handlesize)**() const |
| QRectF | **[handleRect](/docs/classes/class_qsk_slider/#function-handlerect)**() const |
| void | **[aboutToShow](/docs/classes/class_qsk_slider/#function-abouttoshow)**() override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[isPressed](/docs/classes/class_qsk_slider/#property-ispressed)**  |
| Qt::Orientation | **[orientation](/docs/classes/class_qsk_slider/#property-orientation)**  |
| bool | **[tracking](/docs/classes/class_qsk_slider/#property-tracking)**  |
| qreal | **[handlePosition](/docs/classes/class_qsk_slider/#property-handleposition)**  |

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

Updated on 23 January 2021 at 09:50:35 CET