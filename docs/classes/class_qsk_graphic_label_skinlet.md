---
title: QskGraphicLabelSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group___skinlets/)**



Inherits from [QskSkinlet](/docs/classes/class_qsk_skinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/class_qsk_graphic_label_skinlet/#enum-noderole)** { GraphicRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskGraphicLabelSkinlet](/docs/classes/class_qsk_graphic_label_skinlet/#function-qskgraphiclabelskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskGraphicLabelSkinlet](/docs/classes/class_qsk_graphic_label_skinlet/#function-~qskgraphiclabelskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/class_qsk_graphic_label_skinlet/#function-subcontrolrect)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, const QRectF & contentsRect, QskAspect::Subcontrol subControl) const override |
| QSizeF | **[sizeHint](/docs/classes/class_qsk_graphic_label_skinlet/#function-sizehint)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, Qt::SizeHint which, const QSizeF & constraint) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/class_qsk_graphic_label_skinlet/#function-updatesubnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, quint8 nodeRole, QSGNode * node) const override |

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

Updated on 26 January 2021 at 09:44:54 CET