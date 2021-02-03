---
title: QskFocusIndicator
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from [QskControl](/docs/classes/classQskControl/), [QskQuickItem](/docs/classes/classQskQuickItem/), QskSkinnable

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Panel](/docs/classes/classQskFocusIndicator/#subcontrol-panel)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskFocusIndicator](/docs/classes/classQskFocusIndicator/#function-qskfocusindicator)**(QQuickItem * parent =nullptr) |
| | **[~QskFocusIndicator](/docs/classes/classQskFocusIndicator/#function-~qskfocusindicator)**() override |
| bool | **[contains](/docs/classes/classQskFocusIndicator/#function-contains)**(const QPointF & ) const override |
| QRectF | **[clipRect](/docs/classes/classQskFocusIndicator/#function-cliprect)**() const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[windowChangeEvent](/docs/classes/classQskFocusIndicator/#function-windowchangeevent)**(QskWindowChangeEvent * event) override |
| virtual QRectF | **[focusRect](/docs/classes/classQskFocusIndicator/#function-focusrect)**() const |

## Public Subcontrols Documentation

### subcontrol Panel




## Public Functions Documentation

### function QskFocusIndicator

```cpp
QskFocusIndicator(
    QQuickItem * parent =nullptr
)
```


### function ~QskFocusIndicator

```cpp
~QskFocusIndicator() override
```


### function contains

```cpp
bool contains(
    const QPointF & 
) const override
```


### function clipRect

```cpp
QRectF clipRect() const override
```


## Protected Functions Documentation

### function windowChangeEvent

```cpp
void windowChangeEvent(
    QskWindowChangeEvent * event
) override
```


### function focusRect

```cpp
virtual QRectF focusRect() const
```


-------------------------------

Updated on  3 February 2021 at 15:05:44 CET