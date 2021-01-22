---
title: QskPopup
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from [QskControl](/docs/classes/class_qsk_control/), [QskQuickItem](/docs/classes/class_qsk_quick_item/), [QskSkinnable](/docs/classes/class_qsk_skinnable/), QQuickItem

Inherited by [QskSubWindow](/docs/classes/class_qsk_sub_window/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[PopupFlag](/docs/classes/class_qsk_popup/#enum-popupflag)** { DeleteOnClose = 1 << 0, CloseOnPressOutside = 1 << 1} |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[open](/docs/classes/class_qsk_popup/#slot-open)**() |
| void | **[close](/docs/classes/class_qsk_popup/#slot-close)**() |
| void | **[setOpen](/docs/classes/class_qsk_popup/#slot-setopen)**(bool on) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[opened](/docs/classes/class_qsk_popup/#signal-opened)**() |
| void | **[closed](/docs/classes/class_qsk_popup/#signal-closed)**() |
| void | **[openChanged](/docs/classes/class_qsk_popup/#signal-openchanged)**(bool ) |
| void | **[fadingChanged](/docs/classes/class_qsk_popup/#signal-fadingchanged)**(bool ) |
| void | **[modalChanged](/docs/classes/class_qsk_popup/#signal-modalchanged)**(bool ) |
| void | **[overlayChanged](/docs/classes/class_qsk_popup/#signal-overlaychanged)**(bool ) |
| void | **[priorityChanged](/docs/classes/class_qsk_popup/#signal-prioritychanged)**(uint ) |
| void | **[faderEffectChanged](/docs/classes/class_qsk_popup/#signal-fadereffectchanged)**(bool ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskPopup](/docs/classes/class_qsk_popup/#function-qskpopup)**(QQuickItem * parent =nullptr) |
| | **[~QskPopup](/docs/classes/class_qsk_popup/#function-~qskpopup)**() override |
| void | **[setPopupFlags](/docs/classes/class_qsk_popup/#function-setpopupflags)**(PopupFlags flags) |
| PopupFlags | **[popupFlags](/docs/classes/class_qsk_popup/#function-popupflags)**() const |
| void | **[setPopupFlag](/docs/classes/class_qsk_popup/#function-setpopupflag)**(PopupFlag flag, bool on =true) |
| bool | **[testPopupFlag](/docs/classes/class_qsk_popup/#function-testpopupflag)**(PopupFlag flag) const |
| void | **[setModal](/docs/classes/class_qsk_popup/#function-setmodal)**(bool on =true) |
| bool | **[isModal](/docs/classes/class_qsk_popup/#function-ismodal)**() const |
| void | **[setOverlay](/docs/classes/class_qsk_popup/#function-setoverlay)**(bool on =true) |
| void | **[resetOverlay](/docs/classes/class_qsk_popup/#function-resetoverlay)**() |
| bool | **[hasOverlay](/docs/classes/class_qsk_popup/#function-hasoverlay)**() const |
| void | **[setPriority](/docs/classes/class_qsk_popup/#function-setpriority)**(uint priority) |
| uint | **[priority](/docs/classes/class_qsk_popup/#function-priority)**() const |
| void | **[setFaderEffect](/docs/classes/class_qsk_popup/#function-setfadereffect)**(bool on) |
| bool | **[hasFaderEffect](/docs/classes/class_qsk_popup/#function-hasfadereffect)**() const |
| QskAspect | **[faderAspect](/docs/classes/class_qsk_popup/#function-faderaspect)**() const |
| void | **[setFaderAspect](/docs/classes/class_qsk_popup/#function-setfaderaspect)**(QskAspect aspect) |
| virtual QRectF | **[overlayRect](/docs/classes/class_qsk_popup/#function-overlayrect)**() const |
| bool | **[isOpen](/docs/classes/class_qsk_popup/#function-isopen)**() const |
| bool | **[isFading](/docs/classes/class_qsk_popup/#function-isfading)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[aboutToShow](/docs/classes/class_qsk_popup/#function-abouttoshow)**() override |
| bool | **[event](/docs/classes/class_qsk_popup/#function-event)**(QEvent * event) override |
| void | **[focusInEvent](/docs/classes/class_qsk_popup/#function-focusinevent)**(QFocusEvent * event) override |
| void | **[focusOutEvent](/docs/classes/class_qsk_popup/#function-focusoutevent)**(QFocusEvent * event) override |
| void | **[windowChangeEvent](/docs/classes/class_qsk_popup/#function-windowchangeevent)**(QskWindowChangeEvent * event) override |
| void | **[itemChange](/docs/classes/class_qsk_popup/#function-itemchange)**(QQuickItem::ItemChange change, const QQuickItem::ItemChangeData & value) override |
| virtual QQuickItem * | **[focusSuccessor](/docs/classes/class_qsk_popup/#function-focussuccessor)**() const |
| bool | **[isTransitionAccepted](/docs/classes/class_qsk_popup/#function-istransitionaccepted)**(QskAspect aspect) const override |
| void | **[grabFocus](/docs/classes/class_qsk_popup/#function-grabfocus)**(bool on) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[open](/docs/classes/class_qsk_popup/#property-open)**  |
| bool | **[modal](/docs/classes/class_qsk_popup/#property-modal)**  |
| bool | **[overlay](/docs/classes/class_qsk_popup/#property-overlay)**  |
| bool | **[faderEffect](/docs/classes/class_qsk_popup/#property-fadereffect)**  |
| uint | **[priority](/docs/classes/class_qsk_popup/#property-priority)**  |

## Additional inherited members

**Public Types inherited from [QskControl](/docs/classes/class_qsk_control/)**

|                | Name           |
| -------------- | -------------- |
| enum| **[LayoutHint](/docs/classes/class_qsk_control/#enum-layouthint)** { RetainSizeWhenHidden, LayoutOutWhenHidden} |

**Public Slots inherited from [QskControl](/docs/classes/class_qsk_control/)**

|                | Name           |
| -------------- | -------------- |
| void | **[setLocale](/docs/classes/class_qsk_control/#slot-setlocale)**(const QLocale & locale) |

**Public Signals inherited from [QskControl](/docs/classes/class_qsk_control/)**

|                | Name           |
| -------------- | -------------- |
| void | **[backgroundChanged](/docs/classes/class_qsk_control/#signal-backgroundchanged)**() |
| void | **[marginsChanged](/docs/classes/class_qsk_control/#signal-marginschanged)**(const QMarginsF & ) |
| void | **[focusIndicatorRectChanged](/docs/classes/class_qsk_control/#signal-focusindicatorrectchanged)**() |
| void | **[localeChanged](/docs/classes/class_qsk_control/#signal-localechanged)**(const QLocale & ) |
| void | **[focusPolicyChanged](/docs/classes/class_qsk_control/#signal-focuspolicychanged)**() |
| void | **[wheelEnabledChanged](/docs/classes/class_qsk_control/#signal-wheelenabledchanged)**() |

**Public Functions inherited from [QskControl](/docs/classes/class_qsk_control/)**

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

**Protected Functions inherited from [QskControl](/docs/classes/class_qsk_control/)**

|                | Name           |
| -------------- | -------------- |
| virtual void | **[gestureEvent](/docs/classes/class_qsk_control/#function-gestureevent)**(QskGestureEvent * ) |
| void | **[hoverEnterEvent](/docs/classes/class_qsk_control/#function-hoverenterevent)**(QHoverEvent * event) override |
| void | **[hoverLeaveEvent](/docs/classes/class_qsk_control/#function-hoverleaveevent)**(QHoverEvent * event) override |
| bool | **[childMouseEventFilter](/docs/classes/class_qsk_control/#function-childmouseeventfilter)**(QQuickItem * item, QEvent * event) override |
| virtual bool | **[gestureFilter](/docs/classes/class_qsk_control/#function-gesturefilter)**(QQuickItem * , QEvent * ) |
| void | **[geometryChange](/docs/classes/class_qsk_control/#function-geometrychange)**(const QRectF & newGeometry, const QRectF & oldGeometry) override |
| void | **[initSizePolicy](/docs/classes/class_qsk_control/#function-initsizepolicy)**(QskSizePolicy::Policy horizontalPolicy, QskSizePolicy::Policy verticalPolicy) |
| virtual void | **[updateResources](/docs/classes/class_qsk_control/#function-updateresources)**() |
| virtual void | **[updateLayout](/docs/classes/class_qsk_control/#function-updatelayout)**() |
| virtual QSizeF | **[contentsSizeHint](/docs/classes/class_qsk_control/#function-contentssizehint)**(Qt::SizeHint which, const QSizeF & constraint) const |
| virtual QSizeF | **[layoutSizeHint](/docs/classes/class_qsk_control/#function-layoutsizehint)**(Qt::SizeHint which, const QSizeF & constraint) const |

**Public Properties inherited from [QskControl](/docs/classes/class_qsk_control/)**

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

**Public Types inherited from [QskQuickItem](/docs/classes/class_qsk_quick_item/)**

|                | Name           |
| -------------- | -------------- |
| enum| **[Flag](/docs/classes/class_qsk_quick_item/#enum-flag)** { DeferredUpdate, DeferredPolish, DeferredLayout, CleanupOnVisibility, PreferRasterForTextures, DebugForceBackground, LastFlag} |

**Public Slots inherited from [QskQuickItem](/docs/classes/class_qsk_quick_item/)**

|                | Name           |
| -------------- | -------------- |
| void | **[setGeometry](/docs/classes/class_qsk_quick_item/#slot-setgeometry)**(const QRectF & rect) |
| void | **[resetImplicitSize](/docs/classes/class_qsk_quick_item/#slot-resetimplicitsize)**() |

**Public Signals inherited from [QskQuickItem](/docs/classes/class_qsk_quick_item/)**

|                | Name           |
| -------------- | -------------- |
| void | **[itemFlagsChanged](/docs/classes/class_qsk_quick_item/#signal-itemflagschanged)**() |
| void | **[controlFlagsChanged](/docs/classes/class_qsk_quick_item/#signal-controlflagschanged)**() |

**Public Functions inherited from [QskQuickItem](/docs/classes/class_qsk_quick_item/)**

|                | Name           |
| -------------- | -------------- |
| | **[~QskQuickItem](/docs/classes/class_qsk_quick_item/#function-~qskquickitem)**() override |
| const char * | **[className](/docs/classes/class_qsk_quick_item/#function-classname)**() const |
| bool | **[isVisibleTo](/docs/classes/class_qsk_quick_item/#function-isvisibleto)**(const QQuickItem * ancestor) const |
| bool | **[isVisibleToParent](/docs/classes/class_qsk_quick_item/#function-isvisibletoparent)**() const |
| bool | **[hasChildItems](/docs/classes/class_qsk_quick_item/#function-haschilditems)**() const |
| QRectF | **[geometry](/docs/classes/class_qsk_quick_item/#function-geometry)**() const |
| QRectF | **[rect](/docs/classes/class_qsk_quick_item/#function-rect)**() const |
| QSizeF | **[implicitSize](/docs/classes/class_qsk_quick_item/#function-implicitsize)**() const |
| void | **[setGeometry](/docs/classes/class_qsk_quick_item/#function-setgeometry)**(qreal x, qreal y, qreal width, qreal height) |
| void | **[setPolishOnResize](/docs/classes/class_qsk_quick_item/#function-setpolishonresize)**(bool on) |
| bool | **[polishOnResize](/docs/classes/class_qsk_quick_item/#function-polishonresize)**() const |
| void | **[setTransparentForPositioner](/docs/classes/class_qsk_quick_item/#function-settransparentforpositioner)**(bool on) |
| bool | **[isTransparentForPositioner](/docs/classes/class_qsk_quick_item/#function-istransparentforpositioner)**() const |
| void | **[setTabFence](/docs/classes/class_qsk_quick_item/#function-settabfence)**(bool on) |
| bool | **[isTabFence](/docs/classes/class_qsk_quick_item/#function-istabfence)**() const |
| void | **[setLayoutMirroring](/docs/classes/class_qsk_quick_item/#function-setlayoutmirroring)**(bool on, bool recursive =false) |
| void | **[resetLayoutMirroring](/docs/classes/class_qsk_quick_item/#function-resetlayoutmirroring)**() |
| bool | **[layoutMirroring](/docs/classes/class_qsk_quick_item/#function-layoutmirroring)**() const |
| void | **[setControlFlags](/docs/classes/class_qsk_quick_item/#function-setcontrolflags)**(Flags flags) |
| void | **[resetControlFlags](/docs/classes/class_qsk_quick_item/#function-resetcontrolflags)**() |
| Flags | **[controlFlags](/docs/classes/class_qsk_quick_item/#function-controlflags)**() const |
| Q_INVOKABLE void | **[setControlFlag](/docs/classes/class_qsk_quick_item/#function-setcontrolflag)**([Flag](/docs/classes/class_qsk_quick_item/#enum-flag) flag, bool on =true) |
| Q_INVOKABLE void | **[resetControlFlag](/docs/classes/class_qsk_quick_item/#function-resetcontrolflag)**([Flag](/docs/classes/class_qsk_quick_item/#enum-flag) flag) |
| Q_INVOKABLE bool | **[testControlFlag](/docs/classes/class_qsk_quick_item/#function-testcontrolflag)**([Flag](/docs/classes/class_qsk_quick_item/#enum-flag) flag) const |
| void | **[classBegin](/docs/classes/class_qsk_quick_item/#function-classbegin)**() override |
| void | **[componentComplete](/docs/classes/class_qsk_quick_item/#function-componentcomplete)**() override |
| void | **[releaseResources](/docs/classes/class_qsk_quick_item/#function-releaseresources)**() override |
| bool | **[isPolishScheduled](/docs/classes/class_qsk_quick_item/#function-ispolishscheduled)**() const |
| bool | **[isUpdateNodeScheduled](/docs/classes/class_qsk_quick_item/#function-isupdatenodescheduled)**() const |
| bool | **[isInitiallyPainted](/docs/classes/class_qsk_quick_item/#function-isinitiallypainted)**() const |
| bool | **[maybeUnresized](/docs/classes/class_qsk_quick_item/#function-maybeunresized)**() const |

**Protected Functions inherited from [QskQuickItem](/docs/classes/class_qsk_quick_item/)**

|                | Name           |
| -------------- | -------------- |
| | **[QskQuickItem](/docs/classes/class_qsk_quick_item/#function-qskquickitem)**(QskQuickItemPrivate & dd, QQuickItem * parent =nullptr) |
| virtual void | **[changeEvent](/docs/classes/class_qsk_quick_item/#function-changeevent)**(QEvent * ) |
| virtual void | **[geometryChangeEvent](/docs/classes/class_qsk_quick_item/#function-geometrychangeevent)**(QskGeometryChangeEvent * ) |
| void | **[geometryChange](/docs/classes/class_qsk_quick_item/#function-geometrychange)**(const QRectF & newGeometry, const QRectF & oldGeometry) override |

**Public Properties inherited from [QskQuickItem](/docs/classes/class_qsk_quick_item/)**

|                | Name           |
| -------------- | -------------- |
| QRectF | **[geometry](/docs/classes/class_qsk_quick_item/#property-geometry)**  |
| bool | **[transparentForPositioners](/docs/classes/class_qsk_quick_item/#property-transparentforpositioners)**  |
| bool | **[tabFence](/docs/classes/class_qsk_quick_item/#property-tabfence)**  |
| bool | **[polishOnResize](/docs/classes/class_qsk_quick_item/#property-polishonresize)**  |

**Public Functions inherited from [QskSkinnable](/docs/classes/class_qsk_skinnable/)**

|                | Name           |
| -------------- | -------------- |
| | **[QskSkinnable](/docs/classes/class_qsk_skinnable/#function-qskskinnable)**() |
| virtual | **[~QskSkinnable](/docs/classes/class_qsk_skinnable/#function-~qskskinnable)**() |
| void | **[setSkinlet](/docs/classes/class_qsk_skinnable/#function-setskinlet)**(const [QskSkinlet](/docs/classes/class_qsk_skinlet/) * skinlet) |
| const [QskSkinlet](/docs/classes/class_qsk_skinlet/) * | **[skinlet](/docs/classes/class_qsk_skinnable/#function-skinlet)**() const |
| QFont | **[effectiveFont](/docs/classes/class_qsk_skinnable/#function-effectivefont)**(QskAspect aspect) const |
| QskColorFilter | **[effectiveGraphicFilter](/docs/classes/class_qsk_skinnable/#function-effectivegraphicfilter)**(QskAspect aspect) const |
| bool | **[setAnimationHint](/docs/classes/class_qsk_skinnable/#function-setanimationhint)**(QskAspect aspect, QskAnimationHint animation) |
| QskAnimationHint | **[animationHint](/docs/classes/class_qsk_skinnable/#function-animationhint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setSkinHint](/docs/classes/class_qsk_skinnable/#function-setskinhint)**(QskAspect aspect, const QVariant & hint) |
| bool | **[resetSkinHint](/docs/classes/class_qsk_skinnable/#function-resetskinhint)**(QskAspect aspect) |
| QskAnimationHint | **[effectiveAnimation](/docs/classes/class_qsk_skinnable/#function-effectiveanimation)**(QskAspect::Type type, QskAspect::Subcontrol subControl, QskAspect::State state, QskSkinHintStatus * status =nullptr) const |
| QVariant | **[effectiveSkinHint](/docs/classes/class_qsk_skinnable/#function-effectiveskinhint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| virtual QskAspect::Placement | **[effectivePlacement](/docs/classes/class_qsk_skinnable/#function-effectiveplacement)**() const |
| QskSkinHintStatus | **[hintStatus](/docs/classes/class_qsk_skinnable/#function-hintstatus)**(QskAspect aspect) const |
| QskAspect::State | **[skinState](/docs/classes/class_qsk_skinnable/#function-skinstate)**() const |
| const char * | **[skinStateAsPrintable](/docs/classes/class_qsk_skinnable/#function-skinstateasprintable)**() const |
| const char * | **[skinStateAsPrintable](/docs/classes/class_qsk_skinnable/#function-skinstateasprintable)**(QskAspect::State state) const |
| QRectF | **[subControlRect](/docs/classes/class_qsk_skinnable/#function-subcontrolrect)**(const QRectF & contentsRect, QskAspect::Subcontrol subControl) const |
| QRectF | **[subControlContentsRect](/docs/classes/class_qsk_skinnable/#function-subcontrolcontentsrect)**(const QRectF & contentsRect, QskAspect::Subcontrol subControl) const |
| QSizeF | **[outerBoxSize](/docs/classes/class_qsk_skinnable/#function-outerboxsize)**(QskAspect aspect, const QSizeF & innerBoxSize) const |
| QSizeF | **[innerBoxSize](/docs/classes/class_qsk_skinnable/#function-innerboxsize)**(QskAspect aspect, const QSizeF & outerBoxSize) const |
| QRectF | **[innerBox](/docs/classes/class_qsk_skinnable/#function-innerbox)**(QskAspect aspect, const QRectF & outerBox) const |
| QRectF | **[outerBox](/docs/classes/class_qsk_skinnable/#function-outerbox)**(QskAspect aspect, const QRectF & innerBox) const |
| QMarginsF | **[innerPadding](/docs/classes/class_qsk_skinnable/#function-innerpadding)**(QskAspect aspect, const QSizeF & outerBoxSize) const |
| const [QskSkinlet](/docs/classes/class_qsk_skinlet/) * | **[effectiveSkinlet](/docs/classes/class_qsk_skinnable/#function-effectiveskinlet)**() const |
| QskSkin * | **[effectiveSkin](/docs/classes/class_qsk_skinnable/#function-effectiveskin)**() const |
| void | **[startTransition](/docs/classes/class_qsk_skinnable/#function-starttransition)**(QskAspect aspect, QskAnimationHint animationHint, QVariant from, QVariant to) |
| virtual QskAspect::Subcontrol | **[effectiveSubcontrol](/docs/classes/class_qsk_skinnable/#function-effectivesubcontrol)**(QskAspect::Subcontrol subControl) const |
| [QskControl](/docs/classes/class_qsk_control/) * | **[controlCast](/docs/classes/class_qsk_skinnable/#function-controlcast)**() |
| const [QskControl](/docs/classes/class_qsk_control/) * | **[controlCast](/docs/classes/class_qsk_skinnable/#function-controlcast)**() const |
| virtual [QskControl](/docs/classes/class_qsk_control/) * | **[owningControl](/docs/classes/class_qsk_skinnable/#function-owningcontrol)**() const =0 |
| virtual const QMetaObject * | **[metaObject](/docs/classes/class_qsk_skinnable/#function-metaobject)**() const =0 |
| void | **[debug](/docs/classes/class_qsk_skinnable/#function-debug)**(QskAspect aspect) const |
| void | **[debug](/docs/classes/class_qsk_skinnable/#function-debug)**(QskAspect::State state) const |
| void | **[debug](/docs/classes/class_qsk_skinnable/#function-debug)**(QDebug debug, QskAspect aspect) const |
| void | **[debug](/docs/classes/class_qsk_skinnable/#function-debug)**(QDebug debug, QskAspect::State state) const |
| void | **[setSkinState](/docs/classes/class_qsk_skinnable/#function-setskinstate)**(QskAspect::State newState, bool animated =true) |
| void | **[setSkinStateFlag](/docs/classes/class_qsk_skinnable/#function-setskinstateflag)**(QskAspect::State stateFlag, bool on =true) |
| bool | **[setColor](/docs/classes/class_qsk_skinnable/#function-setcolor)**(QskAspect aspect, Qt::GlobalColor color) |
| bool | **[setColor](/docs/classes/class_qsk_skinnable/#function-setcolor)**(QskAspect aspect, QRgb rgb) |
| bool | **[setColor](/docs/classes/class_qsk_skinnable/#function-setcolor)**(QskAspect aspect, const QColor & color) |
| bool | **[resetColor](/docs/classes/class_qsk_skinnable/#function-resetcolor)**(QskAspect aspect) |
| QColor | **[color](/docs/classes/class_qsk_skinnable/#function-color)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setMetric](/docs/classes/class_qsk_skinnable/#function-setmetric)**(QskAspect aspect, qreal metric) |
| bool | **[resetMetric](/docs/classes/class_qsk_skinnable/#function-resetmetric)**(QskAspect aspect) |
| qreal | **[metric](/docs/classes/class_qsk_skinnable/#function-metric)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setFlagHint](/docs/classes/class_qsk_skinnable/#function-setflaghint)**(QskAspect aspect, int flag) |
| bool | **[resetFlagHint](/docs/classes/class_qsk_skinnable/#function-resetflaghint)**(QskAspect aspect) |
| int | **[flagHint](/docs/classes/class_qsk_skinnable/#function-flaghint)**(QskAspect aspect) const |
| template <typename T \> <br>T | **[flagHint](/docs/classes/class_qsk_skinnable/#function-flaghint)**(QskAspect aspect, T defaultValue =T()) const |
| bool | **[setStrutSizeHint](/docs/classes/class_qsk_skinnable/#function-setstrutsizehint)**(QskAspect aspect, const QSizeF & strut) |
| bool | **[setStrutSizeHint](/docs/classes/class_qsk_skinnable/#function-setstrutsizehint)**(QskAspect aspect, qreal width, qreal height) |
| bool | **[resetStrutSizeHint](/docs/classes/class_qsk_skinnable/#function-resetstrutsizehint)**(QskAspect aspect) |
| QSizeF | **[strutSizeHint](/docs/classes/class_qsk_skinnable/#function-strutsizehint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setMarginHint](/docs/classes/class_qsk_skinnable/#function-setmarginhint)**(QskAspect aspect, qreal margins) |
| bool | **[setMarginHint](/docs/classes/class_qsk_skinnable/#function-setmarginhint)**(QskAspect aspect, const QMarginsF & margins) |
| bool | **[resetMarginHint](/docs/classes/class_qsk_skinnable/#function-resetmarginhint)**(QskAspect aspect) |
| QMarginsF | **[marginHint](/docs/classes/class_qsk_skinnable/#function-marginhint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setPaddingHint](/docs/classes/class_qsk_skinnable/#function-setpaddinghint)**(QskAspect aspect, qreal padding) |
| bool | **[setPaddingHint](/docs/classes/class_qsk_skinnable/#function-setpaddinghint)**(QskAspect aspect, const QMarginsF & padding) |
| bool | **[resetPaddingHint](/docs/classes/class_qsk_skinnable/#function-resetpaddinghint)**(QskAspect aspect) |
| QMarginsF | **[paddingHint](/docs/classes/class_qsk_skinnable/#function-paddinghint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setGradientHint](/docs/classes/class_qsk_skinnable/#function-setgradienthint)**(QskAspect aspect, const QskGradient & gradient) |
| QskGradient | **[gradientHint](/docs/classes/class_qsk_skinnable/#function-gradienthint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setBoxShapeHint](/docs/classes/class_qsk_skinnable/#function-setboxshapehint)**(QskAspect aspect, const QskBoxShapeMetrics & shape) |
| bool | **[resetBoxShapeHint](/docs/classes/class_qsk_skinnable/#function-resetboxshapehint)**(QskAspect aspect) |
| QskBoxShapeMetrics | **[boxShapeHint](/docs/classes/class_qsk_skinnable/#function-boxshapehint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setBoxBorderMetricsHint](/docs/classes/class_qsk_skinnable/#function-setboxbordermetricshint)**(QskAspect aspect, const QskBoxBorderMetrics & border) |
| bool | **[resetBoxBorderMetricsHint](/docs/classes/class_qsk_skinnable/#function-resetboxbordermetricshint)**(QskAspect aspect) |
| QskBoxBorderMetrics | **[boxBorderMetricsHint](/docs/classes/class_qsk_skinnable/#function-boxbordermetricshint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setBoxBorderColorsHint](/docs/classes/class_qsk_skinnable/#function-setboxbordercolorshint)**(QskAspect aspect, const QskBoxBorderColors & colors) |
| bool | **[resetBoxBorderColorsHint](/docs/classes/class_qsk_skinnable/#function-resetboxbordercolorshint)**(QskAspect aspect) |
| QskBoxBorderColors | **[boxBorderColorsHint](/docs/classes/class_qsk_skinnable/#function-boxbordercolorshint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setSpacingHint](/docs/classes/class_qsk_skinnable/#function-setspacinghint)**(QskAspect aspect, qreal spacing) |
| bool | **[resetSpacingHint](/docs/classes/class_qsk_skinnable/#function-resetspacinghint)**(QskAspect aspect) |
| qreal | **[spacingHint](/docs/classes/class_qsk_skinnable/#function-spacinghint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setAlignmentHint](/docs/classes/class_qsk_skinnable/#function-setalignmenthint)**(QskAspect aspect, Qt::Alignment alignment) |
| bool | **[resetAlignmentHint](/docs/classes/class_qsk_skinnable/#function-resetalignmenthint)**(QskAspect aspect) |
| Qt::Alignment | **[alignmentHint](/docs/classes/class_qsk_skinnable/#function-alignmenthint)**(QskAspect aspect, Qt::Alignment defaultAlignment =Qt::Alignment()) const |
| bool | **[setFontRoleHint](/docs/classes/class_qsk_skinnable/#function-setfontrolehint)**(QskAspect aspect, int role) |
| bool | **[resetFontRoleHint](/docs/classes/class_qsk_skinnable/#function-resetfontrolehint)**(QskAspect aspect) |
| int | **[fontRoleHint](/docs/classes/class_qsk_skinnable/#function-fontrolehint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |
| bool | **[setGraphicRoleHint](/docs/classes/class_qsk_skinnable/#function-setgraphicrolehint)**(QskAspect aspect, int role) |
| bool | **[resetGraphicRoleHint](/docs/classes/class_qsk_skinnable/#function-resetgraphicrolehint)**(QskAspect aspect) |
| int | **[graphicRoleHint](/docs/classes/class_qsk_skinnable/#function-graphicrolehint)**(QskAspect aspect, QskSkinHintStatus * status =nullptr) const |

**Protected Functions inherited from [QskSkinnable](/docs/classes/class_qsk_skinnable/)**

|                | Name           |
| -------------- | -------------- |
| virtual void | **[updateNode](/docs/classes/class_qsk_skinnable/#function-updatenode)**(QSGNode * parentNode) |
| QskSkinHintTable & | **[hintTable](/docs/classes/class_qsk_skinnable/#function-hinttable)**() |
| const QskSkinHintTable & | **[hintTable](/docs/classes/class_qsk_skinnable/#function-hinttable)**() const |


## Public Types Documentation

### enum PopupFlag

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| DeleteOnClose | 1 << 0|   |
| CloseOnPressOutside | 1 << 1|   |




## Public Slots Documentation

### slot open

```cpp
void open()
```


### slot close

```cpp
void close()
```


### slot setOpen

```cpp
void setOpen(
    bool on
)
```


## Public Signals Documentation

### signal opened

```cpp
void opened()
```


### signal closed

```cpp
void closed()
```


### signal openChanged

```cpp
void openChanged(
    bool 
)
```


### signal fadingChanged

```cpp
void fadingChanged(
    bool 
)
```


### signal modalChanged

```cpp
void modalChanged(
    bool 
)
```


### signal overlayChanged

```cpp
void overlayChanged(
    bool 
)
```


### signal priorityChanged

```cpp
void priorityChanged(
    uint 
)
```


### signal faderEffectChanged

```cpp
void faderEffectChanged(
    bool 
)
```


## Public Functions Documentation

### function QskPopup

```cpp
QskPopup(
    QQuickItem * parent =nullptr
)
```


### function ~QskPopup

```cpp
~QskPopup() override
```


### function setPopupFlags

```cpp
void setPopupFlags(
    PopupFlags flags
)
```


### function popupFlags

```cpp
PopupFlags popupFlags() const
```


### function setPopupFlag

```cpp
void setPopupFlag(
    PopupFlag flag,
    bool on =true
)
```


### function testPopupFlag

```cpp
bool testPopupFlag(
    PopupFlag flag
) const
```


### function setModal

```cpp
void setModal(
    bool on =true
)
```


### function isModal

```cpp
bool isModal() const
```


### function setOverlay

```cpp
void setOverlay(
    bool on =true
)
```


### function resetOverlay

```cpp
void resetOverlay()
```


### function hasOverlay

```cpp
bool hasOverlay() const
```


### function setPriority

```cpp
void setPriority(
    uint priority
)
```


### function priority

```cpp
uint priority() const
```


### function setFaderEffect

```cpp
void setFaderEffect(
    bool on
)
```


### function hasFaderEffect

```cpp
bool hasFaderEffect() const
```


### function faderAspect

```cpp
QskAspect faderAspect() const
```


### function setFaderAspect

```cpp
void setFaderAspect(
    QskAspect aspect
)
```


### function overlayRect

```cpp
virtual QRectF overlayRect() const
```


### function isOpen

```cpp
bool isOpen() const
```


### function isFading

```cpp
bool isFading() const
```


## Protected Functions Documentation

### function aboutToShow

```cpp
void aboutToShow() override
```


### function event

```cpp
bool event(
    QEvent * event
) override
```


### function focusInEvent

```cpp
void focusInEvent(
    QFocusEvent * event
) override
```


### function focusOutEvent

```cpp
void focusOutEvent(
    QFocusEvent * event
) override
```


### function windowChangeEvent

```cpp
void windowChangeEvent(
    QskWindowChangeEvent * event
) override
```


### function itemChange

```cpp
void itemChange(
    QQuickItem::ItemChange change,
    const QQuickItem::ItemChangeData & value
) override
```


### function focusSuccessor

```cpp
virtual QQuickItem * focusSuccessor() const
```


### function isTransitionAccepted

```cpp
bool isTransitionAccepted(
    QskAspect aspect
) const override
```


### function grabFocus

```cpp
void grabFocus(
    bool on
)
```


## Public Property Documentation

### property open

```cpp
bool open;
```


### property modal

```cpp
bool modal;
```


### property overlay

```cpp
bool overlay;
```


### property faderEffect

```cpp
bool faderEffect;
```


### property priority

```cpp
uint priority;
```


-------------------------------

Updated on 22 January 2021 at 17:05:49 CET