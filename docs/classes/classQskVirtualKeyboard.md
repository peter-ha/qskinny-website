---
title: QskVirtualKeyboard
layout: docs

---




Inherits from QskBox

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Panel](/docs/classes/classQskVirtualKeyboard/#subcontrol-panel)**  |
| const QskAspect::Subcontrol | **[ButtonPanel](/docs/classes/classQskVirtualKeyboard/#subcontrol-buttonpanel)**  |
| const QskAspect::Subcontrol | **[ButtonText](/docs/classes/classQskVirtualKeyboard/#subcontrol-buttontext)**  |

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Mode](/docs/classes/classQskVirtualKeyboard/#enum-mode)** { CurrentMode = -1, LowercaseMode, UppercaseMode, SpecialCharacterMode, ModeCount} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskVirtualKeyboard](/docs/classes/classQskVirtualKeyboard/#function-qskvirtualkeyboard)**(QQuickItem * parent =nullptr) |
| | **[~QskVirtualKeyboard](/docs/classes/classQskVirtualKeyboard/#function-~qskvirtualkeyboard)**() override |
| void | **[setMode](/docs/classes/classQskVirtualKeyboard/#function-setmode)**(Mode mode) |
| Mode | **[mode](/docs/classes/classQskVirtualKeyboard/#function-mode)**() const |
| void | **[updateLocale](/docs/classes/classQskVirtualKeyboard/#function-updatelocale)**(const QLocale & locale) |
| QskAspect::Subcontrol | **[effectiveSubcontrol](/docs/classes/classQskVirtualKeyboard/#function-effectivesubcontrol)**(QskAspect::Subcontrol subControl) const override |
| bool | **[hasKey](/docs/classes/classQskVirtualKeyboard/#function-haskey)**(int keyCode) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[updateLayout](/docs/classes/classQskVirtualKeyboard/#function-updatelayout)**() override |
| QSizeF | **[layoutSizeHint](/docs/classes/classQskVirtualKeyboard/#function-layoutsizehint)**(Qt::SizeHint which, const QSizeF & constraint) const override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[modeChanged](/docs/classes/classQskVirtualKeyboard/#signal-modechanged)**(Mode ) |
| void | **[keySelected](/docs/classes/classQskVirtualKeyboard/#signal-keyselected)**(int keyCode) |

## Public Subcontrols Documentation

### subcontrol Panel




### subcontrol ButtonPanel




### subcontrol ButtonText




## Public Types Documentation

### enum Mode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| CurrentMode | -1|   |
| LowercaseMode | |   |
| UppercaseMode | |   |
| SpecialCharacterMode | |   |
| ModeCount | |   |




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


-------------------------------

Updated on  3 February 2021 at 15:05:39 CET