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

## Additional inherited members

**Public Functions inherited from [QskSkinlet](/docs/classes/class_qsk_skinlet/)**

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskSkinlet](/docs/classes/class_qsk_skinlet/#function-qskskinlet)**(QskSkin * skin =nullptr) |
| virtual | **[~QskSkinlet](/docs/classes/class_qsk_skinlet/#function-~qskskinlet)**() |
| QskSkin * | **[skin](/docs/classes/class_qsk_skinlet/#function-skin)**() const |
| virtual void | **[updateNode](/docs/classes/class_qsk_skinlet/#function-updatenode)**([QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, QSGNode * parent) const |
| const QVector< quint8 > & | **[nodeRoles](/docs/classes/class_qsk_skinlet/#function-noderoles)**() const |
| void | **[setOwnedBySkinnable](/docs/classes/class_qsk_skinlet/#function-setownedbyskinnable)**(bool on) |
| bool | **[isOwnedBySkinnable](/docs/classes/class_qsk_skinlet/#function-isownedbyskinnable)**() const |
| QSGNode * | **[updateBoxNode](/docs/classes/class_qsk_skinlet/#function-updateboxnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, QSGNode * node, const QRectF & rect, QskAspect::Subcontrol subControl) |
| QSGNode * | **[updateBoxNode](/docs/classes/class_qsk_skinlet/#function-updateboxnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, QSGNode * node, const QRectF & rect, const QskGradient & fillGradient, QskAspect::Subcontrol subControl) |
| QSGNode * | **[updateTextNode](/docs/classes/class_qsk_skinlet/#function-updatetextnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, QSGNode * node, const QRectF & rect, Qt::Alignment alignment, const QString & text, const QskTextOptions & textOptions, QskAspect::Subcontrol subControl) |
| QSGNode * | **[updateBoxClipNode](/docs/classes/class_qsk_skinlet/#function-updateboxclipnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, QSGNode * node, const QRectF & rect, QskAspect::Subcontrol subControl) |

**Protected Functions inherited from [QskSkinlet](/docs/classes/class_qsk_skinlet/)**

|                | Name           |
| -------------- | -------------- |
| void | **[setNodeRoles](/docs/classes/class_qsk_skinlet/#function-setnoderoles)**(const QVector< quint8 > & nodeRoles) |
| void | **[appendNodeRoles](/docs/classes/class_qsk_skinlet/#function-appendnoderoles)**(const QVector< quint8 > & nodeRoles) |
| virtual QSGNode * | **[updateBackgroundNode](/docs/classes/class_qsk_skinlet/#function-updatebackgroundnode)**(const [QskControl](/docs/classes/class_qsk_control/) * control, QSGNode * node) const |
| virtual QSGNode * | **[updateDebugNode](/docs/classes/class_qsk_skinlet/#function-updatedebugnode)**(const [QskControl](/docs/classes/class_qsk_control/) * control, QSGNode * node) const |
| QSGNode * | **[updateBoxNode](/docs/classes/class_qsk_skinlet/#function-updateboxnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, QSGNode * node, QskAspect::Subcontrol subControl) const |
| QSGNode * | **[updateBoxClipNode](/docs/classes/class_qsk_skinlet/#function-updateboxclipnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, QSGNode * node, QskAspect::Subcontrol subControl) const |
| QSGNode * | **[updateTextNode](/docs/classes/class_qsk_skinlet/#function-updatetextnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, QSGNode * node, const QString & text, const QskTextOptions & textOptions, QskAspect::Subcontrol subControl) const |
| void | **[replaceChildNode](/docs/classes/class_qsk_skinlet/#function-replacechildnode)**(quint8 nodeRole, QSGNode * parentNode, QSGNode * oldNode, QSGNode * newNode) const |


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

Updated on 22 January 2021 at 17:05:49 CET