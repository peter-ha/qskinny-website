---
title: QskSubWindowArea
layout: docs

---


**Module:** **[Container](/docs/modules/group__container/)**



Inherits from [QskControl](/docs/classes/classQskControl/), [QskQuickItem](/docs/classes/classQskQuickItem/), QskSkinnable

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Panel](/docs/classes/classQskSubWindowArea/#subcontrol-panel)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSubWindowArea](/docs/classes/classQskSubWindowArea/#function-qsksubwindowarea)**(QQuickItem * parent =nullptr) |
| | **[~QskSubWindowArea](/docs/classes/classQskSubWindowArea/#function-~qsksubwindowarea)**() override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[geometryChangeEvent](/docs/classes/classQskSubWindowArea/#function-geometrychangeevent)**(QskGeometryChangeEvent * event) override |
| bool | **[eventFilter](/docs/classes/classQskSubWindowArea/#function-eventfilter)**(QObject * object, QEvent * event) override |
| virtual bool | **[mouseEventFilter](/docs/classes/classQskSubWindowArea/#function-mouseeventfilter)**(QskSubWindow * window, const QMouseEvent * event) |
| void | **[itemChange](/docs/classes/classQskSubWindowArea/#function-itemchange)**(ItemChange , const ItemChangeData & ) override |

## Public Subcontrols Documentation

### subcontrol Panel




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

Updated on  3 February 2021 at 15:05:43 CET