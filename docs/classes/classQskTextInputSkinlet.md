---
title: QskTextInputSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group__Skinlets/)**



Inherits from [QskSkinlet](/docs/classes/classQskSkinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/classQskTextInputSkinlet/#enum-noderole)** { PanelRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskTextInputSkinlet](/docs/classes/classQskTextInputSkinlet/#function-qsktextinputskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskTextInputSkinlet](/docs/classes/classQskTextInputSkinlet/#function-~qsktextinputskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/classQskTextInputSkinlet/#function-subcontrolrect)**(const QskSkinnable * skinnable, const QRectF & rect, QskAspect::Subcontrol subControl) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/classQskTextInputSkinlet/#function-updatesubnode)**(const QskSkinnable * skinnable, quint8 nodeRole, QSGNode * node) const override |

## Public Types Documentation

### enum NodeRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PanelRole | |   |




## Public Functions Documentation

### function QskTextInputSkinlet

```cpp
Q_INVOKABLE QskTextInputSkinlet(
    QskSkin * skin =nullptr
)
```


### function ~QskTextInputSkinlet

```cpp
~QskTextInputSkinlet() override
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