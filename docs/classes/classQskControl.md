---
title: QskControl
summary: Base class of all Qsk controls. 
layout: docs

---


**Module:** **[Framework](/docs/modules/group__Framework/)**



Base class of all Qsk controls.  [More...](#detailed-description)


`#include <QskControl.h>`

Inherits from [QskQuickItem](/docs/classes/classQskQuickItem/), QskSkinnable

Inherited by [QskAbstractButton](/docs/classes/classQskAbstractButton/), [QskBoundedControl](/docs/classes/classQskBoundedControl/), [QskBox](/docs/classes/classQskBox/), [QskFocusIndicator](/docs/classes/classQskFocusIndicator/), [QskGraphicLabel](/docs/classes/classQskGraphicLabel/), [QskInputGrabber](/docs/classes/classQskInputGrabber/), [QskInputPanel](/docs/classes/classQskInputPanel/), [QskPageIndicator](/docs/classes/classQskPageIndicator/), [QskPopup](/docs/classes/classQskPopup/), [QskScrollBox](/docs/classes/classQskScrollBox/), [QskSeparator](/docs/classes/classQskSeparator/), [QskStatusIndicator](/docs/classes/classQskStatusIndicator/), [QskSubWindowArea](/docs/classes/classQskSubWindowArea/), [QskTabView](/docs/classes/classQskTabView/), [QskTextInput](/docs/classes/classQskTextInput/), [QskTextLabel](/docs/classes/classQskTextLabel/)

## Public States

|                | Name           |
| -------------- | -------------- |
| const QskAspect::State | **[Disabled](/docs/classes/classQskControl/#state-disabled)**  |
| const QskAspect::State | **[Hovered](/docs/classes/classQskControl/#state-hovered)**  |
| const QskAspect::State | **[Focused](/docs/classes/classQskControl/#state-focused)**  |

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[LayoutHint](/docs/classes/classQskControl/#enum-layouthint)** { RetainSizeWhenHidden = 1 << 0, LayoutOutWhenHidden = 1 << 1} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskControl](/docs/classes/classQskControl/#function-qskcontrol)**(QQuickItem * parent =nullptr) |
| | **[~QskControl](/docs/classes/classQskControl/#function-~qskcontrol)**() override |
| void | **[setMargins](/docs/classes/classQskControl/#function-setmargins)**(qreal margin) |
| void | **[setMargins](/docs/classes/classQskControl/#function-setmargins)**(const QMarginsF & margins) |
| void | **[resetMargins](/docs/classes/classQskControl/#function-resetmargins)**() |
| QMarginsF | **[margins](/docs/classes/classQskControl/#function-margins)**() const |
| void | **[setBackgroundColor](/docs/classes/classQskControl/#function-setbackgroundcolor)**(const QColor & color) |
| void | **[setBackground](/docs/classes/classQskControl/#function-setbackground)**(const QskGradient & gradient) |
| void | **[resetBackground](/docs/classes/classQskControl/#function-resetbackground)**() |
| QskGradient | **[background](/docs/classes/classQskControl/#function-background)**() const |
| QRectF | **[contentsRect](/docs/classes/classQskControl/#function-contentsrect)**() const |
| QRectF | **[layoutRect](/docs/classes/classQskControl/#function-layoutrect)**() const |
| virtual QRectF | **[layoutRectForSize](/docs/classes/classQskControl/#function-layoutrectforsize)**(const QSizeF & size) const |
| virtual QRectF | **[gestureRect](/docs/classes/classQskControl/#function-gesturerect)**() const |
| virtual QRectF | **[focusIndicatorRect](/docs/classes/classQskControl/#function-focusindicatorrect)**() const |
| virtual QRectF | **[focusIndicatorClipRect](/docs/classes/classQskControl/#function-focusindicatorcliprect)**() const |
| QRectF | **[subControlRect](/docs/classes/classQskControl/#function-subcontrolrect)**(QskAspect::Subcontrol subControl) const |
| QRectF | **[subControlRect](/docs/classes/classQskControl/#function-subcontrolrect)**(const QSizeF & size, QskAspect::Subcontrol subControl) const |
| QRectF | **[subControlContentsRect](/docs/classes/classQskControl/#function-subcontrolcontentsrect)**(QskAspect::Subcontrol subControl) const |
| QRectF | **[subControlContentsRect](/docs/classes/classQskControl/#function-subcontrolcontentsrect)**(const QSizeF & size, QskAspect::Subcontrol subControl) const |
| void | **[setAutoFillBackground](/docs/classes/classQskControl/#function-setautofillbackground)**(bool on) |
| bool | **[autoFillBackground](/docs/classes/classQskControl/#function-autofillbackground)**() const |
| void | **[setAutoLayoutChildren](/docs/classes/classQskControl/#function-setautolayoutchildren)**(bool on) |
| bool | **[autoLayoutChildren](/docs/classes/classQskControl/#function-autolayoutchildren)**() const |
| void | **[setWheelEnabled](/docs/classes/classQskControl/#function-setwheelenabled)**(bool on) |
| bool | **[isWheelEnabled](/docs/classes/classQskControl/#function-iswheelenabled)**() const |
| void | **[setFocusPolicy](/docs/classes/classQskControl/#function-setfocuspolicy)**(Qt::FocusPolicy policy) |
| Qt::FocusPolicy | **[focusPolicy](/docs/classes/classQskControl/#function-focuspolicy)**() const |
| void | **[setSizePolicy](/docs/classes/classQskControl/#function-setsizepolicy)**(QskSizePolicy::Policy horizontalPolicy, QskSizePolicy::Policy verticalPolicy) |
| void | **[setSizePolicy](/docs/classes/classQskControl/#function-setsizepolicy)**(QskSizePolicy policy) |
| void | **[setSizePolicy](/docs/classes/classQskControl/#function-setsizepolicy)**(Qt::Orientation orientation, QskSizePolicy::Policy policy) |
| QskSizePolicy | **[sizePolicy](/docs/classes/classQskControl/#function-sizepolicy)**() const |
| QskSizePolicy::Policy | **[sizePolicy](/docs/classes/classQskControl/#function-sizepolicy)**(Qt::Orientation orientation) const |
| void | **[setLayoutAlignmentHint](/docs/classes/classQskControl/#function-setlayoutalignmenthint)**(Qt::Alignment alignment) |
| Qt::Alignment | **[layoutAlignmentHint](/docs/classes/classQskControl/#function-layoutalignmenthint)**() const |
| void | **[setLayoutHint](/docs/classes/classQskControl/#function-setlayouthint)**(LayoutHint flag, bool on =true) |
| bool | **[testLayoutHint](/docs/classes/classQskControl/#function-testlayouthint)**(LayoutHint hint) const |
| void | **[setLayoutHints](/docs/classes/classQskControl/#function-setlayouthints)**(LayoutHints hints) |
| LayoutHints | **[layoutHints](/docs/classes/classQskControl/#function-layouthints)**() const |
| bool | **[isVisibleToLayout](/docs/classes/classQskControl/#function-isvisibletolayout)**() const |
| void | **[setMinimumSize](/docs/classes/classQskControl/#function-setminimumsize)**(const QSizeF & size) |
| void | **[setMinimumSize](/docs/classes/classQskControl/#function-setminimumsize)**(qreal width, qreal height) |
| void | **[setMinimumWidth](/docs/classes/classQskControl/#function-setminimumwidth)**(qreal width) |
| void | **[setMinimumHeight](/docs/classes/classQskControl/#function-setminimumheight)**(qreal height) |
| void | **[setMaximumSize](/docs/classes/classQskControl/#function-setmaximumsize)**(const QSizeF & size) |
| void | **[setMaximumSize](/docs/classes/classQskControl/#function-setmaximumsize)**(qreal width, qreal height) |
| void | **[setMaximumWidth](/docs/classes/classQskControl/#function-setmaximumwidth)**(qreal width) |
| void | **[setMaximumHeight](/docs/classes/classQskControl/#function-setmaximumheight)**(qreal height) |
| void | **[setPreferredSize](/docs/classes/classQskControl/#function-setpreferredsize)**(const QSizeF & size) |
| void | **[setPreferredSize](/docs/classes/classQskControl/#function-setpreferredsize)**(qreal width, qreal height) |
| void | **[setPreferredWidth](/docs/classes/classQskControl/#function-setpreferredwidth)**(qreal width) |
| void | **[setPreferredHeight](/docs/classes/classQskControl/#function-setpreferredheight)**(qreal height) |
| void | **[setFixedSize](/docs/classes/classQskControl/#function-setfixedsize)**(const QSizeF & size) |
| void | **[setFixedSize](/docs/classes/classQskControl/#function-setfixedsize)**(qreal width, qreal height) |
| void | **[setFixedWidth](/docs/classes/classQskControl/#function-setfixedwidth)**(qreal width) |
| void | **[setFixedHeight](/docs/classes/classQskControl/#function-setfixedheight)**(qreal height) |
| void | **[setExplicitSizeHint](/docs/classes/classQskControl/#function-setexplicitsizehint)**(Qt::SizeHint whichHint, const QSizeF & size) |
| void | **[setExplicitSizeHint](/docs/classes/classQskControl/#function-setexplicitsizehint)**(Qt::SizeHint whichHint, qreal width, qreal height) |
| void | **[resetExplicitSizeHint](/docs/classes/classQskControl/#function-resetexplicitsizehint)**(Qt::SizeHint whichHint) |
| QSizeF | **[minimumSize](/docs/classes/classQskControl/#function-minimumsize)**() const |
| QSizeF | **[maximumSize](/docs/classes/classQskControl/#function-maximumsize)**() const |
| QSizeF | **[preferredSize](/docs/classes/classQskControl/#function-preferredsize)**() const |
| QSizeF | **[explicitSizeHint](/docs/classes/classQskControl/#function-explicitsizehint)**(Qt::SizeHint whichHint) const |
| QSizeF | **[implicitSizeHint](/docs/classes/classQskControl/#function-implicitsizehint)**(Qt::SizeHint whichHint, const QSizeF & constraint) const |
| QSizeF | **[sizeHint](/docs/classes/classQskControl/#function-sizehint)**() const |
| qreal | **[heightForWidth](/docs/classes/classQskControl/#function-heightforwidth)**(qreal width) const |
| qreal | **[widthForHeight](/docs/classes/classQskControl/#function-widthforheight)**(qreal height) const |
| QSizeF | **[effectiveSizeHint](/docs/classes/classQskControl/#function-effectivesizehint)**(Qt::SizeHint which, const QSizeF & constraint =QSizeF()) const |
| QSizeF | **[sizeConstraint](/docs/classes/classQskControl/#function-sizeconstraint)**(Qt::SizeHint which, const QSizeF & constraint =QSizeF()) const |
| QSizeF | **[sizeConstraint](/docs/classes/classQskControl/#function-sizeconstraint)**() const |
| QLocale | **[locale](/docs/classes/classQskControl/#function-locale)**() const |
| void | **[resetLocale](/docs/classes/classQskControl/#function-resetlocale)**() |
| QVector< QskAspect::Subcontrol > | **[subControls](/docs/classes/classQskControl/#function-subcontrols)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[event](/docs/classes/classQskControl/#function-event)**(QEvent * event) override |
| virtual void | **[gestureEvent](/docs/classes/classQskControl/#function-gestureevent)**(QskGestureEvent * ) |
| void | **[hoverEnterEvent](/docs/classes/classQskControl/#function-hoverenterevent)**(QHoverEvent * event) override |
| void | **[hoverLeaveEvent](/docs/classes/classQskControl/#function-hoverleaveevent)**(QHoverEvent * event) override |
| bool | **[childMouseEventFilter](/docs/classes/classQskControl/#function-childmouseeventfilter)**(QQuickItem * item, QEvent * event) override |
| virtual bool | **[gestureFilter](/docs/classes/classQskControl/#function-gesturefilter)**(QQuickItem * , QEvent * ) |
| void | **[itemChange](/docs/classes/classQskControl/#function-itemchange)**(ItemChange , const ItemChangeData & ) override |
| void | **[geometryChange](/docs/classes/classQskControl/#function-geometrychange)**(const QRectF & newGeometry, const QRectF & oldGeometry) override |
| void | **[initSizePolicy](/docs/classes/classQskControl/#function-initsizepolicy)**(QskSizePolicy::Policy horizontalPolicy, QskSizePolicy::Policy verticalPolicy) |
| virtual void | **[updateResources](/docs/classes/classQskControl/#function-updateresources)**() |
| virtual void | **[updateLayout](/docs/classes/classQskControl/#function-updatelayout)**() |
| virtual QSizeF | **[contentsSizeHint](/docs/classes/classQskControl/#function-contentssizehint)**(Qt::SizeHint which, const QSizeF & constraint) const |
| virtual QSizeF | **[layoutSizeHint](/docs/classes/classQskControl/#function-layoutsizehint)**(Qt::SizeHint which, const QSizeF & constraint) const |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[backgroundChanged](/docs/classes/classQskControl/#signal-backgroundchanged)**() |
| void | **[marginsChanged](/docs/classes/classQskControl/#signal-marginschanged)**(const QMarginsF & ) |
| void | **[focusIndicatorRectChanged](/docs/classes/classQskControl/#signal-focusindicatorrectchanged)**() |
| void | **[localeChanged](/docs/classes/classQskControl/#signal-localechanged)**(const QLocale & ) |
| void | **[focusPolicyChanged](/docs/classes/classQskControl/#signal-focuspolicychanged)**() |
| void | **[wheelEnabledChanged](/docs/classes/classQskControl/#signal-wheelenabledchanged)**() |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setLocale](/docs/classes/classQskControl/#slot-setlocale)**(const QLocale & locale) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QLocale | **[locale](/docs/classes/classQskControl/#property-locale)**  |
| bool | **[autoFillBackground](/docs/classes/classQskControl/#property-autofillbackground)**  |
| bool | **[autoLayoutChildren](/docs/classes/classQskControl/#property-autolayoutchildren)**  |
| Qt::FocusPolicy | **[focusPolicy](/docs/classes/classQskControl/#property-focuspolicy)**  |
| bool | **[wheelEnabled](/docs/classes/classQskControl/#property-wheelenabled)**  |
| QskMargins | **[margins](/docs/classes/classQskControl/#property-margins)**  |
| QskGradient | **[background](/docs/classes/classQskControl/#property-background)**  |
| QskSizePolicy | **[sizePolicy](/docs/classes/classQskControl/#property-sizepolicy)**  |
| QSizeF | **[minimumSize](/docs/classes/classQskControl/#property-minimumsize)**  |
| QSizeF | **[maximumSize](/docs/classes/classQskControl/#property-maximumsize)**  |
| QSizeF | **[preferredSize](/docs/classes/classQskControl/#property-preferredsize)**  |
| QSizeF | **[sizeConstraint](/docs/classes/classQskControl/#property-sizeconstraint)**  |

## Detailed Description

```cpp
class QskControl;
```

Base class of all Qsk controls. 

[QskControl](/docs/classes/classQskControl/) is the base class for most visible Qsk controls.

It re-establishes several concepts known from QWidget, that got lost with QQuickItem:



* contentsRect()
* autoFillBackground()
* support of layout rules: sizeHint(), sizePolicy()
* locale and its propagation on the item tree
Even if QQuickItem is part of the public C++ API it has obviously been designed for implementing custom items, but not for using them in C++ code. To support this use case a lot of trivial methods have been added.

For some reason the QQuick classes introduced proprietory notfier hooks instead of using the well established and powerful concept of events. [QskControl](/docs/classes/classQskControl/) tries to revert this decision by mapping notifications to events, when possible.

The following events are currently implemented:



* QEvent::FontChange
* QEvent::PaletteChange
* QEvent::LocaleChange
* QEvent::LayoutDirectionChange
* QEvent::ContentsRectChange
* QEvent::LayoutRequest 

## Public States Documentation

### state Disabled




### state Hovered




### state Focused




## Public Types Documentation

### enum LayoutHint

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| RetainSizeWhenHidden | 1 << 0|   |
| LayoutOutWhenHidden | 1 << 1|   |




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
inline QSizeF minimumSize() const
```


### function maximumSize

```cpp
inline QSizeF maximumSize() const
```


### function preferredSize

```cpp
inline QSizeF preferredSize() const
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


**Reimplemented by**: [QskLinearBox::updateLayout](/docs/classes/classQskLinearBox/#function-updatelayout)


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


**Reimplemented by**: [QskLinearBox::layoutSizeHint](/docs/classes/classQskLinearBox/#function-layoutsizehint)


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


## Public Slots Documentation

### slot setLocale

```cpp
void setLocale(
    const QLocale & locale
)
```


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


### property sizeConstraint

```cpp
QSizeF sizeConstraint;
```


-------------------------------

Updated on  3 February 2021 at 15:05:45 CET