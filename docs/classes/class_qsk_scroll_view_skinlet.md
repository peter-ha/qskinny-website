---
title: QskScrollViewSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group___skinlets/)**



Inherits from [QskSkinlet](/docs/classes/class_qsk_skinlet/)

Inherited by [QskListViewSkinlet](/docs/classes/class_qsk_list_view_skinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/class_qsk_scroll_view_skinlet/#enum-noderole)** { ViewportRole, ContentsRootRole, HorizontalScrollBarRole, HorizontalScrollHandleRole, VerticalScrollBarRole, VerticalScrollHandleRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskScrollViewSkinlet](/docs/classes/class_qsk_scroll_view_skinlet/#function-qskscrollviewskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskScrollViewSkinlet](/docs/classes/class_qsk_scroll_view_skinlet/#function-~qskscrollviewskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/class_qsk_scroll_view_skinlet/#function-subcontrolrect)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, const QRectF & contentsRect, QskAspect::Subcontrol subControl) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/class_qsk_scroll_view_skinlet/#function-updatesubnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, quint8 nodeRole, QSGNode * node) const override |
| virtual QSGNode * | **[updateContentsNode](/docs/classes/class_qsk_scroll_view_skinlet/#function-updatecontentsnode)**(const QskScrollView * , QSGNode * ) const |
| QSGNode * | **[contentsNode](/docs/classes/class_qsk_scroll_view_skinlet/#function-contentsnode)**(const QskScrollView * scrollView) |

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

Updated on 26 January 2021 at 09:44:54 CET