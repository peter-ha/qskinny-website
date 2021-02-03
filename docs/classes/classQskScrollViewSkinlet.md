---
title: QskScrollViewSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group__Skinlets/)**



Inherits from [QskSkinlet](/docs/classes/classQskSkinlet/)

Inherited by [QskListViewSkinlet](/docs/classes/classQskListViewSkinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/classQskScrollViewSkinlet/#enum-noderole)** { ViewportRole, ContentsRootRole, HorizontalScrollBarRole, HorizontalScrollHandleRole, VerticalScrollBarRole, VerticalScrollHandleRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskScrollViewSkinlet](/docs/classes/classQskScrollViewSkinlet/#function-qskscrollviewskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskScrollViewSkinlet](/docs/classes/classQskScrollViewSkinlet/#function-~qskscrollviewskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/classQskScrollViewSkinlet/#function-subcontrolrect)**(const QskSkinnable * skinnable, const QRectF & contentsRect, QskAspect::Subcontrol subControl) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/classQskScrollViewSkinlet/#function-updatesubnode)**(const QskSkinnable * skinnable, quint8 nodeRole, QSGNode * node) const override |
| virtual QSGNode * | **[updateContentsNode](/docs/classes/classQskScrollViewSkinlet/#function-updatecontentsnode)**(const QskScrollView * , QSGNode * ) const |
| QSGNode * | **[contentsNode](/docs/classes/classQskScrollViewSkinlet/#function-contentsnode)**(const QskScrollView * scrollView) |

## Public Types Documentation

### enum NodeRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ViewportRole | |   |
| ContentsRootRole | |   |
| HorizontalScrollBarRole | |   |
| HorizontalScrollHandleRole | |   |
| VerticalScrollBarRole | |   |
| VerticalScrollHandleRole | |   |




## Public Functions Documentation

### function QskScrollViewSkinlet

```cpp
Q_INVOKABLE QskScrollViewSkinlet(
    QskSkin * skin =nullptr
)
```


### function ~QskScrollViewSkinlet

```cpp
~QskScrollViewSkinlet() override
```


### function subControlRect

```cpp
QRectF subControlRect(
    const QskSkinnable * skinnable,
    const QRectF & contentsRect,
    QskAspect::Subcontrol subControl
) const override
```


## Protected Functions Documentation

### function updateSubNode

```cpp
QSGNode * updateSubNode(
    const QskSkinnable * skinnable,
    quint8 nodeRole,
    QSGNode * node
) const override
```


### function updateContentsNode

```cpp
virtual QSGNode * updateContentsNode(
    const QskScrollView * ,
    QSGNode * 
) const
```


### function contentsNode

```cpp
QSGNode * contentsNode(
    const QskScrollView * scrollView
)
```


-------------------------------

Updated on  3 February 2021 at 15:05:42 CET