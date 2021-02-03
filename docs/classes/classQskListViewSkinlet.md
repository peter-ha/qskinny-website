---
title: QskListViewSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group__Skinlets/)**



Inherits from QskScrollViewSkinlet

## Protected Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/classQskListViewSkinlet/#enum-noderole)** { TextRole, GraphicRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskListViewSkinlet](/docs/classes/classQskListViewSkinlet/#function-qsklistviewskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskListViewSkinlet](/docs/classes/classQskListViewSkinlet/#function-~qsklistviewskinlet)**() override |
| QSizeF | **[sizeHint](/docs/classes/classQskListViewSkinlet/#function-sizehint)**(const QskSkinnable * skinnable, Qt::SizeHint which, const QSizeF & ) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateContentsNode](/docs/classes/classQskListViewSkinlet/#function-updatecontentsnode)**(const QskScrollView * scrollView, QSGNode * node) const override |
| virtual QSGNode * | **[updateCellNode](/docs/classes/classQskListViewSkinlet/#function-updatecellnode)**(const QskListView * listView, QSGNode * contentNode, const QRectF & rect, int row, int col) const |

## Protected Types Documentation

### enum NodeRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| TextRole | |   |
| GraphicRole | |   |




## Public Functions Documentation

### function QskListViewSkinlet

```cpp
Q_INVOKABLE QskListViewSkinlet(
    QskSkin * skin =nullptr
)
```


### function ~QskListViewSkinlet

```cpp
~QskListViewSkinlet() override
```


### function sizeHint

```cpp
QSizeF sizeHint(
    const QskSkinnable * skinnable,
    Qt::SizeHint which,
    const QSizeF & 
) const override
```


## Protected Functions Documentation

### function updateContentsNode

```cpp
QSGNode * updateContentsNode(
    const QskScrollView * scrollView,
    QSGNode * node
) const override
```


### function updateCellNode

```cpp
virtual QSGNode * updateCellNode(
    const QskListView * listView,
    QSGNode * contentNode,
    const QRectF & rect,
    int row,
    int col
) const
```


-------------------------------

Updated on  3 February 2021 at 15:05:42 CET