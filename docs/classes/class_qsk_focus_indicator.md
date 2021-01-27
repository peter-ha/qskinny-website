---
title: QskFocusIndicator
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from [QskControl](/docs/classes/class_qsk_control/), [QskQuickItem](/docs/classes/class_qsk_quick_item/), [QskSkinnable](/docs/classes/class_qsk_skinnable/), QQuickItem

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskFocusIndicator](/docs/classes/class_qsk_focus_indicator/#function-qskfocusindicator)**(QQuickItem * parent =nullptr) |
| | **[~QskFocusIndicator](/docs/classes/class_qsk_focus_indicator/#function-~qskfocusindicator)**() override |
| bool | **[contains](/docs/classes/class_qsk_focus_indicator/#function-contains)**(const QPointF & ) const override |
| QRectF | **[clipRect](/docs/classes/class_qsk_focus_indicator/#function-cliprect)**() const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[windowChangeEvent](/docs/classes/class_qsk_focus_indicator/#function-windowchangeevent)**(QskWindowChangeEvent * event) override |
| virtual QRectF | **[focusRect](/docs/classes/class_qsk_focus_indicator/#function-focusrect)**() const |

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

Updated on 26 January 2021 at 09:44:54 CET