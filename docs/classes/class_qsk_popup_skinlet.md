---
title: QskPopupSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group___skinlets/)**



Inherits from [QskSkinlet](/docs/classes/class_qsk_skinlet/)

Inherited by [QskSubWindowSkinlet](/docs/classes/class_qsk_sub_window_skinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/class_qsk_popup_skinlet/#enum-noderole)** { OverlayRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskPopupSkinlet](/docs/classes/class_qsk_popup_skinlet/#function-qskpopupskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskPopupSkinlet](/docs/classes/class_qsk_popup_skinlet/#function-~qskpopupskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/class_qsk_popup_skinlet/#function-subcontrolrect)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, const QRectF & contentsRect, QskAspect::Subcontrol subControl) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/class_qsk_popup_skinlet/#function-updatesubnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, quint8 nodeRole, QSGNode * node) const override |

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

Updated on 26 January 2021 at 09:44:54 CET