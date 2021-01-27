---
title: QskTabViewSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group___skinlets/)**



Inherits from [QskSkinlet](/docs/classes/class_qsk_skinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/class_qsk_tab_view_skinlet/#enum-noderole)** { PageRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskTabViewSkinlet](/docs/classes/class_qsk_tab_view_skinlet/#function-qsktabviewskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskTabViewSkinlet](/docs/classes/class_qsk_tab_view_skinlet/#function-~qsktabviewskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/class_qsk_tab_view_skinlet/#function-subcontrolrect)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, const QRectF & rect, QskAspect::Subcontrol subControl) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/class_qsk_tab_view_skinlet/#function-updatesubnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, quint8 nodeRole, QSGNode * node) const override |

## Public Types Documentation

### enum NodeRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PageRole | |   |




## Public Functions Documentation

### function QskTabViewSkinlet

```cpp
Q_INVOKABLE QskTabViewSkinlet(
    QskSkin * skin =nullptr
)
```


### function ~QskTabViewSkinlet

```cpp
~QskTabViewSkinlet() override
```


### function subControlRect

```cpp
QRectF subControlRect(
    const QskSkinnable * skinnable,
    const QRectF & rect,
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


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET