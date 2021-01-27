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

Updated on 26 January 2021 at 09:44:54 CET