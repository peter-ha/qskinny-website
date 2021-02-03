---
title: QskGraphicLabelSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group__Skinlets/)**



Inherits from [QskSkinlet](/docs/classes/classQskSkinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/classQskGraphicLabelSkinlet/#enum-noderole)** { GraphicRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskGraphicLabelSkinlet](/docs/classes/classQskGraphicLabelSkinlet/#function-qskgraphiclabelskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskGraphicLabelSkinlet](/docs/classes/classQskGraphicLabelSkinlet/#function-~qskgraphiclabelskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/classQskGraphicLabelSkinlet/#function-subcontrolrect)**(const QskSkinnable * skinnable, const QRectF & contentsRect, QskAspect::Subcontrol subControl) const override |
| QSizeF | **[sizeHint](/docs/classes/classQskGraphicLabelSkinlet/#function-sizehint)**(const QskSkinnable * skinnable, Qt::SizeHint which, const QSizeF & constraint) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/classQskGraphicLabelSkinlet/#function-updatesubnode)**(const QskSkinnable * skinnable, quint8 nodeRole, QSGNode * node) const override |

## Public Types Documentation

### enum NodeRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| GraphicRole | |   |




## Public Functions Documentation

### function QskGraphicLabelSkinlet

```cpp
Q_INVOKABLE QskGraphicLabelSkinlet(
    QskSkin * skin =nullptr
)
```


### function ~QskGraphicLabelSkinlet

```cpp
~QskGraphicLabelSkinlet() override
```


### function subControlRect

```cpp
QRectF subControlRect(
    const QskSkinnable * skinnable,
    const QRectF & contentsRect,
    QskAspect::Subcontrol subControl
) const override
```


### function sizeHint

```cpp
QSizeF sizeHint(
    const QskSkinnable * skinnable,
    Qt::SizeHint which,
    const QSizeF & constraint
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