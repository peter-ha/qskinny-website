---
title: QskMessageWindow
layout: docs

---


**Module:** **[Dialogs](/docs/modules/group___dialogs/)**



Inherits from QskDialogWindow

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setText](/docs/classes/class_qsk_message_window/#slot-settext)**(const QString & text) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[textChanged](/docs/classes/class_qsk_message_window/#signal-textchanged)**(const QString & ) |
| void | **[textOptionsChanged](/docs/classes/class_qsk_message_window/#signal-textoptionschanged)**(const QskTextOptions & ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskMessageWindow](/docs/classes/class_qsk_message_window/#function-qskmessagewindow)**(QWindow * parent =nullptr) |
| | **[~QskMessageWindow](/docs/classes/class_qsk_message_window/#function-~qskmessagewindow)**() override |
| void | **[setTextOptions](/docs/classes/class_qsk_message_window/#function-settextoptions)**(const QskTextOptions & options) |
| QskTextOptions | **[textOptions](/docs/classes/class_qsk_message_window/#function-textoptions)**() const |
| QString | **[text](/docs/classes/class_qsk_message_window/#function-text)**() const |
| void | **[setSymbolSource](/docs/classes/class_qsk_message_window/#function-setsymbolsource)**(const QUrl & url) |
| QUrl | **[symbolSource](/docs/classes/class_qsk_message_window/#function-symbolsource)**() const |
| void | **[setSymbolType](/docs/classes/class_qsk_message_window/#function-setsymboltype)**(int symbolType) |
| void | **[setSymbol](/docs/classes/class_qsk_message_window/#function-setsymbol)**(const [QskGraphic](/docs/classes/class_qsk_graphic/) & symbol) |
| [QskGraphic](/docs/classes/class_qsk_graphic/) | **[symbol](/docs/classes/class_qsk_message_window/#function-symbol)**() const |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QString | **[text](/docs/classes/class_qsk_message_window/#property-text)**  |
| QskTextOptions | **[textOptions](/docs/classes/class_qsk_message_window/#property-textoptions)**  |
| QUrl | **[symbolSource](/docs/classes/class_qsk_message_window/#property-symbolsource)**  |

## Public Slots Documentation

### slot setText

```cpp
void setText(
    const QString & text
)
```


## Public Signals Documentation

### signal textChanged

```cpp
void textChanged(
    const QString & 
)
```


### signal textOptionsChanged

```cpp
void textOptionsChanged(
    const QskTextOptions & 
)
```


## Public Functions Documentation

### function QskMessageWindow

```cpp
QskMessageWindow(
    QWindow * parent =nullptr
)
```


### function ~QskMessageWindow

```cpp
~QskMessageWindow() override
```


### function setTextOptions

```cpp
void setTextOptions(
    const QskTextOptions & options
)
```


### function textOptions

```cpp
QskTextOptions textOptions() const
```


### function text

```cpp
QString text() const
```


### function setSymbolSource

```cpp
void setSymbolSource(
    const QUrl & url
)
```


### function symbolSource

```cpp
QUrl symbolSource() const
```


### function setSymbolType

```cpp
void setSymbolType(
    int symbolType
)
```


### function setSymbol

```cpp
void setSymbol(
    const QskGraphic & symbol
)
```


### function symbol

```cpp
QskGraphic symbol() const
```


## Public Property Documentation

### property text

```cpp
QString text;
```


### property textOptions

```cpp
QskTextOptions textOptions;
```


### property symbolSource

```cpp
QUrl symbolSource;
```


-------------------------------

Updated on 26 January 2021 at 09:44:53 CET