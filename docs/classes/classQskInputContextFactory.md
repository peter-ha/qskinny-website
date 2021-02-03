---
title: QskInputContextFactory
layout: docs

---




Inherits from QObject

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskInputContextFactory](/docs/classes/classQskInputContextFactory/#function-qskinputcontextfactory)**(QObject * parent =nullptr) |
| | **[~QskInputContextFactory](/docs/classes/classQskInputContextFactory/#function-~qskinputcontextfactory)**() override |
| virtual QskTextPredictor * | **[createPredictor](/docs/classes/classQskInputContextFactory/#function-createpredictor)**(const QLocale & ) const |
| virtual QskInputPanel * | **[createPanel](/docs/classes/classQskInputContextFactory/#function-createpanel)**() const |

## Public Functions Documentation

### function QskInputContextFactory

```cpp
QskInputContextFactory(
    QObject * parent =nullptr
)
```


### function ~QskInputContextFactory

```cpp
~QskInputContextFactory() override
```


### function createPredictor

```cpp
virtual QskTextPredictor * createPredictor(
    const QLocale & 
) const
```


### function createPanel

```cpp
virtual QskInputPanel * createPanel() const
```


-------------------------------

Updated on  3 February 2021 at 15:05:41 CET