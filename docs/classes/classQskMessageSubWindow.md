---
title: QskMessageSubWindow
layout: docs

---


**Module:** **[Dialogs](/docs/modules/group__Dialogs/)**



Inherits from QskDialogSubWindow

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskMessageSubWindow](/docs/classes/classQskMessageSubWindow/#function-qskmessagesubwindow)**(QQuickItem * parent =nullptr) |
| | **[~QskMessageSubWindow](/docs/classes/classQskMessageSubWindow/#function-~qskmessagesubwindow)**() override |
| void | **[setTextOptions](/docs/classes/classQskMessageSubWindow/#function-settextoptions)**(const QskTextOptions & options) |
| QskTextOptions | **[textOptions](/docs/classes/classQskMessageSubWindow/#function-textoptions)**() const |
| QString | **[text](/docs/classes/classQskMessageSubWindow/#function-text)**() const |
| void | **[setSymbolSource](/docs/classes/classQskMessageSubWindow/#function-setsymbolsource)**(const QUrl & url) |
| QUrl | **[symbolSource](/docs/classes/classQskMessageSubWindow/#function-symbolsource)**() const |
| void | **[setSymbolType](/docs/classes/classQskMessageSubWindow/#function-setsymboltype)**(int symbolType) |
| void | **[setSymbol](/docs/classes/classQskMessageSubWindow/#function-setsymbol)**(const [QskGraphic](/docs/classes/classQskGraphic/) & symbol) |
| [QskGraphic](/docs/classes/classQskGraphic/) | **[symbol](/docs/classes/classQskMessageSubWindow/#function-symbol)**() const |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[textChanged](/docs/classes/classQskMessageSubWindow/#signal-textchanged)**(const QString & ) |
| void | **[textOptionsChanged](/docs/classes/classQskMessageSubWindow/#signal-textoptionschanged)**(const QskTextOptions & ) |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setText](/docs/classes/classQskMessageSubWindow/#slot-settext)**(const QString & text) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QString | **[text](/docs/classes/classQskMessageSubWindow/#property-text)**  |
| QskTextOptions | **[textOptions](/docs/classes/classQskMessageSubWindow/#property-textoptions)**  |
| QUrl | **[symbolSource](/docs/classes/classQskMessageSubWindow/#property-symbolsource)**  |

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