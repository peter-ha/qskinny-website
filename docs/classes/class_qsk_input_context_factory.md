---
title: QskInputContextFactory
layout: docs

---




Inherits from QObject

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskInputContextFactory](/docs/classes/class_qsk_input_context_factory/#function-qskinputcontextfactory)**(QObject * parent =nullptr) |
| | **[~QskInputContextFactory](/docs/classes/class_qsk_input_context_factory/#function-~qskinputcontextfactory)**() override |
| virtual QskTextPredictor * | **[createPredictor](/docs/classes/class_qsk_input_context_factory/#function-createpredictor)**(const QLocale & ) const |
| virtual QskInputPanel * | **[createPanel](/docs/classes/class_qsk_input_context_factory/#function-createpanel)**() const |

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

Updated on 22 January 2021 at 17:05:48 CET