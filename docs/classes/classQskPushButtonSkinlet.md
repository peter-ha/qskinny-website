---
title: QskPushButtonSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group__Skinlets/)**



Inherits from [QskSkinlet](/docs/classes/classQskSkinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/classQskPushButtonSkinlet/#enum-noderole)** { PanelRole, TextRole, GraphicRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskPushButtonSkinlet](/docs/classes/classQskPushButtonSkinlet/#function-qskpushbuttonskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskPushButtonSkinlet](/docs/classes/classQskPushButtonSkinlet/#function-~qskpushbuttonskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/classQskPushButtonSkinlet/#function-subcontrolrect)**(const QskSkinnable * skinnable, const QRectF & contentsRect, QskAspect::Subcontrol subControl) const override |
| QSizeF | **[sizeHint](/docs/classes/classQskPushButtonSkinlet/#function-sizehint)**(const QskSkinnable * skinnable, Qt::SizeHint which, const QSizeF & ) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/classQskPushButtonSkinlet/#function-updatesubnode)**(const QskSkinnable * skinnable, quint8 nodeRole, QSGNode * node) const override |

## Public Types Documentation

### enum NodeRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PanelRole | |   |
| TextRole | |   |
| GraphicRole | |   |




## Public Functions Documentation

### function QskPushButtonSkinlet

```cpp
Q_INVOKABLE QskPushButtonSkinlet(
    QskSkin * skin =nullptr
)
```


### function ~QskPushButtonSkinlet

```cpp
~QskPushButtonSkinlet() override
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

Updated on  3 February 2021 at 15:05:42 CET