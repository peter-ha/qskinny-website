---
title: QskControl
summary: Base class of all Qsk controls. 
layout: docs

---


**Module:** **[Framework](/docs/modules/group___framework/)**



Base class of all Qsk controls.  [More...](#detailed-description)


`#include <QskControl.h>`

Inherits from [QskQuickItem](/docs/classes/class_qsk_quick_item/), [QskSkinnable](/docs/classes/class_qsk_skinnable/), QQuickItem

Inherited by [QskAbstractButton](/docs/classes/class_qsk_abstract_button/), [QskBoundedControl](/docs/classes/class_qsk_bounded_control/), [QskBox](/docs/classes/class_qsk_box/), [QskFocusIndicator](/docs/classes/class_qsk_focus_indicator/), [QskGraphicLabel](/docs/classes/class_qsk_graphic_label/), [QskInputGrabber](/docs/classes/class_qsk_input_grabber/), [QskInputPanel](/docs/classes/class_qsk_input_panel/), [QskPageIndicator](/docs/classes/class_qsk_page_indicator/), [QskPopup](/docs/classes/class_qsk_popup/), [QskScrollBox](/docs/classes/class_qsk_scroll_box/), [QskSeparator](/docs/classes/class_qsk_separator/), [QskStatusIndicator](/docs/classes/class_qsk_status_indicator/), [QskSubWindowArea](/docs/classes/class_qsk_sub_window_area/), [QskTabView](/docs/classes/class_qsk_tab_view/), [QskTextInput](/docs/classes/class_qsk_text_input/), [QskTextLabel](/docs/classes/class_qsk_text_label/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[LayoutHint](/docs/classes/class_qsk_control/#enum-layouthint)** { RetainSizeWhenHidden = 1 << 0, LayoutOutWhenHidden = 1 << 1} |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setLocale](/docs/classes/class_qsk_control/#slot-setlocale)**(const QLocale & locale) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[backgroundChanged](/docs/classes/class_qsk_control/#signal-backgroundchanged)**() |
| void | **[marginsChanged](/docs/classes/class_qsk_control/#signal-marginschanged)**(const QMarginsF & ) |
| void | **[focusIndicatorRectChanged](/docs/classes/class_qsk_control/#signal-focusindicatorrectchanged)**() |
| void | **[localeChanged](/docs/classes/class_qsk_control/#signal-localechanged)**(const QLocale & ) |
| void | **[focusPolicyChanged](/docs/classes/class_qsk_control/#signal-focuspolicychanged)**() |
| void | **[wheelEnabledChanged](/docs/classes/class_qsk_control/#signal-wheelenabledchanged)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskControl](/docs/classes/class_qsk_control/#function-qskcontrol)**(QQuickItem * parent =nullptr) |
| | **[~QskControl](/docs/classes/class_qsk_control/#function-~qskcontrol)**() override |
| void | **[setMargins](/docs/classes/class_qsk_control/#function-setmargins)**(qreal margin) |
| void | **[setMargins](/docs/classes/class_qsk_control/#function-setmargins)**(const QMarginsF & margins) |
| void | **[resetMargins](/docs/classes/class_qsk_control/#function-resetmargins)**() |
| QMarginsF | **[margins](/docs/classes/class_qsk_control/#function-margins)**() const |
| void | **[setBackgroundColor](/docs/classes/class_qsk_control/#function-setbackgroundcolor)**(const QColor & color) |
| void | **[setBackground](/docs/classes/class_qsk_control/#function-setbackground)**(const QskGradient & gradient) |
| void | **[resetBackground](/docs/classes/class_qsk_control/#function-resetbackground)**() |
| QskGradient | **[background](/docs/classes/class_qsk_control/#function-background)**() const |
| QRectF | **[contentsRect](/docs/classes/class_qsk_control/#function-contentsrect)**() const |
| QRectF | **[layoutRect](/docs/classes/class_qsk_control/#function-layoutrect)**() const |
| virtual QRectF | **[layoutRectForSize](/docs/classes/class_qsk_control/#function-layoutrectforsize)**(const QSizeF & size) const |
| virtual QRectF | **[gestureRect](/docs/classes/class_qsk_control/#function-gesturerect)**() const |
| virtual QRectF | **[focusIndicatorRect](/docs/classes/class_qsk_control/#function-focusindicatorrect)**() const |
| virtual QRectF | **[focusIndicatorClipRect](/docs/classes/class_qsk_control/#function-focusindicatorcliprect)**() const |
| QRectF | **[subControlRect](/docs/classes/class_qsk_control/#function-subcontrolrect)**(QskAspect::Subcontrol subControl) const |
| QRectF | **[subControlRect](/docs/classes/class_qsk_control/#function-subcontrolrect)**(const QSizeF & size, QskAspect::Subcontrol subControl) const |
| QRectF | **[subControlContentsRect](/docs/classes/class_qsk_control/#function-subcontrolcontentsrect)**(QskAspect::Subcontrol subControl) const |
| QRectF | **[subControlContentsRect](/docs/classes/class_qsk_control/#function-subcontrolcontentsrect)**(const QSizeF & size, QskAspect::Subcontrol subControl) const |
| void | **[setAutoFillBackground](/docs/classes/class_qsk_control/#function-setautofillbackground)**(bool on) |
| bool | **[autoFillBackground](/docs/classes/class_qsk_control/#function-autofillbackground)**() const |
| void | **[setAutoLayoutChildren](/docs/classes/class_qsk_control/#function-setautolayoutchildren)**(bool on) |
| bool | **[autoLayoutChildren](/docs/classes/class_qsk_control/#function-autolayoutchildren)**() const |
| void | **[setWheelEnabled](/docs/classes/class_qsk_control/#function-setwheelenabled)**(bool on) |
| bool | **[isWheelEnabled](/docs/classes/class_qsk_control/#function-iswheelenabled)**() const |
| void | **[setFocusPolicy](/docs/classes/class_qsk_control/#function-setfocuspolicy)**(Qt::FocusPolicy policy) |
| Qt::FocusPolicy | **[focusPolicy](/docs/classes/class_qsk_control/#function-focuspolicy)**() const |
| void | **[setSizePolicy](/docs/classes/class_qsk_control/#function-setsizepolicy)**(QskSizePolicy::Policy horizontalPolicy, QskSizePolicy::Policy verticalPolicy) |
| void | **[setSizePolicy](/docs/classes/class_qsk_control/#function-setsizepolicy)**(QskSizePolicy policy) |
| void | **[setSizePolicy](/docs/classes/class_qsk_control/#function-setsizepolicy)**(Qt::Orientation orientation, QskSizePolicy::Policy policy) |
| QskSizePolicy | **[sizePolicy](/docs/classes/class_qsk_control/#function-sizepolicy)**() const |
| QskSizePolicy::Policy | **[sizePolicy](/docs/classes/class_qsk_control/#function-sizepolicy)**(Qt::Orientation orientation) const |
| void | **[setLayoutAlignmentHint](/docs/classes/class_qsk_control/#function-setlayoutalignmenthint)**(Qt::Alignment alignment) |
| Qt::Alignment | **[layoutAlignmentHint](/docs/classes/class_qsk_control/#function-layoutalignmenthint)**() const |
| void | **[setLayoutHint](/docs/classes/class_qsk_control/#function-setlayouthint)**(LayoutHint flag, bool on =true) |
| bool | **[testLayoutHint](/docs/classes/class_qsk_control/#function-testlayouthint)**(LayoutHint hint) const |
| void | **[setLayoutHints](/docs/classes/class_qsk_control/#function-setlayouthints)**(LayoutHints hints) |
| LayoutHints | **[layoutHints](/docs/classes/class_qsk_control/#function-layouthints)**() const |
| bool | **[isVisibleToLayout](/docs/classes/class_qsk_control/#function-isvisibletolayout)**() const |
| void | **[setMinimumSize](/docs/classes/class_qsk_control/#function-setminimumsize)**(const QSizeF & size) |
| void | **[setMinimumSize](/docs/classes/class_qsk_control/#function-setminimumsize)**(qreal width, qreal height) |
| void | **[setMinimumWidth](/docs/classes/class_qsk_control/#function-setminimumwidth)**(qreal width) |
| void | **[setMinimumHeight](/docs/classes/class_qsk_control/#function-setminimumheight)**(qreal height) |
| void | **[setMaximumSize](/docs/classes/class_qsk_control/#function-setmaximumsize)**(const QSizeF & size) |
| void | **[setMaximumSize](/docs/classes/class_qsk_control/#function-setmaximumsize)**(qreal width, qreal height) |
| void | **[setMaximumWidth](/docs/classes/class_qsk_control/#function-setmaximumwidth)**(qreal width) |
| void | **[setMaximumHeight](/docs/classes/class_qsk_control/#function-setmaximumheight)**(qreal height) |
| void | **[setPreferredSize](/docs/classes/class_qsk_control/#function-setpreferredsize)**(const QSizeF & size) |
| void | **[setPreferredSize](/docs/classes/class_qsk_control/#function-setpreferredsize)**(qreal width, qreal height) |
| void | **[setPreferredWidth](/docs/classes/class_qsk_control/#function-setpreferredwidth)**(qreal width) |
| void | **[setPreferredHeight](/docs/classes/class_qsk_control/#function-setpreferredheight)**(qreal height) |
| void | **[setFixedSize](/docs/classes/class_qsk_control/#function-setfixedsize)**(const QSizeF & size) |
| void | **[setFixedSize](/docs/classes/class_qsk_control/#function-setfixedsize)**(qreal width, qreal height) |
| void | **[setFixedWidth](/docs/classes/class_qsk_control/#function-setfixedwidth)**(qreal width) |
| void | **[setFixedHeight](/docs/classes/class_qsk_control/#function-setfixedheight)**(qreal height) |
| void | **[setExplicitSizeHint](/docs/classes/class_qsk_control/#function-setexplicitsizehint)**(Qt::SizeHint whichHint, const QSizeF & size) |
| void | **[setExplicitSizeHint](/docs/classes/class_qsk_control/#function-setexplicitsizehint)**(Qt::SizeHint whichHint, qreal width, qreal height) |
| void | **[resetExplicitSizeHint](/docs/classes/class_qsk_control/#function-resetexplicitsizehint)**(Qt::SizeHint whichHint) |
| QSizeF | **[minimumSize](/docs/classes/class_qsk_control/#function-minimumsize)**() const |
| QSizeF | **[maximumSize](/docs/classes/class_qsk_control/#function-maximumsize)**() const |
| QSizeF | **[preferredSize](/docs/classes/class_qsk_control/#function-preferredsize)**() const |
| QSizeF | **[explicitSizeHint](/docs/classes/class_qsk_control/#function-explicitsizehint)**(Qt::SizeHint whichHint) const |
| QSizeF | **[implicitSizeHint](/docs/classes/class_qsk_control/#function-implicitsizehint)**(Qt::SizeHint whichHint, const QSizeF & constraint) const |
| QSizeF | **[sizeHint](/docs/classes/class_qsk_control/#function-sizehint)**() const |
| qreal | **[heightForWidth](/docs/classes/class_qsk_control/#function-heightforwidth)**(qreal width) const |
| qreal | **[widthForHeight](/docs/classes/class_qsk_control/#function-widthforheight)**(qreal height) const |
| QSizeF | **[effectiveSizeHint](/docs/classes/class_qsk_control/#function-effectivesizehint)**(Qt::SizeHint which, const QSizeF & constraint =QSizeF()) const |
| QSizeF | **[sizeConstraint](/docs/classes/class_qsk_control/#function-sizeconstraint)**(Qt::SizeHint which, const QSizeF & constraint =QSizeF()) const |
| QSizeF | **[sizeConstraint](/docs/classes/class_qsk_control/#function-sizeconstraint)**() const |
| QLocale | **[locale](/docs/classes/class_qsk_control/#function-locale)**() const |
| void | **[resetLocale](/docs/classes/class_qsk_control/#function-resetlocale)**() |
| QVector< QskAspect::Subcontrol > | **[subControls](/docs/classes/class_qsk_control/#function-subcontrols)**() const |
| QRectF | **[subControlRect](/docs/classes/class_qsk_control/#function-subcontrolrect)**(const QRectF & , QskAspect::Subcontrol ) |
| QRectF | **[subControlContentsRect](/docs/classes/class_qsk_control/#function-subcontrolcontentsrect)**(const QRectF & , QskAspect::Subcontrol ) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[event](/docs/classes/class_qsk_control/#function-event)**(QEvent * event) override |
| virtual void | **[gestureEvent](/docs/classes/class_qsk_control/#function-gestureevent)**(QskGestureEvent * ) |
| void | **[hoverEnterEvent](/docs/classes/class_qsk_control/#function-hoverenterevent)**(QHoverEvent * event) override |
| void | **[hoverLeaveEvent](/docs/classes/class_qsk_control/#function-hoverleaveevent)**(QHoverEvent * event) override |
| bool | **[childMouseEventFilter](/docs/classes/class_qsk_control/#function-childmouseeventfilter)**(QQuickItem * item, QEvent * event) override |
| virtual bool | **[gestureFilter](/docs/classes/class_qsk_control/#function-gesturefilter)**(QQuickItem * , QEvent * ) |
| void | **[itemChange](/docs/classes/class_qsk_control/#function-itemchange)**(ItemChange , const ItemChangeData & ) override |
| void | **[geometryChange](/docs/classes/class_qsk_control/#function-geometrychange)**(const QRectF & newGeometry, const QRectF & oldGeometry) override |
| void | **[initSizePolicy](/docs/classes/class_qsk_control/#function-initsizepolicy)**(QskSizePolicy::Policy horizontalPolicy, QskSizePolicy::Policy verticalPolicy) |
| virtual void | **[updateResources](/docs/classes/class_qsk_control/#function-updateresources)**() |
| virtual void | **[updateLayout](/docs/classes/class_qsk_control/#function-updatelayout)**() |
| virtual QSizeF | **[contentsSizeHint](/docs/classes/class_qsk_control/#function-contentssizehint)**(Qt::SizeHint which, const QSizeF & constraint) const |
| virtual QSizeF | **[layoutSizeHint](/docs/classes/class_qsk_control/#function-layoutsizehint)**(Qt::SizeHint which, const QSizeF & constraint) const |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QLocale | **[locale](/docs/classes/class_qsk_control/#property-locale)**  |
| bool | **[autoFillBackground](/docs/classes/class_qsk_control/#property-autofillbackground)**  |
| bool | **[autoLayoutChildren](/docs/classes/class_qsk_control/#property-autolayoutchildren)**  |
| Qt::FocusPolicy | **[focusPolicy](/docs/classes/class_qsk_control/#property-focuspolicy)**  |
| bool | **[wheelEnabled](/docs/classes/class_qsk_control/#property-wheelenabled)**  |
| QskMargins | **[margins](/docs/classes/class_qsk_control/#property-margins)**  |
| QskGradient | **[background](/docs/classes/class_qsk_control/#property-background)**  |
| QskSizePolicy | **[sizePolicy](/docs/classes/class_qsk_control/#property-sizepolicy)**  |
| QSizeF | **[minimumSize](/docs/classes/class_qsk_control/#property-minimumsize)**  |
| QSizeF | **[maximumSize](/docs/classes/class_qsk_control/#property-maximumsize)**  |
| QSizeF | **[preferredSize](/docs/classes/class_qsk_control/#property-preferredsize)**  |

## Detailed Description

```cpp
class QskControl;
```

Base class of all Qsk controls. 

[QskControl](/docs/classes/class_qsk_control/) is the base class for most visible Qsk controls.

It re-establishes several concepts known from QWidget, that got lost with QQuickItem:



* contentsRect()
* autoFillBackground()
* support of layout rules: sizeHint(), sizePolicy()
* locale and its propagation on the item tree
Even if QQuickItem is part of the public C++ API it has obviously been designed for implementing custom items, but not for using them in C++ code. To support this use case a lot of trivial methods have been added.

For some reason the QQuick classes introduced proprietory notfier hooks instead of using the well established and powerful concept of events. [QskControl](/docs/classes/class_qsk_control/) tries to revert this decision by mapping notifications to events, when possible.

The following events are currently implemented:



* QEvent::FontChange
* QEvent::PaletteChange
* QEvent::LocaleChange
* QEvent::LayoutDirectionChange
* QEvent::ContentsRectChange
* QEvent::LayoutRequest 

## Public Types Documentation

### enum LayoutHint

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| RetainSizeWhenHidden | 1 << 0|   |
| LayoutOutWhenHidden | 1 << 1|   |




## Public Slots Documentation

### slot setLocale

```cpp
void setLocale(
    const QLocale & locale
)
```


## Public Signals Documentation

### signal backgroundChanged

```cpp
void backgroundChanged()
```


### signal marginsChanged

```cpp
void marginsChanged(
    const QMarginsF & 
)
```


### signal focusIndicatorRectChanged

```cpp
void focusIndicatorRectChanged()
```


### signal localeChanged

```cpp
void localeChanged(
    const QLocale & 
)
```


### signal focusPolicyChanged

```cpp
void focusPolicyChanged()
```


### signal wheelEnabledChanged

```cpp
void wheelEnabledChanged()
```


## Public Functions Documentation

### function QskControl

```cpp
QskControl(
    QQuickItem * parent =nullptr
)
```


### function ~QskControl

```cpp
~QskControl() override
```


### function setMargins

```cpp
void setMargins(
    qreal margin
)
```


### function setMargins

```cpp
void setMargins(
    const QMarginsF & margins
)
```


### function resetMargins

```cpp
void resetMargins()
```


### function margins

```cpp
QMarginsF margins() const
```


### function setBackgroundColor

```cpp
void setBackgroundColor(
    const QColor & color
)
```


### function setBackground

```cpp
void setBackground(
    const QskGradient & gradient
)
```


### function resetBackground

```cpp
void resetBackground()
```


### function background

```cpp
QskGradient background() const
```


### function contentsRect

```cpp
QRectF contentsRect() const
```


### function layoutRect

```cpp
QRectF layoutRect() const
```


### function layoutRectForSize

```cpp
virtual QRectF layoutRectForSize(
    const QSizeF & size
) const
```


### function gestureRect

```cpp
virtual QRectF gestureRect() const
```


### function focusIndicatorRect

```cpp
virtual QRectF focusIndicatorRect() const
```


### function focusIndicatorClipRect

```cpp
virtual QRectF focusIndicatorClipRect() const
```


### function subControlRect

```cpp
QRectF subControlRect(
    QskAspect::Subcontrol subControl
) const
```


### function subControlRect

```cpp
QRectF subControlRect(
    const QSizeF & size,
    QskAspect::Subcontrol subControl
) const
```


### function subControlContentsRect

```cpp
QRectF subControlContentsRect(
    QskAspect::Subcontrol subControl
) const
```


### function subControlContentsRect

```cpp
QRectF subControlContentsRect(
    const QSizeF & size,
    QskAspect::Subcontrol subControl
) const
```


### function setAutoFillBackground

```cpp
void setAutoFillBackground(
    bool on
)
```


### function autoFillBackground

```cpp
bool autoFillBackground() const
```


### function setAutoLayoutChildren

```cpp
void setAutoLayoutChildren(
    bool on
)
```


### function autoLayoutChildren

```cpp
bool autoLayoutChildren() const
```


### function setWheelEnabled

```cpp
void setWheelEnabled(
    bool on
)
```


### function isWheelEnabled

```cpp
bool isWheelEnabled() const
```


### function setFocusPolicy

```cpp
void setFocusPolicy(
    Qt::FocusPolicy policy
)
```


### function focusPolicy

```cpp
Qt::FocusPolicy focusPolicy() const
```


### function setSizePolicy

```cpp
void setSizePolicy(
    QskSizePolicy::Policy horizontalPolicy,
    QskSizePolicy::Policy verticalPolicy
)
```


### function setSizePolicy

```cpp
void setSizePolicy(
    QskSizePolicy policy
)
```


### function setSizePolicy

```cpp
void setSizePolicy(
    Qt::Orientation orientation,
    QskSizePolicy::Policy policy
)
```


### function sizePolicy

```cpp
QskSizePolicy sizePolicy() const
```


### function sizePolicy

```cpp
QskSizePolicy::Policy sizePolicy(
    Qt::Orientation orientation
) const
```


### function setLayoutAlignmentHint

```cpp
void setLayoutAlignmentHint(
    Qt::Alignment alignment
)
```


### function layoutAlignmentHint

```cpp
Qt::Alignment layoutAlignmentHint() const
```


### function setLayoutHint

```cpp
void setLayoutHint(
    LayoutHint flag,
    bool on =true
)
```


### function testLayoutHint

```cpp
bool testLayoutHint(
    LayoutHint hint
) const
```


### function setLayoutHints

```cpp
void setLayoutHints(
    LayoutHints hints
)
```


### function layoutHints

```cpp
LayoutHints layoutHints() const
```


### function isVisibleToLayout

```cpp
bool isVisibleToLayout() const
```


### function setMinimumSize

```cpp
void setMinimumSize(
    const QSizeF & size
)
```


### function setMinimumSize

```cpp
void setMinimumSize(
    qreal width,
    qreal height
)
```


### function setMinimumWidth

```cpp
void setMinimumWidth(
    qreal width
)
```


### function setMinimumHeight

```cpp
void setMinimumHeight(
    qreal height
)
```


### function setMaximumSize

```cpp
void setMaximumSize(
    const QSizeF & size
)
```


### function setMaximumSize

```cpp
void setMaximumSize(
    qreal width,
    qreal height
)
```


### function setMaximumWidth

```cpp
void setMaximumWidth(
    qreal width
)
```


### function setMaximumHeight

```cpp
void setMaximumHeight(
    qreal height
)
```


### function setPreferredSize

```cpp
void setPreferredSize(
    const QSizeF & size
)
```


### function setPreferredSize

```cpp
void setPreferredSize(
    qreal width,
    qreal height
)
```


### function setPreferredWidth

```cpp
void setPreferredWidth(
    qreal width
)
```


### function setPreferredHeight

```cpp
void setPreferredHeight(
    qreal height
)
```


### function setFixedSize

```cpp
void setFixedSize(
    const QSizeF & size
)
```


### function setFixedSize

```cpp
void setFixedSize(
    qreal width,
    qreal height
)
```


### function setFixedWidth

```cpp
void setFixedWidth(
    qreal width
)
```


### function setFixedHeight

```cpp
void setFixedHeight(
    qreal height
)
```


### function setExplicitSizeHint

```cpp
void setExplicitSizeHint(
    Qt::SizeHint whichHint,
    const QSizeF & size
)
```


### function setExplicitSizeHint

```cpp
void setExplicitSizeHint(
    Qt::SizeHint whichHint,
    qreal width,
    qreal height
)
```


### function resetExplicitSizeHint

```cpp
void resetExplicitSizeHint(
    Qt::SizeHint whichHint
)
```


### function minimumSize

```cpp
QSizeF minimumSize() const
```


### function maximumSize

```cpp
QSizeF maximumSize() const
```


### function preferredSize

```cpp
QSizeF preferredSize() const
```


### function explicitSizeHint

```cpp
QSizeF explicitSizeHint(
    Qt::SizeHint whichHint
) const
```


### function implicitSizeHint

```cpp
QSizeF implicitSizeHint(
    Qt::SizeHint whichHint,
    const QSizeF & constraint
) const
```


### function sizeHint

```cpp
inline QSizeF sizeHint() const
```


### function heightForWidth

```cpp
qreal heightForWidth(
    qreal width
) const
```


### function widthForHeight

```cpp
qreal widthForHeight(
    qreal height
) const
```


### function effectiveSizeHint

```cpp
QSizeF effectiveSizeHint(
    Qt::SizeHint which,
    const QSizeF & constraint =QSizeF()
) const
```


### function sizeConstraint

```cpp
QSizeF sizeConstraint(
    Qt::SizeHint which,
    const QSizeF & constraint =QSizeF()
) const
```


### function sizeConstraint

```cpp
inline QSizeF sizeConstraint() const
```


### function locale

```cpp
QLocale locale() const
```


### function resetLocale

```cpp
void resetLocale()
```


### function subControls

```cpp
QVector< QskAspect::Subcontrol > subControls() const
```


### function subControlRect

```cpp
QRectF subControlRect(
    const QRectF & ,
    QskAspect::Subcontrol 
)
```


### function subControlContentsRect

```cpp
QRectF subControlContentsRect(
    const QRectF & ,
    QskAspect::Subcontrol 
)
```


## Protected Functions Documentation

### function event

```cpp
bool event(
    QEvent * event
) override
```


### function gestureEvent

```cpp
virtual void gestureEvent(
    QskGestureEvent * 
)
```


### function hoverEnterEvent

```cpp
void hoverEnterEvent(
    QHoverEvent * event
) override
```


### function hoverLeaveEvent

```cpp
void hoverLeaveEvent(
    QHoverEvent * event
) override
```


### function childMouseEventFilter

```cpp
bool childMouseEventFilter(
    QQuickItem * item,
    QEvent * event
) override
```


### function gestureFilter

```cpp
virtual bool gestureFilter(
    QQuickItem * ,
    QEvent * 
)
```


### function itemChange

```cpp
void itemChange(
    ItemChange ,
    const ItemChangeData & 
) override
```


### function geometryChange

```cpp
void geometryChange(
    const QRectF & newGeometry,
    const QRectF & oldGeometry
) override
```


### function initSizePolicy

```cpp
void initSizePolicy(
    QskSizePolicy::Policy horizontalPolicy,
    QskSizePolicy::Policy verticalPolicy
)
```


### function updateResources

```cpp
virtual void updateResources()
```


### function updateLayout

```cpp
virtual void updateLayout()
```


**Reimplemented by**: [QskLinearBox::updateLayout](/docs/classes/class_qsk_linear_box/#function-updatelayout)


### function contentsSizeHint

```cpp
virtual QSizeF contentsSizeHint(
    Qt::SizeHint which,
    const QSizeF & constraint
) const
```


### function layoutSizeHint

```cpp
virtual QSizeF layoutSizeHint(
    Qt::SizeHint which,
    const QSizeF & constraint
) const
```


**Reimplemented by**: [QskLinearBox::layoutSizeHint](/docs/classes/class_qsk_linear_box/#function-layoutsizehint)


## Public Property Documentation

### property locale

```cpp
QLocale locale;
```


### property autoFillBackground

```cpp
bool autoFillBackground;
```


### property autoLayoutChildren

```cpp
bool autoLayoutChildren;
```


### property focusPolicy

```cpp
Qt::FocusPolicy focusPolicy;
```


### property wheelEnabled

```cpp
bool wheelEnabled;
```


### property margins

```cpp
QskMargins margins;
```


### property background

```cpp
QskGradient background;
```


### property sizePolicy

```cpp
QskSizePolicy sizePolicy;
```


### property minimumSize

```cpp
QSizeF minimumSize;
```


### property maximumSize

```cpp
QSizeF maximumSize;
```


### property preferredSize

```cpp
QSizeF preferredSize;
```


-------------------------------

Updated on 23 January 2021 at 09:50:35 CET