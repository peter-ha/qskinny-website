---
title: QskPopupSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group__Skinlets/)**



Inherits from [QskSkinlet](/docs/classes/classQskSkinlet/)

Inherited by [QskSubWindowSkinlet](/docs/classes/classQskSubWindowSkinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/classQskPopupSkinlet/#enum-noderole)** { OverlayRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskPopupSkinlet](/docs/classes/classQskPopupSkinlet/#function-qskpopupskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskPopupSkinlet](/docs/classes/classQskPopupSkinlet/#function-~qskpopupskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/classQskPopupSkinlet/#function-subcontrolrect)**(const QskSkinnable * skinnable, const QRectF & contentsRect, QskAspect::Subcontrol subControl) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/classQskPopupSkinlet/#function-updatesubnode)**(const QskSkinnable * skinnable, quint8 nodeRole, QSGNode * node) const override |

## Public Types Documentation

### enum NodeRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| OverlayRole | |   |




## Public Functions Documentation

### function QskPopupSkinlet

```cpp
Q_INVOKABLE QskPopupSkinlet(
    QskSkin * skin =nullptr
)
```


### function ~QskPopupSkinlet

```cpp
~QskPopupSkinlet() override
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


-------------------------------

Updated on  3 February 2021 at 15:05:42 CET