---
title: QskSubWindowSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group__Skinlets/)**



Inherits from QskPopupSkinlet

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/classQskSubWindowSkinlet/#enum-noderole)** { PanelRole = QskPopupSkinlet::OverlayRole + 1, TitleBarRole, SymbolRole, TitleRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskSubWindowSkinlet](/docs/classes/classQskSubWindowSkinlet/#function-qsksubwindowskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskSubWindowSkinlet](/docs/classes/classQskSubWindowSkinlet/#function-~qsksubwindowskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/classQskSubWindowSkinlet/#function-subcontrolrect)**(const QskSkinnable * skinnable, const QRectF & contentsRect, QskAspect::Subcontrol subControl) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/classQskSubWindowSkinlet/#function-updatesubnode)**(const QskSkinnable * skinnable, quint8 nodeRole, QSGNode * node) const override |

## Public Types Documentation

### enum NodeRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PanelRole | QskPopupSkinlet::OverlayRole + 1|   |
| TitleBarRole | |   |
| SymbolRole | |   |
| TitleRole | |   |




## Public Functions Documentation

### function QskSubWindowSkinlet

```cpp
Q_INVOKABLE QskSubWindowSkinlet(
    QskSkin * skin =nullptr
)
```


### function ~QskSubWindowSkinlet

```cpp
~QskSubWindowSkinlet() override
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

Updated on  3 February 2021 at 15:05:43 CET