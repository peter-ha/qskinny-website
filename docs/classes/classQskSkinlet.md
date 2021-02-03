---
title: QskSkinlet
summary: Describes the rendering interface of a QskControl. Change the skinlet to change the appearance of the control using the low-level scene graph API. 
layout: docs

---


**Module:** **[Themeing](/docs/modules/group__Themeing/)**



Describes the rendering interface of a [QskControl](). Change the skinlet to change the appearance of the control using the low-level scene graph API.  [More...](#detailed-description)


`#include <QskSkinlet.h>`

Inherited by [QskBoxSkinlet](/docs/classes/classQskBoxSkinlet/), [QskFocusIndicatorSkinlet](/docs/classes/classQskFocusIndicatorSkinlet/), [QskGraphicLabelSkinlet](/docs/classes/classQskGraphicLabelSkinlet/), [QskPageIndicatorSkinlet](/docs/classes/classQskPageIndicatorSkinlet/), [QskPopupSkinlet](/docs/classes/classQskPopupSkinlet/), [QskProgressBarSkinlet](/docs/classes/classQskProgressBarSkinlet/), [QskPushButtonSkinlet](/docs/classes/classQskPushButtonSkinlet/), [QskScrollViewSkinlet](/docs/classes/classQskScrollViewSkinlet/), [QskSeparatorSkinlet](/docs/classes/classQskSeparatorSkinlet/), [QskSliderSkinlet](/docs/classes/classQskSliderSkinlet/), [QskStatusIndicatorSkinlet](/docs/classes/classQskStatusIndicatorSkinlet/), [QskSubWindowAreaSkinlet](/docs/classes/classQskSubWindowAreaSkinlet/), [QskTabButtonSkinlet](/docs/classes/classQskTabButtonSkinlet/), [QskTabViewSkinlet](/docs/classes/classQskTabViewSkinlet/), [QskTextInputSkinlet](/docs/classes/classQskTextInputSkinlet/), [QskTextLabelSkinlet](/docs/classes/classQskTextLabelSkinlet/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskSkinlet](/docs/classes/classQskSkinlet/#function-qskskinlet)**(QskSkin * skin =nullptr) |
| virtual | **[~QskSkinlet](/docs/classes/classQskSkinlet/#function-~qskskinlet)**() |
| QskSkin * | **[skin](/docs/classes/classQskSkinlet/#function-skin)**() const |
| virtual void | **[updateNode](/docs/classes/classQskSkinlet/#function-updatenode)**(QskSkinnable * skinnable, QSGNode * parent) const |
| virtual QRectF | **[subControlRect](/docs/classes/classQskSkinlet/#function-subcontrolrect)**(const QskSkinnable * , const QRectF & , QskAspect::Subcontrol ) const |
| virtual QSizeF | **[sizeHint](/docs/classes/classQskSkinlet/#function-sizehint)**(const QskSkinnable * , Qt::SizeHint , const QSizeF & ) const |
| const QVector< quint8 > & | **[nodeRoles](/docs/classes/classQskSkinlet/#function-noderoles)**() const |
| void | **[setOwnedBySkinnable](/docs/classes/classQskSkinlet/#function-setownedbyskinnable)**(bool on) |
| bool | **[isOwnedBySkinnable](/docs/classes/classQskSkinlet/#function-isownedbyskinnable)**() const |
| QSGNode * | **[updateBoxNode](/docs/classes/classQskSkinlet/#function-updateboxnode)**(const QskSkinnable * skinnable, QSGNode * node, const QRectF & rect, QskAspect::Subcontrol subControl) |
| QSGNode * | **[updateBoxNode](/docs/classes/classQskSkinlet/#function-updateboxnode)**(const QskSkinnable * skinnable, QSGNode * node, const QRectF & rect, const QskGradient & fillGradient, QskAspect::Subcontrol subControl) |
| QSGNode * | **[updateTextNode](/docs/classes/classQskSkinlet/#function-updatetextnode)**(const QskSkinnable * skinnable, QSGNode * node, const QRectF & rect, Qt::Alignment alignment, const QString & text, const QskTextOptions & textOptions, QskAspect::Subcontrol subControl) |
| QSGNode * | **[updateGraphicNode](/docs/classes/classQskSkinlet/#function-updategraphicnode)**(const QskSkinnable * skinnable, QSGNode * node, const [QskGraphic](/docs/classes/classQskGraphic/) & graphic, const QskColorFilter & colorFilter, const QRectF & rect, Qt::Alignment alignment, Qt::Orientations mirrored =Qt::Orientations()) |
| QSGNode * | **[updateGraphicNode](/docs/classes/classQskSkinlet/#function-updategraphicnode)**(const QskSkinnable * skinnable, QSGNode * node, const [QskGraphic](/docs/classes/classQskGraphic/) & graphic, const QskColorFilter & colorFilter, const QRectF & rect, Qt::Orientations mirrored =Qt::Orientations()) |
| QSGNode * | **[updateBoxClipNode](/docs/classes/classQskSkinlet/#function-updateboxclipnode)**(const QskSkinnable * skinnable, QSGNode * node, const QRectF & rect, QskAspect::Subcontrol subControl) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setNodeRoles](/docs/classes/classQskSkinlet/#function-setnoderoles)**(const QVector< quint8 > & nodeRoles) |
| void | **[appendNodeRoles](/docs/classes/classQskSkinlet/#function-appendnoderoles)**(const QVector< quint8 > & nodeRoles) |
| virtual QSGNode * | **[updateSubNode](/docs/classes/classQskSkinlet/#function-updatesubnode)**(const QskSkinnable * , quint8 nodeRole, QSGNode * ) const |
| virtual QSGNode * | **[updateBackgroundNode](/docs/classes/classQskSkinlet/#function-updatebackgroundnode)**(const [QskControl](/docs/classes/classQskControl/) * control, QSGNode * node) const |
| virtual QSGNode * | **[updateDebugNode](/docs/classes/classQskSkinlet/#function-updatedebugnode)**(const [QskControl](/docs/classes/classQskControl/) * control, QSGNode * node) const |
| QSGNode * | **[updateBoxNode](/docs/classes/classQskSkinlet/#function-updateboxnode)**(const QskSkinnable * skinnable, QSGNode * node, QskAspect::Subcontrol subControl) const |
| QSGNode * | **[updateBoxClipNode](/docs/classes/classQskSkinlet/#function-updateboxclipnode)**(const QskSkinnable * skinnable, QSGNode * node, QskAspect::Subcontrol subControl) const |
| QSGNode * | **[updateTextNode](/docs/classes/classQskSkinlet/#function-updatetextnode)**(const QskSkinnable * skinnable, QSGNode * node, const QString & text, const QskTextOptions & textOptions, QskAspect::Subcontrol subControl) const |
| QSGNode * | **[updateGraphicNode](/docs/classes/classQskSkinlet/#function-updategraphicnode)**(const QskSkinnable * skinnable, QSGNode * node, const [QskGraphic](/docs/classes/classQskGraphic/) & graphic, QskAspect::Subcontrol subcontrol, Qt::Orientations mirrored =Qt::Orientations()) const |
| void | **[replaceChildNode](/docs/classes/classQskSkinlet/#function-replacechildnode)**(quint8 nodeRole, QSGNode * parentNode, QSGNode * oldNode, QSGNode * newNode) const |

## Detailed Description

```cpp
class QskSkinlet;
```

Describes the rendering interface of a [QskControl](). Change the skinlet to change the appearance of the control using the low-level scene graph API. 

**See**: QskSkinnable::effectiveSkinlet(), QskSkinnable::setSkinlet(), QskSkin::declareSkinlet(), QskSkin::skinlet() 
## Public Functions Documentation

### function QskSkinlet

```cpp
Q_INVOKABLE QskSkinlet(
    QskSkin * skin =nullptr
)
```


### function ~QskSkinlet

```cpp
virtual ~QskSkinlet()
```


### function skin

```cpp
QskSkin * skin() const
```


### function updateNode

```cpp
virtual void updateNode(
    QskSkinnable * skinnable,
    QSGNode * parent
) const
```


### function subControlRect

```cpp
inline virtual QRectF subControlRect(
    const QskSkinnable * ,
    const QRectF & ,
    QskAspect::Subcontrol 
) const
```


### function sizeHint

```cpp
inline virtual QSizeF sizeHint(
    const QskSkinnable * ,
    Qt::SizeHint ,
    const QSizeF & 
) const
```


### function nodeRoles

```cpp
const QVector< quint8 > & nodeRoles() const
```


### function setOwnedBySkinnable

```cpp
void setOwnedBySkinnable(
    bool on
)
```


### function isOwnedBySkinnable

```cpp
bool isOwnedBySkinnable() const
```


### function updateBoxNode

```cpp
static QSGNode * updateBoxNode(
    const QskSkinnable * skinnable,
    QSGNode * node,
    const QRectF & rect,
    QskAspect::Subcontrol subControl
)
```


### function updateBoxNode

```cpp
static QSGNode * updateBoxNode(
    const QskSkinnable * skinnable,
    QSGNode * node,
    const QRectF & rect,
    const QskGradient & fillGradient,
    QskAspect::Subcontrol subControl
)
```


### function updateTextNode

```cpp
static QSGNode * updateTextNode(
    const QskSkinnable * skinnable,
    QSGNode * node,
    const QRectF & rect,
    Qt::Alignment alignment,
    const QString & text,
    const QskTextOptions & textOptions,
    QskAspect::Subcontrol subControl
)
```


### function updateGraphicNode

```cpp
static QSGNode * updateGraphicNode(
    const QskSkinnable * skinnable,
    QSGNode * node,
    const QskGraphic & graphic,
    const QskColorFilter & colorFilter,
    const QRectF & rect,
    Qt::Alignment alignment,
    Qt::Orientations mirrored =Qt::Orientations()
)
```


### function updateGraphicNode

```cpp
static QSGNode * updateGraphicNode(
    const QskSkinnable * skinnable,
    QSGNode * node,
    const QskGraphic & graphic,
    const QskColorFilter & colorFilter,
    const QRectF & rect,
    Qt::Orientations mirrored =Qt::Orientations()
)
```


### function updateBoxClipNode

```cpp
static QSGNode * updateBoxClipNode(
    const QskSkinnable * skinnable,
    QSGNode * node,
    const QRectF & rect,
    QskAspect::Subcontrol subControl
)
```


## Protected Functions Documentation

### function setNodeRoles

```cpp
void setNodeRoles(
    const QVector< quint8 > & nodeRoles
)
```


### function appendNodeRoles

```cpp
void appendNodeRoles(
    const QVector< quint8 > & nodeRoles
)
```


### function updateSubNode

```cpp
inline virtual QSGNode * updateSubNode(
    const QskSkinnable * ,
    quint8 nodeRole,
    QSGNode * 
) const
```


### function updateBackgroundNode

```cpp
virtual QSGNode * updateBackgroundNode(
    const QskControl * control,
    QSGNode * node
) const
```


### function updateDebugNode

```cpp
virtual QSGNode * updateDebugNode(
    const QskControl * control,
    QSGNode * node
) const
```


### function updateBoxNode

```cpp
QSGNode * updateBoxNode(
    const QskSkinnable * skinnable,
    QSGNode * node,
    QskAspect::Subcontrol subControl
) const
```


### function updateBoxClipNode

```cpp
QSGNode * updateBoxClipNode(
    const QskSkinnable * skinnable,
    QSGNode * node,
    QskAspect::Subcontrol subControl
) const
```


### function updateTextNode

```cpp
QSGNode * updateTextNode(
    const QskSkinnable * skinnable,
    QSGNode * node,
    const QString & text,
    const QskTextOptions & textOptions,
    QskAspect::Subcontrol subControl
) const
```


### function updateGraphicNode

```cpp
QSGNode * updateGraphicNode(
    const QskSkinnable * skinnable,
    QSGNode * node,
    const QskGraphic & graphic,
    QskAspect::Subcontrol subcontrol,
    Qt::Orientations mirrored =Qt::Orientations()
) const
```


### function replaceChildNode

```cpp
void replaceChildNode(
    quint8 nodeRole,
    QSGNode * parentNode,
    QSGNode * oldNode,
    QSGNode * newNode
) const
```


-------------------------------

Updated on  3 February 2021 at 15:05:45 CET