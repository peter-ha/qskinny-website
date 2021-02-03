---
title: QskSubWindowAreaSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group__Skinlets/)**



Inherits from [QskSkinlet](/docs/classes/classQskSkinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/classQskSubWindowAreaSkinlet/#enum-noderole)** { PanelRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskSubWindowAreaSkinlet](/docs/classes/classQskSubWindowAreaSkinlet/#function-qsksubwindowareaskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskSubWindowAreaSkinlet](/docs/classes/classQskSubWindowAreaSkinlet/#function-~qsksubwindowareaskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/classQskSubWindowAreaSkinlet/#function-subcontrolrect)**(const QskSkinnable * skinnable, const QRectF & contentsRect, QskAspect::Subcontrol subControl) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/classQskSubWindowAreaSkinlet/#function-updatesubnode)**(const QskSkinnable * skinnable, quint8 nodeRole, QSGNode * node) const override |

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

Updated on  3 February 2021 at 15:05:43 CET