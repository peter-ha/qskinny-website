---
title: QskTabViewSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group__Skinlets/)**



Inherits from [QskSkinlet](/docs/classes/classQskSkinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/classQskTabViewSkinlet/#enum-noderole)** { PageRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskTabViewSkinlet](/docs/classes/classQskTabViewSkinlet/#function-qsktabviewskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskTabViewSkinlet](/docs/classes/classQskTabViewSkinlet/#function-~qsktabviewskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/classQskTabViewSkinlet/#function-subcontrolrect)**(const QskSkinnable * skinnable, const QRectF & rect, QskAspect::Subcontrol subControl) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/classQskTabViewSkinlet/#function-updatesubnode)**(const QskSkinnable * skinnable, quint8 nodeRole, QSGNode * node) const override |

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

Updated on  3 February 2021 at 15:05:43 CET