---
title: QskScrollArea
layout: docs

---


**Module:** **[Container](/docs/modules/group__container/)**



Inherits from QskScrollView

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskScrollArea](/docs/classes/classQskScrollArea/#function-qskscrollarea)**(QQuickItem * parent =nullptr) |
| | **[~QskScrollArea](/docs/classes/classQskScrollArea/#function-~qskscrollarea)**() override |
| void | **[setScrolledItem](/docs/classes/classQskScrollArea/#function-setscrolleditem)**(QQuickItem * item) |
| QQuickItem * | **[scrolledItem](/docs/classes/classQskScrollArea/#function-scrolleditem)**() const |
| void | **[setItemResizable](/docs/classes/classQskScrollArea/#function-setitemresizable)**(bool on) |
| bool | **[isItemResizable](/docs/classes/classQskScrollArea/#function-isitemresizable)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[updateLayout](/docs/classes/classQskScrollArea/#function-updatelayout)**() override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[scrolledItemChanged](/docs/classes/classQskScrollArea/#signal-scrolleditemchanged)**() |
| void | **[itemResizableChanged](/docs/classes/classQskScrollArea/#signal-itemresizablechanged)**(bool ) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QQuickItem * | **[scrolledItem](/docs/classes/classQskScrollArea/#property-scrolleditem)**  |
| bool | **[itemResizable](/docs/classes/classQskScrollArea/#property-itemresizable)**  |

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


## Public Property Documentation

### property scrolledItem

```cpp
QQuickItem * scrolledItem;
```


### property itemResizable

```cpp
bool itemResizable;
```


-------------------------------

Updated on  3 February 2021 at 15:05:43 CET