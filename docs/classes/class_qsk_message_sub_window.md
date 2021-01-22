---
title: QskMessageSubWindow
layout: docs

---


**Module:** **[Dialogs](/docs/modules/group___dialogs/)**



Inherits from QskDialogSubWindow

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setText](/docs/classes/class_qsk_message_sub_window/#slot-settext)**(const QString & text) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[textChanged](/docs/classes/class_qsk_message_sub_window/#signal-textchanged)**(const QString & ) |
| void | **[textOptionsChanged](/docs/classes/class_qsk_message_sub_window/#signal-textoptionschanged)**(const QskTextOptions & ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskMessageSubWindow](/docs/classes/class_qsk_message_sub_window/#function-qskmessagesubwindow)**(QQuickItem * parent =nullptr) |
| | **[~QskMessageSubWindow](/docs/classes/class_qsk_message_sub_window/#function-~qskmessagesubwindow)**() override |
| void | **[setTextOptions](/docs/classes/class_qsk_message_sub_window/#function-settextoptions)**(const QskTextOptions & options) |
| QskTextOptions | **[textOptions](/docs/classes/class_qsk_message_sub_window/#function-textoptions)**() const |
| QString | **[text](/docs/classes/class_qsk_message_sub_window/#function-text)**() const |
| void | **[setSymbolSource](/docs/classes/class_qsk_message_sub_window/#function-setsymbolsource)**(const QUrl & url) |
| QUrl | **[symbolSource](/docs/classes/class_qsk_message_sub_window/#function-symbolsource)**() const |
| void | **[setSymbolType](/docs/classes/class_qsk_message_sub_window/#function-setsymboltype)**(int symbolType) |
| void | **[setSymbol](/docs/classes/class_qsk_message_sub_window/#function-setsymbol)**(const [QskGraphic](/docs/classes/class_qsk_graphic/) & symbol) |
| [QskGraphic](/docs/classes/class_qsk_graphic/) | **[symbol](/docs/classes/class_qsk_message_sub_window/#function-symbol)**() const |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QString | **[text](/docs/classes/class_qsk_message_sub_window/#property-text)**  |
| QskTextOptions | **[textOptions](/docs/classes/class_qsk_message_sub_window/#property-textoptions)**  |
| QUrl | **[symbolSource](/docs/classes/class_qsk_message_sub_window/#property-symbolsource)**  |

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

### function QskMessageSubWindow

```cpp
QskMessageSubWindow(
    QQuickItem * parent =nullptr
)
```


### function ~QskMessageSubWindow

```cpp
~QskMessageSubWindow() override
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

Updated on 22 January 2021 at 17:05:48 CET