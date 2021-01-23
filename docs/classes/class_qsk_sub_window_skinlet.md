---
title: QskSubWindowSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group___skinlets/)**



Inherits from QskPopupSkinlet

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/class_qsk_sub_window_skinlet/#enum-noderole)** { PanelRole = QskPopupSkinlet::OverlayRole + 1, TitleBarRole, SymbolRole, TitleRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskSubWindowSkinlet](/docs/classes/class_qsk_sub_window_skinlet/#function-qsksubwindowskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskSubWindowSkinlet](/docs/classes/class_qsk_sub_window_skinlet/#function-~qsksubwindowskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/class_qsk_sub_window_skinlet/#function-subcontrolrect)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, const QRectF & contentsRect, QskAspect::Subcontrol subControl) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/class_qsk_sub_window_skinlet/#function-updatesubnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, quint8 nodeRole, QSGNode * node) const override |

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

Updated on 23 January 2021 at 09:50:34 CET