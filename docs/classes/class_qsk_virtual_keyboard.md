---
title: QskVirtualKeyboard
layout: docs

---




Inherits from QskBox

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Mode](/docs/classes/class_qsk_virtual_keyboard/#enum-mode)** { CurrentMode = -1, LowercaseMode, UppercaseMode, SpecialCharacterMode, ModeCount} |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[modeChanged](/docs/classes/class_qsk_virtual_keyboard/#signal-modechanged)**(Mode ) |
| void | **[keySelected](/docs/classes/class_qsk_virtual_keyboard/#signal-keyselected)**(int keyCode) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskVirtualKeyboard](/docs/classes/class_qsk_virtual_keyboard/#function-qskvirtualkeyboard)**(QQuickItem * parent =nullptr) |
| | **[~QskVirtualKeyboard](/docs/classes/class_qsk_virtual_keyboard/#function-~qskvirtualkeyboard)**() override |
| void | **[setMode](/docs/classes/class_qsk_virtual_keyboard/#function-setmode)**(Mode mode) |
| Mode | **[mode](/docs/classes/class_qsk_virtual_keyboard/#function-mode)**() const |
| void | **[updateLocale](/docs/classes/class_qsk_virtual_keyboard/#function-updatelocale)**(const QLocale & locale) |
| QskAspect::Subcontrol | **[effectiveSubcontrol](/docs/classes/class_qsk_virtual_keyboard/#function-effectivesubcontrol)**(QskAspect::Subcontrol subControl) const override |
| bool | **[hasKey](/docs/classes/class_qsk_virtual_keyboard/#function-haskey)**(int keyCode) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[updateLayout](/docs/classes/class_qsk_virtual_keyboard/#function-updatelayout)**() override |
| QSizeF | **[layoutSizeHint](/docs/classes/class_qsk_virtual_keyboard/#function-layoutsizehint)**(Qt::SizeHint which, const QSizeF & constraint) const override |

## Public Types Documentation

### enum Mode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| CurrentMode | -1|   |
| LowercaseMode | |   |
| UppercaseMode | |   |
| SpecialCharacterMode | |   |
| ModeCount | |   |




## Public Signals Documentation

### signal modeChanged

```cpp
void modeChanged(
    Mode 
)
```


### signal keySelected

```cpp
void keySelected(
    int keyCode
)
```


## Public Functions Documentation

### function QskVirtualKeyboard

```cpp
QskVirtualKeyboard(
    QQuickItem * parent =nullptr
)
```


### function ~QskVirtualKeyboard

```cpp
~QskVirtualKeyboard() override
```


### function setMode

```cpp
void setMode(
    Mode mode
)
```


### function mode

```cpp
Mode mode() const
```


### function updateLocale

```cpp
void updateLocale(
    const QLocale & locale
)
```


### function effectiveSubcontrol

```cpp
QskAspect::Subcontrol effectiveSubcontrol(
    QskAspect::Subcontrol subControl
) const override
```


### function hasKey

```cpp
bool hasKey(
    int keyCode
) const
```


## Protected Functions Documentation

### function updateLayout

```cpp
void updateLayout() override
```


### function layoutSizeHint

```cpp
QSizeF layoutSizeHint(
    Qt::SizeHint which,
    const QSizeF & constraint
) const override
```


-------------------------------

Updated on 23 January 2021 at 09:50:33 CET