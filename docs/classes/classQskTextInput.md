---
title: QskTextInput
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from [QskControl](/docs/classes/classQskControl/), [QskQuickItem](/docs/classes/classQskQuickItem/), QskSkinnable

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Panel](/docs/classes/classQskTextInput/#subcontrol-panel)**  |
| const QskAspect::Subcontrol | **[Text](/docs/classes/classQskTextInput/#subcontrol-text)**  |
| const QskAspect::Subcontrol | **[PanelSelected](/docs/classes/classQskTextInput/#subcontrol-panelselected)**  |
| const QskAspect::Subcontrol | **[TextSelected](/docs/classes/classQskTextInput/#subcontrol-textselected)**  |

## Public States

|                | Name           |
| -------------- | -------------- |
| const QskAspect::State | **[ReadOnly](/docs/classes/classQskTextInput/#state-readonly)**  |
| const QskAspect::State | **[Editing](/docs/classes/classQskTextInput/#state-editing)**  |

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[ActivationMode](/docs/classes/classQskTextInput/#enum-activationmode)** { NoActivation, ActivationOnFocus = 1 << 0, ActivationOnMouse = 1 << 1, ActivationOnKey = 1 << 2, ActivationOnInput = ActivationOnMouse | ActivationOnKey, ActivationOnAll = ActivationOnFocus | ActivationOnMouse | ActivationOnKey} |
| enum| **[EchoMode](/docs/classes/classQskTextInput/#enum-echomode)** { Normal, NoEcho, Password, PasswordEchoOnEdit} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskTextInput](/docs/classes/classQskTextInput/#function-qsktextinput)**(QQuickItem * parent =nullptr) |
| | **[QskTextInput](/docs/classes/classQskTextInput/#function-qsktextinput)**(const QString & text, QQuickItem * parent =nullptr) |
| | **[~QskTextInput](/docs/classes/classQskTextInput/#function-~qsktextinput)**() override |
| void | **[setupFrom](/docs/classes/classQskTextInput/#function-setupfrom)**(const QQuickItem * item) |
| QString | **[text](/docs/classes/classQskTextInput/#function-text)**() const |
| void | **[setDescription](/docs/classes/classQskTextInput/#function-setdescription)**(const QString & text) |
| QString | **[description](/docs/classes/classQskTextInput/#function-description)**() const |
| void | **[setFontRole](/docs/classes/classQskTextInput/#function-setfontrole)**(int role) |
| void | **[resetFontRole](/docs/classes/classQskTextInput/#function-resetfontrole)**() |
| int | **[fontRole](/docs/classes/classQskTextInput/#function-fontrole)**() const |
| void | **[setAlignment](/docs/classes/classQskTextInput/#function-setalignment)**(Qt::Alignment alignment) |
| void | **[resetAlignment](/docs/classes/classQskTextInput/#function-resetalignment)**() |
| Qt::Alignment | **[alignment](/docs/classes/classQskTextInput/#function-alignment)**() const |
| void | **[setActivationModes](/docs/classes/classQskTextInput/#function-setactivationmodes)**(ActivationModes modes) |
| ActivationModes | **[activationModes](/docs/classes/classQskTextInput/#function-activationmodes)**() const |
| bool | **[isEditing](/docs/classes/classQskTextInput/#function-isediting)**() const |
| QFont | **[font](/docs/classes/classQskTextInput/#function-font)**() const |
| bool | **[isReadOnly](/docs/classes/classQskTextInput/#function-isreadonly)**() const |
| void | **[setReadOnly](/docs/classes/classQskTextInput/#function-setreadonly)**(bool on) |
| int | **[cursorPosition](/docs/classes/classQskTextInput/#function-cursorposition)**() const |
| void | **[setCursorPosition](/docs/classes/classQskTextInput/#function-setcursorposition)**(int pos) |
| int | **[maxLength](/docs/classes/classQskTextInput/#function-maxlength)**() const |
| void | **[setMaxLength](/docs/classes/classQskTextInput/#function-setmaxlength)**(int length) |
| QValidator * | **[validator](/docs/classes/classQskTextInput/#function-validator)**() const |
| void | **[setValidator](/docs/classes/classQskTextInput/#function-setvalidator)**(QValidator * validator) |
| QString | **[inputMask](/docs/classes/classQskTextInput/#function-inputmask)**() const |
| void | **[setInputMask](/docs/classes/classQskTextInput/#function-setinputmask)**(const QString & mask) |
| EchoMode | **[echoMode](/docs/classes/classQskTextInput/#function-echomode)**() const |
| void | **[setEchoMode](/docs/classes/classQskTextInput/#function-setechomode)**(EchoMode mode) |
| QString | **[passwordCharacter](/docs/classes/classQskTextInput/#function-passwordcharacter)**() const |
| void | **[setPasswordCharacter](/docs/classes/classQskTextInput/#function-setpasswordcharacter)**(const QString & text) |
| void | **[resetPasswordCharacter](/docs/classes/classQskTextInput/#function-resetpasswordcharacter)**() |
| int | **[passwordMaskDelay](/docs/classes/classQskTextInput/#function-passwordmaskdelay)**() const |
| void | **[setPasswordMaskDelay](/docs/classes/classQskTextInput/#function-setpasswordmaskdelay)**(int ms) |
| void | **[resetPasswordMaskDelay](/docs/classes/classQskTextInput/#function-resetpasswordmaskdelay)**() |
| QString | **[displayText](/docs/classes/classQskTextInput/#function-displaytext)**() const |
| QString | **[preeditText](/docs/classes/classQskTextInput/#function-preedittext)**() const |
| bool | **[overwriteMode](/docs/classes/classQskTextInput/#function-overwritemode)**() const |
| void | **[setOverwriteMode](/docs/classes/classQskTextInput/#function-setoverwritemode)**(bool overwrite) |
| bool | **[hasAcceptableInput](/docs/classes/classQskTextInput/#function-hasacceptableinput)**() const |
| bool | **[fixup](/docs/classes/classQskTextInput/#function-fixup)**() |
| QVariant | **[inputMethodQuery](/docs/classes/classQskTextInput/#function-inputmethodquery)**(Qt::InputMethodQuery property) const override |
| QVariant | **[inputMethodQuery](/docs/classes/classQskTextInput/#function-inputmethodquery)**(Qt::InputMethodQuery query, QVariant argument) const |
| bool | **[canUndo](/docs/classes/classQskTextInput/#function-canundo)**() const |
| bool | **[canRedo](/docs/classes/classQskTextInput/#function-canredo)**() const |
| Qt::InputMethodHints | **[inputMethodHints](/docs/classes/classQskTextInput/#function-inputmethodhints)**() const |
| void | **[setInputMethodHints](/docs/classes/classQskTextInput/#function-setinputmethodhints)**(Qt::InputMethodHints hints) |
| void | **[ensureVisible](/docs/classes/classQskTextInput/#function-ensurevisible)**(int position) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[event](/docs/classes/classQskTextInput/#function-event)**(QEvent * event) override |
| void | **[inputMethodEvent](/docs/classes/classQskTextInput/#function-inputmethodevent)**(QInputMethodEvent * event) override |
| void | **[focusInEvent](/docs/classes/classQskTextInput/#function-focusinevent)**(QFocusEvent * event) override |
| void | **[focusOutEvent](/docs/classes/classQskTextInput/#function-focusoutevent)**(QFocusEvent * event) override |
| void | **[mousePressEvent](/docs/classes/classQskTextInput/#function-mousepressevent)**(QMouseEvent * event) override |
| void | **[mouseMoveEvent](/docs/classes/classQskTextInput/#function-mousemoveevent)**(QMouseEvent * event) override |
| void | **[mouseReleaseEvent](/docs/classes/classQskTextInput/#function-mousereleaseevent)**(QMouseEvent * event) override |
| void | **[mouseDoubleClickEvent](/docs/classes/classQskTextInput/#function-mousedoubleclickevent)**(QMouseEvent * event) override |
| void | **[keyPressEvent](/docs/classes/classQskTextInput/#function-keypressevent)**(QKeyEvent * event) override |
| void | **[keyReleaseEvent](/docs/classes/classQskTextInput/#function-keyreleaseevent)**(QKeyEvent * event) override |
| QSizeF | **[layoutSizeHint](/docs/classes/classQskTextInput/#function-layoutsizehint)**(Qt::SizeHint which, const QSizeF & ) const override |
| void | **[updateLayout](/docs/classes/classQskTextInput/#function-updatelayout)**() override |
| void | **[updateNode](/docs/classes/classQskTextInput/#function-updatenode)**(QSGNode * node) override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[editingChanged](/docs/classes/classQskTextInput/#signal-editingchanged)**(bool ) |
| void | **[activationModesChanged](/docs/classes/classQskTextInput/#signal-activationmodeschanged)**() |
| void | **[readOnlyChanged](/docs/classes/classQskTextInput/#signal-readonlychanged)**(bool ) |
| void | **[textChanged](/docs/classes/classQskTextInput/#signal-textchanged)**(const QString & ) |
| void | **[textEdited](/docs/classes/classQskTextInput/#signal-textedited)**(const QString & ) |
| void | **[descriptionChanged](/docs/classes/classQskTextInput/#signal-descriptionchanged)**(const QString & ) |
| void | **[textOptionsChanged](/docs/classes/classQskTextInput/#signal-textoptionschanged)**() |
| void | **[fontRoleChanged](/docs/classes/classQskTextInput/#signal-fontrolechanged)**() |
| void | **[alignmentChanged](/docs/classes/classQskTextInput/#signal-alignmentchanged)**() |
| void | **[overwriteModeChanged](/docs/classes/classQskTextInput/#signal-overwritemodechanged)**(bool ) |
| void | **[maximumLengthChanged](/docs/classes/classQskTextInput/#signal-maximumlengthchanged)**(int ) |
| void | **[echoModeChanged](/docs/classes/classQskTextInput/#signal-echomodechanged)**(EchoMode ) |
| void | **[passwordMaskDelayChanged](/docs/classes/classQskTextInput/#signal-passwordmaskdelaychanged)**() |
| void | **[passwordCharacterChanged](/docs/classes/classQskTextInput/#signal-passwordcharacterchanged)**() |
| void | **[validatorChanged](/docs/classes/classQskTextInput/#signal-validatorchanged)**() |
| void | **[inputMaskChanged](/docs/classes/classQskTextInput/#signal-inputmaskchanged)**(const QString & ) |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setText](/docs/classes/classQskTextInput/#slot-settext)**(const QString & text) |
| void | **[setEditing](/docs/classes/classQskTextInput/#slot-setediting)**(bool on) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QString | **[text](/docs/classes/classQskTextInput/#property-text)**  |
| QString | **[description](/docs/classes/classQskTextInput/#property-description)**  |
| int | **[fontRole](/docs/classes/classQskTextInput/#property-fontrole)**  |
| QFont | **[font](/docs/classes/classQskTextInput/#property-font)**  |
| Qt::Alignment | **[alignment](/docs/classes/classQskTextInput/#property-alignment)**  |
| ActivationModes | **[activationModes](/docs/classes/classQskTextInput/#property-activationmodes)**  |
| bool | **[editing](/docs/classes/classQskTextInput/#property-editing)**  |
| EchoMode | **[echoMode](/docs/classes/classQskTextInput/#property-echomode)**  |
| QString | **[passwordCharacter](/docs/classes/classQskTextInput/#property-passwordcharacter)**  |
| int | **[passwordMaskDelay](/docs/classes/classQskTextInput/#property-passwordmaskdelay)**  |

## Public Subcontrols Documentation

### subcontrol Panel




### subcontrol Text




### subcontrol PanelSelected




### subcontrol TextSelected




## Public States Documentation

### state ReadOnly




### state Editing




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

Updated on  3 February 2021 at 15:05:45 CET