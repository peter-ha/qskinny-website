---
title: QskSkinlet
summary: Describes the rendering interface of a QskControl. Change the skinlet to change the appearance of the control using the low-level scene graph API. 
layout: docs

---


**Module:** **[Themeing](/docs/modules/group___themeing/)**



Describes the rendering interface of a [QskControl](). Change the skinlet to change the appearance of the control using the low-level scene graph API.  [More...](#detailed-description)


`#include [/home/peter/dev/qskinny/src/controls/QskSkinlet.h](<QskSkinlet.h>)`

Inherited by [QskBoxSkinlet](/docs/classes/class_qsk_box_skinlet/), [QskFocusIndicatorSkinlet](/docs/classes/class_qsk_focus_indicator_skinlet/), [QskGraphicLabelSkinlet](/docs/classes/class_qsk_graphic_label_skinlet/), [QskPageIndicatorSkinlet](/docs/classes/class_qsk_page_indicator_skinlet/), [QskPopupSkinlet](/docs/classes/class_qsk_popup_skinlet/), [QskProgressBarSkinlet](/docs/classes/class_qsk_progress_bar_skinlet/), [QskPushButtonSkinlet](/docs/classes/class_qsk_push_button_skinlet/), [QskScrollViewSkinlet](/docs/classes/class_qsk_scroll_view_skinlet/), [QskSeparatorSkinlet](/docs/classes/class_qsk_separator_skinlet/), [QskSliderSkinlet](/docs/classes/class_qsk_slider_skinlet/), [QskStatusIndicatorSkinlet](/docs/classes/class_qsk_status_indicator_skinlet/), [QskSubWindowAreaSkinlet](/docs/classes/class_qsk_sub_window_area_skinlet/), [QskTabButtonSkinlet](/docs/classes/class_qsk_tab_button_skinlet/), [QskTabViewSkinlet](/docs/classes/class_qsk_tab_view_skinlet/), [QskTextInputSkinlet](/docs/classes/class_qsk_text_input_skinlet/), [QskTextLabelSkinlet](/docs/classes/class_qsk_text_label_skinlet/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskSkinlet](/docs/classes/class_qsk_skinlet/#function-qskskinlet)**(QskSkin * skin =nullptr) |
| virtual | **[~QskSkinlet](/docs/classes/class_qsk_skinlet/#function-~qskskinlet)**() |
| QskSkin * | **[skin](/docs/classes/class_qsk_skinlet/#function-skin)**() const |
| virtual void | **[updateNode](/docs/classes/class_qsk_skinlet/#function-updatenode)**([QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, QSGNode * parent) const |
| virtual QRectF | **[subControlRect](/docs/classes/class_qsk_skinlet/#function-subcontrolrect)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * , const QRectF & , QskAspect::Subcontrol ) const |
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

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setNodeRoles](/docs/classes/class_qsk_skinlet/#function-setnoderoles)**(const QVector< quint8 > & nodeRoles) |
| void | **[appendNodeRoles](/docs/classes/class_qsk_skinlet/#function-appendnoderoles)**(const QVector< quint8 > & nodeRoles) |
| virtual QSGNode * | **[updateSubNode](/docs/classes/class_qsk_skinlet/#function-updatesubnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * , quint8 nodeRole, QSGNode * ) const |
| virtual QSGNode * | **[updateBackgroundNode](/docs/classes/class_qsk_skinlet/#function-updatebackgroundnode)**(const [QskControl](/docs/classes/class_qsk_control/) * control, QSGNode * node) const |
| virtual QSGNode * | **[updateDebugNode](/docs/classes/class_qsk_skinlet/#function-updatedebugnode)**(const [QskControl](/docs/classes/class_qsk_control/) * control, QSGNode * node) const |
| QSGNode * | **[updateBoxNode](/docs/classes/class_qsk_skinlet/#function-updateboxnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, QSGNode * node, QskAspect::Subcontrol subControl) const |
| QSGNode * | **[updateBoxClipNode](/docs/classes/class_qsk_skinlet/#function-updateboxclipnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, QSGNode * node, QskAspect::Subcontrol subControl) const |
| QSGNode * | **[updateTextNode](/docs/classes/class_qsk_skinlet/#function-updatetextnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, QSGNode * node, const QString & text, const QskTextOptions & textOptions, QskAspect::Subcontrol subControl) const |
| QSGNode * | **[updateGraphicNode](/docs/classes/class_qsk_skinlet/#function-updategraphicnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, QSGNode * node, const [QskGraphic](/docs/classes/class_qsk_graphic/) & graphic, QskAspect::Subcontrol subcontrol, Qt::Orientations mirrored =Qt::Orientations()) const |
| void | **[replaceChildNode](/docs/classes/class_qsk_skinlet/#function-replacechildnode)**(quint8 nodeRole, QSGNode * parentNode, QSGNode * oldNode, QSGNode * newNode) const |

## Detailed Description

```cpp
class QskSkinlet;
```

Describes the rendering interface of a [QskControl](). Change the skinlet to change the appearance of the control using the low-level scene graph API. 

**See**: QskSkinnable::effectiveSkinlet(), [QskSkinnable::setSkinlet()](/docs/classes/class_qsk_skinnable/#function-setskinlet), QskSkin::declareSkinlet(), QskSkin::skinlet() 
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

Updated on 26 January 2021 at 09:44:54 CET