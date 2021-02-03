---
title: QskMessageWindow
layout: docs

---


**Module:** **[Dialogs](/docs/modules/group__Dialogs/)**



Inherits from QskDialogWindow

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskMessageWindow](/docs/classes/classQskMessageWindow/#function-qskmessagewindow)**(QWindow * parent =nullptr) |
| | **[~QskMessageWindow](/docs/classes/classQskMessageWindow/#function-~qskmessagewindow)**() override |
| void | **[setTextOptions](/docs/classes/classQskMessageWindow/#function-settextoptions)**(const QskTextOptions & options) |
| QskTextOptions | **[textOptions](/docs/classes/classQskMessageWindow/#function-textoptions)**() const |
| QString | **[text](/docs/classes/classQskMessageWindow/#function-text)**() const |
| void | **[setSymbolSource](/docs/classes/classQskMessageWindow/#function-setsymbolsource)**(const QUrl & url) |
| QUrl | **[symbolSource](/docs/classes/classQskMessageWindow/#function-symbolsource)**() const |
| void | **[setSymbolType](/docs/classes/classQskMessageWindow/#function-setsymboltype)**(int symbolType) |
| void | **[setSymbol](/docs/classes/classQskMessageWindow/#function-setsymbol)**(const [QskGraphic](/docs/classes/classQskGraphic/) & symbol) |
| [QskGraphic](/docs/classes/classQskGraphic/) | **[symbol](/docs/classes/classQskMessageWindow/#function-symbol)**() const |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[textChanged](/docs/classes/classQskMessageWindow/#signal-textchanged)**(const QString & ) |
| void | **[textOptionsChanged](/docs/classes/classQskMessageWindow/#signal-textoptionschanged)**(const QskTextOptions & ) |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setText](/docs/classes/classQskMessageWindow/#slot-settext)**(const QString & text) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QString | **[text](/docs/classes/classQskMessageWindow/#property-text)**  |
| QskTextOptions | **[textOptions](/docs/classes/classQskMessageWindow/#property-textoptions)**  |
| QUrl | **[symbolSource](/docs/classes/classQskMessageWindow/#property-symbolsource)**  |

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


## Public Slots Documentation

### slot setText

```cpp
void setText(
    const QString & text
)
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

Updated on  3 February 2021 at 15:05:43 CET