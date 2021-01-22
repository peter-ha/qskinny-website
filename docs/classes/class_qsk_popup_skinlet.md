---
title: QskPopupSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group___skinlets/)**



Inherits from [QskSkinlet](/docs/classes/class_qsk_skinlet/)

Inherited by [QskSubWindowSkinlet](/docs/classes/class_qsk_sub_window_skinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/class_qsk_popup_skinlet/#enum-noderole)** { OverlayRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskPopupSkinlet](/docs/classes/class_qsk_popup_skinlet/#function-qskpopupskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskPopupSkinlet](/docs/classes/class_qsk_popup_skinlet/#function-~qskpopupskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/class_qsk_popup_skinlet/#function-subcontrolrect)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, const QRectF & contentsRect, QskAspect::Subcontrol subControl) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/class_qsk_popup_skinlet/#function-updatesubnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, quint8 nodeRole, QSGNode * node) const override |

## Additional inherited members

**Public Functions inherited from [QskSkinlet](/docs/classes/class_qsk_skinlet/)**

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskSkinlet](/docs/classes/class_qsk_skinlet/#function-qskskinlet)**(QskSkin * skin =nullptr) |
| virtual | **[~QskSkinlet](/docs/classes/class_qsk_skinlet/#function-~qskskinlet)**() |
| QskSkin * | **[skin](/docs/classes/class_qsk_skinlet/#function-skin)**() const |
| virtual void | **[updateNode](/docs/classes/class_qsk_skinlet/#function-updatenode)**([QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, QSGNode * parent) const |
| virtual QSizeF | **[sizeHint](/docs/classes/class_qsk_skinlet/#function-sizehint)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * , Qt::SizeHint , const QSizeF & ) const |
| const QVector< quint8 > & | **[nodeRoles](/docs/classes/class_qsk_skinlet/#function-noderoles)**() const |
| void | **[setOwnedBySkinnable](/docs/classes/class_qsk_skinlet/#function-setownedbyskinnable)**(bool on) |
| bool | **[isOwnedBySkinnable](/docs/classes/class_qsk_skinlet/#function-isownedbyskinnable)**() const |
| QSGNode * | **[updateBoxNode](/docs/classes/class_qsk_skinlet/#function-updateboxnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, QSGNode * node, const QRectF & rect, QskAspect::Subcontrol subControl) |
| QSGNode * | **[updateBoxNode](/docs/classes/class_qsk_skinlet/#function-updateboxnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, QSGNode * node, const QRectF & rect, const QskGradient & fillGradient, QskAspect::Subcontrol subControl) |
| QSGNode * | **[updateTextNode](/docs/classes/class_qsk_skinlet/#function-updatetextnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, QSGNode * node, const QRectF & rect, Qt::Alignment alignment, const QString & text, const QskTextOptions & textOptions, QskAspect::Subcontrol subControl) |
| QSGNode * | **[updateGraphicNode](/docs/classes/class_qsk_skinlet/#function-updategraphicnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, QSGNode * node, const [QskGraphic](/docs/classes/class_qsk_graphic/) & graphic, const QskColorFilter & colorFilter, const QRectF & rect, Qt::Alignment alignment, Qt::Orientations mirrored =Qt::Orientations()) |
| QSGNode * | **[updateGraphicNode](/docs/classes/class_qsk_skinlet/#function-updategraphicnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, QSGNode * node, const [QskGraphic](/docs/classes/class_qsk_graphic/) & graphic, const QskColorFilter & colorFilter, const QRectF & rect, Qt::Orientations mirrored =Qt::Orientations()) |
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
| QSGNode * | **[updateGraphicNode](/docs/classes/class_qsk_skinlet/#function-updategraphicnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, QSGNode * node, const [QskGraphic](/docs/classes/class_qsk_graphic/) & graphic, QskAspect::Subcontrol subcontrol, Qt::Orientations mirrored =Qt::Orientations()) const |
| void | **[replaceChildNode](/docs/classes/class_qsk_skinlet/#function-replacechildnode)**(quint8 nodeRole, QSGNode * parentNode, QSGNode * oldNode, QSGNode * newNode) const |


## Public Types Documentation

### enum NodeRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| OverlayRole | |   |




## Public Functions Documentation

### function QskPopupSkinlet

```cpp
Q_INVOKABLE QskPopupSkinlet(
    QskSkin * skin =nullptr
)
```


### function ~QskPopupSkinlet

```cpp
~QskPopupSkinlet() override
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

Updated on 22 January 2021 at 17:05:49 CET