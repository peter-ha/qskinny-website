---
title: QskSubWindowArea
layout: docs

---


**Module:** **[Container](/docs/modules/group___container/)**



Inherits from [QskControl](/docs/classes/class_qsk_control/), [QskQuickItem](/docs/classes/class_qsk_quick_item/), [QskSkinnable](/docs/classes/class_qsk_skinnable/), QQuickItem

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSubWindowArea](/docs/classes/class_qsk_sub_window_area/#function-qsksubwindowarea)**(QQuickItem * parent =nullptr) |
| | **[~QskSubWindowArea](/docs/classes/class_qsk_sub_window_area/#function-~qsksubwindowarea)**() override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[geometryChangeEvent](/docs/classes/class_qsk_sub_window_area/#function-geometrychangeevent)**(QskGeometryChangeEvent * event) override |
| bool | **[eventFilter](/docs/classes/class_qsk_sub_window_area/#function-eventfilter)**(QObject * object, QEvent * event) override |
| virtual bool | **[mouseEventFilter](/docs/classes/class_qsk_sub_window_area/#function-mouseeventfilter)**(QskSubWindow * window, const QMouseEvent * event) |
| void | **[itemChange](/docs/classes/class_qsk_sub_window_area/#function-itemchange)**(ItemChange , const ItemChangeData & ) override |

## Public Functions Documentation

### function QskSubWindowArea

```cpp
QskSubWindowArea(
    QQuickItem * parent =nullptr
)
```


### function ~QskSubWindowArea

```cpp
~QskSubWindowArea() override
```


## Protected Functions Documentation

### function geometryChangeEvent

```cpp
void geometryChangeEvent(
    QskGeometryChangeEvent * event
) override
```


### function eventFilter

```cpp
bool eventFilter(
    QObject * object,
    QEvent * event
) override
```


### function mouseEventFilter

```cpp
virtual bool mouseEventFilter(
    QskSubWindow * window,
    const QMouseEvent * event
)
```


### function itemChange

```cpp
void itemChange(
    ItemChange ,
    const ItemChangeData & 
) override
```


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET