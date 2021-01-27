---
title: QskTextInputSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group___skinlets/)**



Inherits from [QskSkinlet](/docs/classes/class_qsk_skinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/class_qsk_text_input_skinlet/#enum-noderole)** { PanelRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskTextInputSkinlet](/docs/classes/class_qsk_text_input_skinlet/#function-qsktextinputskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskTextInputSkinlet](/docs/classes/class_qsk_text_input_skinlet/#function-~qsktextinputskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/class_qsk_text_input_skinlet/#function-subcontrolrect)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, const QRectF & rect, QskAspect::Subcontrol subControl) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/class_qsk_text_input_skinlet/#function-updatesubnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, quint8 nodeRole, QSGNode * node) const override |

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

Updated on 26 January 2021 at 09:44:54 CET