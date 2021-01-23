---
title: QskInputGrabber
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from [QskControl](/docs/classes/class_qsk_control/), [QskQuickItem](/docs/classes/class_qsk_quick_item/), [QskSkinnable](/docs/classes/class_qsk_skinnable/), QQuickItem

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[updateGeometry](/docs/classes/class_qsk_input_grabber/#slot-updategeometry)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskInputGrabber](/docs/classes/class_qsk_input_grabber/#function-qskinputgrabber)**(QQuickItem * parent =nullptr) |
| | **[~QskInputGrabber](/docs/classes/class_qsk_input_grabber/#function-~qskinputgrabber)**() override |
| virtual QRectF | **[grabberRect](/docs/classes/class_qsk_input_grabber/#function-grabberrect)**() const |
| virtual bool | **[isBlocking](/docs/classes/class_qsk_input_grabber/#function-isblocking)**(const QPointF & pos) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[event](/docs/classes/class_qsk_input_grabber/#function-event)**(QEvent * event) override |

## Public Slots Documentation

### slot updateGeometry

```cpp
void updateGeometry()
```


## Public Functions Documentation

### function QskInputGrabber

```cpp
QskInputGrabber(
    QQuickItem * parent =nullptr
)
```


### function ~QskInputGrabber

```cpp
~QskInputGrabber() override
```


### function grabberRect

```cpp
virtual QRectF grabberRect() const
```


### function isBlocking

```cpp
virtual bool isBlocking(
    const QPointF & pos
) const
```


## Protected Functions Documentation

### function event

```cpp
bool event(
    QEvent * event
) override
```


-------------------------------

Updated on 23 January 2021 at 09:50:35 CET