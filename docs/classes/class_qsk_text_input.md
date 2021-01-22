---
title: QskTextInput
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from [QskControl](/docs/classes/class_qsk_control/), [QskQuickItem](/docs/classes/class_qsk_quick_item/), [QskSkinnable](/docs/classes/class_qsk_skinnable/), QQuickItem

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[ActivationMode](/docs/classes/class_qsk_text_input/#enum-activationmode)** { NoActivation, ActivationOnFocus = 1 << 0, ActivationOnMouse = 1 << 1, ActivationOnKey = 1 << 2, ActivationOnInput = ActivationOnMouse | ActivationOnKey, ActivationOnAll = ActivationOnFocus | ActivationOnMouse | ActivationOnKey} |
| enum| **[EchoMode](/docs/classes/class_qsk_text_input/#enum-echomode)** { Normal, NoEcho, Password, PasswordEchoOnEdit} |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setText](/docs/classes/class_qsk_text_input/#slot-settext)**(const QString & text) |
| void | **[setEditing](/docs/classes/class_qsk_text_input/#slot-setediting)**(bool on) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[editingChanged](/docs/classes/class_qsk_text_input/#signal-editingchanged)**(bool ) |
| void | **[activationModesChanged](/docs/classes/class_qsk_text_input/#signal-activationmodeschanged)**() |
| void | **[readOnlyChanged](/docs/classes/class_qsk_text_input/#signal-readonlychanged)**(bool ) |
| void | **[textChanged](/docs/classes/class_qsk_text_input/#signal-textchanged)**(const QString & ) |
| void | **[textEdited](/docs/classes/class_qsk_text_input/#signal-textedited)**(const QString & ) |
| void | **[descriptionChanged](/docs/classes/class_qsk_text_input/#signal-descriptionchanged)**(const QString & ) |
| void | **[textOptionsChanged](/docs/classes/class_qsk_text_input/#signal-textoptionschanged)**() |
| void | **[fontRoleChanged](/docs/classes/class_qsk_text_input/#signal-fontrolechanged)**() |
| void | **[alignmentChanged](/docs/classes/class_qsk_text_input/#signal-alignmentchanged)**() |
| void | **[overwriteModeChanged](/docs/classes/class_qsk_text_input/#signal-overwritemodechanged)**(bool ) |
| void | **[maximumLengthChanged](/docs/classes/class_qsk_text_input/#signal-maximumlengthchanged)**(int ) |
| void | **[echoModeChanged](/docs/classes/class_qsk_text_input/#signal-echomodechanged)**(EchoMode ) |
| void | **[passwordMaskDelayChanged](/docs/classes/class_qsk_text_input/#signal-passwordmaskdelaychanged)**() |
| void | **[passwordCharacterChanged](/docs/classes/class_qsk_text_input/#signal-passwordcharacterchanged)**() |
| void | **[validatorChanged](/docs/classes/class_qsk_text_input/#signal-validatorchanged)**() |
| void | **[inputMaskChanged](/docs/classes/class_qsk_text_input/#signal-inputmaskchanged)**(const QString & ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskTextInput](/docs/classes/class_qsk_text_input/#function-qsktextinput)**(QQuickItem * parent =nullptr) |
| | **[QskTextInput](/docs/classes/class_qsk_text_input/#function-qsktextinput)**(const QString & text, QQuickItem * parent =nullptr) |
| | **[~QskTextInput](/docs/classes/class_qsk_text_input/#function-~qsktextinput)**() override |
| void | **[setupFrom](/docs/classes/class_qsk_text_input/#function-setupfrom)**(const QQuickItem * item) |
| QString | **[text](/docs/classes/class_qsk_text_input/#function-text)**() const |
| void | **[setDescription](/docs/classes/class_qsk_text_input/#function-setdescription)**(const QString & text) |
| QString | **[description](/docs/classes/class_qsk_text_input/#function-description)**() const |
| void | **[setFontRole](/docs/classes/class_qsk_text_input/#function-setfontrole)**(int role) |
| void | **[resetFontRole](/docs/classes/class_qsk_text_input/#function-resetfontrole)**() |
| int | **[fontRole](/docs/classes/class_qsk_text_input/#function-fontrole)**() const |
| void | **[setAlignment](/docs/classes/class_qsk_text_input/#function-setalignment)**(Qt::Alignment alignment) |
| void | **[resetAlignment](/docs/classes/class_qsk_text_input/#function-resetalignment)**() |
| Qt::Alignment | **[alignment](/docs/classes/class_qsk_text_input/#function-alignment)**() const |
| void | **[setActivationModes](/docs/classes/class_qsk_text_input/#function-setactivationmodes)**(ActivationModes modes) |
| ActivationModes | **[activationModes](/docs/classes/class_qsk_text_input/#function-activationmodes)**() const |
| bool | **[isEditing](/docs/classes/class_qsk_text_input/#function-isediting)**() const |
| QFont | **[font](/docs/classes/class_qsk_text_input/#function-font)**() const |
| bool | **[isReadOnly](/docs/classes/class_qsk_text_input/#function-isreadonly)**() const |
| void | **[setReadOnly](/docs/classes/class_qsk_text_input/#function-setreadonly)**(bool on) |
| int | **[cursorPosition](/docs/classes/class_qsk_text_input/#function-cursorposition)**() const |
| void | **[setCursorPosition](/docs/classes/class_qsk_text_input/#function-setcursorposition)**(int pos) |
| int | **[maxLength](/docs/classes/class_qsk_text_input/#function-maxlength)**() const |
| void | **[setMaxLength](/docs/classes/class_qsk_text_input/#function-setmaxlength)**(int length) |
| QValidator * | **[validator](/docs/classes/class_qsk_text_input/#function-validator)**() const |
| void | **[setValidator](/docs/classes/class_qsk_text_input/#function-setvalidator)**(QValidator * validator) |
| QString | **[inputMask](/docs/classes/class_qsk_text_input/#function-inputmask)**() const |
| void | **[setInputMask](/docs/classes/class_qsk_text_input/#function-setinputmask)**(const QString & mask) |
| EchoMode | **[echoMode](/docs/classes/class_qsk_text_input/#function-echomode)**() const |
| void | **[setEchoMode](/docs/classes/class_qsk_text_input/#function-setechomode)**(EchoMode mode) |
| QString | **[passwordCharacter](/docs/classes/class_qsk_text_input/#function-passwordcharacter)**() const |
| void | **[setPasswordCharacter](/docs/classes/class_qsk_text_input/#function-setpasswordcharacter)**(const QString & text) |
| void | **[resetPasswordCharacter](/docs/classes/class_qsk_text_input/#function-resetpasswordcharacter)**() |
| int | **[passwordMaskDelay](/docs/classes/class_qsk_text_input/#function-passwordmaskdelay)**() const |
| void | **[setPasswordMaskDelay](/docs/classes/class_qsk_text_input/#function-setpasswordmaskdelay)**(int ms) |
| void | **[resetPasswordMaskDelay](/docs/classes/class_qsk_text_input/#function-resetpasswordmaskdelay)**() |
| QString | **[displayText](/docs/classes/class_qsk_text_input/#function-displaytext)**() const |
| QString | **[preeditText](/docs/classes/class_qsk_text_input/#function-preedittext)**() const |
| bool | **[overwriteMode](/docs/classes/class_qsk_text_input/#function-overwritemode)**() const |
| void | **[setOverwriteMode](/docs/classes/class_qsk_text_input/#function-setoverwritemode)**(bool overwrite) |
| bool | **[hasAcceptableInput](/docs/classes/class_qsk_text_input/#function-hasacceptableinput)**() const |
| bool | **[fixup](/docs/classes/class_qsk_text_input/#function-fixup)**() |
| QVariant | **[inputMethodQuery](/docs/classes/class_qsk_text_input/#function-inputmethodquery)**(Qt::InputMethodQuery property) const override |
| QVariant | **[inputMethodQuery](/docs/classes/class_qsk_text_input/#function-inputmethodquery)**(Qt::InputMethodQuery query, QVariant argument) const |
| bool | **[canUndo](/docs/classes/class_qsk_text_input/#function-canundo)**() const |
| bool | **[canRedo](/docs/classes/class_qsk_text_input/#function-canredo)**() const |
| Qt::InputMethodHints | **[inputMethodHints](/docs/classes/class_qsk_text_input/#function-inputmethodhints)**() const |
| void | **[setInputMethodHints](/docs/classes/class_qsk_text_input/#function-setinputmethodhints)**(Qt::InputMethodHints hints) |
| void | **[ensureVisible](/docs/classes/class_qsk_text_input/#function-ensurevisible)**(int position) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[event](/docs/classes/class_qsk_text_input/#function-event)**(QEvent * event) override |
| void | **[inputMethodEvent](/docs/classes/class_qsk_text_input/#function-inputmethodevent)**(QInputMethodEvent * event) override |
| void | **[focusInEvent](/docs/classes/class_qsk_text_input/#function-focusinevent)**(QFocusEvent * event) override |
| void | **[focusOutEvent](/docs/classes/class_qsk_text_input/#function-focusoutevent)**(QFocusEvent * event) override |
| void | **[mousePressEvent](/docs/classes/class_qsk_text_input/#function-mousepressevent)**(QMouseEvent * event) override |
| void | **[mouseMoveEvent](/docs/classes/class_qsk_text_input/#function-mousemoveevent)**(QMouseEvent * event) override |
| void | **[mouseReleaseEvent](/docs/classes/class_qsk_text_input/#function-mousereleaseevent)**(QMouseEvent * event) override |
| void | **[mouseDoubleClickEvent](/docs/classes/class_qsk_text_input/#function-mousedoubleclickevent)**(QMouseEvent * event) override |
| void | **[keyPressEvent](/docs/classes/class_qsk_text_input/#function-keypressevent)**(QKeyEvent * event) override |
| void | **[keyReleaseEvent](/docs/classes/class_qsk_text_input/#function-keyreleaseevent)**(QKeyEvent * event) override |
| QSizeF | **[layoutSizeHint](/docs/classes/class_qsk_text_input/#function-layoutsizehint)**(Qt::SizeHint which, const QSizeF & ) const override |
| void | **[updateLayout](/docs/classes/class_qsk_text_input/#function-updatelayout)**() override |
| void | **[updateNode](/docs/classes/class_qsk_text_input/#function-updatenode)**(QSGNode * node) override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QString | **[text](/docs/classes/class_qsk_text_input/#property-text)**  |
| QString | **[description](/docs/classes/class_qsk_text_input/#property-description)**  |
| int | **[fontRole](/docs/classes/class_qsk_text_input/#property-fontrole)**  |
| QFont | **[font](/docs/classes/class_qsk_text_input/#property-font)**  |
| Qt::Alignment | **[alignment](/docs/classes/class_qsk_text_input/#property-alignment)**  |
| ActivationModes | **[activationModes](/docs/classes/class_qsk_text_input/#property-activationmodes)**  |
| bool | **[editing](/docs/classes/class_qsk_text_input/#property-editing)**  |
| EchoMode | **[echoMode](/docs/classes/class_qsk_text_input/#property-echomode)**  |
| QString | **[passwordCharacter](/docs/classes/class_qsk_text_input/#property-passwordcharacter)**  |
| int | **[passwordMaskDelay](/docs/classes/class_qsk_text_input/#property-passwordmaskdelay)**  |

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
| void | **[itemChange](/docs/classes/class_qsk_control/#function-itemchange)**(ItemChange , const ItemChangeData & ) override |
| void | **[geometryChange](/docs/classes/class_qsk_control/#function-geometrychange)**(const QRectF & newGeometry, const QRectF & oldGeometry) override |
| void | **[initSizePolicy](/docs/classes/class_qsk_control/#function-initsizepolicy)**(QskSizePolicy::Policy horizontalPolicy, QskSizePolicy::Policy verticalPolicy) |
| virtual void | **[updateResources](/docs/classes/class_qsk_control/#function-updateresources)**() |
| virtual QSizeF | **[contentsSizeHint](/docs/classes/class_qsk_control/#function-contentssizehint)**(Qt::SizeHint which, const QSizeF & constraint) const |

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
| void | **[show](/docs/classes/class_qsk_quick_item/#slot-show)**() |
| void | **[hide](/docs/classes/class_qsk_quick_item/#slot-hide)**() |
| void | **[setVisible](/docs/classes/class_qsk_quick_item/#slot-setvisible)**(bool on) |
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
| virtual void | **[windowChangeEvent](/docs/classes/class_qsk_quick_item/#function-windowchangeevent)**(QskWindowChangeEvent * ) |
| void | **[itemChange](/docs/classes/class_qsk_quick_item/#function-itemchange)**(ItemChange , const ItemChangeData & ) override |
| void | **[geometryChange](/docs/classes/class_qsk_quick_item/#function-geometrychange)**(const QRectF & newGeometry, const QRectF & oldGeometry) override |
| virtual void | **[aboutToShow](/docs/classes/class_qsk_quick_item/#function-abouttoshow)**() |

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
| virtual bool | **[isTransitionAccepted](/docs/classes/class_qsk_skinnable/#function-istransitionaccepted)**(QskAspect aspect) const |
| QskSkinHintTable & | **[hintTable](/docs/classes/class_qsk_skinnable/#function-hinttable)**() |
| const QskSkinHintTable & | **[hintTable](/docs/classes/class_qsk_skinnable/#function-hinttable)**() const |


## Public Types Documentation

### enum ActivationMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NoActivation | |   |
| ActivationOnFocus | 1 << 0|   |
| ActivationOnMouse | 1 << 1|   |
| ActivationOnKey | 1 << 2|   |
| ActivationOnInput | ActivationOnMouse | ActivationOnKey|   |
| ActivationOnAll | ActivationOnFocus | ActivationOnMouse | ActivationOnKey|   |




### enum EchoMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Normal | |   |
| NoEcho | |   |
| Password | |   |
| PasswordEchoOnEdit | |   |




## Public Slots Documentation

### slot setText

```cpp
void setText(
    const QString & text
)
```


### slot setEditing

```cpp
void setEditing(
    bool on
)
```


## Public Signals Documentation

### signal editingChanged

```cpp
void editingChanged(
    bool 
)
```


### signal activationModesChanged

```cpp
void activationModesChanged()
```


### signal readOnlyChanged

```cpp
void readOnlyChanged(
    bool 
)
```


### signal textChanged

```cpp
void textChanged(
    const QString & 
)
```


### signal textEdited

```cpp
void textEdited(
    const QString & 
)
```


### signal descriptionChanged

```cpp
void descriptionChanged(
    const QString & 
)
```


### signal textOptionsChanged

```cpp
void textOptionsChanged()
```


### signal fontRoleChanged

```cpp
void fontRoleChanged()
```


### signal alignmentChanged

```cpp
void alignmentChanged()
```


### signal overwriteModeChanged

```cpp
void overwriteModeChanged(
    bool 
)
```


### signal maximumLengthChanged

```cpp
void maximumLengthChanged(
    int 
)
```


### signal echoModeChanged

```cpp
void echoModeChanged(
    EchoMode 
)
```


### signal passwordMaskDelayChanged

```cpp
void passwordMaskDelayChanged()
```


### signal passwordCharacterChanged

```cpp
void passwordCharacterChanged()
```


### signal validatorChanged

```cpp
void validatorChanged()
```


### signal inputMaskChanged

```cpp
void inputMaskChanged(
    const QString & 
)
```


## Public Functions Documentation

### function QskTextInput

```cpp
QskTextInput(
    QQuickItem * parent =nullptr
)
```


### function QskTextInput

```cpp
QskTextInput(
    const QString & text,
    QQuickItem * parent =nullptr
)
```


### function ~QskTextInput

```cpp
~QskTextInput() override
```


### function setupFrom

```cpp
void setupFrom(
    const QQuickItem * item
)
```


### function text

```cpp
QString text() const
```


### function setDescription

```cpp
void setDescription(
    const QString & text
)
```


### function description

```cpp
QString description() const
```


### function setFontRole

```cpp
void setFontRole(
    int role
)
```


### function resetFontRole

```cpp
void resetFontRole()
```


### function fontRole

```cpp
int fontRole() const
```


### function setAlignment

```cpp
void setAlignment(
    Qt::Alignment alignment
)
```


### function resetAlignment

```cpp
void resetAlignment()
```


### function alignment

```cpp
Qt::Alignment alignment() const
```


### function setActivationModes

```cpp
void setActivationModes(
    ActivationModes modes
)
```


### function activationModes

```cpp
ActivationModes activationModes() const
```


### function isEditing

```cpp
bool isEditing() const
```


### function font

```cpp
QFont font() const
```


### function isReadOnly

```cpp
bool isReadOnly() const
```


### function setReadOnly

```cpp
void setReadOnly(
    bool on
)
```


### function cursorPosition

```cpp
int cursorPosition() const
```


### function setCursorPosition

```cpp
void setCursorPosition(
    int pos
)
```


### function maxLength

```cpp
int maxLength() const
```


### function setMaxLength

```cpp
void setMaxLength(
    int length
)
```


### function validator

```cpp
QValidator * validator() const
```


### function setValidator

```cpp
void setValidator(
    QValidator * validator
)
```


### function inputMask

```cpp
QString inputMask() const
```


### function setInputMask

```cpp
void setInputMask(
    const QString & mask
)
```


### function echoMode

```cpp
EchoMode echoMode() const
```


### function setEchoMode

```cpp
void setEchoMode(
    EchoMode mode
)
```


### function passwordCharacter

```cpp
QString passwordCharacter() const
```


### function setPasswordCharacter

```cpp
void setPasswordCharacter(
    const QString & text
)
```


### function resetPasswordCharacter

```cpp
void resetPasswordCharacter()
```


### function passwordMaskDelay

```cpp
int passwordMaskDelay() const
```


### function setPasswordMaskDelay

```cpp
void setPasswordMaskDelay(
    int ms
)
```


### function resetPasswordMaskDelay

```cpp
void resetPasswordMaskDelay()
```


### function displayText

```cpp
QString displayText() const
```


### function preeditText

```cpp
QString preeditText() const
```


### function overwriteMode

```cpp
bool overwriteMode() const
```


### function setOverwriteMode

```cpp
void setOverwriteMode(
    bool overwrite
)
```


### function hasAcceptableInput

```cpp
bool hasAcceptableInput() const
```


### function fixup

```cpp
bool fixup()
```


### function inputMethodQuery

```cpp
QVariant inputMethodQuery(
    Qt::InputMethodQuery property
) const override
```


### function inputMethodQuery

```cpp
QVariant inputMethodQuery(
    Qt::InputMethodQuery query,
    QVariant argument
) const
```


### function canUndo

```cpp
bool canUndo() const
```


### function canRedo

```cpp
bool canRedo() const
```


### function inputMethodHints

```cpp
Qt::InputMethodHints inputMethodHints() const
```


### function setInputMethodHints

```cpp
void setInputMethodHints(
    Qt::InputMethodHints hints
)
```


### function ensureVisible

```cpp
void ensureVisible(
    int position
)
```


## Protected Functions Documentation

### function event

```cpp
bool event(
    QEvent * event
) override
```


### function inputMethodEvent

```cpp
void inputMethodEvent(
    QInputMethodEvent * event
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


### function mousePressEvent

```cpp
void mousePressEvent(
    QMouseEvent * event
) override
```


### function mouseMoveEvent

```cpp
void mouseMoveEvent(
    QMouseEvent * event
) override
```


### function mouseReleaseEvent

```cpp
void mouseReleaseEvent(
    QMouseEvent * event
) override
```


### function mouseDoubleClickEvent

```cpp
void mouseDoubleClickEvent(
    QMouseEvent * event
) override
```


### function keyPressEvent

```cpp
void keyPressEvent(
    QKeyEvent * event
) override
```


### function keyReleaseEvent

```cpp
void keyReleaseEvent(
    QKeyEvent * event
) override
```


### function layoutSizeHint

```cpp
QSizeF layoutSizeHint(
    Qt::SizeHint which,
    const QSizeF & 
) const override
```


### function updateLayout

```cpp
void updateLayout() override
```


### function updateNode

```cpp
void updateNode(
    QSGNode * node
) override
```


## Public Property Documentation

### property text

```cpp
QString text;
```


### property description

```cpp
QString description;
```


### property fontRole

```cpp
int fontRole;
```


### property font

```cpp
QFont font;
```


### property alignment

```cpp
Qt::Alignment alignment;
```


### property activationModes

```cpp
ActivationModes activationModes;
```


### property editing

```cpp
bool editing;
```


### property echoMode

```cpp
EchoMode echoMode;
```


### property passwordCharacter

```cpp
QString passwordCharacter;
```


### property passwordMaskDelay

```cpp
int passwordMaskDelay;
```


-------------------------------

Updated on 22 January 2021 at 17:05:49 CET