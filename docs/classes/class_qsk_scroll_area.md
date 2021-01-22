---
title: QskScrollArea
layout: docs

---


**Module:** **[Container](/docs/modules/group___container/)**



Inherits from QskScrollView

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[scrolledItemChanged](/docs/classes/class_qsk_scroll_area/#signal-scrolleditemchanged)**() |
| void | **[itemResizableChanged](/docs/classes/class_qsk_scroll_area/#signal-itemresizablechanged)**(bool ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskScrollArea](/docs/classes/class_qsk_scroll_area/#function-qskscrollarea)**(QQuickItem * parent =nullptr) |
| | **[~QskScrollArea](/docs/classes/class_qsk_scroll_area/#function-~qskscrollarea)**() override |
| void | **[setScrolledItem](/docs/classes/class_qsk_scroll_area/#function-setscrolleditem)**(QQuickItem * item) |
| QQuickItem * | **[scrolledItem](/docs/classes/class_qsk_scroll_area/#function-scrolleditem)**() const |
| void | **[setItemResizable](/docs/classes/class_qsk_scroll_area/#function-setitemresizable)**(bool on) |
| bool | **[isItemResizable](/docs/classes/class_qsk_scroll_area/#function-isitemresizable)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[updateLayout](/docs/classes/class_qsk_scroll_area/#function-updatelayout)**() override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QQuickItem | **[scrolledItem](/docs/classes/class_qsk_scroll_area/#property-scrolleditem)**  |
| bool | **[itemResizable](/docs/classes/class_qsk_scroll_area/#property-itemresizable)**  |

## Public Signals Documentation

### signal scrolledItemChanged

```cpp
void scrolledItemChanged()
```


### signal itemResizableChanged

```cpp
void itemResizableChanged(
    bool 
)
```


## Public Functions Documentation

### function QskScrollArea

```cpp
QskScrollArea(
    QQuickItem * parent =nullptr
)
```


### function ~QskScrollArea

```cpp
~QskScrollArea() override
```


### function setScrolledItem

```cpp
void setScrolledItem(
    QQuickItem * item
)
```


### function scrolledItem

```cpp
QQuickItem * scrolledItem() const
```


### function setItemResizable

```cpp
void setItemResizable(
    bool on
)
```


### function isItemResizable

```cpp
bool isItemResizable() const
```


## Protected Functions Documentation

### function updateLayout

```cpp
void updateLayout() override
```


## Public Property Documentation

### property scrolledItem

```cpp
QQuickItem scrolledItem;
```


### property itemResizable

```cpp
bool itemResizable;
```


-------------------------------

Updated on 22 January 2021 at 17:05:49 CET