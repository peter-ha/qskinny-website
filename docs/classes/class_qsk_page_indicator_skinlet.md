---
title: QskPageIndicatorSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group___skinlets/)**



Inherits from [QskSkinlet](/docs/classes/class_qsk_skinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/class_qsk_page_indicator_skinlet/#enum-noderole)** { PanelRole, BulletsRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskPageIndicatorSkinlet](/docs/classes/class_qsk_page_indicator_skinlet/#function-qskpageindicatorskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskPageIndicatorSkinlet](/docs/classes/class_qsk_page_indicator_skinlet/#function-~qskpageindicatorskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/class_qsk_page_indicator_skinlet/#function-subcontrolrect)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, const QRectF & contentsRect, QskAspect::Subcontrol subControl) const override |
| QSizeF | **[sizeHint](/docs/classes/class_qsk_page_indicator_skinlet/#function-sizehint)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, Qt::SizeHint which, const QSizeF & ) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/class_qsk_page_indicator_skinlet/#function-updatesubnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, quint8 nodeRole, QSGNode * node) const override |

## Public Types Documentation

### enum NodeRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PanelRole | |   |
| BulletsRole | |   |




## Public Functions Documentation

### function QskPageIndicatorSkinlet

```cpp
Q_INVOKABLE QskPageIndicatorSkinlet(
    QskSkin * skin =nullptr
)
```


### function ~QskPageIndicatorSkinlet

```cpp
~QskPageIndicatorSkinlet() override
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
    const QSizeF & 
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