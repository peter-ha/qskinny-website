---
title: QskTextLabelSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group__Skinlets/)**



Inherits from [QskSkinlet](/docs/classes/classQskSkinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/classQskTextLabelSkinlet/#enum-noderole)** { PanelRole, TextRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskTextLabelSkinlet](/docs/classes/classQskTextLabelSkinlet/#function-qsktextlabelskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskTextLabelSkinlet](/docs/classes/classQskTextLabelSkinlet/#function-~qsktextlabelskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/classQskTextLabelSkinlet/#function-subcontrolrect)**(const QskSkinnable * skinnable, const QRectF & contentsRect, QskAspect::Subcontrol subControl) const override |
| QSizeF | **[sizeHint](/docs/classes/classQskTextLabelSkinlet/#function-sizehint)**(const QskSkinnable * skinnable, Qt::SizeHint which, const QSizeF & constraint) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/classQskTextLabelSkinlet/#function-updatesubnode)**(const QskSkinnable * skinnable, quint8 nodeRole, QSGNode * node) const override |

## Public Types Documentation

### enum NodeRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PanelRole | |   |
| TextRole | |   |




## Public Functions Documentation

### function QskTextLabelSkinlet

```cpp
Q_INVOKABLE QskTextLabelSkinlet(
    QskSkin * skin =nullptr
)
```


### function ~QskTextLabelSkinlet

```cpp
~QskTextLabelSkinlet() override
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

Updated on  3 February 2021 at 15:05:43 CET