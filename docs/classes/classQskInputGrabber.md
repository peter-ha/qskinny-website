---
title: QskInputGrabber
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from [QskControl](/docs/classes/classQskControl/), [QskQuickItem](/docs/classes/classQskQuickItem/), QskSkinnable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskInputGrabber](/docs/classes/classQskInputGrabber/#function-qskinputgrabber)**(QQuickItem * parent =nullptr) |
| | **[~QskInputGrabber](/docs/classes/classQskInputGrabber/#function-~qskinputgrabber)**() override |
| virtual QRectF | **[grabberRect](/docs/classes/classQskInputGrabber/#function-grabberrect)**() const |
| virtual bool | **[isBlocking](/docs/classes/classQskInputGrabber/#function-isblocking)**(const QPointF & pos) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[event](/docs/classes/classQskInputGrabber/#function-event)**(QEvent * event) override |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[updateGeometry](/docs/classes/classQskInputGrabber/#slot-updategeometry)**() |

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


## Public Slots Documentation

### slot updateGeometry

```cpp
void updateGeometry()
```


-------------------------------

Updated on  3 February 2021 at 15:05:44 CET