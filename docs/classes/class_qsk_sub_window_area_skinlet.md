---
title: QskSubWindowAreaSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group___skinlets/)**



Inherits from [QskSkinlet](/docs/classes/class_qsk_skinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/class_qsk_sub_window_area_skinlet/#enum-noderole)** { PanelRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskSubWindowAreaSkinlet](/docs/classes/class_qsk_sub_window_area_skinlet/#function-qsksubwindowareaskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskSubWindowAreaSkinlet](/docs/classes/class_qsk_sub_window_area_skinlet/#function-~qsksubwindowareaskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/class_qsk_sub_window_area_skinlet/#function-subcontrolrect)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, const QRectF & contentsRect, QskAspect::Subcontrol subControl) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/class_qsk_sub_window_area_skinlet/#function-updatesubnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, quint8 nodeRole, QSGNode * node) const override |

## Public Types Documentation

### enum NodeRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PanelRole | |   |




## Public Functions Documentation

### function QskSubWindowAreaSkinlet

```cpp
Q_INVOKABLE QskSubWindowAreaSkinlet(
    QskSkin * skin =nullptr
)
```


### function ~QskSubWindowAreaSkinlet

```cpp
~QskSubWindowAreaSkinlet() override
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